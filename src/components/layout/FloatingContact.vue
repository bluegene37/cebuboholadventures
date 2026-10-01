<template>
  <!-- Gene - Oct 1, 2026: Floating WhatsApp contact button for desktop and persistent quick-action bottom bar for mobile. -->
  <div>
    <!-- Desktop Floating WhatsApp Button (Bottom-Right) -->
    <aside
      class="hidden md:flex fixed bottom-6 right-6 z-40 items-center group"
      aria-label="Contact via WhatsApp"
    >
      <!-- Tooltip Bubble -->
      <div
        class="opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform translate-x-1 group-hover:translate-x-0 absolute right-full mr-3 whitespace-nowrap bg-slate-900/95 backdrop-blur text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-slate-700/50 flex items-center gap-2"
        role="tooltip"
      >
        <span class="w-2 h-2 rounded-full bg-jungle-500 animate-pulse"></span>
        <span>Chat on WhatsApp (Fast Reply)</span>
        <div class="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-slate-900/95"></div>
      </div>

      <!-- Action Button -->
      <a
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Open WhatsApp conversation"
      >
        <!-- Online Indicator Dot -->
        <span class="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-jungle-500 border-2 border-white"></span>
        </span>

        <MessageSquare class="w-7 h-7" />
      </a>
    </aside>

    <!-- Mobile Persistent Quick-Action Bottom Bar -->
    <nav
      class="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 px-4 py-2 flex items-center gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
      aria-label="Mobile Quick Actions"
    >
      <!-- Browse All Tours -->
      <RouterLink
        to="/tours"
        class="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 active:bg-slate-100 text-slate-800 font-bold text-sm transition-colors"
      >
        <Compass class="w-4 h-4 text-ocean-600" />
        <span>Browse All Tours</span>
      </RouterLink>

      <!-- Quick WhatsApp Button -->
      <a
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da851] text-white font-bold text-sm shadow-sm transition-colors"
      >
        <MessageSquare class="w-4 h-4" />
        <span>Quick WhatsApp</span>
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: Floating WhatsApp contact button for desktop and persistent quick-action bottom bar for mobile.
import { RouterLink } from 'vue-router'
import { Compass, MessageSquare } from 'lucide-vue-next'

const whatsappNumber = '639171234567'
const defaultMessage = 'Hello Cebu Bohol Adventures! I would like to inquire about your private tour packages.'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
</script>
