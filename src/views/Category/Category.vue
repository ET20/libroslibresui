<template>
  <div id="CategoryContainer" class="pageContainer">
    <header id="appHeader">
      <button id="back" class="button float-left" @click="$router.go(-1)"><i class="mdi mdi-arrow-left"></i></button>
      <h1 class="float-left">Category Name</h1>
      <div class="clr"></div>
    </header>
    <div class="clr"></div>
    <section>
      <ul id="storesList" class="list list-unstyled">
        <li v-bind:key="store" v-for="store in this.stores">
          <router-link class="" :to="{name: 'store', params: {id: store.shortname}}">
            <img class="storeProfileImg" :src="store.image" />
            <div class="storeInfo">
              <h2>{{store.name}}</h2>
              <p>Juan Llerena 1155</p>
            </div>
            <i class="iconRight mdi mdi-chevron-right"></i>
            
          </router-link>
        </li>
      </ul>
    </section>
    
  </div>

</template>
<script>
import data from "../../data/stores.js";
export default {
  data() {
    return {
      stores: data.stores
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
@import "category.min.css";
</style>
