<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const props = defineProps({
  showModal: Boolean,
  transaction: Object,
});
const emit = defineEmits(['close', 'saved']);

const form = ref({
  user_id: '',
  account_id: '',
  title: '',
  type: '',
  amount: '',
  recurring_type_id: '',
  start_date: '',
  notes: '',
  is_active: true,
});

watch(() => props.transaction, (newTransaction) => {
  if (newTransaction) {
    form.value = { ...newTransaction };
  } else {
    resetForm();
  }
});

const resetForm = () => {
  form.value = {
    user_id: '',
    account_id: '',
    title: '',
    type: '',
    amount: '',
    recurring_type_id: '',
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
      await axios.post('/api/transactions', form.value);
      Swal.fire('Success', 'Transaction created successfully', 'success');
    }
    emit('saved');
    emit('close');
  } catch (error) {
    Swal.fire('Error', 'Failed to save transaction', 'error');
  }
};
</script>

<template>
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
        <button @click="emit('close')" class="px-4 py-2 bg-gray-400 text-white rounded mr-2">Cancel</button>
        <button @click="saveTransaction" class="px-4 py-2 bg-green-500 text-white rounded">Save</button>
      </div>
    </div>
  </div>
</template>
