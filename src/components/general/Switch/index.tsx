import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export function Switcher({ disabled, onClick, className }: any) {
  return (
    <label onClick={onClick} className={classNames(className, styles.switch, { [styles.disabled]: disabled })}>
      <input disabled={disabled} type="checkbox" id="togBtn" />
      <div className={styles.slider}></div>
    </label>
  );
}
