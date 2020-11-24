'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import Drawer from './Drawer.jsx';

window._debugger_board = window._debugger_board || {
  append(element) {
    const identifer = '_debugger_board';
    if (document.querySelector(`#${identifer}`)) {
      return;
    }
    const button = document.createElement('div');
    button.id = identifer;
    element.appendChild(button);
    ReactDOM.render(<App/>, button);
    const drawer = document.createElement('div');
    drawer.id = `${identifer}_drawer`;
    element.appendChild(drawer);
    ReactDOM.render(<Drawer/>, drawer);
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
