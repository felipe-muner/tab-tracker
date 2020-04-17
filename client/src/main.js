import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/store";
import { sync } from "vuex-router-sync";
import vuetify from "@/plugins/vuetify";

const unsync = sync(store, router);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
