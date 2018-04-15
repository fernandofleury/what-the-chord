import React from 'react';
import { node, string } from 'prop-types';
import './Switch.css';

const Switch = ({ children, on, disabled, id }) => (
  <div className="switch">
    <input type="checkbox" id={id} checked={on} disabled={disabled} />
    <label htmlFor={id}>{children}</label>
  </div>
);

Switch.propTypes = {
  children: node,
  on: string,
  disabled: string,
  id: string,
};

export default Switch;
