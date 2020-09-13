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
import {
  Pagination,
  Field,
  Calendar,
  Button,
  DropdownMenu,
  DropdownItem
} from "vant";
import "mint-ui/lib/style.css";

Vue.component(Tabbar.name, Tabbar);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.use(Pagination);
Vue.use(Field);
Vue.use(Calendar);
Vue.use(Button);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
