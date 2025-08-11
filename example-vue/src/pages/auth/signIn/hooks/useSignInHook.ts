import http from "@/lib/http";
import { signInPath } from "@/lib/api-path";
import { useMutation } from "@tanstack/vue-query";

export const useSignInHook = (onSuccess?: () => void) => {
  const mutation = useMutation({
    mutationFn: async (payload: { email: string; password: string }) => {
      const response = await http.post(signInPath, payload);

      return response;
    },
    onSuccess: () => {
      onSuccess?.();
    },
  });

  return {
    mutation,
  };
};
