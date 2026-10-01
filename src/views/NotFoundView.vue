<template>
  <!-- Gene - Oct 1, 2026: NotFoundView 404 error page with friendly island illustration, helpful navigation links, and support contact options. -->
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center space-y-8">
    <!-- Icon Illustration -->
    <div class="relative w-24 h-24 mx-auto">
      <div class="w-24 h-24 rounded-3xl bg-ocean-50 text-ocean-600 flex items-center justify-center shadow-inner">
        <Compass class="w-12 h-12 stroke-[1.75] animate-pulse" />
      </div>
      <div class="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-coral-500 text-white flex items-center justify-center font-bold text-xs shadow">
        404
      </div>
    </div>

    <!-- Error Messaging -->
    <div class="space-y-3">
      <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3.5 py-1 rounded-full border border-ocean-100">
        Page Not Found
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
        Looks Like This Island Isn't on Our Map!
      </h1>
      <p class="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
        The page you are looking for might have been moved, renamed, or is currently adrift at sea. Let's steer you back to our tropical adventures.
      </p>
    </div>

    <!-- Navigation Buttons -->
    <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
      <RouterLink
        to="/"
        class="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-ocean-600 hover:bg-ocean-700 active:scale-95 text-white font-bold text-sm shadow transition-all flex items-center justify-center gap-2"
      >
        <Home class="w-4 h-4" />
        <span>Return to Homepage</span>
      </RouterLink>

      <RouterLink
        to="/tours"
        class="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-800 font-bold text-sm transition-all flex items-center justify-center gap-2"
      >
        <Compass class="w-4 h-4 text-ocean-600" />
        <span>Explore All Tours</span>
      </RouterLink>
    </div>

    <!-- WhatsApp Support Helper -->
    <div class="pt-8 border-t border-slate-200 text-xs text-slate-500 space-y-2">
      <p>Need urgent assistance with an existing booking or customized itinerary?</p>
      <a
        href="https://wa.me/639171234567?text=Hello%20Cebu%20Bohol%20Adventures!%20I%20hit%20a%20missing%20page%20and%20need%20assistance."
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
      >
        <MessageSquare class="w-3.5 h-3.5" />
        <span>Chat with Our WhatsApp Support (+63 917 123 4567)</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: NotFoundView component logic for 404 page navigation.
import { RouterLink } from 'vue-router'
import { Compass, Home, MessageSquare } from 'lucide-vue-next'
</script>
