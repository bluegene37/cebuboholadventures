// Gene - Oct 1, 2026: Unit tests for Vue Router and application views (HomeView, ToursView, TourDetailView, AboutView, ContactView, NotFoundView).
import { describe, it, expect } from 'vitest'
import { router, routes } from '../src/router'
import HomeView from '../src/views/HomeView.vue'
import ToursView from '../src/views/ToursView.vue'
import TourDetailView from '../src/views/TourDetailView.vue'
import AboutView from '../src/views/AboutView.vue'
import ContactView from '../src/views/ContactView.vue'
import NotFoundView from '../src/views/NotFoundView.vue'
import { useTours } from '../src/composables/useTours'
import { destinations } from '../src/data/destinations'
import { reviews } from '../src/data/reviews'
import { tourPackages } from '../src/data/tours'

describe('Vue Router Configuration', () => {
  it('defines the router instance and routes correctly', () => {
    expect(router).toBeDefined()
    expect(routes).toBeDefined()
    expect(Array.isArray(routes)).toBe(true)
    expect(routes.length).toBe(6)
  })

  it('contains expected route paths and route names', () => {
    const paths = routes.map(r => r.path)
    expect(paths).toContain('/')
    expect(paths).toContain('/tours')
    expect(paths).toContain('/tours/:slug')
    expect(paths).toContain('/about')
    expect(paths).toContain('/contact')
    expect(paths).toContain('/:pathMatch(.*)*')

    const names = routes.map(r => r.name)
    expect(names).toContain('home')
    expect(names).toContain('tours')
    expect(names).toContain('tour-detail')
    expect(names).toContain('about')
    expect(names).toContain('contact')
    expect(names).toContain('not-found')
  })

  it('scrollBehavior scrolls to top (0, 0) by default', () => {
    const scrollFn = router.options.scrollBehavior
    expect(typeof scrollFn).toBe('function')

    if (scrollFn) {
      // Mock to and from route locations
      const dummyRoute = {
        path: '/',
        name: 'home',
        params: {},
        query: {},
        hash: '',
        fullPath: '/',
        matched: [],
        meta: {},
        redirectedFrom: undefined
      }

      const defaultScroll = scrollFn(dummyRoute, dummyRoute, null)
      expect(defaultScroll).toEqual({ top: 0, left: 0 })

      const savedPos = { top: 250, left: 0 }
      const restoredScroll = scrollFn(dummyRoute, dummyRoute, savedPos)
      expect(restoredScroll).toEqual(savedPos)
    }
  })
})

describe('View Components Exports', () => {
  it('HomeView exports a valid Vue component object', () => {
    expect(HomeView).toBeDefined()
    expect(typeof HomeView).toBe('object')
    expect(HomeView.__name || HomeView.name).toBe('HomeView')
  })

  it('ToursView exports a valid Vue component object', () => {
    expect(ToursView).toBeDefined()
    expect(typeof ToursView).toBe('object')
    expect(ToursView.__name || ToursView.name).toBe('ToursView')
  })

  it('TourDetailView exports a valid Vue component object', () => {
    expect(TourDetailView).toBeDefined()
    expect(typeof TourDetailView).toBe('object')
    expect(TourDetailView.__name || TourDetailView.name).toBe('TourDetailView')
  })

  it('AboutView exports a valid Vue component object', () => {
    expect(AboutView).toBeDefined()
    expect(typeof AboutView).toBe('object')
    expect(AboutView.__name || AboutView.name).toBe('AboutView')
  })

  it('ContactView exports a valid Vue component object', () => {
    expect(ContactView).toBeDefined()
    expect(typeof ContactView).toBe('object')
    expect(ContactView.__name || ContactView.name).toBe('ContactView')
  })

  it('NotFoundView exports a valid Vue component object', () => {
    expect(NotFoundView).toBeDefined()
    expect(typeof NotFoundView).toBe('object')
    expect(NotFoundView.__name || NotFoundView.name).toBe('NotFoundView')
  })
})

describe('View Data & Logic Integration', () => {
  const { getFeaturedTours, getTourBySlug, getRelatedTours } = useTours()

  it('HomeView featured tours returns only tours marked as featured', () => {
    const featured = getFeaturedTours()
    expect(featured.length).toBeGreaterThan(0)
    for (const tour of featured) {
      expect(tour.featured).toBe(true)
    }
  })

  it('HomeView destinations data contains required properties', () => {
    expect(destinations.length).toBeGreaterThanOrEqual(4)
    for (const dest of destinations) {
      expect(dest.id).toBeTruthy()
      expect(dest.name).toBeTruthy()
      expect(dest.description).toBeTruthy()
      expect(dest.image).toBeTruthy()
    }
  })

  it('HomeView reviews data contains valid customer reviews', () => {
    expect(reviews.length).toBeGreaterThanOrEqual(3)
    for (const rev of reviews) {
      expect(rev.name).toBeTruthy()
      expect(rev.comment).toBeTruthy()
      expect(rev.rating).toBe(5)
    }
  })

  it('TourDetailView resolves valid tours by slug', () => {
    for (const sample of tourPackages) {
      const found = getTourBySlug(sample.slug)
      expect(found).toBeDefined()
      expect(found?.id).toBe(sample.id)
      expect(found?.title).toBe(sample.title)
      expect(found?.pricingTiers.length).toBeGreaterThan(0)
      expect(found?.itinerary.length).toBeGreaterThan(0)
    }
  })

  it('TourDetailView handles non-existent slug cleanly by returning undefined', () => {
    const notFound = getTourBySlug('unknown-tour-package-xyz')
    expect(notFound).toBeUndefined()
  })

  it('TourDetailView related tours returns correct limit and excludes current tour', () => {
    const firstTour = tourPackages[0]
    const related = getRelatedTours(firstTour.category, firstTour.id, 3)
    expect(related.length).toBeLessThanOrEqual(3)
    expect(related.some(t => t.id === firstTour.id)).toBe(false)
  })
})
