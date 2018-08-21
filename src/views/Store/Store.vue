<template>
  <div id="StoreContainer" class="pageContainer">
    <header id="appHeader">
      <button id="back" class="button float-left" @click="$router.go(-1)"><i class="mdi mdi-arrow-left"></i></button>
      <!--<h1 class="float-left">Store</h1>-->
      <!--<div class="clr"></div>-->
    </header>
    <div class="clr"></div>
    <section id="storePicture">
        <img src="http://www.postresbalcarce.com.ar/img/home_fondo_productos-1.jpg">
        <div class="pictureOverlay"></div>
    </section>
    <section id="storeInfo">
        <header>
            <img id="storeLogo" src="http://www.postresbalcarce.com.ar/img/home_menu_logo_balcarce.png"/>
            <h1>Café Balcarce VM II</h1>
            <div class="gradient"></div>
        </header>
        <section>
          <article id="description" class="info-box">
            BALCARCE Café es un nuevo concepto en cafeterías especializadas que brinda la posibilidad de disfrutar los más ricos alfajores, conitos, budincitos, galletitas, y el tradicional postre Balcarce en toda su variedad de sabores.
          </article>
          <ul id="contactInfo" class="list list-unstyled info-box">
            <li>
              <a href="tel:+5492657561648">
                <i class="mdi mdi-phone"></i><span>2657561648</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/5492657561648">
                <i class="mdi mdi-whatsapp"></i><span>2657561648</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Alfajoresypostresbalcarce">
                <i class="mdi mdi-facebook"></i><span>balcarcevm2</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/postresbalcarce/">
                <i class="mdi mdi-instagram"></i><span>balcarcevm2</span>
              </a>
            </li>
            
          </ul>
          
          <article id="map" class="info-box">
            <div class="my-map-container">
              <GmapMap
                  :center="{lat:-33.686535, lng:-65.466612}"
                  :zoom="16"
                  :options="mapOptions"
                  map-type-id="roadmap"

                >
                  <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                  />
              </GmapMap>
            </div>
            <div id="openInMaps">
              <a href="https://goo.gl/maps/ayi7pKFsxWo"><i class="mdi mdi-google-maps"></i><span>Abrir en Maps</span></a>
            </div>
          </article>
          
          
        </section>
        
    </section>
    
  </div>

</template>
<script>
export default {
  data() {
    return {
      mapOptions: {
        disableDefaultUI: true,
        gestureHandling: "greedy"
      }
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
@import "store.min.css";
</style>
