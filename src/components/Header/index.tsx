import { ReactNode } from "react";
import styles from "./styles.module.scss";

type HeaderProps = {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  );
}
