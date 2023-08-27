"use client";
// import { Button } from "@/components/general/Button/button";
// import CheckCircleIcon from "/public/images/ic_check-circle.svg";
// import { Portal } from "@/components/general/Portal/portal";
// import Image from "next/image";
import React from "react";
// import ReorderableList from "@/components/DragAndDropList/dndListTest";
// import styles from "./styles.module.scss";
// import { SortableItem } from "@/components/SortableItem/sortableItem";
// import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   sortableKeyboardCoordinates,
//   verticalListSortingStrategy
// } from "@dnd-kit/sortable";
//
// const saveData = (newTodos: any) => {
//   localStorage.setItem("todos", JSON.stringify(newTodos));
// };
//
//
// export default function DeleteCategoryModal() {
//   const [todos, setTodos] = React.useState<{ todo: string; id: string; }[]>([]);
//   const [newTodo, setNewTodo] = React.useState<string>("");
//
//   const sensors = useSensors(
//     useSensor(PointerSensor),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: sortableKeyboardCoordinates
//     })
//   );
//
//   React.useEffect(() => {
//     if (localStorage.getItem("todos")) {
//       // @ts-ignore
//       setTodos(state => [...state, ...JSON.parse(localStorage.getItem("todos"))]);
//     }
//   }, []);
//
//
//   const onAddTodo = React.useCallback(() => {
//     if (newTodo.trim()) {
//       let newTodos = [...todos, { todo: newTodo.trim(), id: Date.now().toString() }];
//       setTodos(state => [...newTodos]);
//       setNewTodo("");
//       saveData(newTodos);
//     }
//   }, [newTodo, setTodos, todos, setNewTodo]);
//
//   const deleteTodo = React.useCallback((id: string) => {
//
//     let newTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(newTodos);
//     saveData(newTodos);
//
//   }, [todos]);
//
//   function handleDragEnd(event: any) {
//     console.log("Drag end called");
//     const { active, over } = event;
//     console.log("ACTIVE: " + active.id);
//     console.log("OVER :" + over.id);
//
//     if (active.id !== over.id) {
//       setTodos((items: any) => {
//         const activeIndex = items.indexOf(active.id);
//         const overIndex = items.indexOf(over.id);
//         console.log(arrayMove(items, activeIndex, overIndex));
//         return arrayMove(items, activeIndex, overIndex);
//         // items: [2, 3, 1]   0  -> 2
//         // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1]
//       });
//
//     }
//   }
//
//   console.log(todos, "todos");
//
//   return (
//     <section className={styles.content}>
//       <input
//         type="text"
//         id="todoInput"
//         className="form-control"
//         placeholder="add todo"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <Button className={styles.createBtn} onClick={onAddTodo}>+ Create category</Button>
//
//       {/*<DndContext*/}
//       {/*  sensors={sensors}*/}
//       {/*  collisionDetection={closestCenter}*/}
//       {/*  // collisionDetection={closestCenter}*/}
//       {/*  onDragEnd={handleDragEnd}*/}
//       {/*  id={'df'}*/}
//       {/*>*/}
//       {/*  <SortableContext*/}
//       {/*    items={todos}*/}
//       {/*    id={"sd"}*/}
//       {/*  >*/}
//       {/* We need components that use the useSortable hook */}
//       {todos.map(item =>
//         <SortableItem key={item?.id} deleteTodo={deleteTodo} item={item} id={item?.id} />)}
//       {/*  </SortableContext>*/}
//       {/*</DndContext>*/}
//
//
//       {/*<>*/}
//       {/*  <ReorderableList*/}
//       {/*    flush*/}
//       {/*    id="all"*/}
//       {/*    setItems={setTodos}*/}
//       {/*    items={todos}*/}
//       {/*    onReorder={(newItems: any) => setTodos(newItems)}*/}
//       {/*  >*/}
//       {/*    {todos.map((item, index) => (*/}
//       {/*      <SortableItem*/}
//       {/*        item={item}*/}
//       {/*        key={item?.id + index}*/}
//
//       {/*        deleteTodo={deleteTodo}*/}
//       {/*      />*/}
//       {/*    ))}*/}
//       {/*  </ReorderableList>*/}
//       {/*</>*/}
//       {
//         <Portal className={styles.brnWrap}>
//           <Button className={styles.success}><Image src={CheckCircleIcon} alt={"check"} /> Save</Button>
//           <Button variant={"outlined"}>Cancel</Button>
//         </Portal>
//       }
//     </section>
//   );
// }
