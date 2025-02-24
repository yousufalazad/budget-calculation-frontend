<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 class="text-2xl font-bold text-center text-gray-900">Create an Account</h2>
  
        <!-- Error Message -->
        <p v-if="errorMessage" class="text-red-500 text-sm text-center mt-2">{{ errorMessage }}</p>
  
        <form @submit.prevent="handleRegister" class="mt-6">
          <!-- Name -->
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              v-model="name"
              required
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
  
          <!-- Email -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
  
          <!-- Password -->
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
  
          <!-- Confirm Password -->
          <div class="mb-4">
            <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              v-model="confirmPassword"
              required
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <p v-if="passwordMismatch" class="text-red-500 text-xs mt-1">Passwords do not match.</p>
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="mt-6 w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Register
          </button>
        </form>
  
        <!-- Login Link -->
        <p class="mt-4 text-sm text-center text-gray-600">
          Already have an account?
          <RouterLink to="/login" class="text-blue-600 hover:underline">Sign In</RouterLink>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const confirmPassword = ref("");
  const errorMessage = ref("");
  const router = useRouter();
  
  const passwordMismatch = ref(false);
  
  const handleRegister = async () => {
    if (password.value !== confirmPassword.value) {
      passwordMismatch.value = true;
      return;
    } else {
      passwordMismatch.value = false;
    }
  
    // Simulated registration (replace with API call)
    if (email.value && password.value) {
      // Simulated success, store user data/session logic if needed
      router.push("/dashboard"); // Redirect after registration
    } else {
      errorMessage.value = "Registration failed. Please try again.";
    }
  };
  </script>
  