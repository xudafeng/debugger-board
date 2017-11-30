<template>
  <div>
    <div class="bar _debugger_board_logger_navbar">
      <div class="_debugger_board_logger_tip">
      </div>
      <div class="_debugger_board_logger_clear_btn" @click="clearAllLog">Clear</div>
    </div>
    <p v-for="item in log">{{ item }}</p>
  </div>
</template>

<script>

export default {
  name: 'logger',
  data() {
    return {
      log: []
    }
  },
  mounted() {
    window.addLog = this.addLog
  },
  methods: {
    addLog(log) {
      this.log.push(log)
    },
    clearAllLog() {
      this.log = []
    }
  }
}
</script>

<style lang="less" scoped>
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
      width: auto;
      display: inline-block;
    }
  }
</style>
