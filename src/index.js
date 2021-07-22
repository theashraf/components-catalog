import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Catalog from './Catalog';

const { REACT_APP_TARGET } = process.env;

ReactDOM.render(
  <React.StrictMode>
    {REACT_APP_TARGET === 'catalog' ? <Catalog /> : <App />}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
