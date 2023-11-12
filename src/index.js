import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from 'src/router'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: 'https://wpe-hiring.tokopedia.net/graphql', 
    cache: new InMemoryCache({
      addTypename: false
    })
});


root.render(
  <BrowserRouter>
    <RecoilRoot>
      <React.StrictMode>
        <ApolloProvider client={client}>
          <Router />
        </ApolloProvider>
      </React.StrictMode>
    </RecoilRoot>
  </BrowserRouter>
);
reportWebVitals();
