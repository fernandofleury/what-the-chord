import React, { Component } from 'react';
import returnKey from './icons/return-key.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="chord">A Major 7</div>

        <div className="chord-input-wrapper">
          <span className="chord-prefix">A</span>
          <input type="text" className="chord-input" placeholder="C#EG#" />
          <div className="input-shadow" />
          <img src={returnKey} className="input-helper" />
        </div>

        <div className="timer">
          <span className="time">15</span>
          <svg viewBox="0 0 160 160">
            <circle
              transform="rotate(-90, 80, 80)"
              className="circle"
              cx="80"
              cy="80"
              r="75"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default App;
