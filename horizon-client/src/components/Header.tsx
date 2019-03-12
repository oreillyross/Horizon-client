import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  color: Olive;
  padding-bottom: '3px'
`

const Header = ({refreshClick}) => (
    <div>
    <StyledHeader>
      Horizon
    </StyledHeader>
    <button style={{float: 'right'}} onClick={refreshClick}>Refresh</button>
    </div>
    )
    
export default Header    