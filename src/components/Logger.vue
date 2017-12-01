<template>
  <div>
    <div class="_debugger_board_common_bar _debugger_board_logger_navbar">
      <div class="_debugger_board_logger_tip">
        <select v-model="logFilterType">
          <option v-for="(value, key) in options" v-bind:value="key">{{ key }}</option>
        </select>
      </div>
      <div class="_debugger_board_logger_clear_btn" @click="clearAllLog">Clear</div>
    </div>
    <div class="_debugger_board_logger_content">
      <p class="_debugger_board_logger_item" v-bind:style="{ color: options[item.type]['color'] }" v-for="item in logList" v-if="logFilterType === 'all' || logFilterType === item['type']">({{ item.time }}) {{ item.output }}</p>
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
  methods: {
    addLog(content, type = this.defaultType, indent = 0) {
      let logType = type;
      let logIndent = indent;
      if (!content) {
        console.error('Logger message couldn\'t be null');
        return;
      }
      logType = this.options[type] ? logType : this.defaultType;
      logIndent = this.indent >= 0 ? logIndent : 0;
      const date = new Date;
      this.logList.push({
        type: logType,
        output: JSON.stringify(content, null, logIndent),
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}\.${date.getMilliseconds()}`
      })
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

      select {
        height: 20px;
        margin-left: 5px;
      }
    }
  }

  ._debugger_board_logger_content {
    min-height: 2*@logger-line-height;

    ._debugger_board_logger_item {
      font-family: monaco;
      padding: 0 10px;
      word-break: break-word;
      border-bottom: @border-color @border-width solid;
      font-size: @logger-font-size;
      line-height: @logger-line-height;
    }
  }
</style>
