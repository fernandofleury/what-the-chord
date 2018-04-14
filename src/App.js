import React, { Component } from 'react';
import returnKey from './icons/return-key.svg';
import Countdown from './Countdown';
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

        <Countdown onEnd={() => console.log('done')} />
      </div>
    );
  }
}

export default App;
