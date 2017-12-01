<template>
  <div v-bind:style="{ fontSize: devicePixelRatio }">
    <div class="_debugger_board_thumbnail" v-show="!ifBoardShow" @click="onClickHideOrShow">Show</div>
    <v-touch class="_debugger_board_main" v-bind:style="{ bottom: datahubBottom + 'px' }" v-show="ifBoardShow" v-on:panmove="onPanMove" v-on:panend="onPanEnd" v-bind:pan-options="{ direction: 'horizontal', threshold: 0 }">
      <div class="_debugger_board_nav _debugger_board_common_bar">
        <span class="_debugger_board_common_btn" v-for="item in componentlList" v-bind:class="{ actived: item === currentView }" @click="onClickToggleNav(item)">{{ item }}</span>
      </div>
      <Logger class="_debugger_board_content" v-show="currentView === 'Logger'">
      </Logger>
      <component v-bind:is="currentView === 'Logger' ? '' : currentView" class="_debugger_board_content">
      </component>
      <div class="_debugger_board_foot_bar _debugger_board_common_bar">
        <span class="_debugger_board_common_btn" @click="onClickRefresh">Refresh</span>
        <span class="_debugger_board_common_btn" @click="onClickHideOrShow">Hide</span>
      </div>
    </v-touch>
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
      currentView: 'DataHub',
      componentlList: [
        'DataHub',
        'Store',
        'Logger',
        'Network'
      ],
      datahubBottom: 0,
      temporarilyBottom: 0
    };
  },
  created() {
    this.devicePixelRatio = window.devicePixelRatio;
  },
  methods: {
    onClickRefresh() {
      window.location.reload();
    },
    onClickHideOrShow() {
      this.ifBoardShow = !this.ifBoardShow;
    },
    onClickToggleNav(componentName) {
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

  ._debugger_board_common_btn:active {
    background: @background-acitve-color !important;
  }

  ._debugger_board_nav {
    padding-top: @border-width;
    color: grey;
  }

  ._debugger_board_thumbnail {
    display: inline-block;
    position: fixed;
    bottom: 10px;
    right: 0px;
    width: 40px;
    height: 40px;
    background: @background-color;
    text-align: center;
    line-height: 40px;
    z-index: 9999999;
  }

  ._debugger_board_main {
    background: @background-color-light;
    width: 100%;
    position: fixed;
    z-index: 9999999;
  }

  ._debugger_board_content {
    min-height: 50px;
    width: 100%;
  }

  ._debugger_board_foot_bar {
    border-top: none;
    text-align: right;
  }
</style>
