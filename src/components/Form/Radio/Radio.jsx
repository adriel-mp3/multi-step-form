import React from "react";
import styles from "./Radio.module.css";
import { FormContext } from "../../../context/FormContext";

const Radio = ({ label, name, icon, title, price, value, setValue }) => {
  const { period, selectedPlan } = React.useContext(FormContext);

  return (
    <div className={`${styles.wrapper} ${selectedPlan === name ? styles.activePlan : ''}`}>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <img src={icon} alt="Icon plan" className={styles.img} />
      <p className={styles.title}>{title}</p>
      <span className={styles.price}>
        {period === "yearly" ? `$${Number(price) * 10}/yr` : `$${price}/mo`}
      </span>
      {period === "yearly" && (
        <span className={styles.yearly}>2 months free</span>
      )}
      <input
        type="radio"
        name={name}
        value={name}
        checked={value === name}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
};

export default Radio;
