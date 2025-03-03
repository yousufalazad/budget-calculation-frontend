<script setup>
import { ref } from 'vue';

const isSidebarExpanded = ref(true);
const openSections = ref([]);

const toggleSidebar = () => {
    isSidebarExpanded.value = !isSidebarExpanded.value;
};

const toggleSection = (section) => {
    if (openSections.value.includes(section)) {
        openSections.value = openSections.value.filter(s => s !== section);
    } else {
        openSections.value.push(section);
    }
};

const isSectionOpen = (section) => openSections.value.includes(section);
</script>
<template>
        <nav class="flex-1 px-2 py-4 space-y-2">

          <!-- Static Links -->
          <router-link to="/org-dashboard/dashboard-initial-content"
            class="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <span v-if="isSidebarExpanded">Home</span>
            <span v-else class="hidden">Home</span>
          </router-link>

          <router-link to="/org-dashboard/member-list"
            class="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <span v-if="isSidebarExpanded">Transaction</span>
            <span v-else class="hidden">Transaction</span>
          </router-link>

          <!-- Report section -->
          <div>
            <button @click="toggleSection('income')"
              class="w-full text-left px-4 py-2 flex items-center justify-between text-gray-600 hover:bg-gray-100 rounded-md">
              <span v-if="isSidebarExpanded">Income</span>
              <svg v-if="isSectionOpen('income')" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
              </svg>
            </button>
            <div v-if="isSectionOpen('income') && isSidebarExpanded" class="space-y-1">
              <router-link to="/org-dashboard/org-report"
                class="block px-4 ml-2 text-gray-500 py-2 hover:bg-gray-100">Income</router-link>
              <router-link to="/org-dashboard/org-expense-report"
                class="block px-4 ml-2 text-gray-500 py-2 hover:bg-gray-100">Expense</router-link>

            </div>
          </div>

          <!-- expense Section -->
          <div>
            <button @click="toggleSection('expense')"
              class="w-full text-left px-4 py-2 flex items-center justify-between text-gray-600 hover:bg-gray-100 rounded-md">
              <span v-if="isSidebarExpanded">Expense</span>
              <svg v-if="isSectionOpen('expense')" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
              </svg>
            </button>
            <div v-if="isSectionOpen('expense') && isSidebarExpanded" class="space-y-1">
              <router-link to="/org-dashboard/my-account/expense"
                class="block px-4 ml-2 text-gray-500 py-2 hover:bg-gray-100">One time</router-link>
              <router-link to="/org-dashboard/fundamental-info"
                class="block px-4 ml-2 text-gray-500 py-2 hover:bg-gray-100">Monthly</router-link>
              <router-link to="/org-dashboard/founders"
                class="block px-4 ml-2 text-gray-500 py-2 hover:bg-gray-100">Founders</router-link>
              <router-link to="/org-dashboard/strategic-plan"
                class="block px-4 ml-2 text-gray-500 py-2 hover:bg-gray-100">Quarterly</router-link>
              <router-link to="/org-dashboard/recognition"
                class="block px-4 ml-2 text-gray-500 py-2 hover:bg-gray-100">Half yearly</router-link>
              <router-link to="/org-dashboard/success-story"
                class="block px-4 ml-2 text-gray-500 py-2 hover:bg-gray-100">Yearly</router-link>
              <router-link to="/org-dashboard/history"
                class="block px-4 ml-2 text-gray-500 py-2 hover:bg-gray-100">Bi-weekly</router-link>
              <router-link to="/org-dashboard/year-plan"
                class="block px-4 ml-2 text-gray-500 py-2 hover:bg-gray-100">Fortnightly</router-link>
            </div>
          </div>
        </nav>
</template>