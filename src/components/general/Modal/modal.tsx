import React from "react";
import BaseModal from "react-modal";
import classnames from "classnames";
import Image from "next/image";
import CloseIcon from "/public/images/ic_close.svg";
import styles from "./style.module.scss";

export type ModalProps = {
  title?: string,
  children?: React.ReactNode,
  showCloseButton?: boolean,
  contentClassName?: string,
  titleClassName?: string,
  buttonsClassName?: string,
  buttons?: React.ReactNode | React.ReactNode[],
} & BaseModal.Props

export const Modal = (
  {
    className,
    title,
    onRequestClose,
    overlayClassName,
    showCloseButton = true,
    contentClassName,
    children,
    titleClassName,
    buttons,
    buttonsClassName,
    ...rest
  }: ModalProps) => {

  return (
    <BaseModal
      {...rest}
      overlayClassName={classnames(styles.overlay, overlayClassName as string)}
      className={classnames(className as string, styles.root)}
      onRequestClose={onRequestClose}
    >
      <div className={classnames(styles.header, titleClassName)}>
        {title}
      </div>
      {
        showCloseButton &&
        <button
          tabIndex={-1}
          className={styles.closeButton}
          type="button"
          onClick={onRequestClose}
        >
          <Image src={CloseIcon} alt={"close"} />
        </button>
      }
      <div className={contentClassName}>
        {children}
      </div>
      {
        (React.Children.count(buttons) > 0) &&
        <div className={classnames(styles.buttons, buttonsClassName)}>
          {buttons}
        </div>
      }
    </BaseModal>
  );
};
