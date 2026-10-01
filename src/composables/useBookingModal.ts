// Gene - Oct 1, 2026: Composable for shared booking modal state and WhatsApp booking link generator.
import { ref } from 'vue'
import type { TourPackage } from '../data/tours'

/*
export interface BookingFormData {
  name: string
  guests: number
  date: string
  phone: string
  notes?: string
}

// Module-level global reactive state shared across components
const isModalOpen = ref(false)
const selectedTour = ref<TourPackage | null>(null)

export function useBookingModal() {
  function openBookingModal(tour?: TourPackage) {
    selectedTour.value = tour || null
    isModalOpen.value = true
  }

  function closeBookingModal() {
    isModalOpen.value = false
  }

  function generateWhatsAppLink(
    form: BookingFormData,
    whatsappNumber = '639171234567'
  ): string {
    const tourTitle = selectedTour.value ? selectedTour.value.title : 'General Inquiry'

    const messageLines = [
      'Hello Cebu Bohol Adventures!',
      `Tour: ${tourTitle}`,
      `Name: ${form.name}`,
      `Guests: ${form.guests}`,
      `Date: ${form.date}`,
      `Phone: ${form.phone}`
    ]

    if (form.notes && form.notes.trim()) {
      messageLines.push(`Notes: ${form.notes.trim()}`)
    }

    const cleanPhone = whatsappNumber.replace(/[^0-9]/g, '')
    const encodedText = encodeURIComponent(messageLines.join('\n'))

    return `https://wa.me/${cleanPhone}?text=${encodedText}`
  }

  return {
    isModalOpen,
    selectedTour,
    openBookingModal,
    closeBookingModal,
    generateWhatsAppLink
  }
}
*/

// Gene - Oct 1, 2026: Added optional email field to BookingFormData and prefilledGuests state in useBookingModal.
export interface BookingFormData {
  name: string
  email?: string
  guests: number
  date: string
  phone: string
  notes?: string
}

// Module-level global reactive state shared across components
const isModalOpen = ref(false)
const selectedTour = ref<TourPackage | null>(null)
const prefilledGuests = ref<number | null>(null)

export function useBookingModal() {
  function openBookingModal(tour?: TourPackage, guests?: number) {
    selectedTour.value = tour || null
    prefilledGuests.value = guests ?? null
    isModalOpen.value = true
  }

  function closeBookingModal() {
    isModalOpen.value = false
  }

  function generateWhatsAppLink(
    form: BookingFormData,
    whatsappNumber = '639171234567'
  ): string {
    const tourTitle = selectedTour.value ? selectedTour.value.title : 'General Inquiry'

    const messageLines = [
      'Hello Cebu Bohol Adventures!',
      `Tour: ${tourTitle}`,
      `Name: ${form.name}`,
      `Guests: ${form.guests}`,
      `Date: ${form.date}`,
      `Phone: ${form.phone}`
    ]

    if (form.notes && form.notes.trim()) {
      messageLines.push(`Notes: ${form.notes.trim()}`)
    }

    const cleanPhone = whatsappNumber.replace(/[^0-9]/g, '')
    const encodedText = encodeURIComponent(messageLines.join('\n'))

    return `https://wa.me/${cleanPhone}?text=${encodedText}`
  }

  return {
    isModalOpen,
    selectedTour,
    prefilledGuests,
    openBookingModal,
    closeBookingModal,
    generateWhatsAppLink
  }
}

