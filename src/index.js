'use strict';

import Vue from 'vue';
import VueTouch from 'vue-touch';

import Board from './Board.vue';

Vue.use(VueTouch);

new Vue({
  el: '#_debugger_board',
  render: h => h(Board)
});

