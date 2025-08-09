import { createApp } from "vue";
import "@/assets/css/style.css";
import App from "./App.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { router } from "@/lib/router";

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);

app.mount("#app");
