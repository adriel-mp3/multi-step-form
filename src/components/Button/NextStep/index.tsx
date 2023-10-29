import styles from "./styles.module.css";

export const NextStep = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Next Step
    </button>
  );
};
