<template>
  <!-- Gene - Oct 1, 2026: Glassmorphic sticky top navigation bar with brand logo, desktop links, mobile drawer, and booking modal trigger. -->
  <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Brand Logo & Name -->
        <RouterLink
          to="/"
          class="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 rounded-xl py-1"
          aria-label="Cebu Bohol Adventure Home"
          @click="closeMobileMenu"
        >
          <div class="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <!-- Gene - Oct 1, 2026: Replaced generic placeholder SVG with original Cebu Bohol Adventure palm tree logo from WordPress backup -->
            <img src="/images/logo.png" alt="Cebu Bohol Adventure Logo" class="w-11 h-11 object-contain drop-shadow-sm" />
            <!--
            // Gene - Oct 1, 2026: Previous generic placeholder SVG preserved below
            <svg class="w-10 h-10 drop-shadow-sm" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="36" height="36" rx="10" fill="#0284c7" />
              <path d="M6 24C10 18 15 18 19 22C23 26 27 22 30 19" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="23" cy="11.5" r="4.5" fill="#ea580c" />
              <path d="M8 27C12 23 16 23 20 25.5C23 27.5 26 26.5 28 25" stroke="#e0f2fe" stroke-width="1.75" stroke-linecap="round" />
            </svg>
            -->
          </div>
          <div class="flex flex-col">

            <span class="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-none group-hover:text-ocean-600 transition-colors">
              Cebu Bohol <span class="text-ocean-600">Adventure</span>
            </span>
            <span class="text-[10px] font-bold tracking-widest uppercase text-slate-500 mt-1 flex items-center gap-1.5">
              <span>Premier Tours</span>
              <span class="w-1 h-1 rounded-full bg-ocean-400"></span>
              <span class="text-ocean-700">DOT Accredited</span>
            </span>
          </div>
        </RouterLink>

        <!--
        // Gene - Oct 1, 2026: Previous 4-link desktop navigation preserved below:
        <nav class="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-ocean-600 hover:bg-ocean-50/70 transition-all duration-150"
            active-class="text-ocean-600 font-semibold bg-ocean-50/90"
          >
            {{ link.name }}
          </RouterLink>
        </nav>
        -->

        <!-- Gene - Oct 1, 2026: Restored all 8 authentic WordPress navigation items with responsive desktop view, dropdown for medium screens, and full mobile drawer. -->
        <nav class="hidden md:flex items-center gap-0.5 lg:gap-1" aria-label="Main Navigation">
          <RouterLink
            v-for="link in primaryNavLinks"
            :key="link.to"
            :to="link.to"
            class="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-700 hover:text-ocean-600 hover:bg-ocean-50/80 transition-all duration-150 whitespace-nowrap"
            active-class="text-ocean-600 font-bold bg-ocean-50"
          >
            {{ link.name }}
          </RouterLink>

          <!-- Displayed directly on XL screens -->
          <template v-for="link in secondaryNavLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="hidden xl:inline-flex px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-700 hover:text-ocean-600 hover:bg-ocean-50/80 transition-all duration-150 whitespace-nowrap"
              active-class="text-ocean-600 font-bold bg-ocean-50"
            >
              {{ link.name }}
            </RouterLink>
          </template>

          <!-- 'More' Dropdown for MD/LG screens -->
          <div class="relative xl:hidden" @mouseenter="isMoreOpen = true" @mouseleave="isMoreOpen = false">
            <button
              type="button"
              class="px-2.5 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-ocean-600 hover:bg-ocean-50/80 transition-all flex items-center gap-1"
              :class="{ 'text-ocean-600 bg-ocean-50': isMoreOpen }"
              :aria-expanded="isMoreOpen"
              @click="isMoreOpen = !isMoreOpen"
            >
              <span>More</span>
              <ChevronDown class="w-3.5 h-3.5 transition-transform duration-200" :class="{ 'rotate-180': isMoreOpen }" />
            </button>

            <div
              v-if="isMoreOpen"
              class="absolute right-0 top-full mt-1 w-48 bg-white rounded-2xl border border-slate-200 shadow-xl py-2 z-50"
            >
              <RouterLink
                v-for="link in secondaryNavLinks"
                :key="link.to"
                :to="link.to"
                class="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-ocean-600 hover:bg-ocean-50 transition-colors"
                active-class="text-ocean-600 bg-ocean-50/70 font-bold"
                @click="isMoreOpen = false"
              >
                <component :is="link.icon" class="w-3.5 h-3.5 text-slate-400" />
                <span>{{ link.name }}</span>
              </RouterLink>
            </div>
          </div>
        </nav>

        <!-- Right Action Items (Desktop) -->
        <div class="hidden md:flex items-center gap-4">
          <!-- Hotline Phone Link -->
          <a
            href="tel:+639171234567"
            class="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-ocean-600 transition-colors px-2 py-1"
            title="Call 24/7 Booking Hotline"
          >
            <div class="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
              <Phone class="w-3.5 h-3.5" />
            </div>
            <span class="tabular-nums">+63 917 123 4567</span>
          </a>

          <!-- Book Now Primary Action Button -->
          <button
            type="button"
            class="inline-flex items-center gap-2 bg-coral-500 hover:bg-coral-600 active:bg-coral-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-offset-2"
            @click="openBookingModal()"
          >
            <Calendar class="w-4 h-4" />
            <span>Book Now</span>
          </button>
        </div>

        <!-- Mobile Hamburger Toggle -->
        <div class="flex items-center gap-2 md:hidden">
          <button
            type="button"
            class="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-colors"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle Navigation Menu"
            @click="toggleMobileMenu"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6 text-slate-900" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer / Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl"
      >
        <!--
        // Gene - Oct 1, 2026: Previous 4-link mobile navigation preserved below:
        <nav class="flex flex-col gap-1 pb-4" aria-label="Mobile Navigation">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-medium text-slate-800 hover:text-ocean-600 hover:bg-ocean-50 transition-colors"
            active-class="text-ocean-600 font-bold bg-ocean-50"
            @click="closeMobileMenu"
          >
            <span>{{ link.name }}</span>
            <Compass class="w-4 h-4 text-slate-400" />
          </RouterLink>
        </nav>
        -->

        <!-- Gene - Oct 1, 2026: Restored all 8 authentic WordPress navigation items with icons in mobile drawer -->
        <nav class="flex flex-col gap-1 pb-4 max-h-[60vh] overflow-y-auto" aria-label="Mobile Navigation">
          <RouterLink
            v-for="link in allNavLinks"
            :key="link.to"
            :to="link.to"
            class="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:text-ocean-600 hover:bg-ocean-50 transition-colors"
            active-class="text-ocean-600 font-bold bg-ocean-50"
            @click="closeMobileMenu"
          >
            <div class="flex items-center gap-3">
              <component :is="link.icon" class="w-4 h-4 text-ocean-600" />
              <span>{{ link.name }}</span>
            </div>
            <span class="text-xs text-slate-400 font-normal">→</span>
          </RouterLink>
        </nav>

        <div class="pt-3 border-t border-slate-100 flex flex-col gap-3">
          <!-- Mobile Book Now CTA -->
          <button
            type="button"
            class="w-full flex items-center justify-center gap-2 bg-coral-500 hover:bg-coral-600 active:bg-coral-700 text-white py-3 px-4 rounded-xl font-bold text-base shadow-sm active:scale-[0.99] transition-all"
            @click="handleMobileBookNow"
          >
            <Calendar class="w-5 h-5" />
            <span>Book Tour</span>
          </button>

          <!-- Direct Hotline Call Button -->
          <a
            href="tel:+639175207191"
            class="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
            @click="closeMobileMenu"
          >
            <Phone class="w-4 h-4 text-ocean-600" />
            <span>Call Hotline: +63 917 520 7191</span>
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: Responsive navigation bar component with glassmorphic styling, desktop links, mobile drawer, and booking modal trigger.
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  Compass,
  Menu,
  X,
  Phone,
  Calendar,
  ChevronDown,
  Home,
  Sliders,
  CreditCard,
  BookOpen,
  MapPin,
  Users
} from 'lucide-vue-next'
import { useBookingModal } from '../../composables/useBookingModal'

