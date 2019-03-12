import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCurrentData } from './data/import'
import Header from './components/Header'
import ExportTable from './components/ExportTable'

console.log(getCurrentData())

function App( props ) {
  
  const [articles, setArticles] = useState(getCurrentData())  
  
  function refreshClick() {
    console.log('articles', articles)
    console.log('getCurrentData',getCurrentData())
    setArticles(getCurrentData())
  }
  
  
  return (
  <div className='App'>
    <Header refreshClick={refreshClick} />   
    <ExportTable articles={articles}/>
  </div>

  )
  
}

export default App;





