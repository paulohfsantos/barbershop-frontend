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
      <div class="dropdown dropdown-end">
        <label :tabIndex="0" class="btn btn-circle avatar">
          <div class="w-4 rounded-full flex justify-center items-center">
            P
          </div>
        </label>
        <ul tabIndex={0} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li class="cursor-default mb-3">
            <span class="p-3">{{ frost }}</span>
          </li>
          <li>
            <button class="btn btn-sm">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { themeChange } from 'theme-change';

const frost = "Frost";

const themes = [
  "light",
  "dark",
  // "cupcake",
  // "bumblebee",
  // "emerald",
  // "corporate",
  // "synthwave",
  // "retro",
  // "cyberpunk",
  // "valentine",
  // "halloween",
  // "garden",
  // "forest",
  // "aqua",
  // "lofi",
  // "pastel",
  // "fantasy",
  // "wireframe",
  // "black",
  // "luxury",
  "dracula",
]

onMounted(() => {
  themeChange(false);
});
</script>