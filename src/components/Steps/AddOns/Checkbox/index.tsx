import React from "react";

import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { FormContext } from "@/context/FormContext";

import styles from "./styles.module.css";

interface CheckBoxProps extends RadixCheckbox.PrimitiveButtonProps {
  title: string;
  description: string;
  price: number;
}

export const Checkbox = ({ title, description, price }: CheckBoxProps) => {
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
    <label className={styles.label}>
      <div className={styles.wrapper}>
        <RadixCheckbox.Root className={styles.checkboxRoot}>
          <RadixCheckbox.Indicator className={styles.checkboxIndicator}>
            <CheckIcon />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <div className={styles.checkboxLabel}>
          <p>{title}</p>
          <span>{description}</span>
        </div>
        <span className={styles.price}>
          {period === "monthly" ? `+$${price}/mo` : `+$${price * 10}/yr`}
        </span>
      </div>
    </label>
  );
};
