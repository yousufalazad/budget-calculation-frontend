<template>
    <div class="h-screen flex flex-col">
        <Header></Header>

        <main class="flex-grow bg-gray-100">
            <div class="max-w-7xl mx-auto px-4">
                <RouterView />
            </div>
        </main>

        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from '@/views/Website/Layout/Header.vue';
import Footer from '@/views/Website/Layout/Footer.vue';
</script>
