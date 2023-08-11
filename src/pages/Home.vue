<template>
  <div>
    <Header v-if="hasToken()" />

    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content">
        <div class="max-w-xl">
          Home
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { hasToken } from '../common/headerAuth';
import Header from '../components/Header.vue';
</script>