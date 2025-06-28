<template>
  <section class="relative w-full bg-white overflow-hidden" aria-label="Safe, private, secure">
    <!-- Top: Heading, Subtitle, Button -->
    <div class="flex flex-col items-center justify-center pt-12 pb-4 z-10 relative">
      <h2 class="text-[#002e5f] font-extrabold text-3xl sm:text-4xl md:text-5xl text-center mb-4" style="font-family: 'PayPal Sans', Arial, sans-serif;">
        Safe, private, secure
      </h2>
      <p class="text-[#222] text-base sm:text-lg text-center mb-8 max-w-xl">
        Your data is encrypted, keeping your sensitive financial info safe.
      </p>
      <button
        class="bg-[#003087] text-white font-bold rounded-full px-6 sm:px-8 py-3 shadow-lg hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#003087] focus:ring-offset-2 transition text-base sm:text-lg"
        style="font-family: 'PayPal Sans', Arial, sans-serif;"
      >
        More About Security
      </button>
    </div>
    <!-- Responsive Oval Image + QR -->
    <div class="relative w-full flex justify-center items-end mt-2 pb-8 sm:pb-12">
      <div class="w-full flex justify-center">
        <img
          src="/security-hero.jpg"
          alt="Person working securely on laptop"
          class="block w-full max-w-[1200px] h-auto transition-transform duration-300"
          :style="{
            objectFit: 'cover',
            display: 'block',
            minHeight: '180px',
            maxHeight: '420px',
            transform: `scale(${scale})`
          }"
        />
      </div>
      <!-- QR Code (desktop only) -->
      <div class="hidden md:block absolute right-16 bottom-8 z-20">
        <div class="bg-white rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center w-[140px]">
          <img src="/paypal-qr.png" alt="PayPal QR" class="w-20 h-20 mb-2 rounded-lg" />
          <span class="block text-black font-semibold text-xs text-center">Get the App</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scale = ref(1)

const handleScroll = () => {
  // Adjust these values for your preferred effect
  const scrollY = window.scrollY || window.pageYOffset
  // Clamp scale between 1 and 1.15 for a subtle zoom
  const minScale = 1
  const maxScale = 1.15
  const maxScroll = 400 // px after which the zoom stops increasing
  const newScale = minScale + ((Math.min(scrollY, maxScroll) / maxScroll) * (maxScale - minScale))
  scale.value = newScale
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>