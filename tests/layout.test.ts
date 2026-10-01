// Gene - Oct 1, 2026: Unit tests for Layout components (Navbar, Footer, FloatingContact).
import { describe, it, expect } from 'vitest'
import Navbar from '../src/components/layout/Navbar.vue'
import Footer from '../src/components/layout/Footer.vue'
import FloatingContact from '../src/components/layout/FloatingContact.vue'

describe('Layout Components', () => {
  it('Navbar component exports a valid Vue component object', () => {
    expect(Navbar).toBeDefined()
    expect(typeof Navbar).toBe('object')
  })

  it('Footer component exports a valid Vue component object', () => {
    expect(Footer).toBeDefined()
    expect(typeof Footer).toBe('object')
  })

  it('FloatingContact component exports a valid Vue component object', () => {
    expect(FloatingContact).toBeDefined()
    expect(typeof FloatingContact).toBe('object')
  })
})
