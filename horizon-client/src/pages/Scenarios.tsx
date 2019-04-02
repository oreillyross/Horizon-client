import * as React from 'react'
import ScenariosList from '../components/ScenariosList'
import ScenariosQuickAddForm from '../forms/ScenariosQuickAddForm'

const Scenarios = () => {
    return (
      <div>
        <div> 
         <ScenariosList/> 
        </div>
        <div>
          <ScenariosQuickAddForm/>  
        </div>
      </div>
      
    )
}

export default Scenarios