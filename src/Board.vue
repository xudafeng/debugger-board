<template>
  <div v-bind:style="{ fontSize: devicePixelRatio }" id="_debugger_board_app" @touchstart.prevent.stop @touchmove.prevent.stop @touchend.prevent.stop>
    <div class="_debugger_board_thumbnail" v-show="!ifBoardShow" @touchstart="onTouchHideOrShow">D</div>
    <div class="_debugger_board_main" v-bind:style="{ bottom: datahubBottom + 'px' }" v-show="ifBoardShow">
      <v-touch class="_debugger_board_nav _debugger_board_common_bar" v-on:panstart="onPanStart" v-on:panmove="onPanMove" v-on:panend="onPanEnd" v-bind:pan-options="{ direction: 'horizontal', threshold: 0}">
        <span class="_debugger_board_common_btn" v-for="item in componentlList" v-bind:class="{ actived: item === currentView }" @touchstart="onTouchToggleNav(item)">{{ item }}</span>
      </v-touch>
      <Logger class="_debugger_board_content" v-show="currentView === 'Logger'">
      </Logger>
      <component v-bind:is="currentView === 'Logger' ? '' : currentView" class="_debugger_board_content">
      </component>
      <v-touch class="_debugger_board_foot_bar _debugger_board_common_bar" v-on:panstart="onPanStart" v-on:panmove="onPanMove" v-on:panend="onPanEnd" v-bind:pan-options="{ direction: 'horizontal', threshold: 0}">
        <span class="_debugger_board_version">{{ version }}</span>
        <span class="_debugger_board_common_btn" @touchstart="onTouchRefresh">Refresh</span>
        <span class="_debugger_board_common_btn" @touchstart="onTouchHideOrShow">Hide</span>
      </v-touch>
    </div>
  </div>
</template>

<script>

import Store from './components/Store';
import Logger from './components/Logger';
import Datahub from './components/Datahub';
import Network from './components/Network';

export default {
  name: 'board',
  data() {
    return {
      ifBoardShow: true,
      devicePixelRatio: 2,
      currentView: 'Logger',
      componentlList: [
        'Logger',
        'DataHub',
        'Store',
        'Network'
      ],
      datahubBottom: 0,
      temporarilyBottom: 0,
      version: window._debugger_board.version
    };
  },
  created() {
    this.devicePixelRatio = window.devicePixelRatio;
  },
  methods: {
    onTouchRefresh() {
      window.location.reload();
    },
    onTouchHideOrShow() {
      this.ifBoardShow = !this.ifBoardShow;
    },
    onTouchToggleNav(componentName) {
      this.currentView = componentName;
    },
    onPanMove(e) {
      this.datahubBottom = this.temporarilyBottom - e.deltaY;
    },
    onPanEnd(e) {
      this.temporarilyBottom = this.datahubBottom;
    }
  },
  components: {
    DataHub: Datahub,
    Store: Store,
    Network: Network,
    Logger: Logger
  }
};
</script>

<style lang="less" scoped>
  @import './less/common';
  @import './less/components/bar';
  @import './less/components/btn';

  .actived {
    color: black;
    border-bottom: @border-width orange solid;
  }

  ._debugger_board {
    &_thumbnail {
      display: inline-block;
      position: fixed;
      bottom: 20px;
      right: 0px;
      width: 5vmin;
      height: 5vmin;
      background: @background-color;
      font-size: 4vmin;
      text-align: center;
      line-height: 5vmin;
      z-index: 9999999;
    }

    &_main {
      background: @background-color-light;
      width: 100%;
      position: fixed;
      z-index: 9999999;
    }

    &_common_btn:active {
      background: @background-color !important;
    }

    &_nav {
      padding-top: @border-width;
      color: grey;
    }

    &_content {
      min-height: 50px;
      width: 100%;
    }

    &_foot_bar {
      border-top: none;
      text-align: right;
    }

    &_version {
      position: absolute;
      color: lightgrey;
      bottom: 2px;
      left: 2px;
    }
  }
</style>
