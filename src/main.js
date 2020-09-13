import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Tabbar,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem
} from "mint-ui";
import { Pagination } from "vant";
import "mint-ui/lib/style.css";

Vue.component(Tabbar.name, Tabbar);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.use(Pagination);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
