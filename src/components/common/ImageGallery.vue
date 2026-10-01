<template>
  <!-- Gene - Oct 1, 2026: ImageGallery component featuring high-res hero preview, interactive thumbnail strip, and accessible full-screen lightbox zoom. -->
  <div class="space-y-3">
    <!-- Primary Large Image Preview Container -->
    <div
      class="group relative overflow-hidden rounded-3xl bg-slate-950 aspect-[16/10] sm:aspect-[16/9] shadow-md border border-slate-200/60 cursor-pointer"
      role="button"
      tabindex="0"
      aria-label="Click to enlarge image"
      @click="openLightbox(activeIndex)"
      @keydown.enter="openLightbox(activeIndex)"
      @keydown.space.prevent="openLightbox(activeIndex)"
    >
      <img
        :src="currentImage"
        :alt="`${title || 'Tour'} photo ${activeIndex + 1}`"
        class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        @error="handleImageError"
      />

      <!-- Subtle gradient & Hover badge -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

      <!-- Zoom Icon Pill Button -->
      <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm group-hover:bg-ocean-600 transition-colors">
        <Maximize2 class="w-3.5 h-3.5" />
        <span class="hidden sm:inline">Click to Zoom</span>
      </div>

      <!-- Image Index Badge -->
      <div class="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
        <Camera class="w-3.5 h-3.5 text-ocean-300" />
        <span>{{ activeIndex + 1 }} / {{ allImages.length }}</span>
      </div>

      <!-- Navigation Arrows on Preview (desktop hover) -->
      <div v-if="allImages.length > 1" class="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          class="pointer-events-auto w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-transform active:scale-95 shadow-md focus:outline-none"
          aria-label="Previous image"
          @click.stop="prevImage"
        >
          <ChevronLeft class="w-5 h-5" />
        </button>
        <button
          type="button"
          class="pointer-events-auto w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-transform active:scale-95 shadow-md focus:outline-none"
          aria-label="Next image"
          @click.stop="nextImage"
        >
          <ChevronRight class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Thumbnail Strip Switcher -->
    <div
      v-if="allImages.length > 1"
      class="flex items-center gap-2.5 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar"
      role="tablist"
      aria-label="Image gallery thumbnails"
    >
      <button
        v-for="(imgUrl, idx) in allImages"
        :key="imgUrl + idx"
        type="button"
        role="tab"
        :aria-selected="activeIndex === idx"
        :aria-label="`Select photo ${idx + 1}`"
        class="relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500"
        :class="[
          activeIndex === idx
            ? 'border-ocean-600 ring-2 ring-ocean-500/40 shadow-sm scale-105'
            : 'border-transparent opacity-70 hover:opacity-100 hover:border-slate-300'
        ]"
        @click="selectImage(idx)"
      >
        <img
          :src="imgUrl"
          :alt="`${title || 'Gallery'} thumbnail ${idx + 1}`"
          class="w-full h-full object-cover"
          loading="lazy"
          @error="handleImageError"
        />
        <div
          v-if="activeIndex === idx"
          class="absolute inset-0 bg-ocean-600/10 pointer-events-none"
        ></div>
      </button>
    </div>

    <!-- Fullscreen Lightbox Modal Teleport -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isLightboxOpen"
          class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen photo gallery"
          @click="closeLightbox"
        >
          <!-- Lightbox Top Bar -->
          <div class="flex items-center justify-between text-white z-10 shrink-0" @click.stop>
            <div class="flex items-center gap-2">
              <span class="text-sm font-bold text-white/90">
                {{ title || 'Photo Gallery' }}
              </span>
              <span class="text-xs text-white/60">
                ({{ activeIndex + 1 }} of {{ allImages.length }})
              </span>
            </div>
            <button
              type="button"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close fullscreen gallery"
              @click="closeLightbox"
            >
              <X class="w-6 h-6" />
            </button>
          </div>

          <!-- Lightbox Main Image Display -->
          <div class="relative flex-1 flex items-center justify-center p-2 min-h-0" @click.stop>
            <!-- Previous Button -->
            <button
              v-if="allImages.length > 1"
              type="button"
              class="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500"
              aria-label="Previous photo"
              @click="prevImage"
            >
              <ChevronLeft class="w-7 h-7" />
            </button>

            <!-- Active Enlarge Image -->
            <img
              :src="currentImage"
              :alt="`${title || 'Tour'} large photo ${activeIndex + 1}`"
              class="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl transition-all duration-300"
              @error="handleImageError"
            />

            <!-- Next Button -->
            <button
              v-if="allImages.length > 1"
              type="button"
              class="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500"
              aria-label="Next photo"
              @click="nextImage"
            >
              <ChevronRight class="w-7 h-7" />
            </button>
          </div>

          <!-- Lightbox Bottom Thumbnails -->
          <div
            v-if="allImages.length > 1"
            class="flex items-center justify-center gap-2 overflow-x-auto py-2 z-10 shrink-0 no-scrollbar"
            @click.stop
          >
            <button
              v-for="(imgUrl, idx) in allImages"
              :key="imgUrl + idx"
              type="button"
              class="w-16 h-12 rounded-lg overflow-hidden border-2 transition-all"
              :class="[
                activeIndex === idx
                  ? 'border-ocean-400 scale-105 opacity-100 ring-2 ring-ocean-400/50'
                  : 'border-transparent opacity-50 hover:opacity-90'
              ]"
              @click="selectImage(idx)"
            >
              <img
                :src="imgUrl"
                :alt="`Thumbnail ${idx + 1}`"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: ImageGallery controller managing image switcher, lightbox, and keyboard arrow controls.
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Camera
} from 'lucide-vue-next'

interface Props {
  heroImage: string
  galleryImages?: string[]
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  galleryImages: () => [],
  title: ''
})

const activeIndex = ref<number>(0)
const isLightboxOpen = ref<boolean>(false)

const FALLBACK_IMAGE = '/images/hero/cebu-hero.jpg'

const allImages = computed<string[]>(() => {
  const list = [props.heroImage, ...(props.galleryImages || [])]
  // Filter empty and remove duplicates preserving sequence
  const uniqueList: string[] = []
  for (const img of list) {
    if (img && !uniqueList.includes(img)) {
      uniqueList.push(img)
    }
  }
  return uniqueList.length > 0 ? uniqueList : [FALLBACK_IMAGE]
})

const currentImage = computed<string>(() => {
  return allImages.value[activeIndex.value] || allImages.value[0] || FALLBACK_IMAGE
})

function selectImage(idx: number) {
  if (idx >= 0 && idx < allImages.value.length) {
    activeIndex.value = idx
  }
}

function nextImage() {
  activeIndex.value = (activeIndex.value + 1) % allImages.value.length
}

function prevImage() {
  activeIndex.value = (activeIndex.value - 1 + allImages.value.length) % allImages.value.length
}

function openLightbox(idx?: number) {
  if (typeof idx === 'number') {
    selectImage(idx)
  }
  isLightboxOpen.value = true
}

function closeLightbox() {
  isLightboxOpen.value = false
}

function handleImageError(e: Event) {
  const target = e.target as HTMLImageElement
  if (target && target.src !== FALLBACK_IMAGE) {
    target.src = FALLBACK_IMAGE
  }
}

function onKeyDown(e: KeyboardEvent) {
  if (!isLightboxOpen.value) return

  if (e.key === 'Escape') {
    closeLightbox()
  } else if (e.key === 'ArrowRight') {
    nextImage()
  } else if (e.key === 'ArrowLeft') {
    prevImage()
  }
}

watch(isLightboxOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
})
</script>
