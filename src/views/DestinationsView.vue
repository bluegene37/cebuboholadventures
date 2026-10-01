<template>
  <!-- Gene - Oct 1, 2026: DestinationsView component reproducing authentic 'Popular Destinations & Travel Helps' (post 922) with destination profiles, ferry/travel tips, and related tour shortcuts. -->
  <div class="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto">
      <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3.5 py-1.5 rounded-full">
        Visitor Guides & Travel Helps
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
        Popular Destinations & Travel Helps
      </h1>
      <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
        Essential travel notes, logistics guides, and top attractions across Cebu, Bohol, and neighboring Central Visayas islands.
      </p>
    </div>

    <!-- Practical Travel Helps Accordion / Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
        <div class="w-10 h-10 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center">
          <Sun class="w-5 h-5" />
        </div>
        <h3 class="text-base font-bold text-slate-900">Best Time to Visit</h3>
        <p class="text-xs text-slate-600 leading-relaxed">
          The tropical dry season runs from <strong>December to May</strong> with calm seas and sunny skies. The whale sharks in Oslob and sardines in Moalboal are visible year-round.
        </p>
      </div>

      <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
        <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
          <Ship class="w-5 h-5" />
        </div>
        <h3 class="text-base font-bold text-slate-900">Cebu to Bohol Ferries</h3>
        <p class="text-xs text-slate-600 leading-relaxed">
          Fastcraft ferries (OceanJet, SuperCat) depart Cebu Pier 1 to Tagbilaran Port every 1-2 hours. Travel time is just 2 hours. Our Bohol day tours include round-trip ferry tickets!
        </p>
      </div>

      <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
        <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
          <Luggage class="w-5 h-5" />
        </div>
        <h3 class="text-base font-bold text-slate-900">What to Bring</h3>
        <p class="text-xs text-slate-600 leading-relaxed">
          Aqua shoes (essential for canyoneering rocks), reef-safe sunscreen, dry bag / waterproof phone pouch, extra swimwear, and cash for souvenirs in countryside towns.
        </p>
      </div>
    </div>

    <!-- Destination Highlights Showcase -->
    <div class="space-y-8">
      <div class="border-b border-slate-200 pb-4">
        <h2 class="text-2xl font-black text-slate-900">Featured Destination Profiles</h2>
        <p class="text-xs sm:text-sm text-slate-500">Click any destination to see its attractions and private tour options.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="dest in destinations"
          :key="dest.id"
          class="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
        >
          <div class="relative h-60 overflow-hidden bg-slate-100">
            <img
              :src="dest.image"
              :alt="dest.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[11px] font-bold uppercase tracking-wider text-ocean-300">
                {{ dest.tag }}
              </span>
              <h3 class="text-xl font-extrabold text-white">
                {{ dest.name }}
              </h3>
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ dest.description }}
            </p>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500">
                {{ dest.tourCount || 1 }} Private Tour Available
              </span>
              <RouterLink
                to="/tours"
                class="inline-flex items-center gap-1 text-xs font-bold text-ocean-600 hover:text-ocean-700 transition-colors"
              >
                <span>View Tours</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Customized Request CTA -->
    <div class="bg-gradient-to-r from-ocean-600 to-sky-700 rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
      <div class="space-y-2 text-center sm:text-left">
        <h3 class="text-2xl sm:text-3xl font-black text-white">Want a Combined Multi-Destination Route?</h3>
        <p class="text-xs sm:text-sm text-ocean-100 max-w-xl">
          Tell us which places you'd like to combine (e.g. Oslob + Kawasan in one day, or Cebu + Bohol 3D2N) and we'll calculate the optimal sequence for you.
        </p>
      </div>

      <RouterLink
        to="/customize-itinerary"
        class="shrink-0 px-8 py-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-extrabold text-sm shadow-lg hover:shadow-coral-500/25 transition-all"
      >
        Customize Your Route
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: Script setup for DestinationsView with destinations data and travel logistics helpers.
import { RouterLink } from 'vue-router'
import { Sun, Ship, Luggage, ArrowRight } from 'lucide-vue-next'
import { destinations } from '../data/destinations'
</script>
