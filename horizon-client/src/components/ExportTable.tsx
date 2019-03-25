import React, {useState} from 'react'
import XLSX from 'xlsx'
import  styled  from 'styled-components'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import './ExportTable.css'
import KeywordModal from './KeywordModal'

const writeTheFile = () => {
  let table = document.querySelector('#article_table')
  let wb = XLSX.utils.table_to_book(table)
  XLSX.writeFile(wb, 'articles.xlsx')
  
}

const UPDATE_READ = gql`
  mutation updateread($read: Boolean, $id: ID) {
  updateArticle(where: {id: $id}, data: {read: $read} ) {
    id
    read
  }
}
`

const DELETE_ARTICLE = gql`
  mutation deleteArticle($id: ID) {
   deleteArticle(where: {id: $id}) {
    id
    title
  }
}
`

const StyledTags = styled.div`
  margin-top: 0.5em;
  text-align: center;
`

const ArticleRow = ({article, onRemove, onTagModal}) => {
  
  const [read, setToggle] = useState(article.read) 
  
  const toggleRead = (id) => {
    setToggle(!read)
  }
  
  const readIcon = (read) ? 'envelope-open' : 'envelope'
  const readColor = (read) ? 'SlateBlue' : 'SteelBlue'
  
  return (
    
    <tr className='border_bottom' key={article.id}> 
          <td>
          <Mutation mutation={UPDATE_READ}>
            {(updateRead, {data})=> {
              return (
                <span style={{padding: '8px'}} onClick={() => {
                  toggleRead(!read)
                  updateRead({variables: {id: article.id, read: !read }})
                  
                }}>
                  <FontAwesomeIcon icon={readIcon} style={{color: readColor}}/>
                </span>  
            )
            }}
            
          </Mutation>  
          </td>
          <td style={{width: '12%'}}> {(article.date) ? moment(article.date).format('LLL') : new Date().toUTCString()}</td>
          <td style={{width: '30%', valign: 'top'}}> {article.title}</td>
          <td style={{width: '50%'}}> {article.description}</td>
          <td style={{width: '4%'}}> {article.href}</td>
          <td>
            <div>
              <Mutation mutation={DELETE_ARTICLE}>
                {(deleteArticle, { data }) => {
                  return (  <span onClick={() => {
                    deleteArticle({variables: {id: article.id}})
                    onRemove(article.id)  
                  }}>
                               <FontAwesomeIcon icon='trash' />
                            </span>  
                          )
                }}
                
              </Mutation>  
                
            </div>
            <StyledTags>
              <span onClick={() => onTagModal(article)}>
                <FontAwesomeIcon icon='tags' />
              </span>  
            </StyledTags>
          </td>
    </tr>  
  )
}


const ExportTable = ({articles, onRemove}) => {
  
  const [modalOpen, setModalOpen] = React.useState(false)
  const [modalArticle, setModalArticle] = React.useState({})
   
  const openModal = (article) => {
    setModalArticle(article)
    setModalOpen(true)
  }
  
  const closeModal = () => {
    setModalOpen(false)
  }
  

  
  return (
      <div style={{paddingTop: '2em'}}>
        <KeywordModal modalArticle={modalArticle} openState={modalOpen} handleClose={closeModal}/>
        <table id='article_table'>
        <tbody>
        <tr style={{textAlign: 'left'}}>
          <th>Read</th>
          <th>Date</th>
          <th>Title</th>
          <th> Description </th>
          <th> Hyperlink </th>
        </tr>
        
       {articles.map(a => {
        
         return (
           (<ArticleRow key={a.id} onRemove={onRemove} article={a} onTagModal={openModal} />))}
         )
       }
       
       
        
        </tbody>
        </table>
      <div> 
      <button onClick={writeTheFile}>Export Data</button> 
      </div>
      </div>
      
    );
}

export default ExportTable