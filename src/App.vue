<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useRedirect } from "./composables/useRedirect";

onBeforeMount(async () => {
  await useRedirect();
});
</script>

<template>
  <RouterView />
</template>
