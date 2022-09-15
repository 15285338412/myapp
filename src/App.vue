<template>
  <router-view />
</template>
<script>
import * as echarts from "echarts";
import { provide } from "@vue/runtime-core";
export default {
  setup() {
    provide("echarts", echarts);
  },
};
</script>
<style>
body {
  background: url("./assets/bg3.gif") top center no-repeat;
  background-size: 100% 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
