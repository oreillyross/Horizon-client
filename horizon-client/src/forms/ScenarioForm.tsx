import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Input,
  Button,
  Alert,
  Label,
  Row,
  Col,
  Container,
  FormGroup
} from "reactstrap";
import styles from "./ScenarioForm.module.css";

import { Query, Mutation, ApolloConsumer } from "react-apollo";
import {
  ADD_SCENARIO,
  UPDATE_SCENARIO,
  SCENARIOS,
  SCENARIO_BY_ID
} from "../data/scenarios";

const ScenarioForm = ({ history, scenario }) => {
  const initialValues = scenario
    ? { name: scenario.name, description: scenario.description }
    : { name: "", description: "" };

  return (
    <Mutation
      mutation={ADD_SCENARIO}
      onCompleted={({ createScenario }) => {
        history.push("/scenarios");
      }}
    >
      {createScenario => {
        return (
          <Formik
            initialValues={initialValues}
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
              createScenario({
                variables: {
                  name: values.name,
                  description: values.description
                }
              });
              setSubmitting(false);
            }}
          >
            {({ values, isSubmitting }) => {
              return (
                <React.Fragment>
                  <Form>
                    <h2 className={styles.h2}>Scenario form</h2>
                    <Container>
                      <Row>
                        <Col>
                          <Field
                            name="name"
                            render={({ field }) => {
                              return (
                                <FormGroup>
                                  <Label for="name">Name</Label>
                                  <Input
                                    id="name"
                                    {...field}
                                    placeholder="Type a name here"
                                  />
                                </FormGroup>
                              );
                            }}
                          />
                          <ErrorMessage
                            name="name"
                            render={msg => {
                              return <Alert color="danger">{msg}</Alert>;
                            }}
                          />
                        </Col>
                      </Row>
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
                      <ErrorMessage
                        name="description"
                        render={msg => {
                          return <Alert color="danger">{msg}</Alert>;
                        }}
                      />
                      <Button
                        className={styles.submitButton}
                        outline
                        color="secondary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Submit
                      </Button>
                    </Container>
                  </Form>
                </React.Fragment>
              );
            }}
          </Formik>
        );
      }}
    </Mutation>
  );
};

export default ScenarioForm;
