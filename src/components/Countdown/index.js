import React, { PureComponent } from 'react';
import { dec } from 'ramda';
import { REMAINING_TIME, DELTA_THRESHOLD } from '../../constants';
import './Countdown.css';

class Countdown extends PureComponent {
  state = {
    remainingTime: REMAINING_TIME,
  };

  animationLoop = timestamp => {
    if (!this.state.remainingTime) {
      return this.cancelLoop();
    }

    if (!this.startTime) {
      this.startTime = timestamp;
    }

    if (timestamp - this.startTime >= DELTA_THRESHOLD) {
      this.updateTimer();
      this.startTime = 0;
    }

    this.loopId = window.requestAnimationFrame(this.animationLoop);
  };

  updateTimer() {
    if (!this.state.remainingTime) {
      return this.cancelLoop();
    }

    this.setState({
      remainingTime: dec(this.state.remainingTime),
    });
  }

  cancelLoop() {
    this.props.onEnd();

    if (this.loopId) {
      window.cancelAnimationFrame(this.loopId);
    }
  }

  componentDidMount() {
    window.requestAnimationFrame(this.animationLoop);
  }

  componentWillUnmount() {
    this.cancelLoop();
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
