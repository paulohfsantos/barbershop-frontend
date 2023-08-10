<template>
  <div class="dropdown dropdown-end">
    <label :tabIndex="0" class="btn btn-circle avatar">
      <div class="w-4 rounded-full flex justify-center items-center">
        P
      </div>
    </label>
    <ul :tabIndex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li class="cursor-default mb-3">
        <span class="p-3">{{ username || 'Frost' }}</span>
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
const emit = defineEmits(['logout']);

defineProps({
  username: {
    type: String,
    required: false,
  },
});
</script>