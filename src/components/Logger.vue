<template>
  <div>
    <div class="_debugger_board_common_bar _debugger_board_logger_navbar">
      <div class="_debugger_board_logger_tip">
        <span class="_debugger_board_common_btn" v-for="(value, key) in options" v-bind:class="{ actived: key === logFilterType }" @touchstart.prevent.stop="logFilterType = key" @touchmove.prevent.stop @touchend.prevent.stop>{{ key }}</span>
      </div>
      <div class="_debugger_board_common_btn _debugger_board_logger_clear_btn" @touchstartclear_btn.prevent.stop="clearAllLog" @touchmove.prevent.stop @touchend.prevent.stop>Clear</div>
    </div>
    <div class="_debugger_board_logger_content" ref="list">
      <p class="_debugger_board_logger_item" v-bind:style="{ color: options[item.type]['color'] }" v-for="item in logList" v-if="logFilterType === 'all' || logFilterType === item['type']">[{{ item.time }}] {{ item.output }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'logger',
  data() {
    return {
      logList: [],
      options: {
        all: {
          color: ''
        },
        success: {
          color: '#18A757'
        },
        info: {
          color: '#1f90e6'
        },
        warn: {
          color: '#FDBE2D'
        },
        error: {
          color: '#EE433B'
        }
      },
      defaultType: 'info',
      logFilterType: 'all'
    };
  },
  created() {
    window.addLog = this.addLog;
  },
  updated() {
    this.$nextTick(() => {
      const list = this.$refs.list;
      list.scrollTop = list.scrollHeight;
    });
  },
  methods: {
    addLog(content, type = this.defaultType, indent = 2) {
      if (!content) {
        console.error('Logger message couldn\'t be null');
        return;
      }
      const logType = this.options[type] ? type : this.defaultType;
      const logIndent = indent >= 0 ? indent : 2;
      const date = new Date();
      this.logList.push({
        type: logType,
        output: JSON.stringify(content, null, logIndent),
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}\.${date.getMilliseconds()}`
      });
    },
    clearAllLog() {
      this.logList = [];
    }
  }
};
</script>

<style lang="less" scoped>
  @import '../less/logger';
  @import '../less/common';
  @import '../less/components/bar';
  @import '../less/components/btn';

  .actived {
    color: black !important;
  }

  ._debugger_board_logger {
    &_navbar {
      text-align: right;
      border-bottom: @border-width @border-color solid;
    }

    &_clear_btn {
      border-left: @border-width @border-color solid;
    }

    &_tip {
      display: inline-block;
      float: left;
      color: grey;
    }

    &_content {
      min-height: 2*@logger-line-height;
      max-height: 10*@logger-line-height;
      overflow-y: scroll;
      opacity: 0.8;
    }

    &_content::-webkit-scrollbar {
      display:none
    }

    &_item {
      font-family: monaco;
      padding: 0 10px;
      word-break: break-word;
      white-space: pre-wrap;
      border-bottom: @border-color @border-width solid;
      font-size: @logger-font-size;
    }
  }
</style>
