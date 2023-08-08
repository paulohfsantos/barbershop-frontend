<script setup lang="ts">
import { onMounted } from 'vue';
import Header from './components/Header.vue'
import { themeChange } from 'theme-change';

onMounted(() => {
  themeChange(false);
});
</script>

<template>
  <main>
    <Header />
    <router-view />
  </main>
</template>
