<template>
  <section
    class="relative w-full min-h-[540px] flex flex-col md:flex-row items-start md:items-center justify-center bg-[#0070e0] overflow-hidden px-2 py-8"
    aria-label="Send payments your way"
  >
    <!-- Overlay image -->
    <div class="hidden md:block absolute left-0 right-2 top-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] z-0 pointer-events-none">
      <img src="/screen2.png" alt="Decorative overlay" class="w-full h-full object-contain object-center" />
    </div>
    <!-- Main Card + Avatars -->
    <div
      class="relative flex items-center justify-center w-full max-w-[420px] min-w-[220px] min-h-[220px] sm:min-w-[320px] sm:min-h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] mx-auto mb-8 md:mb-0"
    >
    </div>
    <!-- Right: Text + Button -->
    <div class="flex-1 flex left-0 right-0 flex-col items-start justify-center pl-0 md:pl-12 max-w-[520px] w-full mt-8 md:mt-0">
      <h1 class="text-white font-extrabold text-2xl sm:text-3xl md:text-[2.5rem] md:text-[2.75rem] leading-tight mb-4 text-left" style="font-family: 'PayPal Sans', Arial, sans-serif;">
        Send payments<br />
        your way
      </h1>
      <p class="text-white text-base sm:text-lg mb-8 max-w-[380px] leading-snug text-left" style="font-family: 'PayPal Sans', Arial, sans-serif;">
        You can pay for goods and services conveniently, from shopping at local businesses to paying individuals for projects.
      </p>
      <button
        class="bg-white text-[#003087] font-bold rounded-full px-6 py-3 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition text-base sm:text-lg"
        aria-label="Send Payments Securely"
        style="font-family: 'PayPal Sans', Arial, sans-serif;"
      >
        Send Payments Securely
      </button>
    </div>

    <!-- QR Code (desktop) -->
    <div class="hidden md:block absolute right-4 bottom-4 z-20">
      <div class="bg-white rounded-2xl shadow-lg px-4 py-3 flex flex-col items-center w-[100px]">
        <img src="/paypal-qr.png" alt="PayPal QR" class="w-14 h-14 mb-1 rounded-lg" />
        <span class="block text-black font-semibold text-xs text-center">Get the App</span>
      </div>
    </div>
    <!-- QR Code (mobile) -->
    <div class="block md:hidden absolute right-2 bottom-2 z-20">
      <div class="bg-white rounded-2xl shadow-lg px-2 py-1 flex flex-col items-center w-[70px]">
        <img src="/paypal-qr.png" alt="PayPal QR" class="w-10 h-10 mb-1 rounded-lg" />
        <span class="block text-black font-semibold text-xs text-center">Get the App</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed
</script>
