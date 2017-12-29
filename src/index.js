'use strict';

import Vue from 'vue';
import VueTouch from 'vue-touch';

import Board from './Board.vue';

Vue.use(VueTouch);

window._debugger_board = window._debugger_board || {
  append(element) {
    const identifer = '_debugger_board';

    if (document.querySelector(`#${identifer}`)) {
      return;
    }
    const container = document.createElement('div');
    container.id = identifer;
    element.appendChild(container);

    new Vue({
      el: `#${identifer}`,
      render: h => h(Board)
    });
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
