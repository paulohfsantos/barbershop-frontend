<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex flex-col">
      <div class="max-w-xl">
        <h1 class="mb-3 text-3xl font-bold">Login Page</h1>
      </div>

      <div class="max-w-xl">
        <FormLogin />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormLogin from '../components/FormLogin.vue';
</script>