import * as React from 'react'
import styled from 'styled-components'



const StyledSubHeader = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin-top: 10px;
  text-align: left;
`

const SubHeader = () => {
    return (
      <StyledSubHeader>
        Home    /    Scenarios    /    Indicators    /    Articles    /    Keywords 
        
      </StyledSubHeader>
    )
}

export default SubHeader

