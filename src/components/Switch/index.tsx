import * as RadixSwitch from "@radix-ui/react-switch";

import styles from "./styles.module.css";

interface SwitchProps {
  label: string;
  hideLabel: boolean;
}

export const Switch = ({ label, hideLabel }: SwitchProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <label
        className={hideLabel ? "sr-only" : ""}
        htmlFor="airplane-mode"
        style={{ paddingRight: 15 }}
      >
        {label}
      </label>
      <RadixSwitch.Root className={styles.switchRoot} id="airplane-mode">
        <RadixSwitch.Thumb className={styles.switchThumb} />
      </RadixSwitch.Root>
    </div>
  );
};
