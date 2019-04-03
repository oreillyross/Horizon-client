import * as React from "react";

const ScenariosList = ({ scenarios }) => {
  if (scenarios) {
    return scenarios.map(scenario => {
      return <div key={scenario.id}>{scenario.name}</div>;
    });
  }
};

export { ScenariosList as default };
