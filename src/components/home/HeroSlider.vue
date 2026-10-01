<template>
  <!-- Gene - Oct 1, 2026: Authentic Sydney theme full-width hero slider component reproducing the 4 original slides, 5000ms auto-rotation, glassmorphic controls, and touch navigation from WordPress backup. -->
  <section
    class="relative w-full min-h-[620px] lg:min-h-[720px] h-[85vh] max-h-[860px] flex items-center justify-center overflow-hidden bg-slate-950 select-none"
    role="region"
    aria-roledescription="carousel"
    aria-label="Cebu Bohol Adventure Featured Highlights"
    tabindex="0"
    @keydown.left="prevSlide"
    @keydown.right="nextSlide"
    @mouseenter="pauseAutoplay"
    @mouseleave="startAutoplay"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- Slides Track / Transition Container -->
    <div class="absolute inset-0 z-0">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="currentSlideIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
        :aria-hidden="currentSlideIndex !== index"
      >
        <!-- Background Image with subtle scale animation -->
        <img
          :src="slide.image"
          :alt="slide.title"
          class="w-full h-full object-cover object-center filter brightness-[0.82] transition-transform duration-[6000ms] ease-out"
          :class="currentSlideIndex === index ? 'scale-105' : 'scale-100'"
          :loading="index === 0 ? 'eager' : 'lazy'"
        />

        <!-- Multi-layer Gradients for Maximum Contrast and Legibility -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-black/35"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/70"></div>
      </div>
    </div>

    <!-- Active Slide Content Overlay -->
    <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center justify-center w-full h-full">
      <!-- Trust Pill -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold mb-6 shadow-sm animate-fade-in">
        <ShieldCheck class="w-4 h-4 text-emerald-400" />
        <span>DOT-Accredited Tour Operator</span>
        <span class="w-1.5 h-1.5 rounded-full bg-white/40"></span>
        <span class="text-ocean-200">100% Private Charters</span>
      </div>

      <!-- Slide Title & Subtitle Transition -->
      <Transition name="slide-fade" mode="out-in">
        <div :key="currentSlideIndex" class="flex flex-col items-center text-center max-w-4xl">
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
            {{ currentSlide.title }}
          </h1>

          <p class="mt-4 sm:mt-5 text-base sm:text-xl lg:text-2xl text-ocean-100 max-w-2xl font-medium leading-relaxed drop-shadow">
            {{ currentSlide.subtitle }}
          </p>

          <!-- Slide Action Buttons -->
          <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <RouterLink
              :to="currentSlide.primaryBtnUrl"
              class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-coral-500 hover:bg-coral-600 active:scale-95 text-white font-extrabold text-base shadow-lg hover:shadow-coral-500/30 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>{{ currentSlide.primaryBtnText }}</span>
              <ArrowRight class="w-5 h-5" />
            </RouterLink>

            <button
              v-if="currentSlide.secondaryBtnAction === 'modal'"
              type="button"
              class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/15 hover:bg-white/25 active:scale-95 text-white font-bold text-base backdrop-blur-md border border-white/25 shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              @click="openBookingModal()"
            >
              <Calendar class="w-5 h-5 text-ocean-300" />
              <span>{{ currentSlide.secondaryBtnText }}</span>
            </button>

            <RouterLink
              v-else-if="currentSlide.secondaryBtnUrl"
              :to="currentSlide.secondaryBtnUrl"
              class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/15 hover:bg-white/25 active:scale-95 text-white font-bold text-base backdrop-blur-md border border-white/25 shadow-md transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Sparkles class="w-5 h-5 text-amber-300" />
              <span>{{ currentSlide.secondaryBtnText }}</span>
            </RouterLink>
          </div>
        </div>
      </Transition>

      <!-- Trust Badges Overlay Bar at Bottom -->
      <div class="mt-12 sm:mt-16 pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl text-left w-full">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-ocean-300 shrink-0">
            <CheckCircle class="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <p class="text-white text-xs sm:text-sm font-bold">100% Private</p>
            <p class="text-slate-300 text-[11px]">No sharing with strangers</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-amber-300 shrink-0">
            <Sparkles class="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <p class="text-white text-xs sm:text-sm font-bold">Zero Hidden Fees</p>
            <p class="text-slate-300 text-[11px]">All permits & gear included</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-emerald-300 shrink-0">
            <Star class="w-4 h-4 sm:w-5 sm:h-5 fill-emerald-300" />
          </div>
          <div>
            <p class="text-white text-xs sm:text-sm font-bold">5.0 ★ Rated</p>
            <p class="text-slate-300 text-[11px]">5,000+ happy adventurers</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-sky-300 shrink-0">
            <Clock class="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <p class="text-white text-xs sm:text-sm font-bold">Free Cancellation</p>
            <p class="text-slate-300 text-[11px]">Up to 48 hours prior</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows (Left / Right) -->
    <button
      type="button"
      class="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-ocean-400"
      aria-label="Previous Slide"
      @click="prevSlide"
    >
      <ChevronLeft class="w-6 h-6 sm:w-7 sm:h-7" />
    </button>

    <button
      type="button"
      class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-ocean-400"
      aria-label="Next Slide"
      @click="nextSlide"
    >
      <ChevronRight class="w-6 h-6 sm:w-7 sm:h-7" />
    </button>

    <!-- Pagination Dots -->
    <div class="absolute bottom-4 z-30 flex items-center gap-2.5" role="tablist" aria-label="Slider Pagination">
      <button
        v-for="(slide, index) in slides"
        :key="'dot-' + slide.id"
        type="button"
        role="tab"
        :aria-selected="currentSlideIndex === index"
        :aria-label="'Go to slide ' + (index + 1) + ': ' + slide.title"
        class="h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean-400"
        :class="currentSlideIndex === index ? 'w-8 bg-coral-500' : 'w-2.5 bg-white/50 hover:bg-white/80'"
        @click="goToSlide(index)"
      ></button>
    </div>
  </section>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: HeroSlider script setup handling Sydney theme slides, 5-second interval timer, touch swipe detection, and booking modal triggers.
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  Star,
  Clock,
  ArrowRight,
  Calendar
} from 'lucide-vue-next'
import { useBookingModal } from '../../composables/useBookingModal'

