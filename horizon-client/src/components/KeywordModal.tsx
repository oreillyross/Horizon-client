import * as React from 'react'
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components'
import Keywords from '../pages/Keywords'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Autosuggest from 'react-autosuggest';
import KeywordModalTheme from './KeywordModal.module.css'
import TextField from '@material-ui/core/TextField';

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
    
   const [value, setValue] = React.useState('')
   const [suggestions, setSuggestions] = React.useState([])  
   const [keywords, setKeywords] = React.useState([])
   
   const onSuggestionsFetchRequested = ({ value }) => {
      setSuggestions(getSuggestions(value))
    }
                
    const onSuggestionsClearRequested = () => {
      setSuggestions([])
    }
                
    const onChange = (event, { newValue }) => {
      setValue(newValue);
    };
    
    const getSuggestions = value => {
                  const inputValue = value.trim().toLowerCase()
                  const inputLength = inputValue.length
                  
                  return inputLength === 0 ? [] : keywords.filter(keyword => 
                  keyword.name.toLowerCase().slice(0, inputLength) === inputValue)
                }
    
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
                setKeywords(keywords)
                
                
                const getSuggestionValue = suggestion => suggestion.name;
                
                const renderSuggestion = suggestion => (
                  <div>
                   {suggestion.name}
                  </div>
                );
                
               
                const inputProps = {
                  placeholder: 'Type a keyword',
                  value,
                  onChange: onChange
                };
                
                const renderInputComponent = () => {
                  return (
                    <TextField
                      fullWidth
                    />
                    
                  )
                }
                
                return (
                  <div>
                    <Autosuggest
                      suggestions={suggestions}
                      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                      onSuggestionsClearRequested={onSuggestionsClearRequested}
                      getSuggestionValue={getSuggestionValue}
                      renderInputComponent={renderInputComponent}
                      renderSuggestion={renderSuggestion}
                      inputProps={inputProps}
                      theme={KeywordModalTheme}
                    >
                    </Autosuggest>
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