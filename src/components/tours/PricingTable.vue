<template>
  <!-- Gene - Oct 1, 2026: Interactive PricingTable component with pax tier selector, live group total calculator, savings indicator, and booking modal trigger. -->
  <div class="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-8">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
      <div>
        <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3 py-1 rounded-full">
          Transparent Rates
        </span>
        <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
          Pricing & Group Rates
        </h3>
        <p class="text-xs sm:text-sm text-slate-500 mt-1">
          Private charter rates for {{ tourTitle }}. The larger your group, the lower the per-person rate.
        </p>
      </div>

      <!-- Guest Counter Widget -->
      <div class="bg-slate-50 p-3 rounded-2xl border border-slate-200/80 flex items-center justify-between sm:justify-start gap-4">
        <div class="flex flex-col">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Number of Guests</span>
          <span class="text-sm font-bold text-slate-800">{{ guestCount }} {{ guestCount === 1 ? 'Person' : 'Persons' }}</span>
        </div>
        <div class="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
          <button
            type="button"
            class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            :disabled="guestCount <= 1"
            aria-label="Decrease guest count"
            @click="decrementGuests"
          >
            <Minus class="w-4 h-4" />
          </button>
          <span class="w-8 text-center text-sm font-extrabold text-slate-900 tabular-nums">
            {{ guestCount }}
          </span>
          <button
            type="button"
            class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            :disabled="guestCount >= 30"
            aria-label="Increase guest count"
            @click="incrementGuests"
          >
            <Plus class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- Tier Selection Cards Grid -->
    <div class="mt-6">
      <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Select Group Size Tier</p>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <button
          v-for="(tier, idx) in tiers"
          :key="tier.pax"
          type="button"
          class="relative p-4 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500"
          :class="[
            selectedTierIndex === idx
              ? 'border-ocean-600 bg-ocean-50/60 shadow-sm ring-1 ring-ocean-600'
              : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
          ]"
          @click="selectTier(idx)"
        >
          <!-- Active Pill Indicator -->
          <div
            v-if="selectedTierIndex === idx"
            class="absolute -top-2.5 right-3 bg-ocean-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1"
          >
            <Check class="w-3 h-3 stroke-[3]" />
            <span>Active</span>
          </div>

          <div>
            <div class="flex items-center gap-1.5 text-xs font-bold text-slate-500">
              <Users class="w-3.5 h-3.5 text-slate-400" />
              <span>{{ tier.pax }}</span>
            </div>
            <div class="mt-2 flex items-baseline gap-1">
              <span class="text-xl sm:text-2xl font-black text-slate-900">₱{{ tier.pricePerPax.toLocaleString() }}</span>
              <span class="text-[11px] font-semibold text-slate-500">/ pax</span>
            </div>
          </div>

          <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span class="text-slate-500">Tier Total:</span>
            <span class="font-bold text-slate-700">₱{{ (tier.pricePerPax * getMinPax(tier.pax)).toLocaleString() }}</span>
          </div>
        </button>
      </div>
    </div>

    <!-- Active Calculation Summary Banner -->
    <div
      v-if="activeTier"
      class="mt-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-5 sm:p-6 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
    >
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded-md bg-ocean-500/20 text-ocean-300 text-xs font-bold border border-ocean-400/30">
            Estimated Quote
          </span>
          <span v-if="savingsPerPerson > 0" class="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
            Save ₱{{ savingsPerPerson.toLocaleString() }}/pax
          </span>
        </div>

        <div class="pt-1 flex items-baseline gap-2">
          <span class="text-3xl sm:text-4xl font-black tracking-tight text-white">
            ₱{{ (activeTier.pricePerPax * guestCount).toLocaleString() }}
          </span>
          <span class="text-slate-300 text-sm font-medium">total package estimate</span>
        </div>

        <p class="text-xs text-slate-300">
          Based on <strong>₱{{ activeTier.pricePerPax.toLocaleString() }}</strong> per person for <strong>{{ guestCount }} {{ guestCount === 1 ? 'guest' : 'guests' }}</strong>.
        </p>
      </div>

      <!-- Action Button -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <button
          type="button"
          class="px-6 py-3.5 rounded-xl bg-coral-500 hover:bg-coral-600 active:scale-95 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
          @click="handleBookTier"
        >
          <span>Book for {{ guestCount }} {{ guestCount === 1 ? 'Guest' : 'Guests' }}</span>
          <ArrowRight class="w-4 h-4" />
        </button>
      </div>
    </div>

    <!-- Detailed Rates Comparison Table (collapsible / readable) -->
    <div class="mt-8">
      <h4 class="text-sm font-bold text-slate-800 mb-3">Complete Group Rate Breakdown</h4>
      <div class="overflow-x-auto rounded-xl border border-slate-200">
        <table class="w-full text-left text-xs sm:text-sm">
          <thead class="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
            <tr>
              <th scope="col" class="py-3 px-4">Group Size</th>
              <th scope="col" class="py-3 px-4">Rate Per Person</th>
              <th scope="col" class="py-3 px-4">Estimated Total</th>
              <th scope="col" class="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 bg-white">
            <tr
              v-for="(tier, idx) in tiers"
              :key="tier.pax"
              class="transition-colors"
              :class="selectedTierIndex === idx ? 'bg-ocean-50/50 font-semibold' : 'hover:bg-slate-50'"
            >
              <td class="py-3.5 px-4 text-slate-900 flex items-center gap-2">
                <span
                  class="w-2 h-2 rounded-full"
                  :class="selectedTierIndex === idx ? 'bg-ocean-600' : 'bg-slate-300'"
                ></span>
                <span>{{ tier.pax }}</span>
              </td>
              <td class="py-3.5 px-4 text-slate-800 font-bold">
                ₱{{ tier.pricePerPax.toLocaleString() }}
              </td>
              <td class="py-3.5 px-4 text-slate-600">
                ₱{{ (tier.pricePerPax * getMinPax(tier.pax)).toLocaleString() }}
                <span class="text-[11px] text-slate-400">({{ getMinPax(tier.pax) }} pax)</span>
              </td>
              <td class="py-3.5 px-4 text-right">
                <button
                  type="button"
                  class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                  :class="[
                    selectedTierIndex === idx
                      ? 'bg-ocean-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  ]"
                  @click="selectTier(idx)"
                >
                  {{ selectedTierIndex === idx ? 'Selected' : 'Select' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-[11px] text-slate-400 mt-2">
        * Rates include private transportation, tour guide, entrance fees, and activities stated in the inclusions. Meals and optional gratuities excluded unless specified.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: PricingTable interactive pax calculator and tier selector with booking modal integration.
import { ref, computed, watch } from 'vue'
import { Plus, Minus, Users, Check, ArrowRight } from 'lucide-vue-next'
import type { PricingTier, TourPackage } from '../../data/tours'
import { useBookingModal } from '../../composables/useBookingModal'

interface Props {
  tiers: PricingTier[]
  tourTitle: string
  tour?: TourPackage
}

const props = withDefaults(defineProps<Props>(), {
  tiers: () => [],
  tourTitle: 'Tour Package'
})

const { openBookingModal } = useBookingModal()

const guestCount = ref<number>(2)
const selectedTierIndex = ref<number>(0)

function parsePaxRange(paxStr: string): { min: number; max: number } {
  const digits = paxStr.match(/\d+/g)
  if (!digits || digits.length === 0) return { min: 2, max: 2 }
  const min = parseInt(digits[0], 10)
  const max = digits.length > 1 ? parseInt(digits[1], 10) : (paxStr.includes('+') ? 99 : min)
  return { min, max }
}

function getMinPax(paxStr: string): number {
  return parsePaxRange(paxStr).min
}

// Keep selected tier in sync when guestCount changes
watch(guestCount, (count) => {
  if (!props.tiers || props.tiers.length === 0) return

  const matchIdx = props.tiers.findIndex((tier) => {
    const { min, max } = parsePaxRange(tier.pax)
    return count >= min && count <= max
  })

  if (matchIdx !== -1) {
    selectedTierIndex.value = matchIdx
  } else if (count < getMinPax(props.tiers[0].pax)) {
    selectedTierIndex.value = 0
  } else {
    selectedTierIndex.value = props.tiers.length - 1
  }
}, { immediate: true })

function selectTier(idx: number) {
  if (idx < 0 || idx >= props.tiers.length) return
  selectedTierIndex.value = idx
  const targetMin = getMinPax(props.tiers[idx].pax)
  guestCount.value = targetMin
}

function incrementGuests() {
  if (guestCount.value < 30) {
    guestCount.value++
  }
}

function decrementGuests() {
  if (guestCount.value > 1) {
    guestCount.value--
  }
}

const activeTier = computed<PricingTier | null>(() => {
  if (!props.tiers || props.tiers.length === 0) return null
  return props.tiers[selectedTierIndex.value] || props.tiers[0]
})

const savingsPerPerson = computed<number>(() => {
  if (!props.tiers || props.tiers.length < 2 || !activeTier.value) return 0
  const highestRate = props.tiers[0].pricePerPax
  return Math.max(0, highestRate - activeTier.value.pricePerPax)
})

function handleBookTier() {
  openBookingModal(props.tour, guestCount.value)
}
</script>
