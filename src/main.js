import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//
import { loadVueHighway } from "vue-highway";
loadVueHighway(Vue);
import App from "./App.js";
//

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
