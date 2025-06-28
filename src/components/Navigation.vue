<template>
  <nav class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img src="/paypal-logo.png"  alt="PayPal" class="h-8 w-auto" />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8">
          <!-- Personal with Mega Menu -->
          <div class="relative group" tabindex="0">
            <button
              class="flex items-center text-paypal-blue font-semibold px-4 py-2 text-base transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue"
              aria-haspopup="true"
              :aria-expanded="openMenu === 'personal'"
              @mouseenter="openMenu = 'personal'"
              @mouseleave="openMenu = null"
              @focus="openMenu = 'personal'"
              @blur="openMenu = null"
            >
              Personal
              <svg class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- Personal Mega Menu -->
            <div v-if="openMenu === 'personal'" class="absolute left-0 top-full mt-2 w-[800px] bg-white shadow-2xl rounded-2xl border border-gray-200 opacity-100 visible transition-all duration-300 z-50 animate-slide-down" role="menu" aria-label="Personal">
              <div class="p-8">
                <div class="grid grid-cols-3 gap-8">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 mb-4">Shop & Pay</h3>
                    <ul class="space-y-3">
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Shop Online Securely</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Buyer Protection</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 mb-4">Send Payments</h3>
                    <ul class="space-y-3">
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Send Money</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Pay with PayPal</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 mb-4">Resources</h3>
                    <ul class="space-y-3">
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Help & FAQ</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Security</a></li>
                    </ul>
                  </div>
                </div>
                <!-- Featured Section -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                  <div class="bg-gradient-to-r from-paypal-blue to-paypal-blue-light rounded-xl p-6 text-white flex items-center justify-between">
                    <div>
                      <h4 class="text-lg font-bold mb-2">Get the PayPal app</h4>
                      <p class="text-white/80 mb-4">Send money, track spending, and manage your account on the go.</p>
                      <button class="bg-white text-paypal-blue px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">
                      Download now
                    </button>
                    </div>
                    <img src="/paypal-app-badge.png" alt="App Badge" class="h-10 w-auto ml-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Small Business with Mega Menu -->
          <div class="relative group" tabindex="0">
            <button
              class="flex items-center text-paypal-blue font-semibold px-4 py-2 text-base transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue"
              aria-haspopup="true"
              :aria-expanded="openMenu === 'business'"
              @mouseenter="openMenu = 'business'"
              @mouseleave="openMenu = null"
              @focus="openMenu = 'business'"
              @blur="openMenu = null"
            >
              Small Business
              <svg class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- Small Business Mega Menu -->
            <div v-if="openMenu === 'business'" class="absolute left-0 top-full mt-2 w-[900px] bg-white shadow-2xl rounded-2xl border border-gray-200 opacity-100 visible transition-all duration-300 z-50 animate-slide-down" role="menu" aria-label="Small Business">
              <div class="p-8">
                <div class="grid grid-cols-4 gap-8">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 mb-4">Complete Payments</h3>
                    <ul class="space-y-3">
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Accept Payments</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Online Checkout</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">No Code Checkout</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Invoicing</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Recurring Payments</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Checkout Integration</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 mb-4">Business Operations</h3>
                    <ul class="space-y-3">
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Risk Management</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Dispute Management</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Reporting Tools</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Platforms & Marketplaces</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 mb-4">Resources</h3>
                    <ul class="space-y-3">
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Business Resource Center</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Contact Sales</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Get Started</a></li>
                      <li><a href="#" class="text-gray-700 hover:text-paypal-blue transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Fees</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 mb-4">Featured</h3>
                    <div class="bg-gradient-to-r from-paypal-blue to-paypal-blue-light rounded-xl p-6 text-white flex flex-col items-start">
                      <h4 class="text-lg font-bold mb-2">Business Solutions</h4>
                      <p class="text-white/80 mb-4">Grow your business with PayPal's suite of tools.</p>
                      <button class="bg-white text-paypal-blue px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Business -->
          <a href="#" class="text-gray-700 hover:text-paypal-blue px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">
            Business
          </a>

          <!-- Enterprise -->
          <a href="#" class="text-gray-700 hover:text-paypal-blue px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">
            Enterprise
          </a>

          <!-- Partners -->
          <a href="#" class="text-gray-700 hover:text-paypal-blue px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">
            Partners
          </a>

          <!-- Help & FAQ -->
          <a href="#" class="text-gray-700 hover:text-paypal-blue px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">
            Help & FAQ
          </a>
        </div>

        <!-- Desktop CTA Buttons -->
        <div class="hidden lg:flex lg:items-center lg:space-x-4">
          <button class="text-paypal-blue hover:text-paypal-blue-dark px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">
            Log In
          </button>
          <button class="bg-paypal-blue hover:bg-paypal-blue-dark text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">
            Sign Up
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-700 hover:text-paypal-blue p-2 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">
            <svg v-if="!isOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isOpen" class="lg:hidden bg-white border-t border-gray-200 shadow-lg">
      <div class="px-4 py-6 space-y-4">
        <a href="#" class="block text-gray-700 hover:text-paypal-blue py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Personal</a>
        <a href="#" class="block text-gray-700 hover:text-paypal-blue py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Business</a>
        <a href="#" class="block text-gray-700 hover:text-paypal-blue py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Enterprise</a>
        <a href="#" class="block text-gray-700 hover:text-paypal-blue py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Partners</a>
        <a href="#" class="block text-gray-700 hover:text-paypal-blue py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">Help & FAQ</a>

        <!-- Mobile CTA Buttons -->
        <div class="pt-4 space-y-3">
          <button class="w-full text-paypal-blue hover:text-paypal-blue-dark py-3 text-base font-medium border border-paypal-blue rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">
            Log In
          </button>
          <button class="w-full bg-paypal-blue hover:bg-paypal-blue-dark text-white py-3 rounded-lg text-base font-medium transition-colors duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-paypal-blue">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const openMenu = ref<string | null>(null)
</script>