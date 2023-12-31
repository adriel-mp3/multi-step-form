import React from "react";

import { FormContext } from "@/context/FormContext";

import styles from "./styles.module.css";

export const Checkbox = ({
  title,
  description,
  price,
  name,
  value,
  addOns,
  setAddOns,
}) => {
  const { period } = React.useContext(FormContext);

  function handleChange({ target }) {
    const { checked, value } = target;
    if (checked) {
      setAddOns([...addOns, value]);
    } else {
      setAddOns(addOns.filter((addOn) => addOn !== value));
    }
  }

  function handleChecked(addOn) {
    return addOns.includes(addOn);
  }

  return (
    <div
      className={`${styles.wrapper} ${
        addOns.includes(value) ? "activeWrapper" : ""
      }`}
    >
      <label htmlFor={name} className="sr-only">
        {title}
      </label>
      <input
        type="checkbox"
        name={name}
        onChange={handleChange}
        checked={handleChecked(value)}
        className={styles.checkbox}
        value={value}
      />
      <div>
        <p className={styles.title}>{title}</p>
        <span className={styles.description}>{description}</span>
      </div>
      <span>
        {period === "monthly" ? `+$${price}/mo` : `+$${price * 10}/yr`}
      </span>
    </div>
  );
};
