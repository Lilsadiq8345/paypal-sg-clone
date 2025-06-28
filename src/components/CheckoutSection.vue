<template>
    <section class="relative py-24 bg-[#f5f7fa]">
        <div class="max-w-3xl mx-auto px-4 sm:px-8 text-center">
            <h2 class="text-4xl sm:text-5xl font-bold text-[#003087] mb-6 leading-tight">Simplified online checkout</h2>
            <p class="text-lg text-[#001c44] mb-10 max-w-2xl mx-auto leading-relaxed">
                Shop with your PayPal account at millions of brands worldwide. Rest easy knowing PayPal Buyer Protection has your back while shopping.<sup class='align-super text-xs'>1</sup>
            </p>
            <button class="bg-[#003087] hover:bg-[#001c44] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003087]">
                        Check out with PayPal
                    </button>
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
// No additional logic needed
</script>