<script setup>
import { ref, onMounted } from 'vue';
import { authStore } from '@/store/authStore';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const auth = authStore;
const router = useRouter();
const showModal = ref(false);
const transactions = ref([]);
const form = ref({
  account_id: '',
  title: '',
  type: '',
  amount: '',
  recurring_type_id: '',
  start_date: '',
  notes: '',
  is_active: true,
});

const fetchTransactions = async () => {
  try {
    const response = await axios.get('/api/transactions');
    transactions.value = response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
};

// const fetchTransactions = async () => {
//   try {
//     const response = await auth.fetchProtectedApi('/api/transactions');
//     transactions.value = response.data;
//   } catch (error) {
//     console.error('Error fetching transactions:', error);
//   }
// };

onMounted(fetchTransactions);

const openModal = (data = null) => {
  if (data) {
    form.value = { ...data };
  } else {
    resetForm();
  }
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const resetForm = () => {
  form.value = {
    user_id: '1',
    account_id: '1',
    title: '',
    type: '',
    amount: '',
    recurring_type_id: '1',
    start_date: '',
    notes: '',
    is_active: true,
  };
};

const saveTransaction = async () => {
  try {
    if (form.value.id) {
      await axios.put(`/api/transactions/${form.value.id}`, form.value);
      Swal.fire('Success', 'Transaction updated successfully', 'success');
    } else {
        console.log(form.value);
      await axios.post('/api/transactions', form.value);
      Swal.fire('Success', 'Transaction created successfully', 'success');
    }
    closeModal();
    fetchTransactions();
  } catch (error) {
    Swal.fire('Error', 'Failed to save transaction', 'error');
  }
};

const deleteTransaction = async (id) => {
  try {
    await axios.delete(`/api/transactions/${id}`);
    Swal.fire('Deleted', 'Transaction deleted successfully', 'success');
    fetchTransactions();
  } catch (error) {
    Swal.fire('Error', 'Failed to delete transaction', 'error');
  }
};
</script>

<template>
  <div class="p-4">
    <div class="flex justify-between mb-4">
      <button @click="router.push('/')" class="px-4 py-2 bg-blue-500 text-white rounded">Back to Home</button>
      <button @click="openModal()" class="px-4 py-2 bg-green-500 text-white rounded">Create Transaction</button>
    </div>

    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">Title</th>
          <th class="border p-2">Amount</th>
          <th class="border p-2">Type</th>
          <th class="border p-2">Start Date</th>
          <th class="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id" class="border">
          <td class="border p-2">{{ transaction.title }}</td>
          <td class="border p-2">{{ transaction.amount }}</td>
          <td class="border p-2">{{ transaction.type }}</td>
          <td class="border p-2">{{ transaction.start_date }}</td>
          <td class="border p-2 flex gap-2">
            <button @click="openModal(transaction)" class="px-2 py-1 bg-yellow-500 text-white rounded">Edit</button>
            <button @click="deleteTransaction(transaction.id)" class="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-lg font-semibold mb-4">{{ form.id ? 'Edit Transaction' : 'New Transaction' }}</h2>
        
        <div class="space-y-4">
          <input v-model="form.title" type="text" placeholder="Title" class="w-full p-2 border rounded" />
          <input v-model="form.amount" type="number" placeholder="Amount" class="w-full p-2 border rounded" />
          <select v-model="form.type" class="w-full p-2 border rounded">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input v-model="form.start_date" type="date" class="w-full p-2 border rounded" />
          <textarea v-model="form.notes" placeholder="Notes" class="w-full p-2 border rounded"></textarea>
        </div>

        <div class="flex justify-end mt-4">
          <button @click="closeModal" class="px-4 py-2 bg-gray-400 text-white rounded mr-2">Cancel</button>
          <button @click="saveTransaction" class="px-4 py-2 bg-green-500 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>
