import * as React from "react";
import ScenariosList from "../components/ScenariosList";
import ScenariosQuickAddForm from "../forms/ScenariosQuickAddForm";
import { Query } from "react-apollo";
import { SCENARIOS, ADD_SCENARIO } from "../data/scenarios";
import { Mutation } from "react-apollo";

const Scenarios = () => {
  const [scenarios, setScenarios] = React.useState([]);

  const doMutate = (e, createScenario, data) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      console.log(data);
    }
  };

  return (
    <div>
      <Query query={SCENARIOS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return "Error in fetching scenarios ... :(";
          if (scenarios.length === 0) {
            setScenarios(data.scenarios);
          }
          return (
            <div>
              <div>
                <ScenariosList scenarios={scenarios} />
              </div>
              <div>
                <Mutation
                  mutation={ADD_SCENARIO}
                  update={(cache, { data: { createScenario } }) => {
                    const apollo_scenarios = cache.readQuery({
                      query: SCENARIOS
                    });
                    cache.writeQuery({
                      query: SCENARIOS,
                      data: { scenarios: scenarios.concat([createScenario]) }
                    });
                  }}
                >
                  {(createScenario, { data }) => {
                    return (
                      <ScenariosQuickAddForm
                        doMutate={e => {
                          if (e.key === "Enter") {
                            const addedScenario = createScenario({
                              variables: { name: e.target.value }
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
    </div>
  );
};

export default Scenarios;
