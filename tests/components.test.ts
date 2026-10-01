// Gene - Oct 1, 2026: Unit tests for Tour Presentation & Booking components (TourCard, TourFilters, PricingTable, BookingModal, ImageGallery).
import { describe, it, expect } from 'vitest'
import TourCard from '../src/components/tours/TourCard.vue'
import TourFilters from '../src/components/tours/TourFilters.vue'
import PricingTable from '../src/components/tours/PricingTable.vue'
import BookingModal from '../src/components/common/BookingModal.vue'
import ImageGallery from '../src/components/common/ImageGallery.vue'
import { tourPackages } from '../src/data/tours'
import { useBookingModal } from '../src/composables/useBookingModal'
import { useTours } from '../src/composables/useTours'

describe('Tour Presentation & Booking Components', () => {
  describe('Component Exports & Definitions', () => {
    it('TourCard component exports a valid Vue component object', () => {
      expect(TourCard).toBeDefined()
      expect(typeof TourCard).toBe('object')
      expect(TourCard.__name || TourCard.name).toBe('TourCard')
    })

    it('TourFilters component exports a valid Vue component object', () => {
      expect(TourFilters).toBeDefined()
      expect(typeof TourFilters).toBe('object')
      expect(TourFilters.__name || TourFilters.name).toBe('TourFilters')
    })

    it('PricingTable component exports a valid Vue component object', () => {
      expect(PricingTable).toBeDefined()
      expect(typeof PricingTable).toBe('object')
      expect(PricingTable.__name || PricingTable.name).toBe('PricingTable')
    })

    it('BookingModal component exports a valid Vue component object', () => {
      expect(BookingModal).toBeDefined()
      expect(typeof BookingModal).toBe('object')
      expect(BookingModal.__name || BookingModal.name).toBe('BookingModal')
    })

    it('ImageGallery component exports a valid Vue component object', () => {
      expect(ImageGallery).toBeDefined()
      expect(typeof ImageGallery).toBe('object')
      expect(ImageGallery.__name || ImageGallery.name).toBe('ImageGallery')
    })
  })

  describe('TourCard Props & Data Contract', () => {
    it('tour packages have valid structure for TourCard consumption', () => {
      const sampleTour = tourPackages[0]
      expect(sampleTour.id).toBeTruthy()
      expect(sampleTour.slug).toBeTruthy()
      expect(sampleTour.title).toBeTruthy()
      expect(sampleTour.images.hero).toBeTruthy()
      expect(sampleTour.highlights.length).toBeGreaterThan(0)
      expect(sampleTour.duration).toBeTruthy()
      expect(sampleTour.pickupLocation).toBeTruthy()
      expect(sampleTour.priceFrom).toBeGreaterThan(0)
    })
  })

  describe('TourFilters Integration with useTours', () => {
    it('binds to and filters tours reactive state correctly', () => {
      const { selectedCategory, searchQuery, sortBy, filteredTours } = useTours()

      // Default state
      selectedCategory.value = 'all'
      searchQuery.value = ''
      sortBy.value = 'popularity'
      expect(filteredTours.value.length).toBe(tourPackages.length)

      // Category filter test
      selectedCategory.value = 'cebu'
      expect(filteredTours.value.every(t => t.category === 'cebu')).toBe(true)

      // Search filter test
      selectedCategory.value = 'all'
      searchQuery.value = 'Canyoneering'
      expect(filteredTours.value.some(t => t.title.toLowerCase().includes('canyoneering'))).toBe(true)

      // Reset
      selectedCategory.value = 'all'
      searchQuery.value = ''
    })
  })

  describe('PricingTable Calculations & Group Prefill', () => {
    it('calculates tier ranges and prefill integration with useBookingModal', () => {
      const sampleTour = tourPackages[0]
      const { tiers } = { tiers: sampleTour.pricingTiers }
      expect(tiers.length).toBeGreaterThan(0)

      const { isModalOpen, selectedTour, prefilledGuests, openBookingModal, closeBookingModal } = useBookingModal()

      // Simulate clicking CTA for a specific group size
      openBookingModal(sampleTour, 6)
      expect(isModalOpen.value).toBe(true)
      expect(selectedTour.value?.id).toBe(sampleTour.id)
      expect(prefilledGuests.value).toBe(6)

      closeBookingModal()
      expect(isModalOpen.value).toBe(false)
    })
  })

  describe('BookingModal Inquiry Generation', () => {
    it('generates WhatsApp link with tour details and guest count', () => {
      const sampleTour = tourPackages[1]
      const { openBookingModal, generateWhatsAppLink } = useBookingModal()

      openBookingModal(sampleTour, 4)

      const link = generateWhatsAppLink({
        name: 'Carlos Mendoza',
        email: 'carlos@example.com',
        guests: 4,
        date: '2026-11-15',
        phone: '+639171234567',
        notes: 'Pickup at Shangri-La Mactan'
      })

      expect(link).toContain('https://wa.me/639171234567')
      expect(link).toContain(encodeURIComponent(sampleTour.title))
      expect(link).toContain('Carlos%20Mendoza')
      expect(link).toContain('Guests%3A%204')
      expect(link).toContain('Shangri-La%20Mactan')
    })
  })

  describe('ImageGallery Image Aggregation Contract', () => {
    it('correctly provides hero and gallery assets without empty entries', () => {
      const sampleTour = tourPackages[0]
      const allSampleImages = [sampleTour.images.hero, ...sampleTour.images.gallery]
      expect(allSampleImages.length).toBeGreaterThanOrEqual(2)
      expect(allSampleImages.every(img => typeof img === 'string' && img.length > 0)).toBe(true)
    })
  })
})
