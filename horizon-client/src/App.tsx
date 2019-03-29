import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import  SubHeader  from './components/SubHeader'
import Scenarios from './pages/Scenarios'
import Articles from './pages/Articles'
import NotFound from './pages/NotFound'
import Keywords from './pages/Keywords'
import { Route, Switch } from 'react-router-dom'  
import TextAutoComplete from './components/TextAutoComplete'

const keywords = [
  {name: 'apple'},
  {name: 'pear'},
  {name: 'orange'},
  {name: 'grape'},
  {name: 'banana'},
]


function App( props ) {
  
  

  
  return (
  <div className='App'>
    <Header  />   
    <SubHeader />
    <Switch>
      <Route exact path='/' render={(props) => <TextAutoComplete  {...props} suggestedItems={keywords}/>} />
      <Route path='/scenarios' component={Scenarios} />
      <Route path='/articles' component={Articles} />
      <Route path='/keywords' component={Keywords} />
      <Route component={NotFound} />
    </Switch>  

  </div>

  )
  
}

export default App;





