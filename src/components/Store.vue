<template>
  <div class="_debugger_board_store_table">
    <div class="_debugger_board_common_bar">
      <span class="_debugger_board_common_btn" @click="onClickTabPage(0)">LocalStorage</span>
      <span class="_debugger_board_common_btn" @click="onClickTabPage(1)">Cookie</span>
      <span class="_debugger_board_common_btn" @click="updateData">UpdateStore</span>
    </div>
    <table>
      <tr>
        <th><strong> key </strong> </th>
        <th><strong> value </strong></th>
      </tr>
      <tr v-for="(value, key) in currentStorage">
        <td>{{ key }}</td>
        <td>{{ value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'store',
  data() {
    return {
      tabPage: 0,
      localStorage: null,
      cookie: null,
      navList: [
        'LocalStorage',
        'Cookie',
        'UpdateStore'
      ]
    };
  },
  computed: {
    currentStorage: function() {
      this.updateData();
      return [
        this.localStorage,
        this.cookie
      ][this.tabPage];
    }
  },
  created() {
    this.localStorage = window.localStorage;
    this.cookie = this.pathCookie(window.document.cookie);
  },
  methods: {
    onClickTabPage(tabPage) {
      this.tabPage = tabPage;
    },
    updateData() {
      this.localStorage = window.localStorage;
      this.cookie = this.pathCookie(window.document.cookie);
    },
    pathCookie(cookie) {
      const cookieObject = {};
      if (cookie && cookie.length) {
        cookie.split(';').map(item => {
          const everyItem = item.split('=');
          cookieObject[everyItem[0]] = everyItem[1];
        });
      }
      return cookieObject;
    }
  }
};
</script>

<style lang="less" scoped>
  @import '../less/common';
  @import '../less/components/bar';
  @import '../less/components/btn';

  ._debugger_board_store_table>* {
    width: 100%;
  }

  table {
    border-collapse: collapse;
    text-align: left;
  }

  th, td {
    font-weight: light ;
    border: 1px solid #cad9ea;
    padding: 3px 5px;
  }
</style>
