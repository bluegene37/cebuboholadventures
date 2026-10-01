<template>
  <!-- Gene - Oct 1, 2026: ContactView component featuring contact info cards, responsive inquiry form with validation, and interactive FAQs accordion. -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
    <!-- PAGE HEADER -->
    <div class="text-center max-w-3xl mx-auto space-y-3">
      <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3.5 py-1 rounded-full border border-ocean-100">
        Direct Local Assistance
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
        Contact & Trip Planning
      </h1>
      <p class="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
        Have questions about tour routes, pickup logistics, or flight timing? Reach our Cebu & Bohol concierge team directly.
      </p>
    </div>

    <!-- CONTACT CHANNELS & INQUIRY FORM GRID -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <!-- LEFT: Contact Cards & Office Details (Span 5) -->
      <div class="lg:col-span-5 space-y-6">
        <h2 class="text-xl sm:text-2xl font-black text-slate-900">
          Get in Touch Directly
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          For the fastest response, message us on WhatsApp or call our reservation hotline. We respond within minutes during operating hours.
        </p>

        <!-- Cards List -->
        <div class="space-y-4">
          <!-- WhatsApp / Viber Card -->
          <a
            href="https://wa.me/639171234567?text=Hello%20Cebu%20Bohol%20Adventures!%20I%20have%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex items-start gap-4 group"
          >
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <MessageSquare class="w-6 h-6" />
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-600">Fastest Reply</span>
              <h3 class="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                WhatsApp / Viber
              </h3>
              <p class="text-xs text-slate-500 mt-0.5 tabular-nums font-semibold">+63 917 123 4567</p>
              <p class="text-[11px] text-slate-400 mt-1">Average response time: 5 - 10 minutes</p>
            </div>
          </a>

          <!-- Hotline Card -->
          <a
            href="tel:+639171234567"
            class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-ocean-300 transition-all flex items-start gap-4 group"
          >
            <div class="w-12 h-12 rounded-2xl bg-ocean-50 text-ocean-600 flex items-center justify-center shrink-0 group-hover:bg-ocean-600 group-hover:text-white transition-colors">
              <Phone class="w-6 h-6" />
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-ocean-600">Daily 6 AM - 10 PM</span>
              <h3 class="text-base font-bold text-slate-900 group-hover:text-ocean-700 transition-colors">
                Booking Hotline
              </h3>
              <p class="text-xs text-slate-500 mt-0.5 tabular-nums font-semibold">+63 917 123 4567</p>
              <p class="text-[11px] text-slate-400 mt-1">Call for urgent next-day bookings</p>
            </div>
          </a>

          <!-- Email Card -->
          <a
            href="mailto:info@cebuboholadventure.com"
            class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex items-start gap-4 group"
          >
            <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
              <Mail class="w-6 h-6" />
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Formal Inquiries</span>
              <h3 class="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                Email Desk
              </h3>
              <p class="text-xs text-slate-600 mt-0.5 font-medium">info@cebuboholadventure.com</p>
              <p class="text-[11px] text-slate-400 mt-1">Corporate & custom quotes within 2 hours</p>
            </div>
          </a>

          <!-- Operational Hubs Card -->
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="flex items-center gap-2 text-xs font-bold text-slate-700">
              <MapPin class="w-4 h-4 text-coral-500" />
              <span>Operations Hubs & Pickup Areas</span>
            </div>
            <div class="space-y-1.5 text-xs text-slate-600">
              <p>• <strong>Cebu Hub:</strong> Cebu City, Mactan Island, Mandaue & CEB Airport</p>
              <p>• <strong>Bohol Hub:</strong> Tagbilaran Sea Port, Panglao Island & Airport</p>
              <p>• <strong>Daily Hours:</strong> 6:00 AM – 10:00 PM Philippine Standard Time</p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Interactive Inquiry Form (Span 7) -->
      <div class="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm">
        <!-- Form Header -->
        <div class="pb-6 border-b border-slate-100 mb-6">
          <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ocean-600">
            <Sparkles class="w-4 h-4" />
            <span>Plan Your Journey</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            Send Us an Inquiry
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 mt-1">
            Fill in your preferred travel dates and group details. We'll reply with a personalized itinerary and rate quotation.
          </p>
        </div>

        <!-- Success Confirmation State -->
        <div v-if="isSubmitted" class="py-8 text-center space-y-5">
          <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 class="w-10 h-10" />
          </div>
          <div>
            <h3 class="text-2xl font-extrabold text-slate-900">
              Inquiry Sent Successfully!
            </h3>
            <p class="text-sm text-slate-600 mt-1.5 max-w-md mx-auto">
              Thank you, <strong>{{ form.name }}</strong>. We have received your inquiry and will email you back within 1-2 hours.
            </p>
          </div>

          <div class="bg-slate-50 rounded-2xl p-4 max-w-sm mx-auto text-left text-xs space-y-1.5 border border-slate-200">
            <div class="flex justify-between text-slate-500">
              <span>Reference Number:</span>
              <span class="font-mono font-bold text-slate-900">{{ refId }}</span>
            </div>
            <div class="flex justify-between text-slate-500">
              <span>Tour:</span>
              <span class="font-bold text-slate-800 truncate max-w-[200px]">{{ form.tour || 'General Inquiry' }}</span>
            </div>
            <div class="flex justify-between text-slate-500">
              <span>Party Size:</span>
              <span class="font-bold text-slate-800">{{ form.guests }} Guests</span>
            </div>
            <div class="flex justify-between text-slate-500">
              <span>Travel Date:</span>
              <span class="font-bold text-slate-800">{{ form.date }}</span>
            </div>
          </div>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              class="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
              @click="resetForm"
            >
              Send Another Inquiry
            </button>
            <a
              :href="whatsappFollowupUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare class="w-4 h-4" />
              <span>Follow Up via WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- The Inquiry Form -->
        <form v-else class="space-y-4" @submit.prevent="handleSubmit">
          <!-- Full Name & Email -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="contact-name" class="block text-xs font-bold text-slate-700 mb-1">
                Full Name <span class="text-rose-500">*</span>
              </label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                required
                placeholder="e.g. Maria Santos"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
                :class="{ 'border-rose-400 ring-1 ring-rose-400': errors.name }"
              />
              <p v-if="errors.name" class="text-[11px] text-rose-500 mt-1">{{ errors.name }}</p>
            </div>

            <div>
              <label for="contact-email" class="block text-xs font-bold text-slate-700 mb-1">
                Email Address <span class="text-rose-500">*</span>
              </label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                required
                placeholder="e.g. maria@example.com"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
                :class="{ 'border-rose-400 ring-1 ring-rose-400': errors.email }"
              />
              <p v-if="errors.email" class="text-[11px] text-rose-500 mt-1">{{ errors.email }}</p>
            </div>
          </div>

          <!-- Phone & Tour Selection -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="contact-phone" class="block text-xs font-bold text-slate-700 mb-1">
                WhatsApp / Phone Number <span class="text-rose-500">*</span>
              </label>
              <input
                id="contact-phone"
                v-model="form.phone"
                type="tel"
                required
                placeholder="+63 917 123 4567"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
                :class="{ 'border-rose-400 ring-1 ring-rose-400': errors.phone }"
              />
              <p v-if="errors.phone" class="text-[11px] text-rose-500 mt-1">{{ errors.phone }}</p>
            </div>

            <div>
              <label for="contact-tour" class="block text-xs font-bold text-slate-700 mb-1">
                Tour Package of Interest
              </label>
              <select
                id="contact-tour"
                v-model="form.tour"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all bg-white"
              >
                <option value="">Custom Multi-Day / General Inquiry</option>
                <option v-for="t in tourPackages" :key="t.id" :value="t.title">
                  {{ t.title }}
                </option>
              </select>
            </div>
          </div>

          <!-- Travel Date & Party Size -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="contact-date" class="block text-xs font-bold text-slate-700 mb-1">
                Preferred Travel Date <span class="text-rose-500">*</span>
              </label>
              <input
                id="contact-date"
                v-model="form.date"
                type="date"
                :min="minDate"
                required
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
                :class="{ 'border-rose-400 ring-1 ring-rose-400': errors.date }"
              />
              <p v-if="errors.date" class="text-[11px] text-rose-500 mt-1">{{ errors.date }}</p>
            </div>

            <div>
              <label for="contact-guests" class="block text-xs font-bold text-slate-700 mb-1">
                Number of Guests
              </label>
              <div class="flex items-center gap-2">
                <input
                  id="contact-guests"
                  v-model.number="form.guests"
                  type="number"
                  min="1"
                  max="50"
                  class="w-24 px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all font-bold"
                />
                <span class="text-xs text-slate-500">Dedicated private vehicle</span>
              </div>
            </div>
          </div>

          <!-- Notes / Custom Request -->
          <div>
            <label for="contact-notes" class="block text-xs font-bold text-slate-700 mb-1">
              Your Questions or Custom Itinerary Details
            </label>
            <textarea
              id="contact-notes"
              v-model="form.notes"
              rows="4"
              placeholder="Tell us about your flight arrival time, hotel pickup location, luggage count, or specific places you want to visit..."
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all resize-none"
            ></textarea>
          </div>

          <!-- Zero Risk Notice -->
          <div class="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
            <ShieldCheck class="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Zero-Risk Guarantee:</strong> No credit card or upfront deposit required for initial quotes. Free cancellation up to 48 hours before pickup.
            </span>
          </div>

          <!-- Submit Buttons -->
          <div class="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              class="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-coral-500 hover:bg-coral-600 active:scale-95 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Mail class="w-4 h-4" />
              <span>Submit Inquiry</span>
            </button>

            <button
              type="button"
              class="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              @click="handleDirectWhatsApp"
            >
              <MessageSquare class="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- FAQS ACCORDION SECTION -->
    <section class="max-w-4xl mx-auto space-y-8 pt-8">
      <div class="text-center space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3.5 py-1 rounded-full border border-ocean-100">
          Frequently Asked Questions
        </span>
        <h2 class="text-2xl sm:text-4xl font-black text-slate-900">
          Everything You Need to Know
        </h2>
        <p class="text-xs sm:text-sm text-slate-600">
          Clear answers regarding payment options, cancellation, pickup points, and tour policies.
        </p>
      </div>

      <!-- Accordion Items -->
      <div class="space-y-3">
        <div
          v-for="(faq, idx) in faqs"
          :key="idx"
          class="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-colors"
        >
          <button
            type="button"
            class="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:text-ocean-600 transition-colors focus:outline-none"
            :aria-expanded="openFaqIndex === idx"
            @click="toggleFaq(idx)"
          >
            <span>{{ faq.question }}</span>
            <ChevronDown
              class="w-5 h-5 text-slate-400 shrink-0 transform transition-transform duration-200"
              :class="{ 'rotate-180 text-ocean-600': openFaqIndex === idx }"
            />
          </button>

          <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <div
              v-if="openFaqIndex === idx"
              class="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
            >
              {{ faq.answer }}
            </div>
          </Transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: ContactView controller managing inquiry validation, submission feedback, and FAQ accordion toggles.
