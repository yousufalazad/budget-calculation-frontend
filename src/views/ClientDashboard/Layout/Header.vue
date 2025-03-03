<template>
    <div class="h-screen flex flex-col">
      <!-- Header Navigation -->
      <header class="w-full bg-white shadow-md py-4 px-10 flex justify-between items-center">
        <img src="/src/assets/images/Budget-Calculation-Logo.png" alt="Budget Calculation Logo" class="w-20">
        <nav class="space-x-2">
          <RouterLink to="/" class="px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition">Home</RouterLink>
          <RouterLink to="/logout" class="px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition">Logout</RouterLink>
        </nav>
      </header>
    </div>
  </template>
  
  <script setup></script>
  