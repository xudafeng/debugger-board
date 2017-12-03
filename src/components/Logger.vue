<template>
  <div>
    <div class="_debugger_board_common_bar _debugger_board_logger_navbar">
      <div class="_debugger_board_logger_tip">
        <span class="_debugger_board_logger_filter_btn" v-for="(value, key) in options" v-bind:class="{ actived: key === logFilterType }" @click="logFilterType = key">{{ key }}</span>
      </div>
      <div class="_debugger_board_logger_clear_btn" @click="clearAllLog">Clear</div>
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

  ._debugger_board_logger_navbar {
    text-align: right;
    border-bottom: @border-width @border-color solid;

    ._debugger_board_logger_clear_btn {
      display: inline-block;
      width: 40px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      border-left: @border-width @border-color solid;
    }

    ._debugger_board_logger_clear_btn:active {
      background: @background-acitve-color;
    }

    ._debugger_board_logger_tip {
      display: inline-block;
      float: left;
      color: grey;

      span {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        margin: 0 5px;
      }
    }
  }

  ._debugger_board_logger_content {
    min-height: 2*@logger-line-height;
    max-height: 10*@logger-line-height;
    overflow-y: scroll;
    opacity: 0.8;

    ._debugger_board_logger_item {
      font-family: monaco;
      padding: 0 10px;
      word-break: break-word;
      white-space: pre-wrap;
      border-bottom: @border-color @border-width solid;
      font-size: @logger-font-size;
    }
  }

  ._debugger_board_logger_content::-webkit-scrollbar {
    display:none
  }
</style>
