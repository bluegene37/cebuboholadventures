<template>
  <!-- Gene - Oct 1, 2026: TourFilters component with category pill filters, responsive search bar, and sort selector connected to useTours. -->
  <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-5">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <!-- Search Input Bar -->
      <div class="relative flex-1 max-w-xl">
        <label for="tour-search-input" class="sr-only">Search tours and activities</label>
        <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Search class="w-4 h-4" />
        </div>
        <input
          id="tour-search-input"
          v-model="searchQuery"
          type="search"
          placeholder="Search by tour, destination, or activity (e.g. Oslob, Kawasan, Bohol)..."
          class="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:bg-white transition-all"
        />
        <button
          v-if="searchQuery"
          type="button"
          class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Clear search"
          @click="searchQuery = ''"
        >
          <X class="w-4 h-4" />
        </button>
      </div>

      <!-- Sort Dropdown Selector -->
      <div class="flex items-center gap-2 self-start lg:self-auto">
        <label for="tour-sort-select" class="text-xs font-semibold text-slate-500 whitespace-nowrap flex items-center gap-1.5">
          <ArrowUpDown class="w-3.5 h-3.5 text-slate-400" />
          <span>Sort by:</span>
        </label>
        <div class="relative">
          <select
            id="tour-sort-select"
            v-model="sortBy"
            class="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl pl-3 pr-8 py-2.5 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all cursor-pointer"
          >
            <option value="popularity">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="duration">Duration (Shortest first)</option>
          </select>
          <div class="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-slate-400">
            <ChevronDown class="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>

    <!-- Category Pills Section -->
    <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
      <!-- Category Pills List -->
      <div class="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar" role="tablist" aria-label="Tour Categories">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          role="tab"
          :aria-selected="selectedCategory === cat.id"
          class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500"
          :class="[
            selectedCategory === cat.id
              ? 'bg-ocean-600 text-white shadow-sm ring-2 ring-ocean-600/30'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
          ]"
          @click="selectedCategory = cat.id"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Quick Reset Button (Visible when filters are active) -->
      <button
        v-if="hasActiveFilters"
        type="button"
        class="text-xs font-semibold text-ocean-600 hover:text-ocean-700 hover:underline flex items-center gap-1 px-2 py-1"
        @click="resetFilters"
      >
        <RotateCcw class="w-3 h-3" />
        <span>Reset Filters</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: TourFilters logic connecting reactive useTours composable state to the UI controls.
import { computed } from 'vue'
import { Search, X, ChevronDown, ArrowUpDown, RotateCcw } from 'lucide-vue-next'
import { useTours, type TourCategoryOption } from '../../composables/useTours'

const { selectedCategory, searchQuery, sortBy } = useTours()

interface CategoryTab {
  id: TourCategoryOption
  label: string
}

const categories: CategoryTab[] = [
  { id: 'all', label: 'All Tours' },
  { id: 'cebu', label: 'Cebu Tours' },
  { id: 'bohol', label: 'Bohol Tours' },
  { id: 'island-hopping', label: 'Island Hopping' },
  { id: 'combo', label: 'Combo Packages' }
]

const hasActiveFilters = computed(() => {
  return (
    selectedCategory.value !== 'all' ||
    searchQuery.value.trim().length > 0 ||
    sortBy.value !== 'popularity'
  )
})

function resetFilters() {
  selectedCategory.value = 'all'
  searchQuery.value = ''
  sortBy.value = 'popularity'
}
</script>
