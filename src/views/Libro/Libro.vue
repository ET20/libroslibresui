<!--La etiqueta TEMPLATE sirve para que VUE sepa qué tiene que mostrar en cada página.-->
<!--Todo el código HTML debe ir dentro de la etiqueta TEMPLATE-->
<!--La etiqueta TEMPLATE sólo puede tener un hijo n este caso el DIV con ID = "HomeContainer"-->
<template>
  <!--Cada página debería tener este div, con la misma clase pero distinto ID-->
  <div id="LibroContainer" class="pageContainer">
    <!--Este es el encabezado de la página-->
    <header id="appHeader">
      
      <!--Este es el botón hamburguesa que abre el menu lateral-->
      <button id="back" class="button float-left" @click="$router.go(-1)"><i class="mdi mdi-arrow-left"></i></button>   
      <!--Este es el título de la página-->
      
      <!--Este es el botón de la derecha-->
        <button id="heart" class="button float-right"><i class="mdi mdi-heart"></i></button>
      <div class="clr"></div>
    </header>
    <div class="clr"></div>
    <div>
    <div id="ImagenLibro"> 
        <img src="../../assets/ninja.jpg">
       
       <div id="InfoLibros">
        <h1 class="float-left md-headline titulo">Libros Libres</h1>
        <md-button id="share" class="md-icon-button">
        <i class="mdi mdi-share-variant"></i>
      </md-button>
      </div>
       <!-- <button id="share" class="button float-right"><i class="mdi mdi-share-variant"></i></button> -->
      </div>
    </div>
    <div class="md-layout BarraInformacion">
    <div class="md-layout-item">
      <div class="md-body-2">
        <i class="mdi mdi-tag"></i>
      </div>
      <div class="md-body-2">Genero</div>
      
    </div>

     <div class="md-layout-item">
      <div class="md-body-2">
        <i class="mdi mdi-cake-variant"></i>
      </div>
      <div class="md-body-2">Año</div>
      
    </div>

     <div class="md-layout-item">
      <div class="md-body-2">
        <i class="mdi mdi-account"></i>
      </div>
      <div class="md-body-2">Escritor</div>
      
    </div>
  </div>
  <div class="DescripcionLibro">
      <p> Un libro (del latín liber, libri) es una obra impresa,
       manuscrita o pintada en una serie de hojas de papel,pergamino, vitela u otro material, 
      unidas por un lado (es decir, encuadernadas) y protegidas con tapas, también llamadas cubiertas.</p>
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
@import "libro.css"; /*Los archivos SCSS nos permiten escribir CSS automatizado*/
</style>
