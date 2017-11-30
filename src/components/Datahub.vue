<template>
  <table>
    <tr>
      <th><strong>router</strong></th>
      <th><strong>hub</strong></th>
      <th><strong>host</strong></th>
    </tr>
    <tr v-for="item in list">
      <td>{{ item.router }}</td>
      <td>{{ item.hub }}</td>
      <td>
        <a :href="`http://${ item.hostname }:${ item.port }/project/${ item.hub }`" target="_blank">
          {{ item.hostname }}:{{ item.port }}
        </a>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'datahub',
  data() {
    return {
      list: window._debugger_board_datahub || []
    };
  }
};
</script>

<style lang="less" scoped>
  @import '../less/common';
  @import '../less/components/bar';
  @import '../less/components/btn';

  table {
    border-collapse: collapse;
    text-align: left;
  }

  th, td {
    font-weight: light;
    font-size: 10px;
    border: 1px solid #cad9ea;
    padding: 1px 2px;
  }
</style>
