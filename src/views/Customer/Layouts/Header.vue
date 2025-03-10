<script setup>
import { authStore } from '@/store/authStore';

const auth = authStore;

const logout = async () => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await auth.fetchProtectedApi("/logout", {}, "POST");

          // Clear frontend authentication status
          auth.isAuthenticated = false;
          auth.user = {};
          sessionStorage.setItem("auth", 0);
          sessionStorage.setItem("user", "{}");
          router.push({ name: "login" });

          Swal.fire({
            icon: "success",
            title: "Logged Out",
            text: "You have been logged out successfully.",
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
        } catch (error) {
          console.error("Logout failed:", error);
          Swal.fire({
            icon: "error",
            title: "Logout Failed",
            text: "There was an issue logging out. Please try again.",
          });
        }
      }
    });
  }
  catch (error) {
    console.log(error);
  }
}

</script>

<template>
    <div class="h-screen flex flex-col">
      <!-- Header Navigation -->
      <header class="w-full bg-white shadow-md px-10 flex justify-between items-center">
        <img src="/src/assets/images/Budget-Calculation-Logo.png" alt="Budget Calculation Logo" class="w-20">
        <nav class="space-x-2">
          <RouterLink to="/" class="px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition">Home</RouterLink>
          <RouterLink @click="logout" class="px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition">Logout</RouterLink>
        </nav>
      </header>
    </div>
  </template>
  

  