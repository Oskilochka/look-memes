import styles from "./header.module.scss";
import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  );
}
