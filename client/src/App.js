import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

import Detail from './components/Detail';
import NoMatch from './components/NoMatch';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext(( _, { headers } ) => {
  const token = localStorage.getItem( "id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Welcome />
        <Switch>
          <Route exact path='/' component={Resume} />
          <Route exact path='/saved' component={Home} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
        <StoreProvider>
            <Switch>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/success" 
                element={<Success />} 
              />
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
              <Route 
                path="/products/:id" 
                element={<Detail />} 
              />
              <Route
                path="*" 
                element={<NoMatch />} 
              />
            </Switch>
          </StoreProvider>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
