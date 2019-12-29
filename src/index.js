'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

window._debugger_board = window._debugger_board || {
  append(element) {
    const identifer = '_debugger_board';
    if (document.querySelector(`#${identifer}`)) {
      return;
    }
    const container = document.createElement('div');
    container.id = identifer;
    element.appendChild(container);
    ReactDOM.render(<App />, container);
  },
  /* eslint-disable */
  version: VERSION
  /* eslint-enable */
};

const script = document.querySelector('script[append]');

if (script) {
  const appendName = script.getAttribute('append').trim();
  const appendContainer = document.querySelector(appendName);
  if (appendContainer) {
    window._debugger_board.append(appendContainer);
  }
}
