import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";
import DragIcon from "*.svg";

type ButtonProps = {
  className?: string;
  iconSrc: string;
  iconAlt: string
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  [key: string]: any;
};

export const IconButton = (
  {
    className,
    variant,
    iconSrc,
    iconAlt,
    ...rest
  }: ButtonProps) => {
  return <button className={classNames(styles.root, className)} {...rest}>
    <Image src={iconSrc} alt={iconAlt} />
  </button>;
};

