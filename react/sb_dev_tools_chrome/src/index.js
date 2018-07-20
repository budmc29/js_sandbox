/*global chrome*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* eslint-disable no-undef */
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(
    tabs[0].id,
    { greeting: 'hello' },
    function (response) {
      console.log('do something')
      // do something with the response if you want.
    }
  );
});

ReactDOM.render(<App />, document.getElementById('root'));
