<template>
  <!-- Gene - Oct 1, 2026: Comprehensive 4-column footer with brand overview, signature adventures, destinations, DOT accreditation, and contact details. -->
  <footer class="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 4-Column Grid on Desktop, 1-Column on Mobile -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
        
        <!-- Column 1: Brand Overview & DOT Trust Badge -->
        <div class="flex flex-col gap-4">
          <RouterLink to="/" class="flex items-center gap-3 group w-fit">
            <!-- Gene - Oct 1, 2026: Replaced generic placeholder SVG with original Cebu Bohol Adventure palm tree logo from WordPress backup -->
            <img src="/images/logo.png" alt="Cebu Bohol Adventure Logo" class="w-10 h-10 object-contain drop-shadow" />
            <!--
            // Gene - Oct 1, 2026: Previous generic placeholder SVG preserved below
            <svg class="w-9 h-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="36" height="36" rx="10" fill="#0284c7" />
              <path d="M6 24C10 18 15 18 19 22C23 26 27 22 30 19" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="23" cy="11.5" r="4.5" fill="#ea580c" />
              <path d="M8 27C12 23 16 23 20 25.5C23 27.5 26 26.5 28 25" stroke="#e0f2fe" stroke-width="1.75" stroke-linecap="round" />
            </svg>
            -->
            <div class="flex flex-col">

              <span class="text-lg font-extrabold text-white tracking-tight">
                Cebu Bohol <span class="text-ocean-400">Adventure</span>
              </span>
              <span class="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                Premier Island Tours
              </span>
            </div>
          </RouterLink>

          <p class="text-sm text-slate-400 leading-relaxed">
            Your premier Department of Tourism (DOT) accredited private tour operator in Central Visayas. We deliver safe, personalized, and unforgettable excursions across Cebu and Bohol.
          </p>

          <!-- Accreditation & Safety Badges -->
          <div class="mt-2 space-y-2.5">
            <div class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <ShieldCheck class="w-5 h-5 text-jungle-500 shrink-0 mt-0.5" />
              <div class="text-xs">
                <span class="font-bold text-white block">DOT-Accredited Operator</span>
                <span class="text-slate-400">License No. DOT-R07-TOA-00982-2026</span>
              </div>
            </div>

            <div class="flex items-center gap-2 text-xs text-slate-400 px-1">
              <span class="w-1.5 h-1.5 rounded-full bg-jungle-500"></span>
              <span>100% Private Tours • Licensed Guides • Insured Vans</span>
            </div>
          </div>
        </div>

        <!-- Column 2: Signature Adventures -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wider text-white mb-4">
            Signature Adventures
          </h3>
          <ul class="space-y-2.5 text-sm" role="list">
            <li v-for="tour in signatureTours" :key="tour.slug">
              <RouterLink
                :to="`/tours/${tour.slug}`"
                class="flex items-center justify-between group text-slate-400 hover:text-ocean-400 transition-colors py-0.5"
              >
                <span class="truncate group-hover:translate-x-1 transition-transform duration-150">
                  {{ tour.name }}
                </span>
                <span
                  v-if="tour.badge"
                  class="ml-2 px-1.5 py-0.5 text-[10px] font-semibold rounded bg-ocean-900 text-ocean-300 border border-ocean-800 shrink-0"
                >
                  {{ tour.badge }}
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Top Destinations -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wider text-white mb-4">
            Destinations
          </h3>
          <ul class="space-y-2.5 text-sm" role="list">
            <li v-for="dest in destinations" :key="dest.name">
              <RouterLink
                :to="dest.link"
                class="flex flex-col group text-slate-400 hover:text-ocean-400 transition-colors py-0.5"
              >
                <span class="font-medium text-slate-300 group-hover:text-ocean-300 group-hover:translate-x-1 transition-all duration-150">
                  {{ dest.name }}
                </span>
                <span class="text-xs text-slate-500">
                  {{ dest.tag }}
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact & Office Info -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wider text-white mb-4">
            Contact & Office
          </h3>
          <ul class="space-y-3.5 text-sm text-slate-400" role="list">
            <!-- Hotline -->
            <li>
              <a
                href="tel:+639171234567"
                class="flex items-start gap-3 hover:text-ocean-400 transition-colors group"
              >
                <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-ocean-600 group-hover:text-white transition-colors shrink-0">
                  <Phone class="w-4 h-4" />
                </div>
                <div>
                  <span class="block text-xs text-slate-500">Direct Hotline</span>
                  <span class="font-semibold text-slate-200 group-hover:text-white tabular-nums">+63 917 123 4567</span>
                </div>
              </a>
            </li>

            <!-- WhatsApp Support -->
            <li>
              <a
                href="https://wa.me/639171234567?text=Hello%20Cebu%20Bohol%20Adventures!%20I%20would%20like%20to%20inquire%20about%20a%20tour."
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-start gap-3 hover:text-jungle-400 transition-colors group"
              >
                <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-jungle-600 group-hover:text-white transition-colors shrink-0">
                  <MessageSquare class="w-4 h-4" />
                </div>
                <div>
                  <span class="block text-xs text-slate-500">WhatsApp / Viber</span>
                  <span class="font-semibold text-slate-200 group-hover:text-white tabular-nums">+63 917 123 4567</span>
                </div>
              </a>
            </li>

            <!-- Email -->
            <li>
              <a
                href="mailto:info@cebuboholadventure.com"
                class="flex items-start gap-3 hover:text-ocean-400 transition-colors group"
              >
                <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-ocean-600 group-hover:text-white transition-colors shrink-0">
                  <Mail class="w-4 h-4" />
                </div>
                <div>
                  <span class="block text-xs text-slate-500">Email Inquiries</span>
                  <span class="font-medium text-slate-200 group-hover:text-white">info@cebuboholadventure.com</span>
                </div>
              </a>
            </li>

            <!-- Operating Hours -->
            <li class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                <Clock class="w-4 h-4" />
              </div>
              <div>
                <span class="block text-xs text-slate-500">Operating Hours</span>
                <span class="text-xs text-slate-300">Daily: 6:00 AM – 10:00 PM PHT</span>
              </div>
            </li>

            <!-- Office Location -->
            <li class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                <MapPin class="w-4 h-4" />
              </div>
              <div>
                <span class="block text-xs text-slate-500">Operations Hub</span>
                <span class="text-xs text-slate-300">Cebu City & Panglao / Bohol</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar: Copyright & Accreditation Notice -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          <span>&copy; 2026 Cebu Bohol Adventure. All rights reserved.</span>
        </div>

        <div class="flex items-center gap-6">
          <RouterLink to="/about" class="hover:text-slate-300 transition-colors">
            About Us
          </RouterLink>
          <RouterLink to="/tours" class="hover:text-slate-300 transition-colors">
            All Tours
          </RouterLink>
          <RouterLink to="/contact" class="hover:text-slate-300 transition-colors">
            Contact & FAQs
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: Comprehensive 4-column footer with brand overview, signature adventures, destinations, DOT accreditation, and contact details.
import { RouterLink } from 'vue-router'
import { ShieldCheck, Phone, MessageSquare, Mail, Clock, MapPin } from 'lucide-vue-next'

