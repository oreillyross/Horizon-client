import faker from "faker";
import moment from "moment";
import gql from "graphql-tag";



export const EVENTS = gql`
  query {
    events(orderBy: date_DESC) {
      id
      title
      description
      date
      href
      read
    }
  }
`;

export const REMOVE_EVENT = gql`
  mutation deleteEvent($id: ID!) {
    deleteEvent(where: { id: $id }) {
      id
      title
    }
  }
`;
