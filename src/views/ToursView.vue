<template>
  <!-- Gene - Oct 1, 2026: ToursView component with responsive header, search & category filters, reactive tour cards grid, and custom itinerary banner. -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-10">
    <!-- Header Section -->
    <div class="text-center max-w-3xl mx-auto">
      <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3.5 py-1 rounded-full border border-ocean-100">
        100% Private Charters
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-3">
        Cebu & Bohol Tour Packages
      </h1>
      <p class="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
        Choose from hand-crafted day adventures, marine safaris, and multi-day twin island escapes. All tours include dedicated private transportation, licensed guides, and all entrance permits.
      </p>
    </div>

    <!-- Tour Filters & Search Bar Component -->
    <div class="sticky top-20 z-30 pt-2 pb-1 bg-slate-50/95 backdrop-blur-sm">
      <TourFilters />
    </div>

    <!-- Results Status Bar -->
    <div class="flex items-center justify-between text-xs sm:text-sm text-slate-500 px-1">
      <div class="flex items-center gap-2">
        <span class="font-bold text-slate-900">{{ filteredTours.length }}</span>
        <span>{{ filteredTours.length === 1 ? 'Tour Package' : 'Tour Packages' }} Found</span>
      </div>

      <span v-if="searchQuery || selectedCategory !== 'all'" class="text-ocean-600 font-medium">
        Filtered Results
      </span>
    </div>

    <!-- Tours Grid (when tours exist) -->
    <div
      v-if="filteredTours.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      <TourCard
        v-for="tour in filteredTours"
        :key="tour.id"
        :tour="tour"
      />
    </div>

    <!-- Empty State (when filters yield no results) -->
    <div
      v-else
      class="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-14 text-center max-w-md mx-auto space-y-4 shadow-sm"
    >
      <div class="w-16 h-16 rounded-full bg-ocean-50 text-ocean-600 mx-auto flex items-center justify-center">
        <Compass class="w-8 h-8" />
      </div>

      <h3 class="text-xl font-bold text-slate-900">
        No Tours Match Your Criteria
      </h3>
      <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
        We couldn't find any tours matching "<span class="font-semibold text-slate-800">{{ searchQuery }}</span>". Try clearing your search or switching categories.
      </p>

      <button
        type="button"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white font-bold text-xs shadow-sm transition-all focus:outline-none"
        @click="resetAllFilters"
      >
        <RotateCcw class="w-4 h-4" />
        <span>Reset All Filters</span>
      </button>
    </div>

    <!-- Custom Tour Callout Banner -->
    <div class="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl text-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div class="max-w-xl space-y-2">
        <div class="flex items-center gap-2 text-xs font-bold text-amber-300">
          <Sparkles class="w-4 h-4" />
          <span>Tailor-Made Island Tours</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black">
          Need a Custom Route or Different Group Size?
        </h3>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Have special destinations in mind, early flight arrivals, or large corporate groups? We build fully custom private charters at transparent rates.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
        <button
          type="button"
          class="px-6 py-3.5 rounded-xl bg-coral-500 hover:bg-coral-600 active:scale-95 text-white font-bold text-sm shadow transition-all flex items-center justify-center gap-2"
          @click="openBookingModal()"
        >
          <Calendar class="w-4 h-4" />
          <span>Request Custom Tour</span>
        </button>

        <a
          href="https://wa.me/639171234567?text=Hello%20Cebu%20Bohol%20Adventures!%20I%20would%20like%20to%20inquire%20about%20a%20custom%20tour%20itinerary."
          target="_blank"
          rel="noopener noreferrer"
          class="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
        >
          <MessageSquare class="w-4 h-4 text-emerald-400" />
          <span>WhatsApp Concierge</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: ToursView controller synchronizing route query parameters with useTours and booking modal.
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Compass, RotateCcw, Sparkles, Calendar, MessageSquare } from 'lucide-vue-next'
import TourFilters from '../components/tours/TourFilters.vue'
import TourCard from '../components/tours/TourCard.vue'
import { useTours } from '../composables/useTours'
import { useBookingModal } from '../composables/useBookingModal'

const route = useRoute()
const { filteredTours, searchQuery, selectedCategory, sortBy } = useTours()
const { openBookingModal } = useBookingModal()

// Sync route queries on mount and on route changes
function syncRouteQueries() {
  if (route.query.category && typeof route.query.category === 'string') {
    selectedCategory.value = route.query.category
  }
  if (route.query.search && typeof route.query.search === 'string') {
    searchQuery.value = route.query.search
  }
}

onMounted(() => {
  syncRouteQueries()
})

watch(() => route.query, () => {
  syncRouteQueries()
})

function resetAllFilters() {
  searchQuery.value = ''
  selectedCategory.value = 'all'
  sortBy.value = 'popularity'
}
</script>
