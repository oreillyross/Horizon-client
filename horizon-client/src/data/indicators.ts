import gql from "graphql-tag";

export const ADD_INDICATOR = gql`
  mutation createIndicator($name: String, $description: String) {
    createIndicator(data: { name: $name, description: $description }) {
      id
      name
      description
    }
  }
`;

export const INDICATORS = gql`
  query indicators($order: IndicatorOrderByInput) {
    indicators(orderBy: $order) {
      id
      name
      description
    }
  }
`;

export const DELETE_INDICATOR = gql`
  mutation deleteIndicator($id: ID!) {
    deleteIndicator(where: { id: $id }) {
      id
      name
    }
  }
`;
