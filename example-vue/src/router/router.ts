import GuestLayout from "@/layouts/guest.layout.vue";

const guest = {
  path: "/",
  component: GuestLayout,
  meta: {
    requiresAuth: false,
  },
  children: [
    {
      path: "",
      name: "sign-in",
      component: () => import("../pages/auth/signIn/Main.vue"),
      meta: {
        headline: "Login",
        description: "Enter your email below to login to your account",
      },
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: () => import("../pages/auth/signUp/Main.vue"),
    },
  ],
};

const authenticate = {
  path: "/",
  component: () => import("../layouts/authenticate.layout.vue"),
  meta: {
    requiresAuth: true,
  },
  children: [
    {
      path: "dashboard",
      name: "dashboard",
      component: () => import("../pages/dashboard/Main.vue"),
    },
  ],
};

export const routes = [guest, authenticate];
