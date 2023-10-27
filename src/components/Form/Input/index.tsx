import styles from "./styles.module.css";

export const Input = ({
  label,
  type,
  name,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
  ...props
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};
