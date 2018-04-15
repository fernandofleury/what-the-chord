import React from 'react';
import { func, node } from 'prop-types';
import './Button.css';

const Button = ({ onClick, children }) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: func,
  children: node,
};

export default Button;
