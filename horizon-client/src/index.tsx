import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-virtualized/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "react-apollo";
import { SchemaLink } from 'apollo-link-schema';
import ApolloClient from "apollo-boost";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEnvelopeOpen, faTags, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Router } from "react-router-dom"
import { createBrowserHistory  } from 'history'


// const executableSchema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });
// const link = new SchemaLink({ schema: executableSchema });

const history = createBrowserHistory()

library.add(faEnvelope, faEnvelopeOpen, faTags, faTrash)



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



