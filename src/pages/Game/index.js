import React, { Component } from 'react';
import { head, inc } from 'ramda';
import ChordInput from '../../components/ChordInput';
import Countdown from '../../components/Countdown';
import isValid from '../../utils/validateChord';
import getChords from '../../utils/getChords';
import { STATUS, TRANSITION_TIMER } from '../../constants';
import './Game.css';

class Game extends Component {
  state = {
    activeChord: {},
    activeIndex: 0,
    chordAnswer: '',
  };

  componentDidMount() {
    this.chords = getChords();

    this.setState({
      activeChord: head(this.chords),
    });
  }

  validateAnswer = answer => {
    const { activeChord } = this.state;

    if (isValid(activeChord, answer)) {
      return this.hasNext() ? this.nextChord() : this.endGame();
    }

    return this.chordError();
  };

  hasNext = () => inc(this.state.activeIndex) < this.chords.length;

  nextChord() {
    const { activeIndex } = this.state;
    const nextIndex = inc(activeIndex);

    this.inputRef.value = '';

    this.setState({
      activeChord: this.chords[nextIndex],
      activeIndex: nextIndex,
      chordAnswer: STATUS.valid,
    });

    setTimeout(() => this.updateAnswer(), TRANSITION_TIMER);
  }

  chordError() {
    this.updateAnswer(STATUS.invalid);

    setTimeout(() => this.updateAnswer(), TRANSITION_TIMER);
  }

  updateAnswer(status) {
    this.setState({
      chordAnswer: status,
    });
  }

  onEnd() {}

  render() {
    const { activeChord, chordAnswer } = this.state;

    return (
      <div className="container">
        <div className="chord">{activeChord.name}</div>

        <ChordInput
          chordAnswer={chordAnswer}
          root={activeChord.root}
          onEnter={this.validateAnswer}
          getInputRef={input => (this.inputRef = input)}
        />

        <Countdown onEnd={this.onEnd} />
      </div>
    );
  }
}

export default Game;
