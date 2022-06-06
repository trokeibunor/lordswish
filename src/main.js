import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import loader from "vue-ui-preloader";

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(loader);

app.mount("#app");
