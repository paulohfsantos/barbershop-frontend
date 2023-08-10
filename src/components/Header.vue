<template>
  <div class="p-3 navbar bg-base-100">
    <div class="flex-1">
      <router-link class="btn btn-ghost btn-sm rounded-btn" to="/">Barber Shop</router-link>
    </div>
    <div class="flex-none">
      <div class="px-3">
        <select data-choose-theme class="select select-bordered w-full max-w-xs select-sm">
          <option v-for="theme in themes" :value="theme" :key="theme">
            {{ theme }}
          </option>
        </select>
      </div>
      
      <UserSettings
        :logout="logout"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { themeChange } from 'theme-change';
import { themes } from '../utils/themes';
import { useAuth } from '../store/auth';

import UserSettings from './UserSettings.vue';

const { logout } = useAuth();

onMounted(() => {
  themeChange(false);
});
</script>