import React from "react";
import styles from "./ToggleSwitch.module.css";
import { FormContext } from "../../../context/FormContext";

const ToggleSwitch = () => {
  const { period, setPeriod } = React.useContext(FormContext);
  return (
    <div>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={period === "yearly"}
          onChange={() => {
            if (period === "monthly") {
              setPeriod("yearly");
            }
            if (period === "yearly") {
              setPeriod("monthly");
            }
          }}
        />
        <span className={`${styles.sliderRound} ${styles.slider}`}></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
