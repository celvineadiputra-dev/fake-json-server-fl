<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import "vue-sonner/style.css";
</script>

<template>
  <div>
    <router-view />
    <Toaster :rich-colors="true" />
    <VueQueryDevtools />
  </div>
</template>
