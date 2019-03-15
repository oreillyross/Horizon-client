import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ExportTable from './components/ExportTable'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'



const ARTICLES = gql`
  query {
    articles {
      title
      description
      date
      href
      id
    }
  }
`

function App( props ) {
  
  
 const [articles, setArticles] = useState([
   {"title":"Politicians commemorate March 14 anniversary","description":"",
    "source":"Daily Star",
    "href":"https://www.dailystar.com.lb/News/Lebanon-News/2019/Mar-14/478808-politicians-mark-march-14-anniversary.ashx",
    "date":"2019-03-14T14:34:52.019Z",
    "id": "123456789" 
   } ])
  

  const refreshClick = (e) => {
    console.log('clicked refresh')
  }
  
  const remove = (id) => {
      console.log(articles.length)
      const newArticles = articles.filter((o, i) => {
        return id != o.id
      })
      setArticles(newArticles)
      console.log(newArticles.length)
  }
  
  return (
  <div className='App'>
    <Header refreshClick={refreshClick} />   
    <Query query={ARTICLES}>
      {({loading, error, data}) => {
       
        if (loading) return <div> Loading .... </div>
        if (error) return <div> Error :( </div>
        if (articles.length <= 1) {
          setArticles(data.articles)
        }
        
        return <ExportTable articles={articles} onRemove={remove}/>  
      }}  
      
    
    </Query>  
  </div>

  )
  
}

export default App;





