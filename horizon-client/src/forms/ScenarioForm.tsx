import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input, Button, Alert } from "reactstrap";
import styles from "./ScenarioForm.module.css";

const ScenarioForm = props => {
  return (
    <Formik
      initialValues={{ name: "", description: "" }}
      validate={values => {
        let errors: any = {};
        if (!values.name) {
          errors.name = "A scenario name is required";
        }
        if (!values.description) {
          errors.description = "A description is required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <h2 className={styles.h2}>Scenario form</h2>
            <Field
              name="name"
              render={({ field }) => {
                return <Input {...field} placeholder="Type a name here" />;
              }}
            />
            <ErrorMessage
              name="name"
              render={msg => {
                return <Alert color="danger">{msg}</Alert>;
              }}
            />
            <Field
              name="description"
              render={({ field }) => {
                return (
                  <Input {...field} placeholder="Type a description here" />
                );
              }}
            />
            <ErrorMessage name="description" component="div" />
            <Button
              className={styles.Button}
              outline
              color="secondary"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ScenarioForm;
