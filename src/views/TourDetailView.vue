<template>
  <!-- Gene - Oct 1, 2026: TourDetailView component featuring breadcrumbs, image gallery, hour-by-hour itinerary timeline, inclusions/exclusions, what-to-bring tips, sticky pricing table, and related tours. -->
  <div v-if="tour" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
    <!-- Breadcrumb Navigation -->
    <nav aria-label="Breadcrumbs" class="flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap pb-1">
      <RouterLink to="/" class="hover:text-ocean-600 transition-colors">Home</RouterLink>
      <ChevronRight class="w-3.5 h-3.5 text-slate-400 shrink-0" />
      <RouterLink to="/tours" class="hover:text-ocean-600 transition-colors">All Tours</RouterLink>
      <ChevronRight class="w-3.5 h-3.5 text-slate-400 shrink-0" />
      <span class="text-slate-900 font-semibold truncate">{{ tour.title }}</span>
    </nav>

    <!-- Tour Header Section -->
    <div class="space-y-3 pb-6 border-b border-slate-200">
      <!-- Category & Highlight Badges -->
      <div class="flex items-center gap-2 flex-wrap">
        <span class="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg" :class="categoryBadgeClasses">
          {{ formattedCategory }}
        </span>
        <span v-if="tour.badge" class="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg bg-coral-500 text-white shadow-sm">
          {{ tour.badge }}
        </span>
        <span class="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center gap-1.5">
          <ShieldCheck class="w-3.5 h-3.5" />
          <span>DOT Accredited</span>
        </span>
      </div>

      <!-- Tour Title -->
      <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
        {{ tour.title }}
      </h1>

      <!-- Tagline -->
      <p class="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
        {{ tour.tagline }}
      </p>

      <!-- Quick Metrics Bar -->
      <div class="pt-3 flex items-center flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700">
        <div class="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl">
          <Clock class="w-4 h-4 text-ocean-600" />
          <span>{{ tour.duration }}</span>
        </div>

        <div class="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl max-w-md truncate" :title="tour.pickupLocation">
          <MapPin class="w-4 h-4 text-coral-500 shrink-0" />
          <span class="truncate">Pickup: {{ tour.pickupLocation }}</span>
        </div>

        <div class="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl">
          <Car class="w-4 h-4 text-emerald-600" />
          <span>100% Private Charter</span>
        </div>
      </div>
    </div>

    <!-- Main Two-Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      <!-- LEFT COLUMN: Gallery, Highlights, Itinerary, Inclusions/Exclusions, Tips (Span 7 or 8) -->
      <div class="lg:col-span-7 xl:col-span-8 space-y-10 sm:space-y-12">
        <!-- 1. Interactive Image Gallery -->
        <section aria-label="Tour Photo Gallery">
          <ImageGallery
            :hero-image="tour.images.hero"
            :gallery-images="tour.images.gallery"
            :title="tour.title"
          />
        </section>

        <!-- 2. Tour Highlights -->
        <section class="space-y-4">
          <div class="flex items-center gap-2">
            <Sparkles class="w-5 h-5 text-amber-500" />
            <h2 class="text-xl sm:text-2xl font-black text-slate-900">
              Tour Highlights
            </h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div
              v-for="(highlight, idx) in tour.highlights"
              :key="idx"
              class="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm"
            >
              <CheckCircle2 class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span class="text-xs sm:text-sm text-slate-800 leading-snug font-medium">
                {{ highlight }}
              </span>
            </div>
          </div>
        </section>

        <!-- 3. Hour-by-Hour Itinerary Timeline -->
        <section class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <Clock class="w-5 h-5 text-ocean-600" />
              <h2 class="text-xl sm:text-2xl font-black text-slate-900">
                Detailed Itinerary
              </h2>
            </div>
            <span class="text-xs text-slate-500 font-medium">
              Flexible private pace
            </span>
          </div>

          <div class="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-sm">
            <ol class="relative border-l-2 border-ocean-200 ml-3 sm:ml-4 space-y-6 sm:space-y-8 my-2">
              <li
                v-for="(item, idx) in tour.itinerary"
                :key="idx"
                class="ml-6 sm:ml-8 group"
              >
                <!-- Dot Marker -->
                <span class="absolute -left-[9px] mt-1.5 w-4 h-4 rounded-full border-2 border-white bg-ocean-600 shadow-sm ring-4 ring-ocean-100 group-hover:bg-coral-500 group-hover:ring-coral-100 transition-all"></span>

                <!-- Time Badge -->
                <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-ocean-50 text-ocean-700 text-xs font-bold mb-1">
                  <span>{{ item.time }}</span>
                </div>

                <!-- Activity Title -->
                <h3 class="text-sm sm:text-base font-bold text-slate-900 group-hover:text-ocean-600 transition-colors">
                  {{ item.activity }}
                </h3>

                <!-- Notes / Description -->
                <p v-if="item.notes" class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {{ item.notes }}
                </p>
              </li>
            </ol>
            <p class="text-[11px] text-slate-400 mt-6 pt-4 border-t border-slate-100">
              * Note: Exact itinerary timing is estimated and may vary depending on local traffic, weather conditions, and whale shark queue times. Since this is a 100% private charter, our driver adapts to your preferred pace.
            </p>
          </div>
        </section>

        <!-- 4. Inclusions & Exclusions -->
        <section class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-black text-slate-900">
            Inclusions & Exclusions
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Inclusions Card -->
            <div class="bg-emerald-50/40 rounded-3xl border border-emerald-200/60 p-6 space-y-4 shadow-sm">
              <div class="flex items-center gap-2 text-emerald-800">
                <CheckCircle class="w-5 h-5 text-emerald-600" />
                <h3 class="text-base font-bold">What's Included</h3>
              </div>
              <ul class="space-y-2.5" role="list">
                <li
                  v-for="(inc, idx) in tour.inclusions"
                  :key="idx"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                >
                  <Check class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span class="leading-relaxed">{{ inc }}</span>
                </li>
              </ul>
            </div>

            <!-- Exclusions Card -->
            <div class="bg-rose-50/40 rounded-3xl border border-rose-200/60 p-6 space-y-4 shadow-sm">
              <div class="flex items-center gap-2 text-rose-800">
                <XCircle class="w-5 h-5 text-rose-600" />
                <h3 class="text-base font-bold">What's Excluded</h3>
              </div>
              <ul class="space-y-2.5" role="list">
                <li
                  v-for="(exc, idx) in tour.exclusions"
                  :key="idx"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                >
                  <X class="w-4 h-4 text-rose-500 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span class="leading-relaxed">{{ exc }}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 5. What to Bring & Pro Travel Tips -->
        <section class="space-y-4">
          <div class="flex items-center gap-2">
            <Luggage class="w-5 h-5 text-ocean-600" />
            <h2 class="text-xl sm:text-2xl font-black text-slate-900">
              What to Bring & Preparation Tips
            </h2>
          </div>

          <div class="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-sm">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-ocean-100 text-ocean-700 flex items-center justify-center shrink-0">
                  <Sun class="w-4 h-4" />
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-900">Swimwear & Rashguard</h4>
                  <p class="text-[11px] text-slate-500 mt-0.5">Wear beneath your clothes before morning pickup.</p>
                </div>
              </div>

              <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Footprints class="w-4 h-4" />
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-900">Aqua Shoes / Booties</h4>
                  <p class="text-[11px] text-slate-500 mt-0.5">Recommended for river trekking and pebbled beaches.</p>
                </div>
              </div>

              <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Camera class="w-4 h-4" />
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-900">GoPro / Waterproof Case</h4>
                  <p class="text-[11px] text-slate-500 mt-0.5">Our guides are happy to take photos and videos for you!</p>
                </div>
              </div>

              <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <ShieldAlert class="w-4 h-4" />
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-900">Reef-Safe Sunscreen</h4>
                  <p class="text-[11px] text-slate-500 mt-0.5">Strictly no chemical sunscreen before whale sharks.</p>
                </div>
              </div>

              <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Briefcase class="w-4 h-4" />
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-900">Dry Bag & Towel</h4>
                  <p class="text-[11px] text-slate-500 mt-0.5">Keeps clothes, wallets, and gadgets dry during boat rides.</p>
                </div>
              </div>

              <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Coins class="w-4 h-4" />
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-900">Pocket Cash (PHP)</h4>
                  <p class="text-[11px] text-slate-500 mt-0.5">Small shops and coconut stalls in rural areas only take cash.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- RIGHT COLUMN: Sticky Pricing Table & Support Card (Span 5 or 4) -->
      <div class="lg:col-span-5 xl:col-span-4 space-y-6 lg:sticky lg:top-24">
        <!-- Interactive Pricing Table -->
        <PricingTable
          :tiers="tour.pricingTiers"
          :tour-title="tour.title"
          :tour="tour"
        />

        <!-- Quick Help & WhatsApp Card -->
        <div class="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <MessageSquare class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-slate-900">Have Questions About This Tour?</h3>
              <p class="text-xs text-slate-500">Fast answers directly on WhatsApp</p>
            </div>
          </div>

          <p class="text-xs text-slate-600 leading-relaxed">
            Need custom pickup timing, hotel luggage transfers, or infant car seat arrangements? We're available 6:00 AM - 10:00 PM PHT.
          </p>

          <a
            :href="whatsappInquiryUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
          >
            <MessageSquare class="w-4 h-4" />
            <span>Chat About This Tour</span>
          </a>

          <a
            href="tel:+639171234567"
            class="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Phone class="w-3.5 h-3.5 text-ocean-600" />
            <span>Call Hotline: +63 917 123 4567</span>
          </a>
        </div>

        <!-- Trust Badges Summary -->
        <div class="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-2.5 text-xs text-slate-600">
          <div class="flex items-center gap-2 font-bold text-slate-800">
            <ShieldCheck class="w-4 h-4 text-emerald-600" />
            <span>Guaranteed Peace of Mind</span>
          </div>
          <ul class="space-y-1.5 text-[11px] text-slate-600 list-disc list-inside">
            <li>Zero payment required for initial inquiry</li>
            <li>Free cancellation up to 48 hours prior</li>
            <li>100% Weather guarantee for marine trips</li>
            <li>Exclusive private air-conditioned van</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- RELATED TOURS SECTION -->
    <section v-if="relatedTours.length > 0" class="pt-12 border-t border-slate-200">
      <div class="flex items-center justify-between mb-8">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3 py-1 rounded-full">
            Explore More
          </span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            You Might Also Like
          </h2>
        </div>

        <RouterLink
          to="/tours"
          class="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-ocean-600 hover:underline"
        >
          <span>View All Tours</span>
          <ChevronRight class="w-4 h-4" />
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <TourCard
          v-for="related in relatedTours"
          :key="related.id"
          :tour="related"
        />
      </div>
    </section>
  </div>

  <!-- Fallback When Tour Not Found -->
  <div v-else class="max-w-2xl mx-auto px-4 py-20 text-center space-y-5">
    <div class="w-16 h-16 rounded-full bg-rose-50 text-rose-500 mx-auto flex items-center justify-center">
      <AlertTriangle class="w-8 h-8" />
    </div>

    <h2 class="text-2xl sm:text-3xl font-black text-slate-900">
      Tour Package Not Found
    </h2>
    <p class="text-sm text-slate-600 max-w-md mx-auto">
      The tour package you requested may have been renamed or moved. Browse our complete catalog of Cebu and Bohol packages.
    </p>

    <div class="pt-4 flex items-center justify-center gap-3">
      <RouterLink
        to="/tours"
        class="px-6 py-3 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white font-bold text-sm shadow transition-all"
      >
        Browse All Tours
      </RouterLink>

      <RouterLink
        to="/"
        class="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all"
      >
        Go to Homepage
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: TourDetailView controller dynamic slug resolution, breadcrumbs, and WhatsApp link generation.
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import {
  ChevronRight,
  ShieldCheck,
  Clock,
  MapPin,
  Car,
  Sparkles,
  CheckCircle2,
  CheckCircle,
  XCircle,
  Check,
  X,
  Luggage,
  Sun,
  Footprints,
  Camera,
  ShieldAlert,
  Briefcase,
  Coins,
  MessageSquare,
  Phone,
  AlertTriangle
} from 'lucide-vue-next'
import { useTours } from '../composables/useTours'
import ImageGallery from '../components/common/ImageGallery.vue'
import PricingTable from '../components/tours/PricingTable.vue'
import TourCard from '../components/tours/TourCard.vue'

