<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex flex-col">
      <div class="max-w-xl">
        <h1 class="mb-3 text-3xl font-bold">Register Page</h1>
      </div>

      <div class="max-w-xl">
        <FormRegister />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormRegister from '../components/FormRegister.vue';
</script>