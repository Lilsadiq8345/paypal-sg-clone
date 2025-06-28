<template>
  <section class="bg-[#f5f7fa] text-paypal-blue-dark relative overflow-hidden" aria-label="PayPal App Hero">
    <div
      class="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-4 flex flex-col items-center min-h-[600px] z-10 transition-all duration-500 ease-out"
      :class="headlineScrolled ? 'translate-y-[-60px] opacity-60' : 'translate-y-0 opacity-100'"
    >
      <span class="block text-base font-semibold text-[#003087] mb-2 tracking-wide">The PayPal App</span>
      <h1
        class="font-paypal text-[#003087] text-[2.75rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] mb-2 tracking-tight text-center"
        ref="headlineRef"
      >
        Pay easy, fast,<br />and secure.
          </h1>
      <button class="mt-2 mb-6 bg-[#003087] hover:bg-[#001c44] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003087]">Get the App</button>
      <!-- QR Card (desktop) -->
      <div class="hidden md:flex items-center bg-white rounded-2xl shadow-lg px-6 py-4 mt-2 mb-8 w-[340px] absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <div class="flex-1">
          <span class="block text-paypal-blue-dark font-semibold text-base">Discover the PayPal app<br>and all your options</span>
          <span class="block text-paypal-blue text-sm mt-1 font-medium">Get the App</span>
          </div>
        <img src="/paypal-qr.png" alt="PayPal QR" class="w-16 h-16 ml-4 rounded-lg" />
          </div>
        </div>
    <!-- Video and Phone Mockup Section -->
    <div class="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center pb-16 z-10 -mt-24 sm:-mt-32 md:-mt-40">
      <div class="relative w-full max-w-[1100px] h-[520px] sm:h-[600px] md:h-[650px] lg:h-[700px] rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-2xl bg-white">
                  <video 
          class="absolute inset-0 w-full h-full object-cover z-0"
          src="/hero-bg.mp4"
                    autoplay 
                    loop 
                    muted 
                    playsinline
          aria-hidden="true"
                  ></video>
        <!-- Overlayed phone mockup -->
        <!-- (Phone mockup image here if needed) -->
        <!-- Floating QR (mobile) -->
        <div class="md:hidden absolute bottom-[-60px] right-0 bg-white rounded-2xl shadow-lg px-4 py-2 flex items-center w-[260px] z-20">
          <img src="/paypal-qr.png" alt="PayPal QR" class="w-12 h-12 mr-3 rounded-lg" />
          <div>
            <span class="block text-paypal-blue-dark font-semibold text-sm">Get the App</span>
            <span class="block text-paypal-blue text-xs">Scan QR to download</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom Divider -->
    <div class="absolute bottom-0 left-0 right-0 pointer-events-none select-none z-20" aria-hidden="true">
      <svg class="w-full h-16 text-[#f5f7fa]" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, Ref } from 'vue'

const headlineRef = ref<HTMLElement | null>(null)
const headlineScrolled = ref(false)

const onScroll = () => {
  if (!headlineRef.value) return
  const rect = headlineRef.value.getBoundingClientRect()
  headlineScrolled.value = rect.top < 80
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>