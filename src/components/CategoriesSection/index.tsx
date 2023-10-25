"use client";
import React from "react";
import DeleteCategoryModal from "@/components/DeleteCategoryModal";
import { CategoryType, ModalStateType } from "@/components/CategoriesSection/types";
import { defCategoryState, defOption } from "@/components/CategoriesSection/config";
import MyFormik from "@/components/MyFormik";
import { FieldArray, Form as FormikForm } from "formik";
import { validationSchema } from "@/components/CategoriesSection/validationSchema";
import { Button } from "@/components";

const saveData = (newTodos: any) => {
  localStorage.setItem("todos", JSON.stringify(newTodos));
};


export function CategoriesSection() {
  // const [isChanged, setIsChanged] = React.useState();
  // const [modalState, setModalState] = React.useState<ModalStateType>({ isOpen: false });
  //
  // //  check if other already exist in localStorage
  // const [items, setItems] = React.useState<CategoryType[]>([defOption]);
  // const [newItem, setNewItem] = React.useState<CategoryType>(defCategoryState);
  //
  // React.useEffect(() => {
  //   if (localStorage.getItem("todos")) {
  //     // @ts-ignore
  //     setItems(state => [...state, ...JSON.parse(localStorage.getItem("todos"))]);
  //   }
  // }, []);
  //
  // const onAddTodo = React.useCallback(() => {
  //   if (newItem?.title?.trim()) {
  //     let newTodos = [...items, { title: newItem?.title?.trim(), id: Date.now().toString() }];
  //     setItems(state => [...newTodos]);
  //     setNewItem(defCategoryState);
  //     saveData(newTodos);
  //   }
  // }, [newItem, setItems, items, setItems]);
  //
  // const onRequestClose = React.useCallback(() => setModalState({ isOpen: false, idToRemove: null }), [setModalState]);
  //
  // const onSubmitClick = React.useCallback(() => {
  //   if (modalState?.idToRemove) {
  //     let newTodos = items.filter((todo) => todo.id !== modalState?.idToRemove);
  //     setItems(newTodos);
  //     saveData(newTodos);
  //     onRequestClose();
  //     return true;
  //   } else {
  //     alert("something went wrong");
  //     return false;
  //   }
  // }, [items, onRequestClose, modalState?.idToRemove]);

  return (
    <MyFormik
      initialValues={{}}
      onSubmit={() => console.log("save")}
      validateOnBlur
      validateOnChange={false}
      validationSchema={validationSchema}
      validate={val => {
        console.log(val);
      }}
    >
      {
        ({ handleSubmit, resetForm, isSubmitting, isValidating, values }) => {
          return (
            <FormikForm>
              <Button> sadasd</Button>
              {/*<FieldArray name="categories" validateOnChange>*/}
              {/*  /!*{({*!/*/}
              {/*  /!*    form: { values, setValues, validateForm },*!/*/}
              {/*  /!*    ...fieldArrayHelpers*!/*/}
              {/*  /!*  }: any) => {*!/*/}
              {/*  /!*  const onAddClick = async () => {*!/*/}
              {/*  /!*    await fieldArrayHelpers.push({*!/*/}
              {/*  /!*      id: values.todos.length,*!/*/}
              {/*  /!*      content: "",*!/*/}
              {/*  /!*      isCompleted: false*!/*/}
              {/*  /!*    });*!/*/}
              {/*  /!*    validateForm();*!/*/}
              {/*  /!*  };*!/*/}

              {/*  /!*  const onRemoveClick = () => {*!/*/}
              {/*  /!*    const newTodos = values.todos.filter(*!/*/}
              {/*  /!*      ({ isCompleted }) => !isCompleted*!/*/}
              {/*  /!*    );*!/*/}
              {/*  /!*    setValues({ todos: newTodos });*!/*/}
              {/*  /!*  };*!/*/}

              {/*  /!*  return (*!/*/}
              {/*  /!*    <React.Fragment>*!/*/}
              {/*  /!*      <section className={styles.content}>*!/*/}
              {/*  /!*        <Index className={styles.createBtn} onClick={onAddTodo}>+ Create category</Index>*!/*/}
              {/*  /!*        /!*<SortableItem key={item?.id} setIModalOpen={setIModalOpen} item={item}*!/*!/*/}
              {/*  /!*        /!*              id={item?.id} />)}*!/*!/*/}

              {/*  /!*        <input*!/*/}
              {/*  /!*          type="text"*!/*/}
              {/*  /!*          id="item-title"*!/*/}
              {/*  /!*          placeholder="add new item"*!/*/}
              {/*  /!*          value={newItem?.title}*!/*/}
              {/*  /!*          onChange={(e) => setNewItem(state => ({ ...state, title: e.target.value }))}*!/*/}
              {/*  /!*        />*!/*/}
              {/*  /!*        {items?.length > 0 && items.map(item =>*!/*/}
              {/*  /!*          <SortableItem*!/*/}
              {/*  /!*            key={item?.id}*!/*/}
              {/*  /!*            name={`item${item?.id}`}*!/*/}
              {/*  /!*            setModalState={setModalState}*!/*/}
              {/*  /!*            item={item}*!/*/}
              {/*  /!*          />)}*!/*/}
              {/*  /!*        {*!/*/}
              {/*  /!*          isChanged &&*!/*/}
              {/*  /!*          <Portal className={styles.brnWrap}>*!/*/}
              {/*  /!*            <Index className={styles.success}><Image src={CheckCircleIcon} alt={"check"} /> Save</Index>*!/*/}
              {/*  /!*            <Index variant={"outlined"}>Cancel</Index>*!/*/}
              {/*  /!*          </Portal>*!/*/}
              {/*  /!*        }*!/*/}

              {/*  /!*      </section>*!/*/}
              {/*  /!*      <button onClick={onAddClick} type="button">*!/*/}
              {/*  /!*        Add Item*!/*/}
              {/*  /!*      </button>*!/*/}
              {/*  /!*      <button onClick={onRemoveClick} type="button">*!/*/}
              {/*  /!*        Remove*!/*/}
              {/*  /!*      </button>*!/*/}
              {/*  /!*      {values.todos.map(({ id }, index) => (*!/*/}
              {/*  /!*        <TodoItem key={id} index={index} />*!/*/}
              {/*  /!*      ))}*!/*/}
              {/*  /!*    </React.Fragment>*!/*/}
              {/*  /!*  );*!/*/}
              {/*  /!*}}*!/*/}

              {/*  /!*<DeleteCategoryModal*!/*/}
              {/*  /!*  onSubmitClick={onSubmitClick}*!/*/}
              {/*  /!*  onRequestClose={onRequestClose}*!/*/}
              {/*  /!*  isOpen={modalState?.isOpen}*!/*/}
              {/*</FieldArray>*/}


            </FormikForm>

          );
        }}
    </MyFormik>
  );
}