const signatureTours = [
  {
    name: 'Oslob Whale Shark + Kawasan Canyoneering',
    slug: 'oslob-whale-shark-kawasan-canyoneering',
    badge: 'Best Seller'
  },
  {
    name: 'Bohol Countryside & Chocolate Hills Tour',
    slug: 'bohol-countryside-tour',
    badge: 'Popular'
  },
  {
    name: 'Oslob Whale Shark Swimming & Tumalog',
    slug: 'oslob-whale-shark-tumalog-falls',
    badge: null
  },
  {
    name: 'Kawasan Falls Canyoneering Adventure',
    slug: 'kawasan-falls-canyoneering',
    badge: 'Adventure'
  },
  {
    name: 'Moalboal Sardine Run & Turtle Snorkeling',
    slug: 'moalboal-sardine-run-turtle-snorkeling',
    badge: null
  },
  {
    name: '3D2N Cebu & Bohol Twin Island Grand Tour',
    slug: '3d2n-cebu-bohol-twin-island-tour',
    badge: 'Combo'
  },
  {
    name: 'Bantayan Island Tropical Escape',
    slug: 'bantayan-island-tropical-escape',
    badge: null
  }
]

const destinations = [
  {
    name: 'Oslob',
    tag: 'Whale Shark Haven & Tumalog',
    link: '/tours?category=cebu'
  },
  {
    name: 'Badian & Kawasan',
    tag: 'Canyoneering & Waterfalls',
    link: '/tours?category=cebu'
  },
  {
    name: 'Moalboal',
    tag: 'Sardine Run & Sea Turtles',
    link: '/tours?category=cebu'
  },
  {
    name: 'Panglao & Bohol',
    tag: 'Chocolate Hills & Tarsiers',
    link: '/tours?category=bohol'
  },
  {
    name: 'Bantayan Island',
    tag: 'Pristine White Sand Beaches',
    link: '/tours?category=island-hopping'
  }
]
</script>
