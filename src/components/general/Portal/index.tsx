import React from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface PortalProps {
  children: React.ReactNode;
  className?: string;
}

export const Portal = ({ children, className }: PortalProps) => {
  const ref = React.useRef<Element | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return (mounted && ref.current) ? createPortal(<div
    className={classNames(styles.overlay, className)}>{children}</div>, ref.current) : null;
};
