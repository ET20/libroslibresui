<template>
  <!--Contenedor de la app-->
  <div id="app">
    <!--Contenedor del menu lateral-->
    <nav id="mainNav" v-bind:class="[nav.show ? 'show' : 'hide']">
      <ul class="list-unstyled">
        <li><router-link class="" to="/"><i class="optionIcon mdi mdi-home"></i><span class="optionText">Inicio</span></router-link></li>
        <li><router-link class="" to="/map"><i class="optionIcon mdi mdi-map"></i><span class="optionText">Cercanos</span></router-link></li>
        <li><router-link class="" to="/categories"><i class="optionIcon mdi mdi-format-list-checks"></i><span class="optionText">Categorías</span></router-link></li>
        <li><router-link class="" to="/Vista2"><i class="optionIcon mdi mdi-ambulance"></i><span class="optionText">Vista2</span></router-link></li>
        <li><router-link class="" to="/search"><i class="optionIcon mdi mdi-magnify"></i><span class="optionText">Buscar</span></router-link></li>

        <li><router-link class="" to="/Vista3"><i class="optionIcon mdi mdi-ninja"></i><span class="optionText">andar</span></router-link></li>
        <li><router-link class="" to="/Vista4"><i class="optionIcon mdi mdi-bike"></i><span class="optionText">Vista4</span></router-link></li>
      </ul>
      
    </nav>
    <div id="navOverlay" v-bind:class="[nav.show ? 'show' : 'hide']" @click="toggleNav(false)"></div>
    <!--Contenedor principal donde cargan las páginas de la app-->
    <main>
      <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
        <router-view v-on:toggleNav="toggleNav"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      nav: {
        show: false
      }
    };
  },
  components: {},
  created() {},
  mounted() {},
  watch: {
    $route: "changeRoute"
  },
  methods: {
    toggleNav: function(t) {
      switch (t) {
        case true:
          this.nav.show = true;
          break;
        case false:
          this.nav.show = false;
          break;
        default:
          this.nav.show = !this.nav.show;
          break;
      }
    },
    changeRoute: function() {
      //al cambiar de ruta se cierra la barra de navegación automáticamente
      const t = this;
      //setTimeout(function() {
      t.toggleNav(false);
      //}, 100);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700");
@import "http://cdn.materialdesignicons.com/2.4.85/css/materialdesignicons.min.css"; /*Esto creo que no es necesario*/
@import "../src/libs/reboot/bootstrap-reboot.css";
@import "../src/styles/common.min.css";
@import "../src/styles/ui.min.css";
</style>
