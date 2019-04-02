import * as React from 'react'
import { Query } from 'react-apollo'
import { SCENARIOS } from '../data/scenarios'

const ScenariosList = (props) => {
    
    const [scenarios, setScenarios] = React.useState([])
    
    return (
      <div>
      <Query query={SCENARIOS}>
      {({loading, error, data}) => {
        if (loading) return 'loading....'
        if (error) return 'error returning scenarios :('
        if (scenarios.length === 0) {
          setScenarios(data.scenarios)
        }
        console.log(scenarios)
        return <div>
                 {scenarios.map(scenario => {
                   return <div key={scenario.id}>{scenario.name}</div>
                 })}
               </div>
      }}
      </Query>
      </div>
    )
}

export {ScenariosList as default}