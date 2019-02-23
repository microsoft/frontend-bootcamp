import React from 'react';
import './Button.css';

export const Button = props => {
  return (
    <button className="Button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
