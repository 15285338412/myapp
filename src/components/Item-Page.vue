<template>
  <div class="item">
    <!-- 设置插槽 -->
    <slot></slot>
  </div>
</template>
  <script>
export default {
  name: "ItemPage",
};
</script>

  <style lang="less">
.item {
  height: 5.125rem;
  margin: 0.25rem;
 background: url("../assets/bg4.png") top center no-repeat;
}
</style>