const route = useRoute()
const { getTourBySlug, getRelatedTours } = useTours()

const slug = computed(() => {
  const param = route.params.slug
  return Array.isArray(param) ? param[0] : param || ''
})

const tour = computed(() => {
  return getTourBySlug(slug.value)
})

const relatedTours = computed(() => {
  if (!tour.value) return []
  return getRelatedTours(tour.value.category, tour.value.id, 3)
})

const formattedCategory = computed(() => {
  if (!tour.value) return ''
  switch (tour.value.category) {
    case 'cebu':
      return 'Cebu Adventure'
    case 'bohol':
      return 'Bohol Adventure'
    case 'combo':
      return 'Cebu & Bohol Combo'
    case 'island-hopping':
      return 'Island Hopping'
    default:
      return tour.value.category
  }
})

const categoryBadgeClasses = computed(() => {
  if (!tour.value) return 'bg-slate-100 text-slate-800'
  switch (tour.value.category) {
    case 'cebu':
      return 'bg-ocean-100 text-ocean-800 border border-ocean-200'
    case 'bohol':
      return 'bg-emerald-100 text-emerald-800 border border-emerald-200'
    case 'combo':
      return 'bg-purple-100 text-purple-800 border border-purple-200'
    case 'island-hopping':
      return 'bg-cyan-100 text-cyan-800 border border-cyan-200'
    default:
      return 'bg-slate-100 text-slate-800'
  }
})

const whatsappInquiryUrl = computed(() => {
  const title = tour.value ? tour.value.title : 'Tour Package'
  const message = `Hello Cebu Bohol Adventures! I would like to inquire about the "${title}" package.`
  return `https://wa.me/639171234567?text=${encodeURIComponent(message)}`
})
</script>
