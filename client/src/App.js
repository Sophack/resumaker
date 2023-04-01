import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Resume from "./pages/Resume";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // function handleMakeAResume() {
  //   <Link to="/resume">
  //     <Button id="welcome-button">Make a resume!</Button>
  //   </Link>;
  // }

  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Welcome />
          <Switch>
            <Route path="" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
