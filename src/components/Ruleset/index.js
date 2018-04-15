import React from 'react';
import Switch from '../Switch';
import './Ruleset.css';

const Ruleset = () => (
  <React.Fragment>
    <div className="ruleset">
      <div className="set-title">RULES</div>
      <div className="set-item">- Enter the required notes for each chord. For example E Major: EG#B</div>
      <div className="set-item">- No spaces or commas required</div>
      <div className="set-item">- Lowercase or uppercase</div>
      <div className="set-item">- Root note already prefilled</div>
      <div className="set-item">- 60 seconds</div>
    </div>

    <div className="ruleset">
      <div className="set-title">OPTIONS</div>
      <div className="set-item">
        <Switch id="caged" on="on" disabled="disabled">
          CAGED chords only (beta)
        </Switch>
      </div>
    </div>

    <div className="ruleset">
      <div className="set-title">QUALITIES</div>

      <div className="ruleset-grid">
        <div className="set-item">
          <Switch id="caged" on="on" disabled="disabled">
            Major / Minor
          </Switch>
        </div>

        <div className="set-item">
          <Switch id="caged" on="on" disabled="disabled">
            Major 7th / Minor 7th
          </Switch>
        </div>

        <div className="set-item">
          <Switch id="caged" on="on" disabled="disabled">
            Dominant 7th
          </Switch>
        </div>

        <div className="set-item">
          <Switch id="caged" on="on" disabled="disabled">
            Half Dim. 7th / Dim. 7th
          </Switch>
        </div>

        <div className="set-item">
          <Switch id="caged" on="on" disabled="disabled">
            Augmented Triad
          </Switch>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Ruleset;