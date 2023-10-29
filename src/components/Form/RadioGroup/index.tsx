import React from "react";

import * as RadixRadioG from "@radix-ui/react-radio-group";

import styles from "./styles.module.css";

export const RadioGroup = ({ options }) => {
  return (
    <RadixRadioG.Root
      className={styles.radioGroupRoot}
      defaultValue="default"
      aria-label="View density"
    >
      {options.map((option) => (
        <div>
          <RadixRadioG.Item className={styles.radioGroupItem} value="" id="r1">
            <RadixRadioG.Indicator className={styles.radioGroupIndicator} />
            <img src={option.icon} alt={option.alt} />
            <label className={styles.label}>{option.label}</label>
            <span>{option.price}</span>
          </RadixRadioG.Item>
        </div>
      ))}
    </RadixRadioG.Root>
  );
};
