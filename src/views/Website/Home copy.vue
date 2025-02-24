<template>
    <div class="py-12">
        <!-- Hero Section -->
        <section class="text-left max-w-6xl mx-auto">
            <h1 class="text-4xl font-bold text-gray-900">Plan Your Monthly Budget Smartly</h1>
            <p class="text-lg text-gray-600 mt-2">Manage income & expenses with ease.</p>
            <RouterLink to="/register" class="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                Get Started
            </RouterLink>
        </section>

        <!-- Features Section -->
        <section class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800">Track Income & Expenses</h3>
                <p class="text-sm text-gray-600 mt-2">Log your financial transactions in a structured way.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800">Recurring Payments</h3>
                <p class="text-sm text-gray-600 mt-2">Automate monthly, quarterly, or yearly transactions.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800">Monthly Balance Sheet</h3>
                <p class="text-sm text-gray-600 mt-2">View a clean financial summary for up to 12 months.</p>
            </div>
        </section>

        <!-- Balance Sheet Preview -->
        <section class="mt-16 max-w-6xl mx-auto">
            <h2 class="text-2xl font-semibold text-gray-900">Preview Your Budget</h2>
            <div class="mt-4 bg-white p-6 rounded-lg shadow-md border border-gray-200 text-gray-600">
                <p>Here, you can integrate a simple chart or table showing budget insights.</p>
            </div>
        </section>
    </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>
