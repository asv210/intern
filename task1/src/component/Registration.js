import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Registration = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const initialValues = {
    name: "",
    email: "",
  };
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <Field
              type="text"
              id="name"
              name="name"
              className="px-4 py-2 border border-gray-300 rounded"
            />
            <ErrorMessage name="name" component="div" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="px-4 py-2 border border-gray-300 rounded"
            />
            <ErrorMessage name="email" component="div" />
          </div>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
