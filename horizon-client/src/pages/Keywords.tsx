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
  border: 1px solid DarkGreen;
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

const Keywords = () => {
    return (
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
    )
}

export default Keywords