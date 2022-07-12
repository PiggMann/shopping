<template>
  <header class="navigator">
    <router-link
      class="title"
      :to="{
        name: 'home',
      }"
      >首页</router-link
    >
    <div class="right">
      <router-link
        :to="{
          name: 'cart',
        }"
        >购物车</router-link
      >
      <router-link
        :to="{
          name: 'order',
        }"
        >订单</router-link
      >
      <router-link
        :to="{
          name: 'work',
        }"
        >打工</router-link
      >
    </div>
  </header>
</template>
<script></script>
<style scoped>
.navigator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
}
.navigator .title {
  font-size: 22px;
}
.navigator a {
  color: #f76b8a;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 20px;
}
.navigator .right a {
  padding: 5px 12px;
  margin-top: 20px;
}
.navigator .right a:hover {
  background-color: #ff9999;
  color: #fff;
  border-radius: 8px;
}
</style>
