import * as React from "react";
import {
  Alert,
  Button,
  Container,
  Row,
  Col,
  Jumbotron,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Query, Mutation } from "react-apollo";
import { ADD_INDICATOR } from "../data/indicators";
import * as yup from "yup";

const indicatorFormSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required()
});

const $container = styled.div`
  padding: 0.5rem;
`;

const $h2 = styled.h2`
  border-radius: 15px 50px 30px 5px;
  background-color: #2e8b57;
  color: white;
  font-weight: bold;
`;

// style={{backgroundColor: 'green'}}

const IndicatorForm = ({ indicator }) => {
  const submitText = indicator ? "Update" : "Save";

  const initialValues = { name: "", description: "" };

  const submit = values => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <$container>
        <Row>
          <Col md={12}>
            <$h2> Indicator form </$h2>
          </Col>
        </Row>

        <Jumbotron
          style={{ margin: "1rem", borderRadius: "15px 50px 30px 5px" }}
        >
          <Mutation mutation={ADD_INDICATOR}>
            {createIndicator => {
              return (
                <Formik
                  initialValues={initialValues}
                  validationSchema={indicatorFormSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    createIndicator({
                      variables: {
                        name: values.name,
                        description: values.description
                      }
                    }).then(result => {
                      setSubmitting(false);
                    });
                  }}
                >
                  {({ values, isSubmitting }) => {
                    return (
                      <Form>
                        <Row>
                          <Col md={4}>
                            <Field name="name">
                              {({ field, form }) => (
                                <TextField
                                  {...field}
                                  label="Name"
                                  margin="normal"
                                  fullWidth
                                  variant="outlined"
                                />
                              )}
                            </Field>
                            <ErrorMessage name="name">
                              {msg => <Alert color="info">{msg}</Alert>}
                            </ErrorMessage>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="8">
                            <Field>
                              {({ field, form }) => (
                                <TextField
                                  {...field}
                                  name="description"
                                  value={values.description}
                                  label="Description"
                                  margin="normal"
                                  multiline
                                  fullWidth
                                  variant="outlined"
                                />
                              )}
                            </Field>
                            <ErrorMessage name="description">
                              {msg => <Alert color="info">{msg}</Alert>}
                            </ErrorMessage>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12" style={{ textAlign: "center" }}>
                            <Button
                              disabled={isSubmitting}
                              type="submit"
                              style={{ fontWeight: "bold", marginTop: "2rem" }}
                            >
                              {" "}
                              {submitText}{" "}
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    );
                  }}
                </Formik>
              );
            }}
          </Mutation>
        </Jumbotron>
      </$container>
    </React.Fragment>
  );
};
export { IndicatorForm as default };
