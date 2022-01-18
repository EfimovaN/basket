import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './index.css';
import App from './Components/App/App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, document.getElementById('root')
);

