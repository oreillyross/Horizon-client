import * as React from "react";
import { DELETE_SCENARIO, SCENARIOS } from "../data/scenarios";
import { Mutation } from "react-apollo";
import { Col, Row, Container, Button } from "reactstrap";
import styles from "./ScenariosList.module.css";
import { Link } from "react-router-dom";

const ScenariosList = ({ scenarios }) => {
  return scenarios.map(scenario => {
    const updateLink = `forms/scenario/${scenario.id}`;

    return (
      <div key={scenario.id}>
        <Mutation mutation={DELETE_SCENARIO}>
          {deleteScenario => {
            return (
              <Container className={styles.container}>
                <Row>
                  <Col className={styles.scenario__row} xs="6">
                    {scenario.name}
                  </Col>
                  <Col className={styles.scenario__delete} xs="5">
                    <Button>
                      <Link className={styles.link} to={updateLink}>
                        update
                      </Link>
                    </Button>
                    &nbsp;
                    <Button
                      onClick={() => {
                        deleteScenario({
                          update: (proxy, { data }) => {
                            const scenarios: any = proxy.readQuery({
                              query: SCENARIOS
                            });
                            const newScenarios = scenarios.scenarios.filter(
                              s => scenario.id !== s.id
                            );
                            proxy.writeQuery({
                              query: SCENARIOS,
                              data: { scenarios: newScenarios }
                            });
                          },
                          variables: { id: scenario.id }
                        });
                      }}
                    >
                      delete
                    </Button>
                  </Col>
                </Row>
              </Container>
            );
          }}
        </Mutation>
      </div>
    );
  });
};

export { ScenariosList as default };
