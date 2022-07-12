import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state() {
    return {
      cash: 100, // 现金
      cart: [], // 购物车
      orders: [], // 订单
    };
  },
  getters: {
    cartAmount() {
      // 返回购物车的数量
      return this.cart.length;
    },
    ordersAmount() {
      // 返回订单的数量
      return this.orders.length;
    },
    totalPrice() {
      // 返回购物车总价
      let totalPrice = 0;
      for (const item of this.cart) {
        totalPrice += item.product.price * item.product.num;
      }
      return totalPrice;
    },
    singlePrice() {
      // 计算单价
      let singlePrice = 0;
      for (const item of this.cart) {
        singlePrice = item.product.price * item.product.num;
        console.log(item.product.price);
      }
      return singlePrice;
    },
    isEnough() {
      return this.cash >= this.totalPrice;
    },
  },
  actions: {
    payOff() {
      this.cash += 300;
    },
    addToCart(product) {
      let rel = true;
      this.cart.filter((item) => {
        if (item.product.name === product.name) {
          item.product.num++;
          rel = false;
          return;
        }
      });
      if (rel) {
        this.cart.unshift({
          product,
          // num: product.num,
          addTime: Date.now(),
        });
      }
      // localStorage.cart = JSON.stringify(this.cart);
      // 加入购物车
      // this.cart.unshift({
      //   product,
      //   addTime: Date.now(),
      // });
    },
    discard(index) {
      this.cart.splice(index, 1);
    },
    discardOrders(index) {
      this.orders.splice(index, 1);
    },
    payment() {
      // 支付购物车商品
      if (!this.isEnough) return;
      const order = {};
      // 支付时间
      order.paymentTime = Date.now();
      order.products = [];
      for (const item of this.cart) {
        const product = {
          name: item.product.name,
          img: item.product.img,
          price: item.product.price,
          num: item.product.num,
        };
        order.products.push(product);
      }
      this.orders.unshift(order);
      console.log(this.singlePrice);
      this.cash -= this.totalPrice;
      this.cart = [];
    },
  },
  persist: true, // 开启持久化
});
