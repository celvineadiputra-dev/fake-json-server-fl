<script setup lang="ts">
import Label from "../label/Label.vue";
import MInput from "./MInput.vue";

const { field } = defineProps<{
  field: any;
  placeholder?: string;
}>();

const handleChange = (e: any) => {
  field.handleChange((e.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="grid gap-2">
    <Label :for="field.name">
      <slot />
    </Label>
    <MInput
      :id="field.name"
      :name="field.name"
      :value="field.state.value"
      @input="handleChange"
      :placeholder="placeholder"
      autocomplete="off"
      v-bind="$attrs"
    />
    <template v-if="!field.state.meta.isValid">
      <Label
        v-for="(error, index) in field.state.meta.errors"
        :key="index"
        :for="field.name"
        class="text-rose-500"
      >
        {{ error?.message ?? "Invalid Input" }}
      </Label>
    </template>
  </div>
</template>
