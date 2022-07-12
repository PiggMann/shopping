import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import common from "./plugins/common";

import router from "./router";
import pinia from "./pinia";

const app = createApp(App);
// 饿了么
app.use(ElementPlus);
// 绑定插件
app.use(common);
// 挂载 router
app.use(router);
// 挂载 pinia
app.use(pinia);
app.mount("#app");
