import React from 'react';
import { withHandlers } from 'recompose';
import { string, func } from 'prop-types';
import cn from 'classnames';
import ReturnKey from '../../icons/ReturnKey';
import './ChordInput.css';

const ENTER_KEY = 'Enter';

const ChordInput = ({ root, chordAnswer, getInputRef, onKeyPress }) => (
  <div
    className={cn('chord-input-wrapper', chordAnswer)}
    onKeyPress={onKeyPress}
  >
    <span className="chord-prefix">{root}</span>
    <input type="text" className="chord-input" ref={getInputRef} />
    <div className="input-shadow" />
    <ReturnKey className="input-helper" />
  </div>
);

ChordInput.propTypes = {
  root: string,
  chordAnswer: string,
  getInputRef: func.isRequired,
};

const enhance = withHandlers({
  onKeyPress: props => e => {
    if (e.key === ENTER_KEY) {
      props.onEnter(e.target.value);
    }
  },
});

export default enhance(ChordInput);
