import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  ref?: React.Ref<HTMLButtonElement>;
  [key: string]: any;
};

export const Button = (
  {
    className,
    variant,
    ...props
  }: ButtonProps) => {
  return React.createElement("button", {
    className: classNames(
      className,
      styles.root,
      styles[variant as string]
    ),
    ...props
  });
};