const { openBookingModal } = useBookingModal()

interface Slide {
  id: number
  image: string
  title: string
  subtitle: string
  primaryBtnText: string
  primaryBtnUrl: string
  secondaryBtnText?: string
  secondaryBtnUrl?: string
  secondaryBtnAction?: 'modal' | 'link'
}

// Authentic 4 slides extracted from WordPress Sydney theme configuration in database.sql
const slides: Slide[] = [
  {
    id: 1,
    image: '/images/slider/slide-1-welcome.jpg',
    title: 'Welcome to Cebu Bohol Adventure',
    subtitle: 'Feel free to look around',
    primaryBtnText: 'Check Rates & Packages',
    primaryBtnUrl: '/tours',
    secondaryBtnText: 'Customize Itinerary',
    secondaryBtnUrl: '/customize-itinerary',
    secondaryBtnAction: 'link'
  },
  {
    id: 2,
    image: '/images/slider/slide-2-kawasan.jpg',
    title: 'We Offer Cebu Tour Packages & Car Rental',
    subtitle: 'The More... The Cheaper...',
    primaryBtnText: 'View All Rates',
    primaryBtnUrl: '/tours',
    secondaryBtnText: 'Request Custom Quote',
    secondaryBtnAction: 'modal'
  },
  {
    id: 3,
    image: '/images/slider/slide-3-whaleshark.jpg',
    title: 'We Customize Your Itinerary to Cebu, Bohol & Neighboring Islands',
    subtitle: 'Tell us your travel concerns, your budget, your needs.',
    primaryBtnText: 'Design Your Itinerary',
    primaryBtnUrl: '/customize-itinerary',
    secondaryBtnText: 'Book Private Charter',
    secondaryBtnAction: 'modal'
  },
  {
    id: 4,
    image: '/images/slider/slide-4-chocohills.jpg',
    title: 'Years of Experience Traveling with Hundreds of Adventurers',
    subtitle: 'We want you also in our adventure',
    primaryBtnText: 'Explore Tour Packages',
    primaryBtnUrl: '/tours',
    secondaryBtnText: 'Know Us More',
    secondaryBtnUrl: '/about',
    secondaryBtnAction: 'link'
  }
]

const currentSlideIndex = ref(0)
const currentSlide = computed(() => slides[currentSlideIndex.value])

let autoplayTimer: ReturnType<typeof setInterval> | null = null
const SLIDER_SPEED = 5000 // 5000ms authentic Sydney slider speed

function nextSlide() {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.length
}

function prevSlide() {
  currentSlideIndex.value = (currentSlideIndex.value - 1 + slides.length) % slides.length
}

function goToSlide(index: number) {
  currentSlideIndex.value = index
}

function startAutoplay() {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    nextSlide()
  }, SLIDER_SPEED)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

function pauseAutoplay() {
  stopAutoplay()
}

// Touch swipe gestures for mobile
let touchStartX = 0
let touchEndX = 0

function onTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].screenX
  pauseAutoplay()
}

function onTouchEnd(e: TouchEvent) {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
  startAutoplay()
}

function handleSwipe() {
  const diff = touchEndX - touchStartX
  if (diff > 50) {
    prevSlide()
  } else if (diff < -50) {
    nextSlide()
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
