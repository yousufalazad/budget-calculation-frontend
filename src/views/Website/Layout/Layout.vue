<script setup>
import Header from '@/views/Website/Layout/Header.vue';
import Footer from '@/views/Website/Layout/Footer.vue';
</script>

<template>
    <div class="h-screen flex flex-col">
        <Header></Header>

        <main class="flex-grow bg-gray-100">
            <div >
                <RouterView />
            </div>
        </main>

        <Footer></Footer>
    </div>
</template>


