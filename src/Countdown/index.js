import React, { PureComponent } from 'react';
import './Countdown.css';

class Countdown extends PureComponent {
  state = {
    remainingTime: 60,
  };

  updateDiff = 1000;

  animationFrame = timestamp => {
    if (!this.startTime) {
      this.startTime = timestamp;
    }

    this.delta = timestamp - this.startTime;

    if (this.delta >= this.updateDiff) {
      this.updateTime();
      this.startTime = 0;
    }

    if (this.state.remainingTime) {
      window.requestAnimationFrame(this.animationFrame);
    }
  };

  updateTime() {
    if (!this.state.remainingTime) {
      return;
    }

    this.setState({
      remainingTime: this.state.remainingTime - 1,
    });
  }

  componentDidMount() {
    window.requestAnimationFrame(this.animationFrame);
  }

  render() {
    return (
      <div className="countdown-wrapper">
        <span className="countdown-time">{this.state.remainingTime}</span>
        <svg viewBox="0 0 160 160">
          <circle
            transform="rotate(-90, 80, 80)"
            className="countdown-circle"
            cx="80"
            cy="80"
            r="75"
          />
        </svg>
      </div>
    );
  }
}

export default Countdown;
