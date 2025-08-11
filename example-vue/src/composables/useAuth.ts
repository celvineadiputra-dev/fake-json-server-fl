import { signInPath } from "@/constants/api-path";
import http from "@/lib/http";
import { useAuthStore } from "@/stores/useAuthStore";
import type { ApiResponse } from "@/types/api-response.types";
import type { SignInPayload, SignInResponse } from "@/types/signIn.types";
import { useMutation } from "@tanstack/vue-query";

export const useAuth = () => {
  const authStore = useAuthStore();

  const authSignIn = useMutation({
    mutationFn: (payload: SignInPayload) =>
      http.post<ApiResponse<SignInResponse>>(signInPath, payload),
    onSuccess: (response) => {
      const { token, user } = response.data.data;
      authStore.setToken(token);
      authStore.setUser(user);
    },
  });

  const authSignOut = (onLogout: () => void) => {
    authStore.clearAuthData();
    onLogout();
  };

  return {
    authSignIn,
    authSignOut,
  };
};
