import type { User } from "@/types/user.types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const token = ref<string | null>(null);
    const user = ref<User | null>(null);

    const setToken = (newToken: string) => {
      token.value = newToken;
    };

    const setUser = (newUser: User) => {
      user.value = newUser;
    };

    const clearAuthData = () => {
      token.value = null;
      user.value = null;
    };

    return {
      token,
      user,
      setToken,
      setUser,
      clearAuthData,
    };
  },
  {
    persist: {
      storage: sessionStorage,
    },
  },
);
