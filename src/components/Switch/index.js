import React from 'react';
import './Switch.css';

const Switch = ({ children, on, disabled, id }) => (
  <div className="switch">
    <input type="checkbox" id={id} checked={on} disabled={disabled} />
    <label htmlFor={id}>{children}</label>
  </div>
);

export default Switch;
