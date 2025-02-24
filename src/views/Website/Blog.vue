<template>
    <div class="py-12">
      <!-- Blog Section -->
      <section class="max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold text-gray-900">Our Blog</h1>
        <p class="mt-4 text-lg text-gray-600">Get the latest updates, tips, and insights about budgeting and financial planning.</p>
      </section>
  
      <!-- Blog Posts -->
      <section class="mt-16 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 class="text-xl font-semibold text-gray-800">How to Create a Smart Budget</h3>
          <p class="text-gray-600 mt-2">Learn the fundamentals of setting up a budget that works for you, no matter your financial situation.</p>
          <RouterLink to="#" class="mt-4 text-blue-600 hover:underline">Read More</RouterLink>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 class="text-xl font-semibold text-gray-800">Tips for Managing Recurring Expenses</h3>
          <p class="text-gray-600 mt-2">Discover simple strategies to manage your recurring expenses and save more every month.</p>
          <RouterLink to="#" class="mt-4 text-blue-600 hover:underline">Read More</RouterLink>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 class="text-xl font-semibold text-gray-800">The Benefits of Tracking Your Budget</h3>
          <p class="text-gray-600 mt-2">Understand why tracking your budget is one of the most effective ways to control your financial future.</p>
          <RouterLink to="#" class="mt-4 text-blue-600 hover:underline">Read More</RouterLink>
        </div>
      </section>
    </div>
  </template>
  
  <script setup></script>
  