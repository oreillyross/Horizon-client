import * as React from 'react'
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components'


const StyledModal = styled.div`
    width: 50%;
	height: 50%;
	padding: 15px;
	background-color: teal;
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
  	outline: black;
	margin: auto;
	box-shadow: 5px 10px;
	text-align: center;
`

const StyledInnerModal = styled.div`
  border: 1px solid darkslategray;
  background-color: white;
  height: 60%;
  padding: 20px;
   
`

const KeywordModal = ({openState, handleClose, modalArticle}) => {
    
    
   return (
      <Modal
        open={openState}
        onClose={handleClose}
      >
        <StyledModal>
          <h3 style={{textDecoration: 'underline', color: 'white'}}> 
            {modalArticle.title}
          </h3>
          <StyledInnerModal>
              {(modalArticle.keywords && modalArticle.keywords.length > 0) ? <h4> Keywords </h4> : null}
              {(modalArticle.keywords) ? 
                  
                  modalArticle.keywords.map(keyword => <div key={keyword.id}> {keyword.name} </div>) 
                : null
              }
              Available Keywords
              
          </StyledInnerModal>
        </StyledModal>
      </Modal>
    )
}

export default KeywordModal