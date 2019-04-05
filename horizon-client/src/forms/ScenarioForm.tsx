import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input, Button, Alert } from "reactstrap";
import styles from "./ScenarioForm.module.css";
import { Query, Mutation } from "react-apollo";
import {
  ADD_SCENARIO,
  UPDATE_SCENARIO,
  SCENARIOS,
  SCENARIO_BY_ID
} from "../data/scenarios";

const ScenarioForm = ({ history, match }) => {
  const id = match.params.id;
  console.log(id);
  const Update_Scenario = (
    <Query query={SCENARIO_BY_ID} variables={{ id: id }}>
      {({ loading, error, data }) => {
        if (loading) return null;
        console.log(id);
        const { name, description } = data.scenarios[0];
        return (
          <Mutation mutation={UPDATE_SCENARIO}>
            {(updateScenario, { data }) => {
              return (
                <Formik
                  initialValues={{ name: name, description: description }}
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
                    updateScenario({
                      variables: {
                        id: id,
                        name: values.name,
                        description: values.description
                      }
                    });
                    setSubmitting(false);
                    history.push("/scenarios");
                  }}
                >
                  {({ isSubmitting }) => {
                    return (
                      <Form>
                        <h2 className={styles.h2}>Scenario form</h2>
                        <Field
                          name="name"
                          render={({ field }) => {
                            return (
                              <Input
                                {...field}
                                placeholder="Type a name here"
                              />
                            );
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
                              <Input
                                {...field}
                                placeholder="Type a description here"
                              />
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
                          Update
                        </Button>
                      </Form>
                    );
                  }}
                </Formik>
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );

  const Add_Scenario = (
    <Mutation mutation={ADD_SCENARIO}>
      {(addScenario, { data }) => {
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

              addScenario({
                update: (proxy, { data }) => {
                  const scenarios: any = proxy.readQuery({ query: SCENARIOS });
                  const newScenarios = scenarios.scenarios.concat([
                    data.createScenario
                  ]);
                  proxy.writeQuery({
                    query: SCENARIOS,
                    data: { scenarios: newScenarios }
                  });
                },
                variables: {
                  name: values.name,
                  description: values.description
                }
              });
              setSubmitting(false);
              history.push("/scenarios");
            }}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  <h2 className={styles.h2}>Scenario form</h2>
                  <Field
                    name="name"
                    render={({ field }) => {
                      return (
                        <Input {...field} placeholder="Type a name here" />
                      );
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
                        <Input
                          {...field}
                          placeholder="Type a description here"
                        />
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
      }}
    </Mutation>
  );

  if (id) {
    return <div>{Update_Scenario}</div>;
  } else {
    return <div>{Add_Scenario}</div>;
  }
};

export default ScenarioForm;
