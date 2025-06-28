<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ProductParallaxSection from './components/ProductParallaxSection.vue'
import SendPaymentsSection from './components/SendPaymentsSection.vue'
import PayPalMeSection from './components/PayPalMeSection.vue'
import SecuritySection from './components/SecuritySection.vue'
import JoinMillionsSection from './components/JoinMillionsSection.vue'
import DiscoverWaysSection from './components/DiscoverWaysSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navigation />
  <HeroSection />
  <FeaturesSection />
  <ProductParallaxSection />
  <SendPaymentsSection />
  <PayPalMeSection />
  <SecuritySection />
  <JoinMillionsSection />
  <DiscoverWaysSection />
  <Footer />
</template>

<style scoped>
#app {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>
