<template>
  <!-- Gene - Oct 1, 2026: HomeView component featuring responsive hero banner, signature tours showcase, top destination explorer, trust guarantees, verified reviews, and WhatsApp CTA. -->
  <div class="space-y-16 sm:space-y-24 pb-16">
    <!-- Gene - Oct 1, 2026: Replaced static hero with Sydney-style full-width hero slider using authentic images and copy from WordPress backup. Previous static hero section preserved commented out below. -->
    <HeroSlider />

    <!--
    // Gene - Oct 1, 2026: Previous static hero section preserved below:
    <section class="relative min-h-[580px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-slate-950">
      <div class="absolute inset-0 z-0">
        <img
          src="/images/hero/cebu-hero.jpg"
          alt="Cebu turquoise waters and tropical coastline"
          class="w-full h-full object-cover object-center filter brightness-90 transform scale-105 transition-transform duration-1000"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-black/40"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/40"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <ShieldCheck class="w-4 h-4 text-emerald-400" />
          <span>DOT-Accredited Operator</span>
          <span class="w-1.5 h-1.5 rounded-full bg-white/40"></span>
          <span class="text-ocean-200">100% Private Charters</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl leading-[1.15]">
          Unforgettable Private Adventures in
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 via-sky-200 to-amber-200">
            Cebu & Bohol
          </span>
        </h1>

        <p class="mt-5 text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed">
          Swim with gentle whale sharks in Oslob, plunge into turquoise canyons in Kawasan, and marvel at Bohol's Chocolate Hills—all in modern private air-conditioned comfort.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <RouterLink
            to="/tours"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-coral-500 hover:bg-coral-600 active:scale-95 text-white font-extrabold text-base shadow-lg hover:shadow-coral-500/25 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Explore All Tours</span>
            <ArrowRight class="w-5 h-5" />
          </RouterLink>

          <button
            type="button"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-base backdrop-blur-md border border-white/20 shadow-md transition-all duration-200 flex items-center justify-center gap-2"
            @click="openBookingModal()"
          >
            <Calendar class="w-5 h-5 text-ocean-300" />
            <span>Request Custom Itinerary</span>
          </button>
        </div>

        <div class="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl text-left w-full">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-ocean-300 shrink-0">
              <CheckCircle class="w-5 h-5" />
            </div>
            <div>
              <p class="text-white text-xs sm:text-sm font-bold">100% Private</p>
              <p class="text-slate-300 text-[11px]">No sharing with strangers</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-amber-300 shrink-0">
              <Sparkles class="w-5 h-5" />
            </div>
            <div>
              <p class="text-white text-xs sm:text-sm font-bold">Zero Hidden Fees</p>
              <p class="text-slate-300 text-[11px]">All permits & gear included</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-emerald-300 shrink-0">
              <Star class="w-5 h-5 fill-emerald-300" />
            </div>
            <div>
              <p class="text-white text-xs sm:text-sm font-bold">5.0 ★ Rated</p>
              <p class="text-slate-300 text-[11px]">5,000+ happy travelers</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-sky-300 shrink-0">
              <Clock class="w-5 h-5" />
            </div>
            <div>
              <p class="text-white text-xs sm:text-sm font-bold">Free Cancellation</p>
              <p class="text-slate-300 text-[11px]">Up to 48 hours prior</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    -->

    <!-- SIGNATURE FEATURED TOURS SECTION -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3 py-1 rounded-full">
            Most Popular Packages
          </span>
          <h2 class="text-2xl sm:text-4xl font-black text-slate-900 mt-2">
            Signature Adventures
          </h2>
          <p class="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
            Our most requested, highest-rated private day tours and multi-day packages.
          </p>
        </div>

        <RouterLink
          to="/tours"
          class="inline-flex items-center gap-1.5 text-sm font-bold text-ocean-600 hover:text-ocean-700 hover:underline shrink-0"
        >
          <span>View All 7 Packages</span>
          <ArrowRight class="w-4 h-4" />
        </RouterLink>
      </div>

      <!-- Tours Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <TourCard
          v-for="tour in featuredTours"
          :key="tour.id"
          :tour="tour"
        />
      </div>

      <!-- Mobile View All Button -->
      <div class="mt-8 text-center md:hidden">
        <RouterLink
          to="/tours"
          class="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-bold text-sm shadow"
        >
          <span>Browse All Tour Packages</span>
          <ArrowRight class="w-4 h-4" />
        </RouterLink>
      </div>
    </section>

    <!-- TOP DESTINATIONS SECTION -->
    <section class="bg-slate-100/70 py-16 sm:py-20 border-y border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3 py-1 rounded-full">
            Explore Visayas
          </span>
          <h2 class="text-2xl sm:text-4xl font-black text-slate-900 mt-2">
            Top Destinations in Cebu & Bohol
          </h2>
          <p class="text-sm sm:text-base text-slate-600 mt-2">
            From majestic coastal sanctuaries and emerald rivers to thousand-year-old geological wonders and pristine white sand islands.
          </p>
        </div>

        <!-- Destinations Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <RouterLink
            v-for="dest in destinations"
            :key="dest.id"
            :to="getDestinationLink(dest.id)"
            class="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col"
          >
            <!-- Image Container with Zoom -->
            <div class="relative aspect-[16/11] overflow-hidden bg-slate-900">
              <img
                :src="dest.image"
                :alt="dest.name"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                @error="handleImageError"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>

              <!-- Top Tour Count Badge -->
              <div v-if="dest.tourCount" class="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                {{ dest.tourCount }} {{ dest.tourCount === 1 ? 'Tour' : 'Tours' }}
              </div>

              <!-- Bottom Content Overlay -->
              <div class="absolute bottom-3 left-4 right-4 text-white">
                <span class="text-[11px] font-bold uppercase tracking-wider text-ocean-300 block">
                  {{ dest.tag }}
                </span>
                <h3 class="text-xl font-black tracking-tight text-white group-hover:text-ocean-200 transition-colors">
                  {{ dest.name }}
                </h3>
              </div>
            </div>

            <!-- Description -->
            <div class="p-5 flex-1 flex flex-col justify-between">
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {{ dest.description }}
              </p>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-ocean-600 group-hover:text-ocean-700">
                <span>View {{ dest.name }} Itineraries</span>
                <ChevronRight class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US (TRUST POINTS) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3 py-1 rounded-full">
          The Premier Advantage
        </span>
        <h2 class="text-2xl sm:text-4xl font-black text-slate-900 mt-2">
          Why Travel With Us?
        </h2>
        <p class="text-sm sm:text-base text-slate-600 mt-2">
          We believe island holidays should be seamless, safe, and tailored around you—never packed into crowded tour buses on rigid schedules.
        </p>
      </div>

      <!-- Trust Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- 1. 100% Private Charters -->
        <div class="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-2xl bg-ocean-50 text-ocean-600 flex items-center justify-center mb-5">
            <Car class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">100% Private Charters</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every booking is exclusively for your party in a late-model Toyota HiAce van with dual cold air-conditioning. You set the pace and photo stops.
          </p>
        </div>

        <!-- 2. DOT Accredited -->
        <div class="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
            <ShieldCheck class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">DOT-Accredited Operator</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Officially certified by the Philippine Department of Tourism (License: DOT-R07-TOA-00982-2026), ensuring compliant passenger insurance and safety protocols.
          </p>
        </div>

        <!-- 3. Zero Hidden Fees -->
        <div class="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
            <Sparkles class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">Transparent All-In Rates</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            No surprise fuel surcharges or hidden environmental permit fees on the day. What you see is exactly what you get, clearly itemized.
          </p>
        </div>

        <!-- 4. Expert Local Guides -->
        <div class="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
            <Users class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">Certified Local Guides</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our guides are native to Southern Cebu and Bohol, trained in water rescue and first aid. They know every secret vantage point and GoPro angle.
          </p>
        </div>

        <!-- 5. Free 48-Hour Cancellation -->
        <div class="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5">
            <CalendarCheck class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">Free 48h Cancellation</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Travel plans change. We offer hassle-free cancellation up to 48 hours prior to your tour, plus 100% weather guarantees if coast guard grounds boats.
          </p>
        </div>

        <!-- 6. 24/7 WhatsApp Support -->
        <div class="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
            <MessageSquare class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">24/7 Real-Time Support</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Direct communication on WhatsApp with our local reservation team before, during, and after your trip. Quick answers to every travel question.
          </p>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section class="bg-slate-900 text-white py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span class="text-xs font-bold uppercase tracking-wider text-ocean-400 bg-ocean-950/80 border border-ocean-800 px-3 py-1 rounded-full">
            Real Experiences
          </span>
          <h2 class="text-2xl sm:text-4xl font-black text-white mt-2">
            What Our Travelers Say
          </h2>
          <p class="text-sm sm:text-base text-slate-300 mt-2">
            Read verified feedback from adventurers who explored Cebu and Bohol with our private team.
          </p>
        </div>

        <!-- Reviews Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div
            v-for="review in reviews.slice(0, 3)"
            :key="review.id"
            class="bg-slate-800/80 rounded-3xl p-6 sm:p-7 border border-slate-700 flex flex-col justify-between"
          >
            <div>
              <!-- Star Rating -->
              <div class="flex items-center gap-1 text-amber-400 mb-4">
                <Star v-for="s in review.rating" :key="s" class="w-4 h-4 fill-amber-400" />
              </div>

              <!-- Quote -->
              <p class="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                "{{ review.comment }}"
              </p>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between">
              <div>
                <p class="text-sm font-bold text-white">{{ review.name }}</p>
                <p class="text-xs text-slate-400">{{ review.location }}</p>
              </div>

              <span v-if="review.date" class="text-[11px] text-slate-500 font-medium">
                {{ review.date }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHATSAPP CTA BANNER -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-ocean-700 via-ocean-600 to-slate-900 text-white p-8 sm:p-12 shadow-xl">
        <div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div class="max-w-2xl space-y-3">
            <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-300/30">
              <Sparkles class="w-3.5 h-3.5" />
              <span>Personalized Concierge</span>
            </span>
            <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Plan Your Dream Visayas Vacation?
            </h2>
            <p class="text-sm sm:text-base text-ocean-100 leading-relaxed">
              Chat directly with our Cebu & Bohol trip designers on WhatsApp. We reply within minutes with customized routes, group pricing, and friendly advice.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href="https://wa.me/639171234567?text=Hello%20Cebu%20Bohol%20Adventures!%20I%20would%20like%20to%20plan%20a%20private%20tour."
              target="_blank"
              rel="noopener noreferrer"
              class="px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-extrabold text-sm sm:text-base shadow-lg flex items-center justify-center gap-2.5 transition-all"
            >
              <MessageSquare class="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              type="button"
              class="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-sm sm:text-base border border-white/20 transition-all flex items-center justify-center gap-2"
              @click="openBookingModal()"
            >
              <Calendar class="w-5 h-5 text-ocean-200" />
              <span>Send Web Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: HomeView component logic importing featured tours, destinations, and booking modal handlers.
import { RouterLink } from 'vue-router'
import {
  ShieldCheck,
  ArrowRight,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  Clock,
  Car,
  Users,
  CalendarCheck,
  MessageSquare,
  ChevronRight
} from 'lucide-vue-next'
import TourCard from '../components/tours/TourCard.vue'
// Gene - Oct 1, 2026: Imported HeroSlider reproducing authentic WordPress Sydney theme slider
import HeroSlider from '../components/home/HeroSlider.vue'
import { useTours } from '../composables/useTours'
import { useBookingModal } from '../composables/useBookingModal'
import { destinations } from '../data/destinations'
import { reviews } from '../data/reviews'

const { getFeaturedTours } = useTours()
const { openBookingModal } = useBookingModal()

const featuredTours = getFeaturedTours()

const FALLBACK_IMAGE = '/images/hero/cebu-hero.jpg'

function handleImageError(event: Event) {
  const target = event.target as HTMLImageElement
  if (target && target.src !== FALLBACK_IMAGE) {
    target.src = FALLBACK_IMAGE
  }
}

function getDestinationLink(destId: string): string {
  switch (destId) {
    case 'oslob':
    case 'badian':
    case 'moalboal':
      return '/tours?category=cebu'
    case 'bohol':
      return '/tours?category=bohol'
    case 'bantayan':
      return '/tours?category=island-hopping'
    default:
      return '/tours'
  }
}
</script>
