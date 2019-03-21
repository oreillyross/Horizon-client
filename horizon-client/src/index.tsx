import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-virtualized/styles.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { Router } from "react-router-dom"
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

library.add(faEnvelope, faEnvelopeOpen)



const client = new ApolloClient({
  uri: "https://horizon-server-oreillyross.c9users.io/"
});

ReactDOM.render(<Router history={history}><ApolloProvider client={client}>
                  <App />
                </ApolloProvider>  
                </Router>
                  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



