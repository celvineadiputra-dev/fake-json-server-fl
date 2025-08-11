<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useAuth } from "@/composables/useAuth";
import { useRouter } from "vue-router";

const router = useRouter();

const { authSignOut } = useAuth();

const logout = () => {
  authSignOut(() => {
    router.replace({ name: "sign-in" });
  });
};
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <Button @click="logout()"> Logout </Button>
  </div>
</template>
