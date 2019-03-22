import * as React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Chip from '@material-ui/core/Chip';



const KEYWORDS = gql`
  query {
      keywords(orderBy: name_ASC ) {
          id
          name
      }
  }
`

const REMOVE_KEYWORD = gql`
  mutation removeKeyword($id: ID) {
    deleteKeyword(where: {id: $id}) {
    id
    name
  }
}
`

const StyledGrid = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 10px;

`

const StyledKeywords = styled.div`
  padding: 1.2em;

`


const Keyword = ({keyword}) => {

       const handleClick = (e) => {
           alert('clicked')
       }
       
       const handleDelete = (e) => {
           alert('deleted')
       }    
        
        return (
              <Mutation 
                mutation={REMOVE_KEYWORD}
                update={(cache, {data: {deleteKeyword}}) => {
                    const keywords = cache.readQuery({query: KEYWORDS})
                    const leftKeywords = keywords['keywords'].filter(k => k.id != deleteKeyword.id)
                    cache.writeQuery({query: KEYWORDS, data: {keywords: leftKeywords}})
                    
                    
                }}
              >
              {(removeKeyword) => {
                
                return <Chip
                
                label={keyword.name}
                onClick={handleClick}
                onDelete={() => removeKeyword({variables: {id: keyword.id}})}
                
              />    
              }}
              
              </Mutation>
        )
        
        }

const StyledTextBox = styled.div`
  margin: 10px;
  display: flex;
`
const StyledInput = styled.input`
  flex: 1;
  padding: .25em;
`

const ADD_KEYWORD = gql`
  mutation createKeyword($name: String) { 
  createKeyword(data: {name: $name}) {
    id
    name
  }
} 
`

const AddKeywordTextBox = () => {
    
    
    const [keyword, setKeyword] = React.useState('')
    
    return (
      <StyledTextBox>
        <Mutation 
          mutation={ADD_KEYWORD}
          update={(cache, {data: {createKeyword}}) => {
                    const keywords = cache.readQuery({query: KEYWORDS})
                    const newKeywords = keywords['keywords'].concat([createKeyword])
                    cache.writeQuery({query: KEYWORDS, data: {keywords: newKeywords}})
                }}
        
        >
        {(createKeyword, { data }) => {
            
            return (
              <StyledInput type='text' 
                         placeholder='Type here to add a keyword' 
                         value={keyword} 
                         onChange={e => setKeyword(e.target.value)}
                         onKeyDown={e => {
                             if (e.keyCode === 13) {
                                createKeyword({variables: {name: e.target.value}}) 
                                setKeyword('')
                             }
                         }
                             
                         }
            />
            )
        }}
            
        </Mutation>    
      </StyledTextBox>
      
    )
}

const Keywords = () => {
    return (
      <div>
      <AddKeywordTextBox />
      <StyledKeywords> 
          <StyledGrid columns='equal'>
            <Query query={KEYWORDS}>
              {({loading, error, data}) => {
                  if (loading) return <div> Loading .... </div>
                  if (error) return <div> Error :( </div>

                return data.keywords.map(keyword => {
                        return (
                          <div style={{textAlign: 'left'}} key={keyword.id}>
                            <Keyword keyword={keyword}/>
                          </div>
                        )
                    })

                  
              }}
            </Query>
          </StyledGrid>
      </StyledKeywords>
      </div>
    )
}

export default Keywords