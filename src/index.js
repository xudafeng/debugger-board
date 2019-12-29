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
    window[`${identifer}_button_ref`] = React.createRef();
    window[`${identifer}_drawer_ref`] = React.createRef();
    ReactDOM.render(<App ref={ele => { window[`${identifer}_button_ref`] = ele}} />, button);
    const drawer = document.createElement('div');
    drawer.id = `${identifer}_drawer`;
    element.appendChild(drawer);
    ReactDOM.render(<Drawer ref={ele => { window[`${identifer}_drawer_ref`] = ele}} />, drawer);
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
