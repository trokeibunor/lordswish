import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueScrollTo from 'vue-scrollto'
import Toast from "vue-toastification";
// Import the CSS or use your own!
// import loader from "vue-ui-preloader";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUser,
  faBagShopping,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "vue-toastification/dist/index.css";
import './index.css'

library.add([faHome, faUser, faBagShopping, faPhone]);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.use(Toast)
app.use(VueScrollTo)
// app.use(loader);

app.mount("#app");
