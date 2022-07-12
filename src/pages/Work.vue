<template>
  <view>
    <h1 style="color: #ff5c5c">板上钉钉 — 螺丝厂</h1>
    <p>您现在有 {{ userStore.cash }} 元 别打工了！快去挥霍吧！</p>
    <button @click="work">疯狂拧螺丝！！！</button>
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
  methods: {
    work() {
      this.userStore.payOff();
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
  font-weight: bold;
}
button {
  padding: 6px 15px;
  background-color: #ff9999;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
}
button:hover {
  background-color: #fab1b1;
}
</style>
