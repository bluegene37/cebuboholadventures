<template>
  <!-- Gene - Oct 1, 2026: AboutView component detailing company mission, DOT accreditation, safety standards, environmental guidelines, modern van fleet, and booking CTA. -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
    <!-- HERO HEADER -->
    <div class="text-center max-w-3xl mx-auto space-y-4">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-700 text-xs sm:text-sm font-bold border border-ocean-200/60">
        <ShieldCheck class="w-4 h-4 text-emerald-600" />
        <span>DOT-Accredited Tour Operator • Central Visayas</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
        Your Trusted Local Guide to
        <span class="text-ocean-600">Cebu & Bohol</span>
      </h1>
      <p class="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
        We specialize in private, stress-free adventures crafted for families, couples, and friends. Discover the world's most breathtaking islands at your own pace.
      </p>
    </div>

    <!-- STATS COUNTER BAR -->
    <div class="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-10 shadow-lg grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div class="space-y-1">
        <p class="text-3xl sm:text-4xl font-black text-ocean-300">100%</p>
        <p class="text-xs sm:text-sm font-semibold text-slate-300">Private Charters</p>
        <p class="text-[11px] text-slate-400">Never shared with strangers</p>
      </div>

      <div class="space-y-1">
        <p class="text-3xl sm:text-4xl font-black text-amber-300">5,000+</p>
        <p class="text-xs sm:text-sm font-semibold text-slate-300">Happy Travelers</p>
        <p class="text-[11px] text-slate-400">From 40+ countries</p>
      </div>

      <div class="space-y-1">
        <p class="text-3xl sm:text-4xl font-black text-emerald-300">5.0 ★</p>
        <p class="text-xs sm:text-sm font-semibold text-slate-300">Average Rating</p>
        <p class="text-[11px] text-slate-400">Verified traveler reviews</p>
      </div>

      <div class="space-y-1">
        <p class="text-3xl sm:text-4xl font-black text-sky-300">10+ Yrs</p>
        <p class="text-xs sm:text-sm font-semibold text-slate-300">Local Guiding</p>
        <p class="text-[11px] text-slate-400">Southern Cebu & Bohol roots</p>
      </div>
    </div>

    <!-- MISSION & STORY -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div class="space-y-5">
        <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3 py-1 rounded-full">
          Our Story & Vision
        </span>
        <h2 class="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
          Born from a Passion for Authentic Island Exploration
        </h2>
        <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
          Cebu Bohol Adventure was founded by native Visayan travel guides who grew tired of watching travelers crammed into massive 40-seat tour buses, hurried through majestic waterfalls in 20 minutes, and hit with surprise fees at every counter.
        </p>
        <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
          We built a different model: <strong>100% private chartered transport</strong>, dedicated native guides who treat you like visiting family, all-inclusive transparent pricing, and flexible itineraries that let you linger where you love.
        </p>

        <div class="pt-2 flex items-center gap-3">
          <RouterLink
            to="/tours"
            class="px-6 py-3.5 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white font-bold text-sm shadow transition-all flex items-center gap-2"
          >
            <span>Explore Our Packages</span>
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>
      </div>

      <!-- Image Card / Accreditation Box -->
      <div class="bg-slate-100 rounded-3xl overflow-hidden border border-slate-200/80 p-6 sm:p-8 space-y-6">
        <!-- DOT Accreditation Badge Card -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck class="w-7 h-7" />
            </div>
            <div>
              <h3 class="text-base font-extrabold text-slate-900">
                Department of Tourism (DOT)
              </h3>
              <p class="text-xs font-semibold text-emerald-700">
                Official Central Visayas Accreditation
              </p>
            </div>
          </div>

          <div class="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
            <div class="flex items-center justify-between">
              <span class="text-slate-500">Accreditation Number:</span>
              <span class="font-mono font-bold text-slate-800">DOT-R07-TOA-00982-2026</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-500">Jurisdiction:</span>
              <span class="font-bold text-slate-800">Region VII (Cebu & Bohol)</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-500">Status:</span>
              <span class="inline-flex items-center gap-1 font-bold text-emerald-600">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                Active & Certified
              </span>
            </div>
          </div>
        </div>

        <div class="text-xs text-slate-500 leading-relaxed">
          * DOT accreditation guarantees compliance with Philippine government passenger transport standards, full liability insurance coverage, and strict employment of officially licensed tour personnel.
        </div>
      </div>
    </section>

    <!-- 4 CORE OPERATIONAL STANDARDS -->
    <section class="space-y-10">
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3 py-1 rounded-full">
          Quality Guarantees
        </span>
        <h2 class="text-2xl sm:text-4xl font-black text-slate-900">
          Our Four Pillars of Service
        </h2>
        <p class="text-sm sm:text-base text-slate-600">
          How we ensure your safety, comfort, and environmental responsibility on every tour.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <!-- 1. Safety Standards -->
        <div class="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <HeartHandshake class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">1. Uncompromising Safety Standards</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every canyon guide and boatman in our network is certified in Basic Life Support (BLS), CPR, and water rescue. We provide standardized US Coast Guard-approved life vests and helmets for all adventure activities.
          </p>
          <ul class="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
            <li class="flex items-center gap-2">
              <CheckCircle class="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Certified water rescue canyoneering guides</span>
            </li>
            <li class="flex items-center gap-2">
              <CheckCircle class="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% Coast Guard weather clearance before all boat launches</span>
            </li>
          </ul>
        </div>

        <!-- 2. Modern Fleet -->
        <div class="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-ocean-50 text-ocean-600 flex items-center justify-center">
            <Car class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">2. Premium Modern Chartered Fleet</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We operate late-model Toyota HiAce vans (Grandia & Commuter Deluxe) configured with high-output dual air-conditioning, plush reclining seating, USB charging ports, and ample rear luggage storage.
          </p>
          <ul class="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
            <li class="flex items-center gap-2">
              <CheckCircle class="w-4 h-4 text-ocean-600 shrink-0" />
              <span>Deep-cleaned and sanitized before every private trip</span>
            </li>
            <li class="flex items-center gap-2">
              <CheckCircle class="w-4 h-4 text-ocean-600 shrink-0" />
              <span>Courteous, drug-tested, and experienced professional drivers</span>
            </li>
          </ul>
        </div>

        <!-- 3. Environmental Ethics -->
        <div class="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Leaf class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">3. Marine & Environmental Conservation</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We strictly enforce the 4-meter non-contact rule with whale sharks in Oslob, ban toxic oxybenzone chemical sunscreens, prohibit flash photography of Bohol tarsiers, and practice Leave No Trace principles in river canyons.
          </p>
          <ul class="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
            <li class="flex items-center gap-2">
              <CheckCircle class="w-4 h-4 text-teal-600 shrink-0" />
              <span>Mandatory briefing on ethical wildlife interaction</span>
            </li>
            <li class="flex items-center gap-2">
              <CheckCircle class="w-4 h-4 text-teal-600 shrink-0" />
              <span>Zero-single-use plastics encouraged on our charter boats</span>
            </li>
          </ul>
        </div>

        <!-- 4. Community Partnership -->
        <div class="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Users class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">4. Empowering Local Communities</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Tourism should benefit the people who call these islands home. We pay above-average wages directly to local boatmen in Oslob, canyon guides in Badian, and floating restaurant staff on the Loboc River.
          </p>
          <ul class="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
            <li class="flex items-center gap-2">
              <CheckCircle class="w-4 h-4 text-amber-600 shrink-0" />
              <span>100% locally-hired guides and boat crews</span>
            </li>
            <li class="flex items-center gap-2">
              <CheckCircle class="w-4 h-4 text-amber-600 shrink-0" />
              <span>Direct support for Visayas marine sanctuary upkeep</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- BOTTOM CTA BANNER -->
    <section class="bg-ocean-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-5 shadow-xl">
      <h2 class="text-2xl sm:text-4xl font-black tracking-tight">
        Experience the Philippines with Confident Care
      </h2>
      <p class="text-sm sm:text-base text-ocean-200 max-w-xl mx-auto leading-relaxed">
        Let our local team handle every fast ferry ticket, private van transfer, and adventure permit so you can relax and create lifelong memories.
      </p>

      <div class="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
        <RouterLink
          to="/tours"
          class="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-coral-500 hover:bg-coral-600 font-bold text-sm transition-all"
        >
          View All Tour Packages
        </RouterLink>
        <RouterLink
          to="/contact"
          class="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-sm border border-white/20 transition-all"
        >
          Contact Our Team
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: AboutView component logic importing routing and Lucide icons.
import { RouterLink } from 'vue-router'
import {
  ShieldCheck,
  ArrowRight,
  Car,
  HeartHandshake,
  Leaf,
  Users,
  CheckCircle
} from 'lucide-vue-next'
</script>
