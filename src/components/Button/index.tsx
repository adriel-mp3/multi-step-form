import React from "react";
import styles from "./styles.module.css";

type ButtonTypes = "a" | "button";

interface ButtonProps extends BaseButtonProps {
  as?: ButtonTypes;
  background?: "default" | "accent" | "none";
  children: React.ReactNode;
}

type BaseButtonProps = React.HTMLProps<keyof ButtonTypes>;

export const Button = ({
  background = "default",
  as = "button",
  children,
  ...props
}: ButtonProps) => {
  const backgroundStyle = `${styles.button} ${styles[background]}`;

  return React.createElement(
    as,
    { className: backgroundStyle, ...props },
    children
  );
};
