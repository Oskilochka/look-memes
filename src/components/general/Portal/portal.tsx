"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import styles from "./portal.module.scss";

interface PortalProps {
  children: ReactNode;
  className?: string;
}

export const Portal = ({ children, className }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return (mounted && ref.current) ? createPortal(<div
    className={classNames(styles.overlay, className)}>{children}</div>, ref.current) : null;
};
