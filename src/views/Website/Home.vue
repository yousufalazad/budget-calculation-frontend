<template>
    <div class="py-12">
        <!-- Hero Section -->
        <section class="text-left max-w-6xl mx-auto px-6">
            <h1 class="text-5xl text-gray-900 leading-tight">Smart Budget Planning Made Simple</h1>
            <p class="text-lg text-gray-600 mt-3">Track, manage, and plan your finances effortlessly.</p>
            <RouterLink to="/register" class="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
                Get Started
            </RouterLink>
        </section>

        <!-- Features Section -->
        <section class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center">
                <i class="fas fa-chart-line text-4xl text-blue-600"></i>
                <h3 class="text-xl font-semibold text-gray-800 mt-4">Track Your Finances</h3>
                <p class="text-sm text-gray-600 mt-2">Easily log incomes & expenses in real-time.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center">
                <i class="fas fa-sync-alt text-4xl text-blue-600"></i>
                <h3 class="text-xl font-semibold text-gray-800 mt-4">Automate Recurring Income / Expense Counting</h3>
                <p class="text-sm text-gray-600 mt-2">Set up monthly, quarterly, or yearly transactions.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center">
                <i class="fas fa-file-invoice-dollar text-4xl text-blue-600"></i>
                <h3 class="text-xl font-semibold text-gray-800 mt-4">Instant Balance Sheets</h3>
                <p class="text-sm text-gray-600 mt-2">View clear financial reports up to 12 months ahead.</p>
            </div>
        </section>

        <!-- Budget Overview -->
        <section class="mt-16 max-w-6xl mx-auto px-6">
            <h2 class="text-3xl font-semibold text-gray-900 text-center">See Your Financial Summary</h2>
            <div class="mt-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-gray-600 text-center">
                <i class="fas fa-piggy-bank text-5xl text-blue-600"></i>
                <p class="mt-4 text-lg font-medium">Get a real-time preview of your budget breakdown.</p>
            </div>
        </section>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Add custom styles if needed */
</style>
