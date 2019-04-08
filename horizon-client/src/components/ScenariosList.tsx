import * as React from "react";
import { DELETE_SCENARIO, SCENARIOS } from "../data/scenarios";
import { Mutation } from "react-apollo";
import { Col, Row, Container, Button } from "reactstrap";
import styles from "./ScenariosList.module.css";
import { Link } from "react-router-dom";
import Scenario from "./Scenario";

const ScenariosList = ({ scenarios }) => {
  return scenarios.map(scenario => {
    return (
      <div key={scenario.id}>
        <Scenario scenario={scenario} />
      </div>
    );
  });
};

export { ScenariosList as default };
