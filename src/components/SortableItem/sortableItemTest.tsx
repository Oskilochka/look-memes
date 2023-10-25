import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type ReorderableItemProps = {
  children?: React.ReactNode,
  open?: boolean,
  selected?: boolean,
  id: number,
}

export const ReorderableItem = React.memo<ReorderableItemProps>(
  (
    {
      children,
      open = false,
      selected,
      id,
      ...props
    }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition
    };

    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners} {...props}>
        {id}
      </div>
    );
  }
);
