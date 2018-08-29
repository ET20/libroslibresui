import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home";
import Categories from "@/views/Categories/Categories";
import Category from "@/views/Category/Category";
import Direccion from "@/views/Direccion/Direccion";
import Search from "@/views/Search/Search";
import Store from "@/views/Store/Store";
<<<<<<< HEAD
import Vista2 from "@/views/Vista2/Vista2";
import Vista3 from "@/views/Vista3/Vista3";
import Vista4 from "@/views/Vista4/Vista4";
=======
import Darlibro from "@/views/Darlibro/Darlibro";
import Micuenta from "@/views/Micuenta/Micuenta";
>>>>>>> b8833dac74ded2ae21e62fc3dd2e956a337eaf9e

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
<<<<<<< HEAD
      path: "/Vista2",
      name: "Vista2",
      component: Vista2
    },
    {
      path: "/Vista3",
      name: "detail",
      component: Vista3
=======
      path: "/Darlibro",
      name: "darlibro",
      component: Darlibro
>>>>>>> b8833dac74ded2ae21e62fc3dd2e956a337eaf9e
    },
    {
      path: "/Micuenta",
      name: "micuenta",
      component: Micuenta
    }
  ]
});
