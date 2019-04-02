import * as React from 'react'
import { Input } from 'reactstrap'

const ScenariosQuickAddForm = (props) => {
    
    const [value, setValue] = React.useState('')
    
    const submit = (e) => {
        if (e.key === 'Enter')
          console.log(e.target.value)
          
    }
    return ( <div>
               <Input value={value} 
                      type="text" 
                      name="name" 
                      id="name" 
                      placeholder="give your scenario a title" 
                      onChange={(e) => setValue(e.target.value)}
                      onKeyPress={submit}
                />
             </div>
           )
}

export default ScenariosQuickAddForm