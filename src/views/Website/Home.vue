<template>
    <div class="h-screen flex flex-col">
        <!-- Header Navigation -->
        <header class="w-full bg-white shadow-md py-4 px-10 flex justify-between items-center">
            <h1 class="text-2xl font-semibold text-gray-800">Budget Calculation</h1>
            <nav class="space-x-3">
                <RouterLink to="/" class="px-4 py-2 text-gray-700 hover:text-green-600 transition">Home</RouterLink>

                <RouterLink to="/about" class="px-4 py-2 text-gray-700 hover:text-green-600 transition">About</RouterLink>
                <RouterLink to="/contact" class="px-4 py-2 text-gray-700 hover:text-green-600 transition">Contact</RouterLink>
                <RouterLink to="/support" class="px-4 py-2 text-gray-700 hover:text-green-600 transition">Support</RouterLink>
            </nav>
        </header>

        <!-- Main Content -->
        <main class="flex flex-grow items-center justify-center">
            <h1 class="text-4xl font-bold text-gray-900">Welcome to Budget Calculation Application</h1>
        </main>
    </div>
</template>

<script setup></script>
