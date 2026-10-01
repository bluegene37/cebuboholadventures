<!-- Gene - Oct 1, 2026: Wrapped application with Navbar, responsive main routed view, Footer, BookingModal, and FloatingContact. -->
<!--
<template>
  <div class="min-h-screen flex flex-col bg-slate-50">
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>
-->

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-ocean-500 selection:text-white">
    <!-- Sticky Glassmorphic Navbar -->
    <Navbar />

    <!-- Main Content Routed View with bottom padding for mobile quick contact bar -->
    <main class="flex-grow pb-16 md:pb-0">
      <router-view />
    </main>

    <!-- 4-Column Footer -->
    <Footer />

    <!-- Global Accessible Booking Modal -->
    <BookingModal />

    <!-- Floating WhatsApp button (desktop) and Quick Action Bar (mobile) -->
    <FloatingContact />
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: Layout shell integration with Navbar, Footer, BookingModal, and FloatingContact.
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import BookingModal from './components/common/BookingModal.vue'
import FloatingContact from './components/layout/FloatingContact.vue'
</script>

