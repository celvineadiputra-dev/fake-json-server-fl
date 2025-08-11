<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>

<template>
  <div>
    Auth
    <router-view />
    <Toaster />
    <VueQueryDevtools />
  </div>
</template>
