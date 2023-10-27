import styles from "./styles.module.css";

const NextStep = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Next Step
    </button>
  );
};

export default NextStep;
