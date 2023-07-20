import React from 'react'
import styles from './NextStep.module.css';

const NextStep = ({onClick}) => {
  return (
    <button className={styles.button} onClick={onClick}>Next Step</button>
  )
}

export default NextStep