import { ref, reactive, computed } from 'vue'
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronDown
} from 'lucide-vue-next'
import { tourPackages } from '../data/tours'

const minDate = computed(() => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  tour: '',
  date: minDate.value,
  guests: 2,
  notes: ''
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  date: ''
})

const isSubmitted = ref(false)
const refId = ref('')

const openFaqIndex = ref<number | null>(0)

function toggleFaq(idx: number) {
  openFaqIndex.value = openFaqIndex.value === idx ? null : idx
}

const faqs = [
  {
    question: 'How do booking confirmations and payments work?',
    answer: 'We do not charge any upfront fee for initial inquiries or quotes. Once your dates and itinerary are confirmed, you can lock in your private reservation with a nominal reservation deposit or arrange payment via GCash, Philippine Bank Transfer, Wise, or cash directly upon vehicle pickup.'
  },
  {
    question: 'What is your cancellation and weather refund policy?',
    answer: 'We offer free cancellation up to 48 hours prior to your scheduled tour departure. If the Philippine Coast Guard suspends boat operations in Oslob, Moalboal, or Bohol due to bad weather or rough seas, you are entitled to a 100% full refund or the option to reschedule.'
  },
  {
    question: 'Where can our group be picked up and dropped off?',
    answer: 'Every tour includes complimentary door-to-door pickup and drop-off anywhere in Cebu City, Lapu-Lapu / Mactan Island resorts, Mandaue City, or Mactan-Cebu International Airport (CEB). For Bohol tours, pickup is included across Panglao Island and Tagbilaran Sea Port.'
  },
  {
    question: 'Are all entrance permits, boat fees, and gear included?',
    answer: 'Yes! Our pricing is completely transparent. All government environmental permits, whale shark swimming fees, local boatmen, canyoneering gear (helmets, life jackets, shoes), and private van charter fuel and parking tolls are included in your quote.'
  },
  {
    question: 'Can we store our suitcases and luggage inside the van?',
    answer: 'Yes! Because all tours are 100% private chartered vehicles, your luggage remains safely inside the air-conditioned van watched by our professional driver while you enjoy your excursions. Perfect for airport arrival or departure days.'
  },
  {
    question: 'Can children, infants, and seniors join these tours?',
    answer: 'Yes! Whale shark watching from boats, Tumalog Falls, Moalboal turtles, and the Bohol Countryside tour are suitable for all ages. For Kawasan Falls Canyoneering, local safety regulations require participants to be at least 7 years old.'
  }
]

