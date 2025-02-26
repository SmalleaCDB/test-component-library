// src/components/Button.jsx
import React from 'react';
import styles from './NewButton.module.css';

const NewButton = ({ label, onClick }) => {
  return <button className={styles.button} onClick={onClick}>{label}</button>;
};

export default NewButton;
