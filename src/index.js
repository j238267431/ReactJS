import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import { Message } from './message/Message'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Message message={'message from index.js'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

