import GuestLayout from "@/layouts/guest.layout.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: GuestLayout,
    children: [
      {
        path: "",
        component: () => import("../pages/auth/signIn/Main.vue"),
      },
      {
        path: "/sign-up",
        component: () => import("../pages/auth/signUp/Main.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
