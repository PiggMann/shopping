<template>
  <view>
    <h1 style="color: #ff5c5c; margin: 30px 0">猪猪侠良♥小店 ʚ•⚇•ɞ</h1>
    <p style="font-size: 18px">
      您有 {{ userStore.cash }} 元 快去选购喜欢的商品吧！
    </p>
    <div class="products">
      <div class="product" v-for="product of productList">
        <img class="image" :src="product.img" />
        <div class="introduce">
          <p class="name">{{ product.name }}</p>
          <div class="bottom">
            <div class="price">价格：{{ product.price }}</div>
            <button
              v-if="userStore.cash > product.price"
              class="buy"
              @click="buy(product)"
            >
              加入购物车
            </button>
            <button v-else class="out">余额不足</button>
          </div>
        </div>
      </div>
    </div>
  </view>
</template>
<script>
import { products } from "../data/products";
import { useUserStore } from "../stores/user";
import { ElMessage } from "element-plus";

export default {
  data() {
    const userStore = useUserStore();
    return {
      productList: products,
      userStore,
    };
  },
  methods: {
    buy(product) {
      this.userStore.addToCart(product);
      ElMessage({
        showClose: true,
        message: "加入购物车成功！",
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
}
.products .product {
  width: 200px;
}
.products .product .image {
  width: 100%;
  height: 200px;
}
.products .product .introduce {
  background-color: #fdeff2;
  padding-top: 10px;
}
.products .product .introduce .name {
  text-align: center;
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: red;
}
.products .product .bottom {
  height: 35px;
  display: flex;
}
.products .product .bottom .price {
  width: 50%;
  text-align: center;
  line-height: 40px;
  color: red;
  font-size: 17px;
  font-weight: bold;
}
.products .product .bottom .buy {
  width: 50%;
  background-color: #ff9999;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
}
.products .product .bottom .buy:hover {
  background-color: #fab1b1;
}
.products .product .bottom .out {
  width: 50%;
  background-color: rgb(185, 184, 184);
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: none;
  cursor: not-allowed;
  border-radius: 50px;
}
</style>
