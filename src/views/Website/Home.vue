<template>
    <div class="py-16">
        <!-- Hero Section -->
        <section class="max-w-6xl mx-auto px-6 text-center">
            <h1 class="text-4xl text-gray-900 leading-tight tracking-tight">
                View your current & next month’s income, expenses, and savings
            </h1>
            <p class="mt-4 text-lg text-gray-600">
                Effortlessly track, manage, and plan your finances with our intuitive platform.
            </p>
            <RouterLink
                to="/register"
                class="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
                Get Started
            </RouterLink>
        </section>

        <!-- Free Service Message -->
        <section class="mt-20 bg-white py-8 px-6 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
            <p class="text-lg text-gray-700">
                <span class="text-2xl text-blue-600">It's Free!</span>
                Our service will always be free for everyone, forever. No hidden fees, just pure simplicity.
            </p>
        </section>

        <!-- Features Section -->
        <section class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 px-6 max-w-6xl mx-auto">
            <div class="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <i class="fas fa-chart-line text-4xl text-gray-700"></i>
                <h3 class="mt-6 text-xl font-semibold text-gray-800">Track Your Finances</h3>
                <p class="mt-4 text-sm text-gray-600">Easily log incomes and expenses in real-time.</p>
            </div>

            <div class="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <i class="fas fa-sync-alt text-4xl text-gray-700"></i>
                <h3 class="mt-6 text-xl font-semibold text-gray-800">Automate Recurring Transactions</h3>
                <p class="mt-4 text-sm text-gray-600">Set up and manage your recurring income/expenses with ease.</p>
            </div>

            <div class="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <i class="fas fa-file-invoice-dollar text-4xl text-gray-700"></i>
                <h3 class="mt-6 text-xl font-semibold text-gray-800">Instant Balance Sheets</h3>
                <p class="mt-4 text-sm text-gray-600">Access detailed financial reports up to 12 months ahead.</p>
            </div>
        </section>

        <!-- Budget Overview -->
        <section class="mt-20 px-6 max-w-6xl mx-auto">
            <h2 class="text-3xl font-semibold text-gray-900 text-center">See Your Financial Summary</h2>
            <div class="mt-8 bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center">
                <i class="fas fa-piggy-bank text-5xl text-gray-700"></i>
                <p class="mt-6 text-lg font-medium text-gray-600">
                    Get a real-time preview of your budget breakdown and stay on track with your goals.
                </p>
            </div>
        </section>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Add any additional custom styles if needed */
</style>
