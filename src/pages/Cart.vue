<template>
  <view>
    <h1 style="color: #ff5c5c">
      你的购物车共 {{ userStore.cartAmount }} 有件商品
    </h1>
    <div class="cart">
      <div class="operation">
        <p style="font-size: 18px">商品总计 {{ userStore.totalPrice }} 元</p>
        <el-button type="primary" v-if="userStore.isEnough" @click="payment"
          >支付</el-button
        >
        <el-button type="primary" v-else disabled
          >您的余额为 {{ userStore.totalPrice }} ，请去打工！</el-button
        >
      </div>
      <div class="product" v-for="(item, index) of userStore.cart">
        <img :src="item.product.img" />
        <div class="right">
          <div>产品：{{ item.product.name }}</div>
          <el-input-number
            v-model="item.product.num"
            :min="1"
            @change="handleChange"
          />
          <div>单价：{{ item.product.price }}</div>
          <div>时间：{{ $common.formatTimestamp(item.addTime) }}</div>
          <el-button class="discard" title="提示" @click="discard(index)"
            >删除</el-button
          >
          <!-- <button class="discard" @click="">删除</button> -->
        </div>
      </div>
    </div>
  </view>
</template>
<script>
import { useUserStore } from "../stores/user";
import { ElMessage } from "element-plus";

export default {
  data() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  methods: {
    handleChange(number) {
      console.log(number);
    },
    payment() {
      this.userStore.payment();
      ElMessage({
        showClose: true,
        message: "支付成功！",
        type: "success",
      });
    },
    discard(index) {
      this.$confirm("确认删除该商品？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "删除成功！",
          });
          this.userStore.discard(index);
        })
        .catch(() => {
          return;
        });
    },
  },
};
</script>
<style scoped>
.cart .product {
  height: 140px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart .product:not(:last-child) {
  border-bottom: 1px solid #ff9999;
}
.cart .product img {
  object-fit: cover;
  width: 100px;
  height: 100px;
}
.cart .product .right {
  text-align: right;
  font-size: 15px;
}
.cart .product .right div {
  margin-bottom: 10px;
}
.cart .product .right .discard {
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 3px 12px;
  background-color: rgb(255, 92, 92);
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.cart .operation {
  display: flex;
  justify-content: space-between;
}
</style>
