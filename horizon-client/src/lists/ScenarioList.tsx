import * as React from "react";
import styled from "styled-components";
import { Container, Row, Col, Jumbotron, Table, Spinner } from "reactstrap";
import { Query, Mutation } from "react-apollo";
import { SCENARIOS } from "../data/scenarios";
import styles from "./ScenarioList.module.css";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import ScenarioRow from "./ScenarioRow";

const $container = styled.div`
  padding: 0.5rem;
`;

const $h2 = styled.h2`
  border-radius: 15px 50px 30px 5px;
  background-color: #2e8b57;
  color: white;
  font-weight: bold;
`;

const ScenarioList = props => {
  const [loading, setLoading] = React.useState(false);
  const [scenarios, setScenarios] = React.useState([]);

  const removeScenario = id => {
    setScenarios(() => {
      return scenarios.filter(scenario => scenario.id !== id);
    });
  };

  return (
    <React.Fragment>
      <$container className={styles.clearfix}>
        <Row>
          <Col md={12}>
            <$h2> Scenario list </$h2>
          </Col>
        </Row>

        <Jumbotron
          style={{ margin: "1rem", borderRadius: "15px 50px 30px 5px" }}
        >
          <Query query={SCENARIOS}>
            {({ loading, error, data }) => {
              setLoading(loading);
              if (loading)
                return (
                  <Row>
                    <Col md={12} style={{ textAlign: "center" }}>
                      <Spinner color="success" />
                    </Col>
                  </Row>
                );
              if (error) return <div>Oops... something went wrong!</div>;
              if (scenarios.length === 0) setScenarios(data.scenarios);
              return (
                <Table bordered>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Scenario Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarios.map((scenario, i) => (
                      <ScenarioRow
                        onDelete={removeScenario}
                        key={scenario.id}
                        scenario={scenario}
                        i={i}
                      />
                    ))}
                  </tbody>
                </Table>
              );
            }}
          </Query>
        </Jumbotron>

        {loading ? null : (
          <Link to="/forms/scenario">
            <Icon
              className={styles.iconHover}
              color="primary"
              style={{ fontSize: 60 }}
            >
              add_circle
            </Icon>
          </Link>
        )}
      </$container>
    </React.Fragment>
  );
};

export { ScenarioList as default };
