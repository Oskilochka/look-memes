import React, { useEffect, useRef, useState } from "react";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

const ReorderableList = ({ children, id, setItems, items, onReorder, ...props }: any) => {
  // const [items, setItems] = useState(defaultItems);
  //
  // const notInitialRender = useRef(false);
  // const sensors = useSensors(
  //   useSensor(PointerSensor),
  //   useSensor(KeyboardSensor, {
  //     coordinateGetter: sortableKeyboardCoordinates
  //   })
  // );
  //
  // useEffect(() => {
  //   if (notInitialRender.current && onReorder) onReorder(items);
  //   else notInitialRender.current = true;
  // }, [items]);
  //
  // function handleDragEnd(event: any) {
  //   console.log("Drag end called");
  //   const { active, over } = event;
  //   console.log("ACTIVE: " + active.id);
  //   console.log("OVER :" + over.id);
  //
  //   if (active.id !== over.id) {
  //     setItems((items: any) => {
  //       const activeIndex = items.indexOf(active.id);
  //       const overIndex = items.indexOf(over.id);
  //       console.log(arrayMove(items, activeIndex, overIndex));
  //       return arrayMove(items, activeIndex, overIndex);
  //       // items: [2, 3, 1]   0  -> 2
  //       // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1]
  //     });
  //
  //   }
  // }
  //
  // // function handleDragEnd(event: any) {
  // //   const { active, over } = event;
  // //
  // //   debugger
  // //
  // //   if (active.id !== over.id) {
  // //     debugger
  // //
  // //     setItems((items: any) => {
  // //       const oldIndex = items.indexOf(active.id);
  // //       const newIndex = items.indexOf(over.id);
  // //       debugger
  // //
  // //
  // //       return arrayMove(items, oldIndex, newIndex);
  // //     });
  // //   }
  // // }
  // const [isMounted, setIsMounted] = useState(false);
  //
  // // useEffect(() => setItems(items), [defaultItems, setItems]);
  //
  // // useEffect(() => {
  // //   debugger
  // //   if (notInitialRender.current && onReorder) onReorder(items);
  // //   else notInitialRender.current = true;
  // // }, [items]);
  //
  // // const handleDragEnd = ({ active, over }: any) => {
  // //   debugger
  // //   if (!over) {
  // //     return;
  // //   }
  // //   debugger
  // //   if (active.id !== over.id) {
  // //     const activeIndex = active.data.current.sortable.index;
  // //     const overIndex = over.data.current?.sortable.index || 0;
  // //     debugger
  // //     setItems((items: any) => {
  // //       return arrayMove(items, activeIndex, overIndex);
  // //     });
  // //   }
  // // };
  // //
  // // useEffect(() => {
  // //   debugger
  // //   setIsMounted(true);
  // // }, []);
  // //
  // // if (!isMounted) return null;

  return (
    <></>
    // <DndContext
    //   sensors={sensors}
    //   collisionDetection={closestCenter}
    //   modifiers={[restrictToVerticalAxis]}
    //   onDragEnd={handleDragEnd}
    //   id={"testId"}
    // >
    //   <SortableContext id={id} strategy={verticalListSortingStrategy} items={items}>
    //     {children}
    //   </SortableContext>
    // </DndContext>
  );
};

export default ReorderableList;
