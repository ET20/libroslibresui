<!--La etiqueta TEMPLATE sirve para que VUE sepa qué tiene que mostrar en cada página.-->
<!--Todo el código HTML debe ir dentro de la etiqueta TEMPLATE-->
<!--La etiqueta TEMPLATE sólo puede tener un hijo n este caso el DIV con ID = "HomeContainer"-->
<template>
  <!--Cada página debería tener este div, con la misma clase pero distinto ID-->
  <div id="HomeContainer" class="pageContainer">
    <!--Este es el encabezado de la página-->
    <header id="appHeader">
      <!--Este es el botón hamburguesa que abre el menu lateral-->
      <button id="hamburguer" class="button float-left" @click="toggleNav()">
        <i class="mdi mdi-menu"></i>
      </button>
      <!--Este es el título de la página-->
      <h1 class="float-left">Inicio</h1>
      <!--Este es el botón de la derecha-->
      <button id="search" class="button float-right">
        <i class="mdi mdi-magnify"></i>
      </button>
      <div class="clr"></div>
    </header>
    <div class="clr"></div>

    <div id="HomeContent" class="pageContent">
      <md-tabs md-sync-route>
        <md-tab id="tab-destacados" md-label="Destacados" to>
          <ul class="md-layout md-gutter md-alignment-center">
            <li
              v-for="libro in libros"
              :key="libro.id"
              class="layoutPortadaLibro md-layout-item md-xsmall-size-60 md-small-size-40 md-medium-size-20 md-large-size-15 md-xlarge-size-10">
          
             
            
              <div class="portadaLibro">
                <div class="imagenLibro">
                  <img src="../../assets/coverBook.jpg" alt="Skyscraper">
                </div>

                <div class="infoLibro">
                  <header>
                    <h1>{{ libro.titulo}}</h1>
                    <h2>{{ libro.autor }}</h2>
                  </header>

                  <nav>
                    <md-button class="md-icon-button">
                      <i class="mdi mdi-heart md-headline"></i>
                    </md-button>

                    <md-button class="md-icon-button">
                      <i class="mdi mdi-bookmark md-headline"></i>
                    </md-button>

                    <md-button class="md-icon-button">
                      <i class="mdi mdi-share-variant md-headline"></i>
                    </md-button>
                  </nav>
                </div>
              </div>
            </li>
          </ul>
        </md-tab>

        <md-tab id="tab-nuevo" md-label="Mas nuevo" to>
          <ul class="md-layout md-gutter md-alignment-center">
            <li
              v-for="libro in libros"
              :key="libro.id"
              class="layoutPortadaLibro md-layout-item md-xsmall-size-60 md-small-size-40 md-medium-size-20 md-large-size-15 md-xlarge-size-10"
            >
                         
                <div class="portadaLibro">
                  <div class="imagenLibro">
                    <img src="../../assets/coverBook.jpg" alt="Skyscraper">
                  </div>

                  <div class="infoLibro">
                    <header>
                      <h1>{{ libro.titulo}}</h1>
                      <h2>{{ libro.autor }}</h2>
                    </header>

                    <nav>
                      <md-button class="md-icon-button">
                        <i class="mdi mdi-heart md-headline"></i>
                      </md-button>

                      <md-button class="md-icon-button">
                        <i class="mdi mdi-bookmark md-headline"></i>
                      </md-button>

                      <md-button class="md-icon-button">
                        <i class="mdi mdi-share-variant md-headline"></i>
                      </md-button>
                    </nav>
                  </div>
                </div>
            </li>
          </ul>
        </md-tab>

        <md-tab id="tab-antiguo" md-label="Mas antiguo" to>
          <ul class="md-layout md-gutter md-alignment-center">
            <li
              v-for="libro in libros"
              :key="libro.id"
              class="layoutPortadaLibro md-layout-item md-xsmall-size-60 md-small-size-40 md-medium-size-20 md-large-size-15 md-xlarge-size-10"
            >
              <div class="portadaLibro">
                <div class="imagenLibro">
                  <img src="../../assets/coverBook.jpg" alt="Skyscraper">
                </div>

                <div class="infoLibro">
                  <header>
                    <h1>{{ libro.titulo}}</h1>
                    <h2>{{ libro.autor }}</h2>
                  </header>

                  <nav>
                    <md-button class="md-icon-button">
                      <i class="mdi mdi-heart md-headline"></i>
                    </md-button>

                    <md-button class="md-icon-button">
                      <i class="mdi mdi-bookmark md-headline"></i>
                    </md-button>

                    <md-button class="md-icon-button">
                      <i class="mdi mdi-share-variant md-headline"></i>
                    </md-button>
                  </nav>
                </div>
              </div>
            </li>
          </ul>
        </md-tab>

        <md-tab id="tab-alfab" md-label="Alfabetico" to>
          <ul class="md-layout md-gutter md-alignment-center">
            <li
              v-for="libro in libros"
              :key="libro.id"
              class="layoutPortadaLibro md-layout-item md-xsmall-size-60 md-small-size-40 md-medium-size-20 md-large-size-15 md-xlarge-size-10"
            >
              <div class="portadaLibro">
                <div class="imagenLibro">
                  <img src="../../assets/coverBook.jpg" alt="Skyscraper">
                </div>

                <div class="infoLibro">
                  <header>
                    <h1>{{ libro.titulo}}</h1>
                    <h2>{{ libro.autor }}</h2>
                  </header>

                  <nav>
                    <md-button class="md-icon-button">
                      <i class="mdi mdi-heart md-headline"></i>
                    </md-button>

                    <md-button class="md-icon-button">
                      <i class="mdi mdi-bookmark md-headline"></i>
                    </md-button>

                    <md-button class="md-icon-button">
                      <i class="mdi mdi-share-variant md-headline"></i>
                    </md-button>
                  </nav>
                </div>
              </div>
            </li>
          </ul>
        </md-tab>
      </md-tabs>

      <!-- <ul class="md-layout md-gutter md-alignment-center">
  
    <li v-for="libro in libros" :key="libro.id" class="layoutPortadaLibro md-layout-item md-xsmall-size-50 md-small-size-30 md-medium-size-20 md-large-size-15 md-xlarge-size-10 ">
      
      <div class="portadaLibro">
        <div class="imagenLibro">
        <img src="../../assets/coverBook.jpg" alt="Skyscraper">
      </div>

      <div class="infoLibro">
        <header>
         <h1>{{ libro.titulo}}</h1>
         <h2>{{ libro.autor }}</h2>
        </header>
   
   
      <nav>
        <md-button class="md-icon-button">
                 <i class="mdi mdi-heart md-headline"></i>
               </md-button>

               <md-button class="md-icon-button">
                 <i class="mdi mdi-bookmark md-headline"></i>
               </md-button>

               <md-button class="md-icon-button">
                 <i class="mdi mdi-share-variant md-headline"></i>
               </md-button>
               </nav>
      </div>
      </div>
      
      

    </li>
      </ul>-->
    </div>
  </div>
</template>

<!--Cada página tiene su sección SCRIPT-->
<script>
//Dentro de esta sección, debe ir un bloque export,
//para que VUE sepa que contenido tiene que importar
//de esta página cuando se las invoca en las rutas (route.js)
export default {
  data() {
    return {
      libros: [
        { titulo: "Titulo", autor: "Autor" },
        { titulo: "Titulo", autor: "Autor" },
        { titulo: "Titulo", autor: "Autor" },
        { titulo: "Titulo", autor: "Autor" }
      ]
    };
  },

  methods: {
    toggleNav: function() {
      this.$emit("toggleNav"); //emit pasa un evento al padre de esta página
    }
  }
};
</script>

<!--En esta sección importamos los estilos de esta página-->
<style scoped>
@import "home.css"; /*Los archivos SCSS nos permiten escribir CSS automatizado*/
</style>