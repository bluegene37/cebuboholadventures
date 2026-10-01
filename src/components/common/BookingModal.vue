<template>
  <!-- Gene - Oct 1, 2026: Accessible BookingModal component supporting WhatsApp instant link generation and direct email inquiry confirmation. -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        @click="handleBackdropClick"
      >
        <!-- Modal Card Container -->
        <div
          ref="modalCardRef"
          class="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all flex flex-col max-h-[92vh]"
          @click.stop
        >
          <!-- Top Header Strip -->
          <div class="bg-gradient-to-r from-ocean-700 via-ocean-600 to-slate-900 text-white p-5 sm:p-6 relative shrink-0">
            <!-- Close Button -->
            <button
              type="button"
              class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close booking modal"
              @click="handleClose"
            >
              <X class="w-5 h-5" />
            </button>

            <!-- Modal Subheading -->
            <div class="flex items-center gap-2 text-xs font-semibold text-ocean-200 mb-1">
              <Sparkles class="w-4 h-4 text-amber-300" />
              <span>{{ selectedTour ? 'Book Tour Package' : 'Custom Itinerary Inquiry' }}</span>
            </div>

            <!-- Modal Title -->
            <h2 id="booking-modal-title" class="text-xl sm:text-2xl font-black text-white tracking-tight pr-8">
              {{ selectedTour ? selectedTour.title : 'Design Your Cebu & Bohol Trip' }}
            </h2>

            <!-- Selected Tour Mini Card -->
            <div
              v-if="selectedTour"
              class="mt-3 pt-3 border-t border-white/15 flex items-center gap-3 text-xs text-white/90"
            >
              <img
                :src="selectedTour.images.hero"
                :alt="selectedTour.title"
                class="w-12 h-12 rounded-xl object-cover border border-white/20 shrink-0"
                @error="(e) => (e.target as HTMLImageElement).src = '/images/hero/cebu-hero.jpg'"
              />
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 text-[11px] text-ocean-200">
                  <span class="flex items-center gap-1">
                    <Clock class="w-3 h-3" />
                    {{ selectedTour.duration }}
                  </span>
                  <span>•</span>
                  <span>From ₱{{ selectedTour.priceFrom.toLocaleString() }} / pax</span>
                </div>
                <p class="truncate font-medium text-white text-xs mt-0.5">
                  {{ selectedTour.pickupLocation }}
                </p>
              </div>
            </div>
            <p v-else class="text-xs text-white/80 mt-1">
              Let us know your travel dates, preferred destinations, and party size. We'll tailor a private itinerary just for you.
            </p>
          </div>

          <!-- Body Content Area (Form or Confirmation) -->
          <div class="p-5 sm:p-7 overflow-y-auto flex-1">
            <!-- Confirmation Screen (When Email Inquiry is submitted) -->
            <div v-if="isSubmitted" class="py-4 text-center space-y-5">
              <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 class="w-10 h-10" />
              </div>

              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  Inquiry Received
                </span>
                <h3 class="text-2xl font-extrabold text-slate-900 mt-2">
                  Thank You, {{ form.name }}!
                </h3>
                <p class="text-sm text-slate-600 mt-1.5 max-w-md mx-auto">
                  Your inquiry has been submitted directly to our reservation team. We will review your dates and group requirements immediately.
                </p>
              </div>

              <!-- Reference Badge -->
              <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto text-left space-y-2">
                <div class="flex items-center justify-between text-xs text-slate-500">
                  <span>Reference ID:</span>
                  <span class="font-mono font-bold text-slate-900">{{ inquiryRefNumber }}</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-500">
                  <span>Tour:</span>
                  <span class="font-bold text-slate-800 truncate max-w-[200px]">{{ selectedTour ? selectedTour.title : 'Custom Package' }}</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-500">
                  <span>Travel Date:</span>
                  <span class="font-bold text-slate-800">{{ form.date }}</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-500">
                  <span>Guests:</span>
                  <span class="font-bold text-slate-800">{{ form.guests }} {{ form.guests === 1 ? 'person' : 'persons' }}</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-500">
                  <span>Email Confirmation:</span>
                  <span class="font-bold text-slate-800 truncate max-w-[180px]">{{ form.email }}</span>
                </div>
              </div>

              <p class="text-xs text-slate-400">
                Our team responds to all inquiries within <strong>1 - 2 hours</strong> during operating hours (6:00 AM - 10:00 PM PHT).
              </p>

              <!-- Actions on Confirmation -->
              <div class="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  class="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
                  @click="handleClose"
                >
                  Done
                </button>
                <button
                  type="button"
                  class="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                  @click="handleWhatsAppInquiry"
                >
                  <MessageCircle class="w-4 h-4" />
                  <span>Follow Up via WhatsApp</span>
                </button>
              </div>
            </div>

            <!-- Booking Form -->
            <form v-else class="space-y-4" @submit.prevent="handleEmailInquiry">
              <!-- Grid: Name & Email -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Full Name -->
                <div>
                  <label for="booking-name" class="block text-xs font-bold text-slate-700 mb-1">
                    Full Name <span class="text-rose-500">*</span>
                  </label>
                  <input
                    id="booking-name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="e.g. Maria Santos"
                    class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
                    :class="{ 'border-rose-400 ring-1 ring-rose-400': errors.name }"
                  />
                  <p v-if="errors.name" class="text-[11px] text-rose-500 mt-1">{{ errors.name }}</p>
                </div>

                <!-- Email -->
                <div>
                  <label for="booking-email" class="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span class="text-rose-500">*</span>
                  </label>
                  <input
                    id="booking-email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="e.g. maria@example.com"
                    class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
                    :class="{ 'border-rose-400 ring-1 ring-rose-400': errors.email }"
                  />
                  <p v-if="errors.email" class="text-[11px] text-rose-500 mt-1">{{ errors.email }}</p>
                </div>
              </div>

              <!-- Grid: WhatsApp/Phone & Travel Date -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- WhatsApp / Mobile Phone -->
                <div>
                  <label for="booking-phone" class="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp / Mobile <span class="text-rose-500">*</span>
                  </label>
                  <div class="relative">
                    <input
                      id="booking-phone"
                      v-model="form.phone"
                      type="tel"
                      required
                      placeholder="+63 917 123 4567"
                      class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
                      :class="{ 'border-rose-400 ring-1 ring-rose-400': errors.phone }"
                    />
                  </div>
                  <p v-if="errors.phone" class="text-[11px] text-rose-500 mt-1">{{ errors.phone }}</p>
                </div>

                <!-- Travel Date -->
                <div>
                  <label for="booking-date" class="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Travel Date <span class="text-rose-500">*</span>
                  </label>
                  <input
                    id="booking-date"
                    v-model="form.date"
                    type="date"
                    :min="minDate"
                    required
                    class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
                    :class="{ 'border-rose-400 ring-1 ring-rose-400': errors.date }"
                  />
                  <p v-if="errors.date" class="text-[11px] text-rose-500 mt-1">{{ errors.date }}</p>
                </div>
              </div>

              <!-- Guest Count Stepper -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  Number of Guests <span class="text-rose-500">*</span>
                </label>
                <div class="flex items-center gap-3">
                  <div class="flex items-center bg-slate-50 border border-slate-200 rounded-xl p-1">
                    <button
                      type="button"
                      class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      :disabled="form.guests <= 1"
                      @click="form.guests > 1 && form.guests--"
                    >
                      <Minus class="w-4 h-4" />
                    </button>
                    <span class="w-12 text-center text-sm font-extrabold text-slate-900 tabular-nums">
                      {{ form.guests }}
                    </span>
                    <button
                      type="button"
                      class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      :disabled="form.guests >= 50"
                      @click="form.guests < 50 && form.guests++"
                    >
                      <Plus class="w-4 h-4" />
                    </button>
                  </div>
                  <span class="text-xs text-slate-500">
                    {{ form.guests > 1 ? 'Private vehicle charter sized for your party' : 'Solo traveler rate applies' }}
                  </span>
                </div>
              </div>

              <!-- Notes / Pickup Location -->
              <div>
                <label for="booking-notes" class="block text-xs font-bold text-slate-700 mb-1">
                  Pickup Hotel or Special Notes <span class="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="booking-notes"
                  v-model="form.notes"
                  rows="3"
                  placeholder="Hotel name & location for pickup, flight arrival details, dietary needs, or destinations you want to include..."
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all resize-none"
                ></textarea>
              </div>

              <!-- Trust Guarantee -->
              <div class="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 flex items-start gap-2.5 text-xs text-amber-900">
                <ShieldCheck class="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero-Risk Booking:</strong> No credit card or upfront deposit required for initial quotes. Free cancellation up to 48 hours before pickup.
                </span>
              </div>

              <!-- Actions -->
              <div class="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <!-- Primary WhatsApp Button -->
                <button
                  type="button"
                  class="w-full sm:flex-1 py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  @click="handleWhatsAppInquiry"
                >
                  <MessageCircle class="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </button>

                <!-- Secondary Email Button -->
                <button
                  type="submit"
                  class="w-full sm:flex-1 py-3.5 px-4 rounded-xl font-bold text-sm text-slate-800 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <Mail class="w-4 h-4 text-slate-600" />
                  <span>Send Email Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: BookingModal controller managing form state, ESC key capture, validation, and inquiry submissions.
