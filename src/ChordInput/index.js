import React, { PureComponent } from 'react';
import cn from 'classnames';
import ReturnKey from '../icons/ReturnKey';
import './ChordInput.css';

const ENTER_KEY = 'Enter';

class ChordInput extends PureComponent {
  onKeyPress = e => {
    if (e.key === ENTER_KEY) {
      this.props.onEnter(e.target.value);
    }
  };

  render() {
    const { root, chordAnswer, getInputRef } = this.props;

    return (
      <div
        className={cn('chord-input-wrapper', chordAnswer)}
        onKeyPress={this.onKeyPress}
      >
        <span className="chord-prefix">{root}</span>
        <input type="text" className="chord-input" ref={getInputRef} />
        <div className="input-shadow" />
        <ReturnKey className="input-helper" />
      </div>
    );
  }
}

export default ChordInput;
