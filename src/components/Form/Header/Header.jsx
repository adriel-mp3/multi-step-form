import React from "react";
import styles from './Header.module.css';

const Header = ({ title, paragraph }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default Header;
