import React, { Component } from 'react';
import ChordInput from './ChordInput';
import Countdown from './Countdown';
import './App.css';

const chord = {
  name: 'A Major 7',
  root: 'A',
  notes: ['A', 'C#', 'E', 'G#'],
  type: 'Major 7th'
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="chord">A Major 7</div>

        <ChordInput chord={chord} />

        <Countdown onEnd={() => console.log('done')} />
      </div>
    );
  }
}

export default App;
