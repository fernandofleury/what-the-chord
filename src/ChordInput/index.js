import React, { Component } from 'react';
import ReturnKey from '../icons/ReturnKey';
import './ChordInput.css';

const ChordInput = ({ chord }) => (
  <div className="chord-input-wrapper invalid">
    <span className="chord-prefix">{chord.root}</span>
    <input type="text" className="chord-input" placeholder="C#EG#" />
    <div className="input-shadow" />
    <ReturnKey className="input-helper" />
  </div>
);

export default ChordInput;