/*
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'
*/
// Gene - Oct 1, 2026: Added nextTick import for autofocus and focus trap management when modal opens.
import { ref, reactive, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import {
  X,
  Clock,
  Sparkles,
  Minus,
  Plus,
  ShieldCheck,
  MessageCircle,
  Mail,
  CheckCircle2
} from 'lucide-vue-next'
import { useBookingModal, type BookingFormData } from '../../composables/useBookingModal'

const { isModalOpen, selectedTour, prefilledGuests, closeBookingModal, generateWhatsAppLink } = useBookingModal()

const modalCardRef = ref<HTMLElement | null>(null)
const isSubmitted = ref(false)
const inquiryRefNumber = ref('')

/*
const minDate = computed(() => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
})
*/
// Gene - Oct 1, 2026: Fixed timezone bug in minDate calculation using local date formatting instead of UTC toISOString().
const minDate = computed(() => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const y = tomorrow.getFullYear()
  const m = String(tomorrow.getMonth() + 1).padStart(2, '0')
  const d = String(tomorrow.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
})

const form = reactive<BookingFormData>({
  name: '',
  email: '',
  phone: '',
  date: '',
  guests: 2,
  notes: ''
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  date: ''
})

/*
// Initialize form and dates when modal opens
watch(isModalOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    isSubmitted.value = false
    errors.name = ''
    errors.email = ''
    errors.phone = ''
    errors.date = ''

    if (prefilledGuests.value && prefilledGuests.value > 0) {
      form.guests = prefilledGuests.value
    } else {
      form.guests = 2
    }

    if (!form.date) {
      form.date = minDate.value
    }
  } else {
    document.body.style.overflow = ''
  }
})
*/
// Gene - Oct 1, 2026: Enhanced modal open watcher with previous active element tracking and autofocusing the first input on open.
let previousActiveElement: HTMLElement | null = null

watch(isModalOpen, async (isOpen) => {
  if (isOpen) {
    previousActiveElement = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    isSubmitted.value = false
    errors.name = ''
    errors.email = ''
    errors.phone = ''
    errors.date = ''

    if (prefilledGuests.value && prefilledGuests.value > 0) {
      form.guests = prefilledGuests.value
    } else {
      form.guests = 2
    }

    if (!form.date) {
      form.date = minDate.value
    }

    await nextTick()
    if (modalCardRef.value) {
      const firstInput = modalCardRef.value.querySelector<HTMLElement>('#booking-name')
        || modalCardRef.value.querySelector<HTMLElement>('input:not([disabled]), button:not([disabled]), textarea:not([disabled])')
      firstInput?.focus()
    }
  } else {
    document.body.style.overflow = ''
    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus()
      previousActiveElement = null
    }
  }
})

