import * as React from "react";
import { DELETE_SCENARIO, SCENARIOS } from "../data/scenarios";
import { Mutation } from "react-apollo";
import { Col, Row, Container, Button } from "reactstrap";
import styles from "./ScenariosList.module.css";
import ScenarioForm from "../forms/ScenarioForm";

const Scenario = ({ scenario }) => {
  const [editing, setEditStatus] = React.useState(false);

  const onClick = () => {
    setEditStatus(true);
  };

  if (editing) {
    return <ScenarioForm history={history} scenario={scenario} />;
  } else {
    return (
      <Mutation mutation={DELETE_SCENARIO}>
        {deleteScenario => {
          return (
            <Container className={styles.container}>
              <Row>
                <Col className={styles.scenario__row} xs="6">
                  {scenario.name}
                </Col>
                <Col className={styles.scenario__delete} xs="5">
                  {!editing && <Button onClick={onClick}>Update</Button>}
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
    );
  }
};

export { Scenario as default };
