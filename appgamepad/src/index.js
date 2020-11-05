import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AppGamePad from './components/AppGamePad';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <AppGamePad/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
