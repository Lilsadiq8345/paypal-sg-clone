<template>
  <section class="relative py-24 bg-[#f5f7fa] overflow-x-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-8 flex justify-center items-center min-h-[500px]">
      <!-- Parallax Card -->
      <div class="relative w-full bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between p-8 md:p-12" style="min-height: 380px; max-width: 900px;">
        <!-- Product Image (Parallax Up) -->
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            :style="{ transform: `translateY(${imageOffset}px)` }"
            src="/product.png"
            alt="Espresso machine"
            class="w-[320px] h-[240px] object-contain rounded-2xl shadow-lg transition-transform duration-300"
          />
        </div>
        <!-- Product Info (Parallax Down) -->
        <div class="w-full md:w-1/2 flex flex-col justify-center items-start mt-8 md:mt-0 md:pl-10" :style="{ transform: `translateY(${textOffset}px)` }">
          <h3 class="text-2xl font-bold text-[#222] mb-2">Espresso machine</h3>
          <div class="flex items-center mb-2">
            <span class="text-yellow-400 text-lg">★★★★★</span>
            <span class="ml-2 text-gray-500 text-sm">$120.00</span>
          </div>
          <div class="mb-4">
            <span class="text-gray-600 text-sm">Colour:</span>
            <span class="inline-block w-5 h-5 rounded-full bg-[#222] ml-2 border"></span>
            <span class="inline-block w-5 h-5 rounded-full bg-[#b6c7b0] ml-2 border"></span>
            <span class="inline-block w-5 h-5 rounded-full bg-[#e2cdb0] ml-2 border"></span>
          </div>
          <button class="mt-4 bg-[#ffdc3c] hover:bg-[#ffe066] text-[#003087] font-bold px-8 py-3 rounded-full text-lg shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003087]">
            PayPal
          </button>
        </div>
      </div>
    </div>
    <!-- QR Code (desktop) -->
    <div class="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-20">
      <div class="bg-white rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center w-[140px]">
        <img src="/paypal-qr.png" alt="PayPal QR" class="w-20 h-20 mb-2 rounded-lg" />
        <span class="block text-[#003087] font-semibold text-xs text-center">Get the App</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const imageOffset = ref(0)
const textOffset = ref(0)

const handleScroll = () => {
  const section = document.querySelector('section')
  if (!section) return
  const rect = section.getBoundingClientRect()
  // Parallax only when section is in viewport
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const progress = Math.min(Math.max((window.innerHeight / 2 - rect.top) / rect.height, 0), 1)
    imageOffset.value = -40 * progress // up
    textOffset.value = 40 * progress // down
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script> 