function handleBackdropClick(event: MouseEvent) {
  if (modalCardRef.value && !modalCardRef.value.contains(event.target as Node)) {
    handleClose()
  }
}

function handleClose() {
  closeBookingModal()
}

// Gene - Oct 1, 2026: Implemented focus trap to restrict Tab cycling strictly inside modal dialog boundaries.
function handleFocusTrap(e: KeyboardEvent) {
  if (!modalCardRef.value) return
  const focusable = modalCardRef.value.querySelectorAll<HTMLElement>(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  if (!focusable.length) {
    e.preventDefault()
    return
  }

  const firstElement = focusable[0]
  const lastElement = focusable[focusable.length - 1]

  if (e.shiftKey) {
    if (document.activeElement === firstElement || !modalCardRef.value.contains(document.activeElement)) {
      e.preventDefault()
      lastElement.focus()
    }
  } else {
    if (document.activeElement === lastElement || !modalCardRef.value.contains(document.activeElement)) {
      e.preventDefault()
      firstElement.focus()
    }
  }
}

/*
function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isModalOpen.value) {
    handleClose()
  }
}
*/
// Gene - Oct 1, 2026: Enhanced onKeyDown to handle Escape for closing and Tab for focus trap.
function onKeyDown(e: KeyboardEvent) {
  if (!isModalOpen.value) return

  if (e.key === 'Escape') {
    handleClose()
  } else if (e.key === 'Tab') {
    handleFocusTrap(e)
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
})

function validateForm(requireEmail = false): boolean {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.phone = ''
  errors.date = ''

  if (!form.name.trim()) {
    errors.name = 'Please provide your full name.'
    valid = false
  }

  if (requireEmail) {
    if (!form.email || !form.email.includes('@') || !form.email.includes('.')) {
      errors.email = 'Please provide a valid email address.'
      valid = false
    }
  }

  if (!form.phone.trim() || form.phone.trim().length < 7) {
    errors.phone = 'Please provide a valid contact phone number.'
    valid = false
  }

  if (!form.date) {
    errors.date = 'Please select a preferred travel date.'
    valid = false
  }

  return valid
}

function handleWhatsAppInquiry() {
  if (!validateForm(false)) {
    return
  }
  const link = generateWhatsAppLink(form)
  window.open(link, '_blank')
}

/*
function handleEmailInquiry() {
  if (!validateForm(true)) {
    return
  }
  inquiryRefNumber.value = `CB-${Math.floor(100000 + Math.random() * 900000)}`
  isSubmitted.value = true
}
*/
// Gene - Oct 1, 2026: Shifted focus to primary confirmation button when switching to confirmation screen.
function handleEmailInquiry() {
  if (!validateForm(true)) {
    return
  }
  inquiryRefNumber.value = `CB-${Math.floor(100000 + Math.random() * 900000)}`
  isSubmitted.value = true
  nextTick(() => {
    if (modalCardRef.value) {
      const firstButton = modalCardRef.value.querySelector<HTMLElement>('button')
      firstButton?.focus()
    }
  })
}
</script>
