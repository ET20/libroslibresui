<!--La etiqueta TEMPLATE sirve para que VUE sepa qué tiene que mostrar en cada página.-->
<!--Todo el código HTML debe ir dentro de la etiqueta TEMPLATE-->
<!--La etiqueta TEMPLATE sólo puede tener un hijo n este caso el DIV con ID = "HomeContainer"-->
<template>
  <!--Cada página debería tener este div, con la misma clase pero distinto ID-->
  <div id="MiCuentaContainer" class="pageContainer">
    <!--Este es el encabezado de la página-->
    <header id="appHeader">
      <!--Este es el botón hamburguesa que abre el menu lateral-->
      <button id="hamburguer" class="button float-left" @click="toggleNav()"><i class="mdi mdi-menu"></i></button>
      <!--Este es el título de la página-->
      <h1 class="float-left">Editar Perfil</h1>
      <!--Este es el botón de la derecha-->
      <button id="search" class="button float-right"><i class="mdi mdi-check"></i></button>
      <div class="clr"></div>
    </header>
    <div class="clr"></div>
    <div id="MicuentaContent">
     
      <div class="imagenperfil">

        <img src="../../assets/prod162779_IMGSET.jpg">
        <button class="imgbutton" type="button"><i class="mdi mdi-camera"></i></button>

      </div>
      
      <div class="Infouser">
        <md-field>
          <label>Nombre</label>
          <md-input v-model="initial"></md-input>
        </md-field>

        <md-field>
          <label>Email</label>
          <md-input v-model="initial"></md-input>
        </md-field>

        <md-field>
          <label for="movies">Géneros Favoritos</label>
          <md-select v-model="movies" name="movies" id="movies" md-dense multiple>
            <md-option value="fight-club">Fight Club</md-option>
            <md-option value="godfather">Godfather</md-option>
            <md-option value="godfather-ii">Godfather II</md-option>
            <md-option value="godfather-iii">Godfather III</md-option>
            <md-option value="godfellas">Godfellas</md-option>
            <md-option value="pulp-fiction">Pulp Fiction</md-option>
            <md-option value="scarface">Scarface</md-option>
          </md-select>
        </md-field>
    
     </div>
    </div>
  </div>
</template>

<!--Cada página tiene su sección SCRIPT-->
<script>
//Dentro de esta sección, debe ir un bloque export,
//para que VUE sepa que contenido tiene que importar
//de esta página cuando se las invoca en las rutas (route.js)
export default {
  data: () => ({
    movies: [],
    country: null,
    font: null
  }),
  methods: {
    toggleNav: function() {
      this.$emit("toggleNav"); //emit pasa un evento al padre de esta página
    }
  }
};
</script>

<!--En esta sección importamos los estilos de esta página-->
<style scoped>
@import "micuenta.css"; /*Los archivos SCSS nos permiten escribir CSS automatizado*/
</style>
