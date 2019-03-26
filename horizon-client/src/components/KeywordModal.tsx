import * as React from 'react'
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components'
import Keywords from '../pages/Keywords'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Autosuggest from 'react-autosuggest';

const KEYWORDS = gql`
  query {
      keywords(orderBy: name_ASC ) {
          id
          name
      }
  }
`

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
           <Query query={KEYWORDS}>
            {({loading, error, data}) => {
                if (loading) return null
                if (error) console.error(error)
                const keywords = data.keywords
                
                
                console.log(keywords)
                
                
                
                
                
                
                
                
                return (
                  <div>
                    
                  </div>
                )
                
              }}     
            </Query>
          <StyledInnerModal>
             
              <h2>Keywords</h2>
             
          </StyledInnerModal>
          
        </StyledModal>
      </Modal>
    )
}

export default KeywordModal