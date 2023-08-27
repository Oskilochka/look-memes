import * as yup from "yup";
export const validationSchema = yup.object().shape({
  todos: yup.array().of(
    yup.object({
      title: yup.string().required("Required")
    })
  )
});
