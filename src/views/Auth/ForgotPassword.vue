<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 class="text-2xl font-bold text-center text-gray-900">Forgot Password</h2>
  
        <!-- Error Message -->
        <p v-if="errorMessage" class="text-red-500 text-sm text-center mt-2">{{ errorMessage }}</p>
  
        <form @submit.prevent="handleForgotPassword" class="mt-6">
          <!-- Email -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" v-model="email" required
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
  
          <!-- Submit Button -->
          <button type="submit"
            class="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
            Send Reset Link
          </button>
        </form>
  
        <!-- Back to Login -->
        <p class="mt-4 text-sm text-center text-gray-600">
          Remembered your password?
          <RouterLink to="/login" class="text-blue-600 hover:underline">Sign In</RouterLink>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Swal from 'sweetalert2';
  import { authStore } from '../../store/authStore';  // Adjust path as needed
  const auth = authStore();

  const email = ref("");
  const errorMessage = ref("");
  const router = useRouter();
  
  const handleForgotPassword = async () => {
    if (!email.value) {
      errorMessage.value = "Please enter your email.";
      return;
    }
  
    try {
      const response = await auth.fetchPublicApi("/api/forgot-password", { email: email.value }, "POST");
  
      if (response.status) {
        errorMessage.value = "";
        Swal.fire({
          icon: "success",
          title: "Email Sent",
          text: "Password reset link has been sent to your email.",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        });
  
        setTimeout(() => {
          router.push({ name: "login" });
        }, 2000);
      } else {
        errorMessage.value = response.message || "Something went wrong.";
      }
    } catch (error) {
      errorMessage.value = "Failed to send reset link. Please try again.";
    }
  };
  </script>
  