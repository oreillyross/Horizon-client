import gql from "graphql-tag";

export const SCENARIOS = gql`
  query scenarios {
    scenarios {
      id
      name
      description
      indicators {
        id
        name
        description
        keywords {
          id
          name
          description
        }
      }
    }
  }
`;

export const ADD_SCENARIO = gql`
  mutation createScenario($name: String) {
    createScenario(data: { name: $name }) {
      name
    }
  }
`;
