import React from "react";
import { FormikConfig, FormikErrors, FormikValues } from "formik/dist/types";
import { Formik, validateYupSchema, yupToFormErrors } from "formik";

export default function MyFormik<Values extends FormikValues = FormikValues, ExtraProps = {}>(
  {
    validationSchema,
    validate,
    initialValues,
    ...props
  }: FormikConfig<Values> & ExtraProps): JSX.Element {

  const validateFunc = React.useCallback(async (values: Values): Promise<FormikErrors<Values>> => {
    try {
      await validateYupSchema(values, validationSchema, true, { values, initialValues });
    } catch (err) {
      return yupToFormErrors(err);
    }
    return {};
  }, [
    validationSchema, initialValues,
  ]);

  return (
    <Formik
      validate={validateFunc}
      initialValues={initialValues}
      {...props}
    />
  );
}
