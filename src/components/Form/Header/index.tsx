import styles from "./styles.module.css";

export const Header = ({ title, paragraph }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};
