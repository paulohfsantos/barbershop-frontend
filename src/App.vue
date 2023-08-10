<script setup lang="ts">
import { onMounted } from 'vue';
import { themeChange } from 'theme-change';
import { hasToken } from './common/headerAuth';
import Header from './components/Header.vue'

onMounted(() => {
  themeChange(false);
});
</script>

<template>
  <main>
    <Header v-if="hasToken()" />
    <router-view />
  </main>
</template>
