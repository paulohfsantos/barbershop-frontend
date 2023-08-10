<template>
  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div class="card-body form-control w-full max-w-md rounded-lg p-5">
      <FormKit
        id="signupForm"
        type="form"
        submit-label="Send"
        @submit="onSubmit"
        :submit-attrs="{
          inputClass: '$reset formkit-input btn btn-primary w-full text-white',
        }"
      >
        <FormKit
          type="text"
          name="name"
          label="Name"
          validation="required|minLength:4"
        />
        <FormKit
          type="email"
          name="email"
          label="Email"
          validation="required|email"
          autocomplete="email"
        />
        <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required|minLength:6"
          :validation-messages="{
            minLength: 'Must be at least 6 characters',
          }"
          autocomplete="new-password"
        />
        <FormKit
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          :validation-messages="{
            customBoolean: 'Passwords do not match',
          }"
          autocomplete="new-password"
        />

        <div class="mb-3">
          <span class="text-xs text-gray-600">
            Already have an account?
            <router-link
              class="btn-xs link-hover text-gray-400"
              to="/login"
            >
              Login
            </router-link>
          </span>
        </div>
      </FormKit>
    </div>
  </div>
</template>

<script setup lang="ts">
const onSubmit = (e: Event) => {
  e.preventDefault();
  console.log('submit');
  // api call
};
</script>