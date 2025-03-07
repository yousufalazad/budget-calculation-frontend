<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
    <div class="h-screen flex flex-col">
        <Header />

        <main class="flex-grow bg-gray-100">
            <div >
                <router-view />
            </div>
        </main>

        <Footer />
    </div>
</template>


