<template>
  <!-- Gene - Oct 1, 2026: Tour card component featuring responsive image zoom, status badge, duration/pickup info, highlights list, pricing, and booking CTA. -->
  <div
    class="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden h-full"
  >
    <!-- Card Image Container with Hover Zoom -->
    <div class="relative overflow-hidden aspect-[16/10] bg-slate-100">
      <img
        :src="tour.images.hero"
        :alt="tour.title"
        loading="lazy"
        class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        @error="handleImageError"
      />

      <!-- Gradient Overlay for readability -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 group-hover:opacity-70 transition-opacity"></div>

      <!-- Top Badges Overlay -->
      <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
        <!-- Tour Category Badge -->
        <span
          class="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-lg backdrop-blur-md shadow-sm border"
          :class="categoryBadgeClasses"
        >
          {{ formattedCategory }}
        </span>

        <!-- Special Highlight Badge (Best Seller, Adventure, etc.) -->
        <span
          v-if="tour.badge"
          class="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm text-white"
          :class="highlightBadgeClasses"
        >
          {{ tour.badge }}
        </span>
      </div>

      <!-- Bottom overlay info: Quick Duration & Pickup -->
      <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium z-10">
        <span class="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md">
          <Clock class="w-3.5 h-3.5 text-ocean-300" />
          <span>{{ tour.duration }}</span>
        </span>

        <span class="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md max-w-[55%] truncate" :title="tour.pickupLocation">
          <MapPin class="w-3 h-3 text-coral-400 shrink-0" />
          <span class="truncate">{{ shortPickup }}</span>
        </span>
      </div>
    </div>

    <!-- Card Content Body -->
    <div class="p-5 flex-1 flex flex-col">
      <!-- Tour Title -->
      <h3 class="text-lg font-bold text-slate-900 group-hover:text-ocean-600 transition-colors line-clamp-2 min-h-[3.5rem]">
        <RouterLink :to="`/tours/${tour.slug}`">
          {{ tour.title }}
        </RouterLink>
      </h3>

      <!-- Tagline -->
      <p class="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
        {{ tour.tagline }}
      </p>

      <!-- Highlights List (up to 3 bullets) -->
      <div class="mt-4 pt-3 border-t border-slate-100 flex-1">
        <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Tour Highlights</p>
        <ul class="space-y-1.5">
          <li
            v-for="(highlight, idx) in tour.highlights.slice(0, 3)"
            :key="idx"
            class="flex items-start gap-2 text-xs text-slate-700"
          >
            <CheckCircle2 class="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
            <span class="line-clamp-1 leading-snug">{{ highlight }}</span>
          </li>
        </ul>
      </div>

      <!-- Price & CTA Action Section -->
      <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <!-- Price Display -->
        <div class="flex flex-col">
          <span class="text-[11px] text-slate-500 font-medium leading-none">From</span>
          <div class="flex items-baseline gap-1 mt-0.5">
            <span class="text-xl font-extrabold text-slate-900 tracking-tight">₱{{ tour.priceFrom.toLocaleString() }}</span>
            <span class="text-xs text-slate-500 font-medium">/ pax</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-2">
          <!-- View Itinerary Link -->
          <RouterLink
            :to="`/tours/${tour.slug}`"
            class="px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            View Details
          </RouterLink>

          <!-- Book Now Primary Action -->
          <button
            type="button"
            class="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-coral-500 hover:bg-coral-600 shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:scale-95"
            @click="openBookingModal(tour)"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: TourCard component implementation with fallback image handling and booking integration.
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Clock, MapPin, CheckCircle2 } from 'lucide-vue-next'
import type { TourPackage } from '../../data/tours'
import { useBookingModal } from '../../composables/useBookingModal'

interface Props {
  tour: TourPackage
}

const props = defineProps<Props>()

const { openBookingModal } = useBookingModal()

const FALLBACK_IMAGE = '/images/hero/cebu-hero.jpg'

function handleImageError(event: Event) {
  const target = event.target as HTMLImageElement
  if (target && target.src !== FALLBACK_IMAGE) {
    target.src = FALLBACK_IMAGE
  }
}

const formattedCategory = computed(() => {
  switch (props.tour.category) {
    case 'cebu':
      return 'Cebu Tour'
    case 'bohol':
      return 'Bohol Tour'
    case 'combo':
      return 'Cebu & Bohol'
    case 'island-hopping':
      return 'Island Hopping'
    default:
      return props.tour.category
  }
})

const categoryBadgeClasses = computed(() => {
  switch (props.tour.category) {
    case 'cebu':
      return 'bg-ocean-600/90 text-white border-ocean-400/30'
    case 'bohol':
      return 'bg-emerald-600/90 text-white border-emerald-400/30'
    case 'combo':
      return 'bg-purple-600/90 text-white border-purple-400/30'
    case 'island-hopping':
      return 'bg-cyan-600/90 text-white border-cyan-400/30'
    default:
      return 'bg-slate-700/90 text-white border-slate-500/30'
  }
})

const highlightBadgeClasses = computed(() => {
  switch (props.tour.badge) {
    case 'Best Seller':
      return 'bg-amber-500'
    case 'Adventure':
      return 'bg-emerald-600'
    case 'Popular':
      return 'bg-coral-500'
    case 'Relaxing':
      return 'bg-teal-500'
    default:
      return 'bg-ocean-600'
  }
})

const shortPickup = computed(() => {
  const loc = props.tour.pickupLocation
  if (loc.includes(',')) {
    return loc.split(',')[0].trim()
  }
  return loc
})
</script>
