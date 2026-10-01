<template>
  <!-- Gene - Oct 1, 2026: CustomizeItineraryView component reproducing authentic 'Design your own Tour Itinerary' page (post 1333) with interactive destination selectors, duration, pax calculator, and WhatsApp submission. -->
  <div class="py-12 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto">
      <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3.5 py-1.5 rounded-full">
        Tailor-Made Island Adventures
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
        Design Your Own Tour Itinerary
      </h1>
      <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
        Tell us your dream destinations, travel budget, and group preferences. We'll craft a personalized, private day-by-day itinerary with licensed drivers and private vehicles for your most memorable holiday.
      </p>
    </div>

    <!-- Main Form & Info Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left: Interactive Form -->
      <div class="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
        <!-- Step 1: Select Desired Destinations -->
        <div>
          <h2 class="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
            <span class="w-7 h-7 rounded-lg bg-ocean-500 text-white flex items-center justify-center text-xs font-black">1</span>
            Select Destinations You Want to Visit
          </h2>
          <p class="text-xs text-slate-500 mb-4">Choose all spots you'd like included in your custom schedule.</p>

          <div class="space-y-4">
            <!-- Cebu Spots -->
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Cebu Island Highlights</p>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="spot in cebuSpots"
                  :key="spot"
                  type="button"
                  class="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 flex items-center gap-1.5"
                  :class="selectedSpots.includes(spot)
                    ? 'bg-ocean-600 text-white border-ocean-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'"
                  @click="toggleSpot(spot)"
                >
                  <Check v-if="selectedSpots.includes(spot)" class="w-3.5 h-3.5 text-white" />
                  <Plus v-else class="w-3.5 h-3.5 text-slate-400" />
                  <span>{{ spot }}</span>
                </button>
              </div>
            </div>

            <!-- Bohol Spots -->
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Bohol Island Highlights</p>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="spot in boholSpots"
                  :key="spot"
                  type="button"
                  class="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 flex items-center gap-1.5"
                  :class="selectedSpots.includes(spot)
                    ? 'bg-ocean-600 text-white border-ocean-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'"
                  @click="toggleSpot(spot)"
                >
                  <Check v-if="selectedSpots.includes(spot)" class="w-3.5 h-3.5 text-white" />
                  <Plus v-else class="w-3.5 h-3.5 text-slate-400" />
                  <span>{{ spot }}</span>
                </button>
              </div>
            </div>

            <!-- Neighboring Islands -->
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Negros & Neighboring Islands</p>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="spot in neighboringSpots"
                  :key="spot"
                  type="button"
                  class="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 flex items-center gap-1.5"
                  :class="selectedSpots.includes(spot)
                    ? 'bg-ocean-600 text-white border-ocean-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'"
                  @click="toggleSpot(spot)"
                >
                  <Check v-if="selectedSpots.includes(spot)" class="w-3.5 h-3.5 text-white" />
                  <Plus v-else class="w-3.5 h-3.5 text-slate-400" />
                  <span>{{ spot }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Dates, Duration & Group Size -->
        <div class="pt-6 border-t border-slate-100">
          <h2 class="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
            <span class="w-7 h-7 rounded-lg bg-ocean-500 text-white flex items-center justify-center text-xs font-black">2</span>
            Trip Duration & Group Details
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label for="travel-date" class="block text-xs font-bold text-slate-700 mb-1">Target Start Date</label>
              <input
                id="travel-date"
                v-model="travelDate"
                type="date"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-white"
              />
            </div>

            <div>
              <label for="trip-duration" class="block text-xs font-bold text-slate-700 mb-1">Duration (Days)</label>
              <select
                id="trip-duration"
                v-model="durationDays"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-white"
              >
                <option value="1">1 Day Day-Tour</option>
                <option value="2">2 Days / 1 Night</option>
                <option value="3">3 Days / 2 Nights</option>
                <option value="4">4 Days / 3 Nights</option>
                <option value="5">5+ Days Multi-Island</option>
              </select>
            </div>

            <div>
              <label for="pax-count" class="block text-xs font-bold text-slate-700 mb-1">Number of Travelers (Pax)</label>
              <div class="flex items-center">
                <input
                  id="pax-count"
                  v-model.number="paxCount"
                  type="number"
                  min="1"
                  max="50"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3: Vehicle Preference & Vehicle Type Info -->
        <div class="pt-6 border-t border-slate-100">
          <h2 class="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
            <span class="w-7 h-7 rounded-lg bg-ocean-500 text-white flex items-center justify-center text-xs font-black">3</span>
            Vehicle Preference
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label
              class="p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between"
              :class="vehicleType === 'Sedan' ? 'border-ocean-600 bg-ocean-50/50 ring-1 ring-ocean-600' : 'border-slate-200 bg-white hover:bg-slate-50'"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-900">Sedan Car</span>
                <input v-model="vehicleType" type="radio" value="Sedan" class="text-ocean-600 focus:ring-ocean-500" />
              </div>
              <p class="text-[11px] text-slate-500">1 – 3 Passengers. Ideal for couples or solo travelers.</p>
            </label>

            <label
              class="p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between"
              :class="vehicleType === 'Van' ? 'border-ocean-600 bg-ocean-50/50 ring-1 ring-ocean-600' : 'border-slate-200 bg-white hover:bg-slate-50'"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-900">Toyota HiAce Van</span>
                <input v-model="vehicleType" type="radio" value="Van" class="text-ocean-600 focus:ring-ocean-500" />
              </div>
              <p class="text-[11px] text-slate-500">4 – 12 Passengers. Spacious luggage room & rear aircon.</p>
            </label>

            <label
              class="p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between"
              :class="vehicleType === 'Coaster' ? 'border-ocean-600 bg-ocean-50/50 ring-1 ring-ocean-600' : 'border-slate-200 bg-white hover:bg-slate-50'"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-900">Mini Bus / Coaster</span>
                <input v-model="vehicleType" type="radio" value="Coaster" class="text-ocean-600 focus:ring-ocean-500" />
              </div>
              <p class="text-[11px] text-slate-500">13 – 25 Passengers. Perfect for corporate or large families.</p>
            </label>
          </div>
        </div>

        <!-- Step 4: Special Notes & Contact -->
        <div class="pt-6 border-t border-slate-100">
          <h2 class="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
            <span class="w-7 h-7 rounded-lg bg-ocean-500 text-white flex items-center justify-center text-xs font-black">4</span>
            Special Concerns, Budget & Your Details
          </h2>

          <div class="space-y-4">
            <div>
              <label for="lead-name" class="block text-xs font-bold text-slate-700 mb-1">Lead Traveler Name *</label>
              <input
                id="lead-name"
                v-model="leadName"
                type="text"
                placeholder="Juan Dela Cruz"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="contact-phone" class="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                <input
                  id="contact-phone"
                  v-model="contactPhone"
                  type="tel"
                  placeholder="+63 917 XXX XXXX"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500"
                />
              </div>
              <div>
                <label for="contact-email" class="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  id="contact-email"
                  v-model="contactEmail"
                  type="email"
                  placeholder="name@example.com"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500"
                />
              </div>
            </div>

            <div>
              <label for="special-notes" class="block text-xs font-bold text-slate-700 mb-1">
                Travel Concerns, Estimated Budget, or Special Requests
              </label>
              <textarea
                id="special-notes"
                v-model="specialNotes"
                rows="3"
                placeholder="e.g., We have 2 seniors needing slow pace, prefer airport pickup in Mactan at 8:00 AM, target budget around ₱2,500/head..."
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Action Submission -->
        <div class="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
          <a
            :href="whatsappCustomUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto flex-1 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white py-3.5 px-6 rounded-2xl font-bold text-sm shadow-md hover:shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle class="w-5 h-5" />
            <span>Send Custom Request via WhatsApp</span>
          </a>

          <button
            type="button"
            class="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-slate-300 hover:bg-slate-50 font-bold text-sm text-slate-700 transition-colors"
            @click="resetForm"
          >
            Reset Form
          </button>
        </div>
      </div>

      <!-- Right: Summary & Authentic Guarantee Sidebar -->
      <div class="lg:col-span-4 space-y-6">
        <!-- Live Itinerary Summary Card -->
        <div class="bg-gradient-to-br from-slate-900 to-ocean-950 text-white rounded-3xl p-6 shadow-lg border border-slate-800 space-y-4">
          <div class="flex items-center gap-2 text-ocean-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles class="w-4 h-4 text-amber-400" />
            <span>Your Custom Summary</span>
          </div>

          <h3 class="text-xl font-extrabold text-white">
            {{ paxCount }} Pax · {{ durationDays }} Day(s) Private Charter
          </h3>

          <div class="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
            <div class="flex justify-between">
              <span class="text-slate-400">Preferred Vehicle:</span>
              <span class="font-bold text-white">{{ vehicleType }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Start Date:</span>
              <span class="font-bold text-white">{{ travelDate || 'Flexible' }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Selected Destinations:</span>
              <span class="font-bold text-ocean-300">{{ selectedSpots.length }} spots</span>
            </div>
          </div>

          <div v-if="selectedSpots.length > 0" class="pt-3 border-t border-slate-800">
            <p class="text-[11px] font-bold text-slate-400 mb-1.5">Destinations included:</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="spot in selectedSpots"
                :key="spot"
                class="px-2 py-0.5 rounded-md bg-white/10 text-slate-200 text-[11px]"
              >
                {{ spot }}
              </span>
            </div>
          </div>
        </div>

        <!-- Trust Points & Assistance Card -->
        <div class="bg-ocean-50 rounded-3xl p-6 border border-ocean-100 space-y-4">
          <h4 class="text-sm font-bold text-ocean-900 flex items-center gap-2">
            <ShieldCheck class="w-5 h-5 text-ocean-600" />
            Why Book Your Custom Tour With Us?
          </h4>
          <ul class="space-y-3 text-xs text-slate-600">
            <li class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>100% Private Fleet:</strong> No joining with strangers. Your group sets the pace.</span>
            </li>
            <li class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Experienced Local Drivers:</strong> Friendly, courteous, and knowledgeable with regional routes and scenic stopovers.</span>
            </li>
            <li class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Flexible Pickup & Drop-off:</strong> Anywhere in Mactan, Cebu City, or Bohol seaports.</span>
            </li>
            <li class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Zero Obligation Quotes:</strong> We reply with full cost breakdown, timings, and suggested order.</span>
            </li>
          </ul>

          <div class="pt-4 border-t border-ocean-200/60">
            <p class="text-xs text-slate-500 mb-2">Prefer to talk directly?</p>
            <a
              href="tel:+639175207191"
              class="flex items-center gap-2 text-xs font-bold text-ocean-700 hover:text-ocean-900"
            >
              <Phone class="w-4 h-4" />
              <span>Hotline: +63 917 520 7191</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: Script setup for CustomizeItineraryView with authentic popular spots and pre-filled WhatsApp link generator.
import { ref, computed } from 'vue'
import {
  Check,
  Plus,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Phone
} from 'lucide-vue-next'

const cebuSpots = [
  'Oslob Whale Shark Watching',
  'Kawasan Falls Canyoneering',
  'Tumalog Falls',
  'Sumilon Island Sandbar',
  'Moalboal Sardine Run & Sea Turtles',
  'Simala Shrine / Castle Church',
  'Cebu City Heritage & Temple of Leah',
  'Sirao Flower Garden',
  'Bantayan Island Paradise'
]

const boholSpots = [
  'Chocolate Hills Carmen',
  'Philippine Tarsier Sanctuary',
  'Loboc River Buffet Cruise',
  'Bilar Man-Made Forest',
  'Panglao Alona White Beach',
  'Hinagdanan Cave & Lagoon',
  'Blood Compact Shrine'
]

const neighboringSpots = [
  'Dumaguete City Heritage',
  'Apo Island Sea Turtles',
  'Manjuyod White Sandbar',
  'Siquijor Enchanted Island'
]

const selectedSpots = ref<string[]>([
  'Oslob Whale Shark Watching',
  'Kawasan Falls Canyoneering'
])

const travelDate = ref('')
const durationDays = ref('1')
const paxCount = ref(4)
const vehicleType = ref('Van')
const leadName = ref('')
const contactPhone = ref('')
const contactEmail = ref('')
const specialNotes = ref('')

function toggleSpot(spot: string) {
  const index = selectedSpots.value.indexOf(spot)
  if (index === -1) {
    selectedSpots.value.push(spot)
  } else {
    selectedSpots.value.splice(index, 1)
  }
}

function resetForm() {
  selectedSpots.value = ['Oslob Whale Shark Watching', 'Kawasan Falls Canyoneering']
  travelDate.value = ''
  durationDays.value = '1'
  paxCount.value = 4
  vehicleType.value = 'Van'
  leadName.value = ''
  contactPhone.value = ''
  contactEmail.value = ''
  specialNotes.value = ''
}

const whatsappCustomUrl = computed(() => {
  const spotsText = selectedSpots.value.length > 0 ? selectedSpots.value.join(', ') : 'Custom choices'
  const message = `Hello Cebu Bohol Adventure! I would like to request a Custom Itinerary quote:
• Lead Guest: ${leadName.value || 'Inquirer'}
• Phone/WhatsApp: ${contactPhone.value || 'N/A'}
• Email: ${contactEmail.value || 'N/A'}
• Dates: ${travelDate.value || 'Flexible'} (${durationDays.value} day(s))
• Group Size: ${paxCount.value} Pax
• Vehicle: ${vehicleType.value}
• Desired Destinations: ${spotsText}
• Special Notes: ${specialNotes.value || 'None'}`

  return `https://wa.me/639175207191?text=${encodeURIComponent(message)}`
})
</script>
