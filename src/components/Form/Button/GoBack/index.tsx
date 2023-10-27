import styles from "./styles.module.css";

export const GoBack = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Go Back
    </button>
  );
};

