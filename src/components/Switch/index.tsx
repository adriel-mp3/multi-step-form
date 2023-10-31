import * as RadixSwitch from "@radix-ui/react-switch";

import styles from "./styles.module.css";

type BaseSwitchProps = RadixSwitch.SwitchProps;
interface SwitchProps extends BaseSwitchProps {
  id: string;
  label: string;
  hideLabel: boolean;
}

export const Switch = ({
  id,
  label,
  hideLabel,
  onCheckedChange,
  ...props
}: SwitchProps) => {
  return (
    <div>
      <label className={hideLabel ? "sr-only" : ""} htmlFor={id}>
        {label}
      </label>
      <RadixSwitch.Root
        className={styles.switchRoot}
        id={id}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <RadixSwitch.Thumb className={styles.switchThumb} />
      </RadixSwitch.Root>
    </div>
  );
};
