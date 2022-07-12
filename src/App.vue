<template>
  <!-- 导航栏 -->
  <Navigator />

  <!-- 购物车 -->
  <Tip />

  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
import Navigator from "./components/Navigator.vue";
import Tip from "./components/Tip.vue";

export default {
  components: {
    Navigator,
    Tip,
  },
};
</script>
<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
}
</style>
