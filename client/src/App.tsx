import React from "react";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import FormComponent from "./components/Form";
import ListOfUsers from "./components/ListOfUsers";
import UpdatePasword from "./components/UpdatePasword";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div>
          <FormComponent />
          <ListOfUsers />
          <UpdatePasword />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
