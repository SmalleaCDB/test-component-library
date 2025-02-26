// src/components/Button.jsx
import React from 'react';

const NewButton = ({ label, onClick }) => {
  return <button className="button" onClick={onClick}>{label}</button>;
};

export default NewButton;
