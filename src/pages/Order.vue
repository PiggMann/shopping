<template>
  <view>
    <h1 style="color: #ff5c5c">我的订单</h1>
    <div class="orders">
      <div class="order" v-for="order of userStore.orders">
        <div class="product" v-for="product of order.products">
          <img :src="product.img" />
          <div class="right">
            <div>产品: {{ product.name }}</div>
            <div>数量：{{ product.num }}</div>
            <div>价格: {{ product.price }} 元</div>
          </div>
        </div>
        <div class="payment-time">
          <!-- <div>总计：{{ userStore.totalPrice }}</div> -->
          支付时间：{{ $common.formatTimestamp(order.paymentTime) }}
        </div>
        <div class="btn">
          <el-button class="discard" title="提示" @click="discardOrders(index)"
            >删除订单</el-button
          >
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
    discardOrders(index) {
      this.$confirm("确认删除该订单？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "删除成功！",
          });
          this.userStore.discardOrders(index);
        })
        .catch(() => {
          return;
        });
    },
  },
};
</script>
<style scoped>
.orders .order .product {
  height: 100px;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.orders .order .payment-time {
  margin: 10px 0;
  text-align: right;
}
.orders .order:not(:last-child) {
  border-bottom: 1px solid #ff9999;
}
.orders .order .right div {
  margin-bottom: 10px;
}
.orders .order img {
  object-fit: cover;
  width: 100px;
  height: 100px;
}
.orders .order .right {
  text-align: right;
  font-size: 14px;
}
.orders .order .btn {
  display: flex;
  justify-content: flex-end;
}
.orders .order .btn .discard {
  margin-bottom: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 3px 12px;
  background-color: rgb(255, 92, 92);
  color: #fff;
  font-size: 14px;
}
</style>
