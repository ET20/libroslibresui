import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home";
import Categories from "@/views/Categories/Categories";
import Category from "@/views/Category/Category";
import Direccion from "@/views/Direccion/Direccion";
import Search from "@/views/Search/Search";
import Store from "@/views/Store/Store";
import Darlibro from "@/views/Darlibro/Darlibro";
import Micuenta from "@/views/Micuenta/Micuenta";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/direccion",
      name: "direccion",
      component: Direccion
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
      path: "/Darlibro",
      name: "darlibro",
      component: Darlibro
    },
    {
      path: "/Micuenta",
      name: "micuenta",
      component: Micuenta
    }
  ]
});
