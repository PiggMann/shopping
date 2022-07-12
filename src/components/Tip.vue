<template>
  <view>
    <router-link
      v-if="userStore.cartAmount > 0"
      class="tip"
      :to="{ name: 'cart' }"
      >购物车有 {{ userStore.cartAmount }} 件商品</router-link
    >
  </view>
</template>
<script>
import { useUserStore } from "../stores/user";

export default {
  data() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
};
</script>
<style scoped>
.tip {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  background-color: #ff9999;
}
</style>
