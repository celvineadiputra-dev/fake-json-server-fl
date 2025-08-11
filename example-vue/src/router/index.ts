import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./router";
import { useAuthStore } from "@/stores/useAuthStore";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const isAuthenticated = useAuthStore().token !== null;
  const requiresAuth = to.meta.requiresAuth;

  if (requiresAuth && !isAuthenticated && to.name !== "sign-in") {
    return { name: "sign-in" };
  }

  if (!requiresAuth && isAuthenticated && to.name !== "dashboard") {
    return { name: "dashboard" };
  }

  return true;
});

export default router;
