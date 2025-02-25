<template>
  <header class="w-full bg-white shadow-md py-4 px-6 md:px-10 flex justify-between items-center">
    <!-- Logo -->
    <RouterLink to="/">
      <img src="../../../assets/images/Budget-Calculation-Logo.png" alt="Budget Calculation Logo" class="w-20">
    </RouterLink>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-4">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
      <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
      <RouterLink to="/support" class="nav-link">Support</RouterLink>
      <RouterLink to="/blog" class="nav-link">Blog</RouterLink>

      <!-- Show login if not authenticated, else show logout -->
      <RouterLink v-if="!isAuthenticated" to="/login" class="nav-link">Login</RouterLink>
      <button v-else @click="logout" class="nav-link text-red-500">Logout</button>
    </nav>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="md:hidden text-gray-700 focus:outline-none">
      <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <!-- Mobile Navigation (Dropdown) -->
    <div v-if="isMenuOpen"
      class="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 space-y-2">
      <RouterLink @click="toggleMenu" to="/" class="mobile-nav-link">Home</RouterLink>
      <RouterLink @click="toggleMenu" to="/about" class="mobile-nav-link">About</RouterLink>
      <RouterLink @click="toggleMenu" to="/contact" class="mobile-nav-link">Contact</RouterLink>
      <RouterLink @click="toggleMenu" to="/support" class="mobile-nav-link">Support</RouterLink>
      <RouterLink @click="toggleMenu" to="/blog" class="mobile-nav-link">Blog</RouterLink>

      <!-- Show login if not authenticated, else show logout -->
      <RouterLink v-if="!isAuthenticated" @click="toggleMenu" to="/login" class="mobile-nav-link">Login</RouterLink>
      <button v-else @click="logout" class="mobile-nav-link text-red-500">Logout</button>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// State variables
const isMenuOpen = ref(false);
const router = useRouter();

// Check if user is authenticated
const isAuthenticated = computed(() => !!localStorage.getItem('auth_token'));

// Function to toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Logout function
const logout = async () => {
  try {
    const token = localStorage.getItem('auth_token');

    if (token) {
      await axios.post('/api/logout', {}, { headers: { Authorization: `Bearer ${token}` } });
    }

    // Clear auth token from storage
    localStorage.removeItem('auth_token');

    // Redirect to login page
    router.push('/login');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
</script>

<style scoped>
/* Styles for mobile navigation links */
.mobile-nav-link {
  text-decoration: none;
  color: #1F2937;
  font-weight: 500;
}

.mobile-nav-link:hover {
  color: #4CAF50;
}

.nav-link {
  text-decoration: none;
  color: #1F2937;
  font-weight: 500;
}

.nav-link:hover {
  color: #4CAF50;
}
</style>
