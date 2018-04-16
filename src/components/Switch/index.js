import React from 'react';
import { node, string, bool, func } from 'prop-types';
import './Switch.css';

const Switch = ({ children, on, disabled, id, onChange }) => (
  <div className="switch">
    <input
      type="checkbox"
      id={id}
      checked={on}
      disabled={disabled}
      onChange={onChange}
    />
    <label htmlFor={id}>{children}</label>
  </div>
);

Switch.propTypes = {
  children: node,
  on: bool,
  disabled: bool,
  id: string,
  onChange: func.isRequired,
};

Switch.defaultProps = {
  disabled: false,
  onChange: () => {},
};

export default Switch;
