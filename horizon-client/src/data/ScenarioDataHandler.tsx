import * as React from "react";
import { SCENARIOS, ADD_SCENARIO, DELETE_SCENARIO } from "./scenarios";
import { Query, Mutation } from "react-apollo";
import ScenariosList from "../components/ScenariosList";
import ScenarioAddButton from "../components/ScenarioAddButton";
import ScenarioForm from "../forms/ScenarioForm";
import { Route, Link } from "react-router-dom";

const ScenarioDataHandler = props => {
  return (
    <React.Fragment>
      <Query query={SCENARIOS}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return <div>Error :(</div>;

          return (
            <div>
              <Route
                path="/scenarios"
                render={() => (
                  <React.Fragment>
                    <ScenariosList scenarios={data.scenarios} />
                    <Link to="/forms/scenario">
                      <ScenarioAddButton />
                    </Link>
                  </React.Fragment>
                )}
              />
              <Route
                path="/forms/scenario/:id"
                render={props => {
                  return <ScenarioForm {...props} />;
                }}
              />
            </div>
          );
        }}
      </Query>
    </React.Fragment>
  );
};

export default ScenarioDataHandler;
