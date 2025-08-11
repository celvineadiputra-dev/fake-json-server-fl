<script setup lang="ts">
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { TInput } from "@/components/ui/input";
import { useForm } from "@tanstack/vue-form";
import { useSignInHook } from "./hooks/useSignInHook";
import { useRouter } from "vue-router";

const router = useRouter();

const signInHook = useSignInHook(() => {
  router.replace({ name: "sign-up" });
});

const form = useForm({
  defaultValues: {
    email: "example@mail.com",
    password: "12345678",
  },
  onSubmit: async ({ value }) => {
    const result = await signInHook.mutation.mutateAsync(value);

    return result;
  },
});
</script>

<template>
  <div class="w-full lg:grid lg:grid-cols-2 h-screen">
    <div class="hidden bg-muted lg:block">
      <!-- <img
        src="../../../assets/image/sample.webp"
        alt="Image"
        width="1920"
        height="auto"
        class="h-screen w-full object-cover"
      /> -->
    </div>
    <div class="flex items-center justify-center">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">Login</h1>
          <p class="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <form @submit.prevent.stop="form.handleSubmit">
          <div class="grid gap-4">
            <div class="grid gap-4">
              <form.Field
                name="email"
                :validators="{
                  onChange: z.email(),
                }"
              >
                <template v-slot="{ field }">
                  <TInput :field="field" placeholder="m@example.com" required>
                    Email
                  </TInput>
                </template>
              </form.Field>
              <form.Field
                name="password"
                :validators="{
                  onChange: z.string().min(8),
                }"
              >
                <template v-slot="{ field }">
                  <TInput
                    :field="field"
                    placeholder="Password"
                    type="password"
                    required
                  >
                    Password
                  </TInput>
                </template>
              </form.Field>
            </div>
            <form.Subscribe>
              <template v-slot="{ canSubmit, isSubmitting }">
                <Button type="submit" class="w-full" :disabled="!canSubmit">
                  {{ isSubmitting ? "Loading..." : "Login" }}
                </Button>
              </template>
            </form.Subscribe>
            <Button variant="outline" class="w-full">
              Login with Google
            </Button>
          </div>
        </form>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <RouterLink to="/sign-up" class="underline"> Sign up </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
