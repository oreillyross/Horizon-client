import * as React from 'react'
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components'

const StyledModal = styled.div`
   position: 'absolute';
   width: 200px;
   backgroundColor: Seashell;
   padding: 10px;
   outline: 'none';
`

const KeywordModal = () => {
    return (
      <Modal
        open={false}
      >
        <StyledModal>
          text in a modal
        </StyledModal>
      </Modal>
    )
}

export default KeywordModal