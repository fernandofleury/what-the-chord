import React from 'react';
import { func, objectOf, bool } from 'prop-types';
import Switch from '../Switch';
import './Ruleset.css';

const Ruleset = ({ changeQualities, qualities }) => (
  <React.Fragment>
    <div className="ruleset">
      <div className="set-title">RULES</div>
      <div className="set-item">
        - Enter the required notes for each chord. For example E Major: EG#B
      </div>
      <div className="set-item">- No spaces or commas required</div>
      <div className="set-item">- Lowercase or uppercase</div>
      <div className="set-item">- Root note already prefilled</div>
      <div className="set-item">- 60 seconds</div>
    </div>

    <div className="ruleset">
      <div className="set-title">OPTIONS</div>
      <div className="set-item">
        <Switch id="caged" on={true}>
          CAGED chords only (beta)
        </Switch>
      </div>
    </div>

    <div className="ruleset">
      <div className="set-title">QUALITIES</div>

      <div className="ruleset-grid">
        <div className="set-item">
          <Switch
            id="major_minor"
            on={qualities['Major'] && qualities['Minor']}
            onChange={() =>
              changeQualities({
                Major: !qualities['Major'],
                Minor: !qualities['Minor'],
              })
            }
          >
            Major / Minor
          </Switch>
        </div>

        <div className="set-item">
          <Switch
            id="major-7th_minor-7th"
            on={qualities['Major 7th'] && qualities['Minor 7th']}
            onChange={() =>
              changeQualities({
                'Major 7th': !qualities['Major 7th'],
                'Minor 7th': !qualities['Minor 7th'],
              })
            }
          >
            Major 7th / Minor 7th
          </Switch>
        </div>

        <div className="set-item">
          <Switch
            id="dominant-7th"
            on={qualities['Dominant 7th']}
            onChange={() =>
              changeQualities({
                'Dominant 7th': !qualities['Dominant 7th'],
              })
            }
          >
            Dominant 7th
          </Switch>
        </div>

        <div className="set-item">
          <Switch
            id="half-dim-7th_dim-7th"
            on={qualities['Half Diminished 7th'] && qualities['Diminished 7th']}
            onChange={() =>
              changeQualities({
                'Half Diminished 7th': !qualities['Half Diminished 7th'],
                'Diminished 7th': !qualities['Diminished 7th'],
              })
            }
          >
            Half Dim. 7th / Dim. 7th
          </Switch>
        </div>

        <div className="set-item">
          <Switch
            id="augmented"
            on={qualities['Augmented']}
            onChange={() =>
              changeQualities({
                Augmented: !qualities['Augmented'],
              })
            }
          >
            Augmented Triad
          </Switch>
        </div>
      </div>
    </div>
  </React.Fragment>
);

Ruleset.propTypes = {
  changeQualities: func.isRequired,
  qualities: objectOf(bool),
};

export default Ruleset;