const { openBookingModal } = useBookingModal()

const isMobileMenuOpen = ref(false)
const isMoreOpen = ref(false)

/*
// Gene - Oct 1, 2026: Previous 4 navLinks preserved below:
const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'All Tours', to: '/tours' },
  { name: 'About Us', to: '/about' },
  { name: 'Contact', to: '/contact' }
]
*/

// Gene - Oct 1, 2026: All 8 authentic WordPress menu items from backup
export interface NavItem {
  name: string
  to: string
  icon: any
}

const primaryNavLinks: NavItem[] = [
  { name: 'Home', to: '/', icon: Home },
  { name: 'Rates & Packages', to: '/tours', icon: Compass },
  { name: 'Customize Itinerary', to: '/customize-itinerary', icon: Sliders }
]

const secondaryNavLinks: NavItem[] = [
  { name: 'Pay Here', to: '/payment', icon: CreditCard },
  { name: 'Blog', to: '/blog', icon: BookOpen },
  { name: 'Travel Helps', to: '/destinations', icon: MapPin },
  { name: 'About', to: '/about', icon: Users },
  { name: 'Contact', to: '/contact', icon: Phone }
]

const allNavLinks: NavItem[] = [
  ...primaryNavLinks,
  ...secondaryNavLinks
]

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  isMoreOpen.value = false
}

function handleMobileBookNow() {
  closeMobileMenu()
  openBookingModal()
}
</script>
