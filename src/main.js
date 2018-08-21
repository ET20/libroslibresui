import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

//Datos para Google Maps
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBLq1jc87Wkm4jJeozLuxTot7-NZpz8Yss", //Cambiar este string por uno propio para la app. Preguntar al profe cómo se obtiene un string de google maps.
    libraries: "places" // This is required if you use the Autocomplete plugin
  }
});

//Este bloque da vida a nuestra app.
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
