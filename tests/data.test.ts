import { describe, it, expect } from 'vitest'
import { tourPackages } from '../src/data/tours'
import { destinations } from '../src/data/destinations'
import { reviews } from '../src/data/reviews'

describe('Data Integrity Tests', () => {
  it('should have 8 unique tour packages with valid pricing and slugs', () => {
    expect(tourPackages.length).toBeGreaterThanOrEqual(8)
    const slugs = new Set(tourPackages.map(t => t.slug))
    expect(slugs.size).toBe(tourPackages.length)

    tourPackages.forEach(tour => {
      expect(tour.priceFrom).toBeGreaterThan(0)
      expect(tour.pricingTiers.length).toBeGreaterThan(0)
      expect(tour.itinerary.length).toBeGreaterThan(0)
      expect(tour.inclusions.length).toBeGreaterThan(0)
      expect(tour.images.hero).toBeTruthy()
    })
  })

  it('should have destinations with title and description', () => {
    expect(destinations.length).toBeGreaterThan(0)
    destinations.forEach(dest => {
      expect(dest.name).toBeTruthy()
      expect(dest.image).toBeTruthy()
    })
  })

  it('should have reviews with 5 star ratings', () => {
    expect(reviews.length).toBeGreaterThan(0)
    reviews.forEach(r => {
      expect(r.rating).toBe(5)
      expect(r.comment).toBeTruthy()
    })
  })
})
