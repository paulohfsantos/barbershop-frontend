<template>
  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div class="card-body form-control w-full max-w-md rounded-lg p-5">
      <FormKit
        id="signupForm"
        type="form"
        submit-label="Setup a Reservation"
        @submit="onSubmit"
        :submit-attrs="{
          inputClass: '$reset formkit-input btn btn-primary w-full text-white',
        }"
      >
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
      </FormKit>
    </div>
  </div>
</template>

<script setup lang="ts">
// multi-step form
// Select a Salon -> Make a Reservation -> Confirm Reservation

// import { z } from 'zod';

// const schema = z.object({
//   email: z.string().email(),
//   password: z.string().min(8),
// });

const onSubmit = (e: Event) => {
  e.preventDefault();
  console.log('submit');
  // api call
};
</script>