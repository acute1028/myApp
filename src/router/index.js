import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import Bill from "@/views/Bill/Bill.vue";
import Period from "@/views/Period/Period.vue";
import Profile from "@/views/Profile/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/bill",
    component: Bill
  },
  {
    path: "/period",
    component: Period
  },
  {
    path: "/profile",
    component: Profile
  }
];

const router = new VueRouter({
  routes
});

export default router;
