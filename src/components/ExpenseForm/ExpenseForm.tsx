import classNames from "classnames";
import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";

import Expense from "#shared/types";

import "./ExpenseForm.scss";

const initialValues: Expense = {
  id: 0,
  date: "",
  description: "",
  category: "",
  price: "",
};

const validationSchema = Yup.object({
  description: Yup.string().required(),
  price: Yup.string().required(),
  date: Yup.string().required(),
});

const AddNewExpense = ({
  categories,
  onSubmit,
  className,
}: {
  categories: string[];
  onSubmit: (values: Expense) => void;
  className?: string;
}) => {
  return (
    <div className={classNames(className)}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex items-start gap-4">
          <Field name="description">
            {({ meta }: FieldProps) => (
              <input
                type="text"
                className={classNames("outline-none border h-10 px-4 rounded", {
                  "border-red-500": meta.touched && meta.error,
                  "border-gray-300 hover:border-gray-600 focus:border-gray-600":
                    !(meta.touched && meta.error),
                })}
                placeholder="Description"
              />
            )}
          </Field>
          <Field name="price">
            {({ meta }: FieldProps) => (
              <input
                type="number"
                className={classNames("outline-none border h-10 px-4 rounded", {
                  "border-red-500": meta.touched && meta.error,
                  "border-gray-300 hover:border-gray-600 focus:border-gray-600":
                    !(meta.touched && meta.error),
                })}
                placeholder="Price"
              />
            )}
          </Field>
          <Field name="category">
            {({ meta }: FieldProps) => (
              <select
                name="category"
                className={classNames(
                  "outline-none border h-10 pl-1 rounded capitalize",
                  {
                    "border-red-500": meta.touched && meta.error,
                    "border-gray-300 hover:border-gray-600 focus:border-gray-600":
                      !(meta.touched && meta.error),
                  }
                )}
              >
                <option hidden></option>
                {categories &&
                  categories.length > 0 &&
                  categories.map((category) => (
                    <option key={category} className="capitalize">
                      {category}
                    </option>
                  ))}
              </select>
            )}
          </Field>
          <Field name="date">
            {({ meta }: FieldProps) => (
              <input
                type="datetime-local"
                className={classNames("outline-none border h-10 px-4 rounded", {
                  "border-red-500": meta.touched && meta.error,
                  "border-gray-300 hover:border-gray-600 focus:border-gray-600":
                    !(meta.touched && meta.error),
                })}
              />
            )}
          </Field>
          <button
            type="submit"
            className="bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white font-semibold px-4 py-2 rounded-full"
          >
            Add Expense
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNewExpense;
