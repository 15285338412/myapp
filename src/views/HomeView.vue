<template>
  <div class="nav">
    <header>
      <h1>数据大屏--vue3</h1>
    </header>
  </div>
  <section class="container">
    <section class="item-left">
      <ItemPage>
        <ItemOne></ItemOne>
      </ItemPage>
      <ItemPage>
        <ItemTwo></ItemTwo>
      </ItemPage>
    </section>
    <section class="item-center">中</section>
    <section class="item-right">
      <ItemPage>
        <ItemThree></ItemThree>
      </ItemPage>
      <ItemPage>
        <ItemFour></ItemFour>
      </ItemPage>
    </section>
  </section>
</template>

<script>
import ItemPage from "../components/Item-Page.vue";
import ItemOne from "../components/ItemOne.vue";
import ItemTwo from "../components/ItemTwo.vue";
import ItemThree from "../components/ItemThree.vue";
import ItemFour from "../components/ItemFour.vue";
export default {
  name: "HomeView",
  components: {
    ItemPage,
    ItemOne,
    ItemTwo,
    ItemThree,
    ItemFour,
  },
};
</script>
<style lang="less" scoped>
.nav {
  header {
    background: rgba(9, 9, 33, 0.2);
    height: 1rem;
    h1 {
      font-size: 0.455rem;
      height: 1rem;
      line-height: 1rem;
      color: white;
      text-align: center;
    }
  }
}
.container {
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  display: flex;
  .item-left,
  .item-right {
    flex: 3;
  }
  .item-center {
    flex: 5;
    height: 10.5rpx;
    border: 1px solid blue;
    padding: 0.125rem;
    margin: 0.25rem;
  }
}
</style>
