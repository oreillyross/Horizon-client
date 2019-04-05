import * as React from "react";
import ScenariosList from "../components/ScenariosList";
import ScenariosQuickAddForm from "../forms/ScenariosQuickAddForm";
import { Query } from "react-apollo";
import { SCENARIOS, ADD_SCENARIO } from "../data/scenarios";
import { Mutation } from "react-apollo";
import styles from "./Scenarios.module.css";
import { Button } from "reactstrap";

import { Route, Link } from "react-router-dom";

const Scenarios = () => {
  return (
    <div>
      <Query query={SCENARIOS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return "Error in fetching scenarios ... :(";
          return (
            <div>
              <div>
                <ScenariosList scenarios={data.scenarios} />
              </div>
              <Link to="/forms/scenario">
                <Button className={styles.btn__new}>Add new scenario</Button>
              </Link>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Scenarios;
