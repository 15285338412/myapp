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
  border: 1px solid rgb(38, 38, 75);
  margin: 0.25rem;
  background-color: rgba(182, 195, 206, 0.85);
}
</style>