import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home";
import Categories from "@/views/Categories/Categories";
import Category from "@/views/Category/Category";
import Map from "@/views/Map/Map";
import Search from "@/views/Search/Search";
import Store from "@/views/Store/Store";
import Vista3 from "@/views/Vista3/Vista3";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/map",
      name: "map",
      component: Map
    },
    {
      path: "/categories",
      name: "categories",
      component: Categories
    },
    {
      path: "/categories/:id",
      name: "category",
      component: Category
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/store/:id",
      name: "store",
      component: Store
    },
    {
      path: "/Vista3",
      name: "detail",
      component: Vista3
    }
  ]
});
