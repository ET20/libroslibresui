<!--La etiqueta TEMPLATE sirve para que VUE sepa qué tiene que mostrar en cada página.-->
<!--Todo el código HTML debe ir dentro de la etiqueta TEMPLATE-->
<!--La etiqueta TEMPLATE sólo puede tener un hijo n este caso el DIV con ID = "HomeContainer"-->
<template>
  <!--Cada página debería tener este div, con la misma clase pero distinto ID-->
  <div id="DarlibroContainer" class="pageContainer">
    <!--Este es el encabezado de la página-->
    <header id="appHeader">
      
      <!--Este es el botón hamburguesa que abre el menu lateral-->
      <button id="back" class="button float-left" @click="$router.go(-1)"><i class="mdi mdi-arrow-left"></i></button>   
      <!--Este es el título de la página-->
      <h1 class="float-left">Dar Libro</h1>
      <div class="clr"></div>
    </header>
        <div class="clr"></div>
        <div id="DarlibroContent">
                      <div>
                        <md-button class="md-accent" id="BotonISBN">ISBN</md-button>
                      </div>
                      <div>
                        <md-button class="md-accent" id="BotonSCAN">SCAN</md-button>
                      </div>
                      <div>
                        <md-button class="md-accent" id="BotonMANUAL">MANUAL</md-button>
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
  methods: {
    toggleNav: function() {
      this.$emit("toggleNav"); //emit pasa un evento al padre de esta página
    }
  }
};
</script>

<!--En esta sección importamos los estilos de esta página-->
<style scoped>
@import "darlibro.css"; /*Los archivos SCSS nos permiten escribir CSS automatizado*/
</style>
