import React, { Component } from 'react';
import ChordInput from '../ChordInput';
import Countdown from '../Countdown';
import './Game.css';

const chord = {
  name: 'A Maj. 7',
  root: 'A',
  notes: ['A', 'C#', 'E', 'G#'],
  type: 'Major 7th'
};

class Game extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="chord">{chord.name}</div>

        <ChordInput chord={chord} />

        <Countdown onEnd={() => console.log('done')} />
      </React.Fragment>
    );
  }
}

export default Game;
