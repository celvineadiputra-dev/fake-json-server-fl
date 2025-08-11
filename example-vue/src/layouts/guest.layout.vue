<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import { computed } from "vue";
import { useRoute } from "vue-router";
import "vue-sonner/style.css";

const route = useRoute();

const metaValue = computed(() => {
  return route.meta as {
    headline: string;
    description: string;
  };
});
</script>

<template>
  <div class="w-full lg:grid lg:grid-cols-2 h-screen">
    <div class="hidden bg-muted lg:block">
      <img
        src="../assets/image/sample.webp"
        alt="Image"
        width="1920"
        height="auto"
        class="h-screen w-full object-cover"
      />
    </div>
    <div class="flex items-center justify-center">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">{{ metaValue.headline }}</h1>
          <p class="text-balance text-muted-foreground">
            {{ metaValue.description }}
          </p>
        </div>
        <router-view />
      </div>
    </div>
    <Toaster :rich-colors="true" />
    <VueQueryDevtools />
  </div>
</template>
