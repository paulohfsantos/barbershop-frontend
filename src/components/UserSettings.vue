<template>
  <div class="dropdown dropdown-end">
    <label :tabIndex="0" class="btn btn-circle avatar">
      <div class="w-4 rounded-full flex justify-center items-center">
        {{ firstLetter }}
      </div>
    </label>
    <ul :tabIndex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li class="mb-3">
        <span class="px-3 py-1 cursor-move">{{ username }}</span>
      </li>
      <li class=" mb-3">
        <span class="px-3 py-1 cursor-move">{{ email }}</span>
      </li>
      <li>
        <button class="btn btn-sm" @click="emit('logout')">
          Logout
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits(['logout']);

const props = defineProps({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const firstLetter = computed(() => {
  return props.username.charAt(0).toUpperCase();
});
</script>