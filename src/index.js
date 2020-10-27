import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { ShowcaseProvider } from './context';
import { DisplayProvider } from './context1';




ReactDOM.render(
  <ShowcaseProvider>
    <DisplayProvider>   
      <Router>       
        <App />
      </Router>
    </DisplayProvider> 
  </ShowcaseProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();


