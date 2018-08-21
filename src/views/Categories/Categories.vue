<template>
  <div id="CategoriesContainer" class="pageContainer">
    <header id="appHeader">
      <button id="hamburguer" class="button float-left" @click="toggleNav()"><i class="mdi mdi-menu"></i></button>
      <h1 class="float-left">Categorías</h1>
      <div class="clr"></div>
    </header>
    <div class="clr"></div>
    <section>
      <ul class="list categoriesList list-unstyled">
        <li v-bind:key="category" v-for="category in this.categories">
          <router-link class="" :to="{name: 'category', params: {id: category.shortname}}">
            <span>{{category.name}}</span>
            <i class="iconRight mdi mdi-chevron-right"></i>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import data from "../../data/categories.js";
export default {
  data() {
    return {
      categories: data.categories
    };
  },
  methods: {
    toggleNav: function() {
      this.$emit("toggleNav");
    }
  }
};
</script>
<style scoped>
@import "categories.min.css";
</style>
