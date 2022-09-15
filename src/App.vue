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
  min-height: 100%;
  background:url("./assets/bg3.gif") center center fixed no-repeat;
  background-size: 100% 100%;
  object-fit:cover;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
