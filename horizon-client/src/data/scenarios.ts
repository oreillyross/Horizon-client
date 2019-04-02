import gql from 'graphql-tag'

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



`