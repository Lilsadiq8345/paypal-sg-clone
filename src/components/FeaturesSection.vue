<template>
  <section class="relative bg-[#052255] rounded-t-[2.5rem] pt-14 pb-16 overflow-x-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative">
            <!-- Section Header -->
      <div class="mb-10 text-left">
        <h2 class="text-5xl font-bold text-white leading-tight mb-0">Your way to pay,<br class="hidden sm:block">with PayPal</h2>
      </div>
      <!-- Feature Cards Carousel -->
      <div class="relative flex items-center">
        <div class="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
          <!-- Feature 1 -->
          <div class="min-w-[370px] max-w-[370px] h-[220px] bg-white rounded-3xl flex flex-col justify-center px-8 shadow-xl snap-start">
            <h3 class="text-[1.65rem] font-bold text-[#002e6d] leading-tight mb-0">Checkout with a<br />few clicks</h3>
            <div class="flex justify-end mt-8">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f0fa]">
                <svg class="w-6 h-6 text-[#002e6d]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
              </span>
            </div>
                </div>
                <!-- Feature 2 -->
          <div class="min-w-[370px] max-w-[370px] h-[220px] bg-white rounded-3xl flex flex-col justify-center px-8 shadow-xl snap-start">
            <h3 class="text-[1.65rem] font-bold text-[#002e6d] leading-tight mb-0">Confidently send<br />payments</h3>
            <div class="flex justify-end mt-8">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f0fa]">
                <svg class="w-6 h-6 text-[#002e6d]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
              </span>
                    </div>
                </div>
                <!-- Feature 3 -->
          <div class="min-w-[370px] max-w-[370px] h-[220px] bg-white rounded-3xl flex flex-col justify-center px-8 shadow-xl snap-start">
            <h3 class="text-[1.65rem] font-bold text-[#002e6d] leading-tight mb-0">Create a PayPal.Me<br />payment link</h3>
            <div class="flex justify-end mt-8">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f0fa]">
                <svg class="w-6 h-6 text-[#002e6d]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
              </span>
            </div>
                    </div>
          <!-- QR Code Card -->
          <div class="min-w-[170px] max-w-[170px] h-[220px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center ml-4 snap-start">
            <img src="/paypal-qr.png" alt="PayPal QR" class="w-20 h-20 mb-2 rounded-lg" />
            <span class="block text-[#002e6d] font-semibold text-xs text-center">Get the App</span>
                </div>
            </div>
        <!-- Carousel Arrow (right) -->
        <div class="hidden md:flex absolute top-1/2 right-[-32px] -translate-y-1/2 z-20">
          <span class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg border border-[#e6eaf1] cursor-pointer">
            <svg class="w-7 h-7 text-[#002e6d]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
          </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// No additional logic needed for static carousel
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>