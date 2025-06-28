<template>
  <section
    class="relative w-full min-h-[520px] flex items-center bg-cover bg-center overflow-hidden"
    style="background-image: url('/paypalme-bg.jpg');"
    aria-label="Get paid quickly with a link"
  >
    <!-- Overlay for better text contrast -->
    <div class="absolute inset-0 bg-black/30"></div>

    <div class="relative z-10 flex flex-col items-start justify-center h-full w-full max-w-7xl mx-auto px-6 py-20">
      <!-- Left: Text Content -->
      <div class="max-w-xl">
        <h2 class="text-white font-bold text-4xl md:text-5xl leading-tight mb-4 drop-shadow-lg" style="font-family: 'PayPal Sans', Arial, sans-serif;">
          Get paid<br />
          quickly with<br />
          a link
                    </h2>
        <p class="text-white text-lg mb-8 drop-shadow-lg" style="font-family: 'PayPal Sans', Arial, sans-serif;">
                        Your personalized PayPal.Me link simplifies getting paid.
                    </p>
        <button
          class="bg-white text-[#003087] font-bold rounded-full px-8 py-3 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition text-lg"
          style="font-family: 'PayPal Sans', Arial, sans-serif;"
        >
                        Learn More About PayPal.Me
                    </button>
                </div>
      <!-- QR Code (desktop) -->
      <div class="hidden md:block absolute right-12 bottom-10 z-20">
        <div class="bg-white rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center w-[140px]">
          <img src="/paypal-qr.png" alt="PayPal QR" class="w-20 h-20 mb-2 rounded-lg" />
          <span class="block text-black font-semibold text-xs text-center">Get the App</span>
                            </div>
                        </div>
      <!-- QR Code (mobile) -->
      <div class="block md:hidden absolute right-4 bottom-4 z-20">
        <div class="bg-white rounded-2xl shadow-lg px-3 py-2 flex flex-col items-center w-[100px]">
          <img src="/paypal-qr.png" alt="PayPal QR" class="w-14 h-14 mb-1 rounded-lg" />
          <span class="block text-black font-semibold text-xs text-center">Get the App</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// No additional logic needed
</script>