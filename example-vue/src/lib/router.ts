import GuestLayout from "@/layouts/guest.layout.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: GuestLayout,
    children: [
      {
        path: "",
        name: "sign-in",
        component: () => import("../pages/auth/signIn/Main.vue"),
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () => import("../pages/auth/signUp/Main.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
