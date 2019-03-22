import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ExportTable from '../components/ExportTable'

const ARTICLES = gql`
  query {
    articles(orderBy: date_DESC) {
      title
      description
      date
      href
      id
      read
    }
  }
`


const Articles = () => {
    
     const [articles, setArticles] = React.useState([
   {"title":"Politicians commemorate March 14 anniversary","description":"",
    "source":"Daily Star",
    "href":"https://www.dailystar.com.lb/News/Lebanon-News/2019/Mar-14/478808-politicians-mark-march-14-anniversary.ashx",
    "date":"2019-03-14T14:34:52.019Z",
    "id": "123456789" 
   } ])
  

  
  
  const remove = (id) => {
      
      const newArticles = articles.filter((o, i) => {
        return id != o.id
      })
      setArticles(newArticles)
     
  }
    
    
    return (
    
        <Query query={ARTICLES}>
      {({loading, error, data}) => {
       
        if (loading) return <div> Loading .... </div>
        if (error) return <div> Error :( </div>
        if (articles.length <= 1) {
          setArticles(data.articles)
        }
        
        return (
          <ExportTable articles={articles} onRemove={remove} />  

        )
      }}  
      
    
    </Query>      
        
    )
}

export default Articles