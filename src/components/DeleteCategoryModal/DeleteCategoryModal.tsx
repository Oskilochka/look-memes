import React from "react";
import Image from "next/image";
import { Button } from "@/components/general/Button/button";
import { Modal } from "@/components/general/Modal/modal";
import DeleteIcon from "/public/images/ic_delete.svg";
import styles from "./styles.module.scss";

type DeleteCategoryModalProps = {
  isOpen: boolean,
  onRequestClose: () => void,
  onSubmitClick?: (value: string) => void
}

export default function DeleteCategoryModal(
  {
    isOpen,
    onRequestClose,
    onSubmitClick
  }: DeleteCategoryModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      title={"Delete the Category?"}
      className={styles.modal}
      titleClassName={styles.modalHeader}
      contentClassName={styles.modalContent}
      onRequestClose={onRequestClose}
      buttonsClassName={styles.btnWrap}
      buttons={<>
        <Button
          type="submit"
          className={styles.submitModalBtn}
          onClick={onSubmitClick}
        >
          <Image src={DeleteIcon} alt={"delete"} />
          Delete
        </Button>
        <Button
          type="button"
          className={styles.cancelBtn}
          onClick={onRequestClose}
        >
          Cancel
        </Button>
      </>
      }
    >
      All templates in the category will be moved to the category "Other"
    </Modal>
  );
}
