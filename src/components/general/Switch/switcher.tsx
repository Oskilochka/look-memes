import React from "react";
import styles from "./switcher.module.scss";
import classNames from "classnames";

export function Switcher({ disabled, onClick, className }: any) {
  return (
    <label className={classNames(className, styles.switch, { [styles.disabled]: disabled })}>
      <input disabled={disabled} type="checkbox" id="togBtn" />
      <div className={styles.slider}></div>
    </label>
  );
}
