import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import loader from "vue-ui-preloader";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUser,
  faBagShopping,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faHome, faUser, faBagShopping, faPhone]);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);
// app.use(loader);

app.mount("#app");
