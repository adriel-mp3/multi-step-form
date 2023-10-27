import styles from "./styles.module.css";

const GoBack = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Go Back
    </button>
  );
};

export default GoBack;
