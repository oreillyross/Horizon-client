import * as React from "react";
import ScenariosList from "../components/ScenariosList";
import ScenariosQuickAddForm from "../forms/ScenariosQuickAddForm";
import { Query } from "react-apollo";
import { SCENARIOS, ADD_SCENARIO } from "../data/scenarios";
import { Mutation } from "react-apollo";

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
              <div>
                <Mutation mutation={ADD_SCENARIO}>
                  {(createScenario, { data }) => {
                    return (
                      <ScenariosQuickAddForm
                        doMutate={e => {
                          if (e.key === "Enter") {
                            const addedScenario = createScenario({
                              variables: { name: e.target.value },
                              optimisticResponse: {
                                __typename: "Mutation",
                                createScenario: {
                                  __typename: "Scenario",
                                  name: e.target.value
                                }
                              },
                              update: (cache, { data: { createScenario } }) => {
                                const cachedScenarios = cache.readQuery({
                                  query: SCENARIOS
                                });
                                console.log(cachedScenarios);
                              }
                            });
                          }
                        }}
                      />
                    );
                  }}
                </Mutation>
              </div>
            </div>
          );
        }}
      </Query>
      <Link to="/forms/scenario">
        <button>New Scenario</button>
      </Link>
    </div>
  );
};

export default Scenarios;
