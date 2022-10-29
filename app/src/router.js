import Vue from "vue";
import Router from "vue-router";
import firstPage from "./views/first-page.vue";
import secondPage from "./views/second-page.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "firstPage",
      component: firstPage
    },
    {
      path: "/two",
      name: "secondPage",
      component: secondPage
    }
  ],
  mode: "history"
});