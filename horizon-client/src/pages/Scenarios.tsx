import * as React from "react";
import ScenariosList from "../components/ScenariosList";
import ScenariosQuickAddForm from "../forms/ScenariosQuickAddForm";
import { Query } from "react-apollo";
import { SCENARIOS, ADD_SCENARIO } from "../data/scenarios";
import { Mutation } from "react-apollo";
import styles from "./Scenarios.module.css";
import { Button } from "reactstrap";
import ScenarioDataHandler from "../data/ScenarioDataHandler";

import { Route, Link } from "react-router-dom";

const Scenarios = () => {
  return (
    <div>
      <ScenarioDataHandler />
    </div>
  );
};

export default Scenarios;
