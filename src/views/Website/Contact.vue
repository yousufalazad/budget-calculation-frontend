<template>
    <div class="py-12">
      <section class="max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p class="mt-4 text-lg text-gray-600">We'd love to hear from you. Reach out to us for any queries or feedback.</p>
      </section>
  
      <!-- Contact Form -->
      <section class="mt-8 max-w-6xl mx-auto px-6">
        <form action="#" method="POST" class="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div class="mb-4">
            <label for="name" class="block text-lg font-semibold text-gray-800">Name</label>
            <input type="text" id="name" name="name" class="mt-2 w-full p-3 border border-gray-300 rounded-md" required />
          </div>
  
          <div class="mb-4">
            <label for="email" class="block text-lg font-semibold text-gray-800">Email</label>
            <input type="email" id="email" name="email" class="mt-2 w-full p-3 border border-gray-300 rounded-md" required />
          </div>
  
          <div class="mb-4">
            <label for="message" class="block text-lg font-semibold text-gray-800">Message</label>
            <textarea id="message" name="message" class="mt-2 w-full p-3 border border-gray-300 rounded-md" rows="4" required></textarea>
          </div>
  
          <button type="submit" class="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
            Send Message
          </button>
        </form>
      </section>
    </div>
  </template>
  
  <script setup></script>
  