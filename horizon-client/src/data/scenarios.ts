import gql from "graphql-tag";

export const SCENARIOS = gql`
  query scenarios {
    scenarios {
      id
      name
      description
    }
  }
`;

export const SCENARIO_BY_ID = gql`
  query scenarios($id: ID) {
    scenarios(where: { id: $id }) {
      id
      name
      description
    }
  }
`;

export const ADD_SCENARIO = gql`
  mutation createScenario($name: String, $description: String) {
    createScenario(data: { name: $name, description: $description }) {
      id
      name
      description
    }
  }
`;

export const DELETE_SCENARIO = gql`
  mutation deleteScenario($id: ID) {
    deleteScenario(where: { id: $id }) {
      id
      name
      description
    }
  }
`;
export const UPDATE_SCENARIO = gql`
  mutation updateScenario($id: ID, $name: String, $description: String) {
    updateScenario(
      where: { id: $id }
      data: { name: $name, description: $description }
    ) {
      id
      name
      description
    }
  }
`;
