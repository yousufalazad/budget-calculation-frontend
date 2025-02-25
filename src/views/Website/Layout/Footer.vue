<template>
    <footer class="w-full bg-gray-900 text-white py-10 px-10">
        <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Footer Column 1: Logo & Description -->
            <div>
                <img src="../../../assets/images/Budget-Calculation-Logo.png" alt="Budget Calculation Logo" class="w-20 mb-4">
                <p class="text-md text-gray-400">
                    Budget Calculation helps you manage and track your finances efficiently.
                </p>
            </div>

            <!-- Footer Column 2: About Company -->
            <div>
                <h2 class="text-lg font-semibold mb-3">Company</h2>
                <ul class="space-y-2">
                    <li><RouterLink to="/about" class="text-gray-400 hover:text-white transition">About Us</RouterLink></li>
                    <li><RouterLink to="" class="text-gray-400 hover:text-white transition">Our Services</RouterLink></li>
                    <li><RouterLink to="/blog" class="text-gray-400 hover:text-white transition">Blog</RouterLink></li>
                </ul>
            </div>

            <!-- Footer Column 3: Support -->
            <div>
                <h2 class="text-lg font-semibold mb-3">Support</h2>
                <ul class="space-y-2">
                    <li><RouterLink to="/contact" class="text-gray-400 hover:text-white transition">Contact Us</RouterLink></li>
                    <li><RouterLink to="" class="text-gray-400 hover:text-white transition">FAQs</RouterLink></li>
                    <li><RouterLink to="" class="text-gray-400 hover:text-white transition">Help Center</RouterLink></li>
                </ul>
            </div>

            <!-- Footer Column 4: Social Media -->
            <div>
                <h2 class="text-lg font-semibold mb-3">Follow Us</h2>
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>

        <!-- Copyright Section -->
        <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            &copy; {{ new Date().getFullYear() }} Budget Calculation. All rights reserved.
        </div>
    </footer>
</template>

<script setup>
</script>
