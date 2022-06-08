import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_URL || 'http://localhost:3001'

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN_AUTH0}
    clientId={process.env.REACT_APP_CLIENT_ID_AUTH0}
    redirectUri={process.env.REACT_APP_REDIRECT_URI}
  >
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </Auth0Provider>,

  document.getElementById('root')
);

reportWebVitals();
