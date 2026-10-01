// Gene - Oct 1, 2026: Composable for tour filtering, searching, sorting, and fetching.
import { ref, computed } from 'vue'
import { tourPackages, type TourPackage } from '../data/tours'

export type TourSortOption = 'popularity' | 'price-asc' | 'price-desc' | 'duration'
export type TourCategoryOption = 'all' | 'cebu' | 'bohol' | 'combo' | 'island-hopping'

function getDurationHours(durationStr: string): number {
  const dayMatch = durationStr.match(/(\d+)\s*Day/i)
  if (dayMatch) {
    return parseInt(dayMatch[1], 10) * 24
  }
  const hourMatch = durationStr.match(/(\d+)/)
  if (hourMatch) {
    return parseInt(hourMatch[1], 10)
  }
  return 0
}

/*
export function useTours() {
  const selectedCategory = ref<string>('all')
  const searchQuery = ref<string>('')
  const sortBy = ref<string>('popularity')

  const tourIndexMap = new Map(tourPackages.map((t, idx) => [t.id, idx]))

  const filteredTours = computed<TourPackage[]>(() => {
    let result = [...tourPackages]

    // Filter by category
    if (selectedCategory.value && selectedCategory.value !== 'all') {
      result = result.filter(tour => tour.category === selectedCategory.value)
    }

    // Filter by search query (case-insensitive match against title, tagline, highlights)
    const query = searchQuery.value.trim().toLowerCase()
    if (query) {
      result = result.filter(tour => {
        const titleMatch = tour.title.toLowerCase().includes(query)
        const taglineMatch = tour.tagline.toLowerCase().includes(query)
        const highlightMatch = tour.highlights.some(h => h.toLowerCase().includes(query))
        return titleMatch || taglineMatch || highlightMatch
      })
    }

    // Sort tours
    if (sortBy.value === 'price-asc') {
      result.sort((a, b) => a.priceFrom - b.priceFrom)
    } else if (sortBy.value === 'price-desc') {
      result.sort((a, b) => b.priceFrom - a.priceFrom)
    } else if (sortBy.value === 'duration') {
      result.sort((a, b) => getDurationHours(a.duration) - getDurationHours(b.duration))
    } else if (sortBy.value === 'popularity') {
      result.sort((a, b) => (tourIndexMap.get(a.id) ?? 0) - (tourIndexMap.get(b.id) ?? 0))
    }

    return result
  })

  function getTourBySlug(slug: string): TourPackage | undefined {
    return tourPackages.find(t => t.slug === slug)
  }

  function getFeaturedTours(): TourPackage[] {
    return tourPackages.filter(t => t.featured)
  }

  function getRelatedTours(category: string, currentId: string, limit = 3): TourPackage[] {
    const sameCategory = tourPackages.filter(t => t.id !== currentId && t.category === category)
    if (sameCategory.length >= limit) {
      return sameCategory.slice(0, limit)
    }
    const others = tourPackages.filter(t => t.id !== currentId && t.category !== category)
    return [...sameCategory, ...others].slice(0, limit)
  }

  return {
    selectedCategory,
    searchQuery,
    sortBy,
    filteredTours,
    getTourBySlug,
    getFeaturedTours,
    getRelatedTours
  }
}
*/

// Gene - Oct 1, 2026: Moved selectedCategory, searchQuery, and sortBy refs along with filteredTours to module-level reactive state so all components (TourFilters.vue, ToursView.vue, etc.) share the identical reactive filtering and sorting state.
const selectedCategory = ref<string>('all')
const searchQuery = ref<string>('')
const sortBy = ref<string>('popularity')

const tourIndexMap = new Map(tourPackages.map((t, idx) => [t.id, idx]))

const filteredTours = computed<TourPackage[]>(() => {
  let result = [...tourPackages]

  // Filter by category
  if (selectedCategory.value && selectedCategory.value !== 'all') {
    result = result.filter(tour => tour.category === selectedCategory.value)
  }

  // Filter by search query (case-insensitive match against title, tagline, highlights)
  const query = searchQuery.value.trim().toLowerCase()
  if (query) {
    result = result.filter(tour => {
      const titleMatch = tour.title.toLowerCase().includes(query)
      const taglineMatch = tour.tagline.toLowerCase().includes(query)
      const highlightMatch = tour.highlights.some(h => h.toLowerCase().includes(query))
      return titleMatch || taglineMatch || highlightMatch
    })
  }

  // Sort tours
  if (sortBy.value === 'price-asc') {
    result.sort((a, b) => a.priceFrom - b.priceFrom)
  } else if (sortBy.value === 'price-desc') {
    result.sort((a, b) => b.priceFrom - a.priceFrom)
  } else if (sortBy.value === 'duration') {
    result.sort((a, b) => getDurationHours(a.duration) - getDurationHours(b.duration))
  } else if (sortBy.value === 'popularity') {
    result.sort((a, b) => (tourIndexMap.get(a.id) ?? 0) - (tourIndexMap.get(b.id) ?? 0))
  }

  return result
})

export function useTours() {
  function getTourBySlug(slug: string): TourPackage | undefined {
    return tourPackages.find(t => t.slug === slug)
  }

  function getFeaturedTours(): TourPackage[] {
    return tourPackages.filter(t => t.featured)
  }

  function getRelatedTours(category: string, currentId: string, limit = 3): TourPackage[] {
    const sameCategory = tourPackages.filter(t => t.id !== currentId && t.category === category)
    if (sameCategory.length >= limit) {
      return sameCategory.slice(0, limit)
    }
    const others = tourPackages.filter(t => t.id !== currentId && t.category !== category)
    return [...sameCategory, ...others].slice(0, limit)
  }

  return {
    selectedCategory,
    searchQuery,
    sortBy,
    filteredTours,
    getTourBySlug,
    getFeaturedTours,
    getRelatedTours
  }
}
