<!--La etiqueta TEMPLATE sirve para que VUE sepa qué tiene que mostrar en cada página.-->
<!--Todo el código HTML debe ir dentro de la etiqueta TEMPLATE-->
<!--La etiqueta TEMPLATE sólo puede tener un hijo n este caso el DIV con ID = "HomeContainer"-->
<template>
  <!--Cada página debería tener este div, con la misma clase pero distinto ID-->
  <div id="favoritosContainer" class="pageContainer">
    <!--Este es el encabezado de la página-->
    <header id="appHeader">
      <!--Este es el botón hamburguesa que abre el menu lateral-->
      <button id="hamburguer" class="button float-left" @click="toggleNav()"><i class="mdi mdi-menu"></i></button>
      <!--Este es el título de la página-->
      <h1 class="float-left">Libros Libres</h1>
      <!--Este es el botón de la derecha-->
      <button id="search" class="button float-right"><i class="mdi mdi-magnify"></i></button>
      <div class="clr"></div>
    </header>
    <div class="clr"></div>
    <div>
    <h1></h1>
    </div>
  </div>
</template>

<!--Cada página tiene su sección SCRIPT-->
<script>
//Dentro de esta sección, debe ir un bloque export,
//para que VUE sepa que contenido tiene que importar
//de esta página cuando se las invoca en las rutas (route.js)
export default {
  methods: {
    toggleNav: function() {
      this.$emit("toggleNav"); //emit pasa un evento al padre de esta página
    }
  }
};
</script>

<!--En esta sección importamos los estilos de esta página-->
<style scoped>
@import "favoritos.css"; /*Los archivos SCSS nos permiten escribir CSS automatizado*/
</style>
