<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 class="text-2xl font-bold text-center text-gray-900">Sign In</h2>
  
        <!-- Error Message -->
        <p v-if="errorMessage" class="text-red-500 text-sm text-center mt-2">{{ errorMessage }}</p>
  
        <form @submit.prevent="handleLogin" class="mt-6">
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
  
          <!-- Remember Me & Forgot Password -->
          <div class="flex justify-between items-center text-sm text-gray-600">
            <label class="flex items-center space-x-2">
              <input type="checkbox" v-model="rememberMe" class="h-4 w-4 border-gray-300 rounded" />
              <span>Remember Me</span>
            </label>
            <RouterLink to="/forgot-password" class="text-blue-600 hover:underline">Forgot Password?</RouterLink>
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="mt-6 w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Login
          </button>
        </form>
  
        <!-- Signup Link -->
        <p class="mt-4 text-sm text-center text-gray-600">
          Don't have an account?
          <RouterLink to="/register" class="text-blue-600 hover:underline">Sign Up</RouterLink>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const email = ref("");
  const password = ref("");
  const rememberMe = ref(false);
  const errorMessage = ref("");
  const router = useRouter();
  
  const handleLogin = async () => {
    // Simulated authentication (replace with API call)
    if (email.value === "admin@example.com" && password.value === "password") {
      // Store token/session logic here if needed
      router.push("/dashboard"); // Redirect after login
    } else {
      errorMessage.value = "Invalid email or password.";
    }
  };
  </script>
  