function validate(): boolean {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.phone = ''
  errors.date = ''

  if (!form.name.trim()) {
    errors.name = 'Please provide your full name.'
    valid = false
  }

  if (!form.email || !form.email.includes('@') || !form.email.includes('.')) {
    errors.email = 'Please provide a valid email address.'
    valid = false
  }

  if (!form.phone.trim() || form.phone.trim().length < 7) {
    errors.phone = 'Please provide a valid phone or WhatsApp number.'
    valid = false
  }

  if (!form.date) {
    errors.date = 'Please select a preferred travel date.'
    valid = false
  }

  return valid
}

function handleSubmit() {
  if (!validate()) return
  refId.value = `CB-${Math.floor(100000 + Math.random() * 900000)}`
  isSubmitted.value = true
}

function resetForm() {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.tour = ''
  form.date = minDate.value
  form.guests = 2
  form.notes = ''
  isSubmitted.value = false
}

const whatsappFollowupUrl = computed(() => {
  const msg = `Hello Cebu Bohol Adventures! I submitted inquiry ${refId.value} for ${form.name} on ${form.date}.`
  return `https://wa.me/639171234567?text=${encodeURIComponent(msg)}`
})

function handleDirectWhatsApp() {
  const msgLines = [
    'Hello Cebu Bohol Adventures!',
    `Name: ${form.name || 'Traveler'}`,
    `Tour: ${form.tour || 'Custom / General Inquiry'}`,
    `Guests: ${form.guests}`,
    `Date: ${form.date || 'TBD'}`
  ]
  if (form.phone) msgLines.push(`Phone: ${form.phone}`)
  if (form.notes) msgLines.push(`Notes: ${form.notes}`)

  const url = `https://wa.me/639171234567?text=${encodeURIComponent(msgLines.join('\n'))}`
  window.open(url, '_blank')
}
</script>
