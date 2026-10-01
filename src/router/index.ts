// Gene - Oct 1, 2026: Vue Router configuration with smooth scroll-to-top and universal history creation.
import { createRouter, createWebHistory, createMemoryHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToursView from '../views/ToursView.vue'
import TourDetailView from '../views/TourDetailView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'

// Gene - Oct 1, 2026: Enhanced route records with dynamic page title metadata and navigation guard.
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Cebu Bohol Adventure | Premier Tours & Island Holidays' }
  },
  {
    path: '/tours',
    name: 'tours',
    component: ToursView,
    meta: { title: 'Tour Packages | Cebu Bohol Adventure' }
  },
  {
    path: '/tours/:slug',
    name: 'tour-detail',
    component: TourDetailView,
    props: true,
    meta: { title: 'Tour Itinerary & Details | Cebu Bohol Adventure' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About Us | Cebu Bohol Adventure' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Contact & Inquiries | Cebu Bohol Adventure' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: { title: 'Page Not Found | Cebu Bohol Adventure' }
  }
]

export const router = createRouter({
  history: typeof window !== 'undefined' ? createWebHistory() : createMemoryHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, left: 0 }
  }
})

// Gene - Oct 1, 2026: Automatically update document.title on route change
router.afterEach((to) => {
  if (typeof document !== 'undefined') {
    const title = (to.meta.title as string) || 'Cebu Bohol Adventure'
    document.title = title
  }
})

export default router

