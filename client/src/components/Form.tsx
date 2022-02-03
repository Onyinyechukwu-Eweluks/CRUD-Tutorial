import "react-app-polyfill/ie11";
import React from "react";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/Mutations";
import { Formik, Field, Form, ErrorMessage } from "formik";

interface Values {
  name: string;
  username: string;
  password: string;
}

const FormComponent = () => {
  const initialValues = {
    name: "",
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(5, "Too Short!").required("Required"),
    username: Yup.string().min(7, "Too Short!").required("Required"),
    password: Yup.string().required("Required"),
  });

  const [createUser] = useMutation(CREATE_USER);
  //console.log(data);

  const handleSubmit = (values: Values) => {
    createUser({
      variables: {
        name: values.name,
        password: values.password,
        username: values.username,
      },
    });
    //console.log("values: ", values);
    alert("Successful");
    window.location.reload();
  };

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div className="field">
            <label htmlFor="name">Name</label>

            <Field id="name" name="name" placeholder="John" className="input" />
            <ErrorMessage name="name" component="span" />
          </div>

          <div className="field">
            <label htmlFor="username">Username</label>

            <Field
              id="username"
              name="username"
              placeholder="Doe"
              className="input"
            />
            <ErrorMessage name="username" component="span" />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>

            <Field
              id="password"
              name="password"
              placeholder="Enter password"
              type="password"
              className="input"
            />
            <ErrorMessage name="password" component="span" />
          </div>

          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
