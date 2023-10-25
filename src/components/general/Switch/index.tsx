import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

type SwitcherProps = {
  disabled?: boolean,
  onClick?: () => void,
  className?: string
}

export const Switcher = React.memo<SwitcherProps>(
  ({
     disabled,
     onClick,
     className
   }) => {
    return (
      <label onClick={onClick} className={classNames(className, styles.switch, { [styles.disabled]: disabled })}>
        <input disabled={disabled} type="checkbox" id="togBtn" />
        <div className={styles.slider}></div>
      </label>
    );
  });
