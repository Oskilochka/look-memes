import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styles from "./dnd.module.scss";
import { Switcher } from "@/components/general/Switch/switcher";
import DeleteIcon from "/public/images/ic_delete.svg";
import DragIcon from "/public/images/ic_drag.svg";
import { IconButton } from "@/components/Header/IconButton/iconButton";
import { useField } from "formik";
import { CategoryType, ModalStateType } from "@/components/CategoriesSection/types";

type SortableItemProps = {
  setModalState: (value: ModalStateType) => void,
  item: CategoryType,
  name: string
}

export function SortableItem({ setModalState, item, name }: SortableItemProps) {

  const { values } = useField(name)

  console.log(values, 'values')

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: item.id
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  const onDeleteHandler = React.useCallback(() => {
    setModalState({ isOpen: true, idToRemove: item?.id });
  }, [setModalState, item?.id]);


  return (
    <div className={styles.listRow} ref={setNodeRef} style={style}>
      <input className={styles.input} onChange={() => console.log("changed")} value={item?.title} />
      <Switcher disabled={true} />
      {
        !item?.isDefault &&
        <IconButton
          iconAlt={"delete"}
          iconSrc={DeleteIcon}
          onClick={onDeleteHandler}
        />
      }
      {
        !item?.isDefault &&
        <IconButton
          {...listeners}
          suppressHydrationWarning {...attributes}
          aria-describedby=""
          iconAlt={"drag"}
          iconSrc={DragIcon}
        />
      }
    </div>
  );
}
