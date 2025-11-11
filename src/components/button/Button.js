// src/components/ui/Button.js

import React from 'react';
import './Button.css';

const Button = ({ children, type = 'primary', link, onClick }) => {
  const buttonClass = `button ${type}`;

  if (link) {
    return (
      <a href={link} className={buttonClass}>
        {children} {}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children} {}
    </button>
  );
};

export default Button;