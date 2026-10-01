// Gene - Oct 1, 2026: Unit tests for useTours and useBookingModal composables.
import { describe, it, expect } from 'vitest'
import { useTours } from '../src/composables/useTours'
import { useBookingModal } from '../src/composables/useBookingModal'
import { tourPackages } from '../src/data/tours'

describe('Composables Test', () => {
  it('useTours filters by category and search term', () => {
    const { filteredTours, selectedCategory, searchQuery } = useTours()
    expect(filteredTours.value.length).toBe(tourPackages.length)

    selectedCategory.value = 'bohol'
    expect(filteredTours.value.every(t => t.category === 'bohol')).toBe(true)

    selectedCategory.value = 'all'
    searchQuery.value = 'Whale Shark'
    expect(filteredTours.value.length).toBeGreaterThan(0)
    expect(filteredTours.value[0].title).toContain('Whale Shark')
  })

  it('useTours handles sorting by price and popularity', () => {
    const { filteredTours, sortBy } = useTours()

    sortBy.value = 'price-asc'
    const pricesAsc = filteredTours.value.map(t => t.priceFrom)
    for (let i = 0; i < pricesAsc.length - 1; i++) {
      expect(pricesAsc[i]).toBeLessThanOrEqual(pricesAsc[i + 1])
    }

    sortBy.value = 'price-desc'
    const pricesDesc = filteredTours.value.map(t => t.priceFrom)
    for (let i = 0; i < pricesDesc.length - 1; i++) {
      expect(pricesDesc[i]).toBeGreaterThanOrEqual(pricesDesc[i + 1])
    }
  })

  it('useTours helper functions return correct data', () => {
    const { getTourBySlug, getFeaturedTours, getRelatedTours } = useTours()

    const oslobTour = getTourBySlug('oslob-whale-shark-tumalog-falls')
    expect(oslobTour).toBeDefined()
    expect(oslobTour?.title).toContain('Oslob Whale Shark')

    const nonExistent = getTourBySlug('non-existent-tour')
    expect(nonExistent).toBeUndefined()

    const featured = getFeaturedTours()
    expect(featured.length).toBeGreaterThan(0)
    expect(featured.every(t => t.featured)).toBe(true)

    const related = getRelatedTours('cebu', 'oslob-whale-shark-tumalog-falls', 2)
    expect(related.length).toBeLessThanOrEqual(2)
    expect(related.every(t => t.id !== 'oslob-whale-shark-tumalog-falls')).toBe(true)
  })

  it('useBookingModal handles open/close and generates WhatsApp link', () => {
    const { isModalOpen, selectedTour, openBookingModal, closeBookingModal, generateWhatsAppLink } = useBookingModal()
    expect(isModalOpen.value).toBe(false)

    openBookingModal(tourPackages[0])
    expect(isModalOpen.value).toBe(true)
    expect(selectedTour.value?.id).toBe(tourPackages[0].id)

    const link = generateWhatsAppLink({
      name: 'John Doe',
      guests: 4,
      date: '2026-11-20',
      phone: '+639171234567',
      notes: 'Need hotel pickup'
    })
    expect(link).toContain('https://wa.me/')
    expect(link).toContain('John%20Doe')

    closeBookingModal()
    expect(isModalOpen.value).toBe(false)
  })

  it('useBookingModal generates link without selected tour (general inquiry)', () => {
    const { openBookingModal, generateWhatsAppLink } = useBookingModal()
    openBookingModal() // general inquiry

    const link = generateWhatsAppLink({
      name: 'Jane Smith',
      guests: 2,
      date: '2026-12-01',
      phone: '+639189876543'
    })
    expect(link).toContain('https://wa.me/')
    expect(link).toContain('General%20Inquiry')
    expect(link).toContain('Jane%20Smith')
  })
})
