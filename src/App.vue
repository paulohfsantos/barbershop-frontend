<script setup lang="ts">
import { onMounted } from 'vue';
import { themeChange } from 'theme-change';

onMounted(() => {
  themeChange(false);
});
</script>

<template>
  <main>
    <router-view />
  </main>
</template>
