<script setup lang="ts">
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { TInput } from "@/components/ui/input";
import { useForm } from "@tanstack/vue-form";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";

const router = useRouter();

const { authSignIn } = useAuth();

const form = useForm({
  defaultValues: {
    email: "example@mail.com",
    password: "12345678",
  },
  onSubmit: async ({ value }) => {
    await authSignIn.mutateAsync(value, {
      onSuccess() {
        router.replace({ name: "dashboard" });
      },
    });
  },
});
</script>

<template>
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
      <Button variant="outline" class="w-full"> Login with Google </Button>
    </div>
  </form>
  <div class="mt-4 text-center text-sm">
    Don't have an account?
    <RouterLink to="/sign-up" class="underline"> Sign up </RouterLink>
  </div>
</template>
