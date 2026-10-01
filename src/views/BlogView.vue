<template>
  <!-- Gene - Oct 1, 2026: BlogView component reproducing authentic 'Blog, News & Guests Corner' (post 309) with original articles, categories, and guest stories from WordPress backup. -->
  <div class="py-12 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto">
      <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3.5 py-1.5 rounded-full">
        Stories, Tips & Guides
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
        Blog, News & Guests Corner
      </h1>
      <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
        Discover firsthand travel guides, hidden Visayas gems, local culture, and tips from hundreds of satisfied adventurers who explored Cebu and Bohol with us.
      </p>
    </div>

    <!-- Category Filter Pills -->
    <div class="flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150"
        :class="selectedCategory === 'all'
          ? 'bg-slate-900 text-white shadow-sm'
          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'"
        @click="selectedCategory = 'all'"
      >
        All Articles ({{ blogPosts.length }})
      </button>

      <button
        v-for="cat in categories"
        :key="cat"
        type="button"
        class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150"
        :class="selectedCategory === cat
          ? 'bg-ocean-600 text-white shadow-sm'
          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Articles Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="post in filteredPosts"
        :key="post.id"
        class="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-ocean-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
      >
        <!-- Card Image -->
        <div class="relative h-52 overflow-hidden bg-slate-100">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <span class="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
            {{ post.category }}
          </span>
        </div>

        <!-- Card Content -->
        <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex items-center gap-3 text-xs text-slate-400 font-medium">
              <span class="flex items-center gap-1">
                <Calendar class="w-3.5 h-3.5" />
                {{ post.date }}
              </span>
              <span>•</span>
              <span class="flex items-center gap-1">
                <Clock class="w-3.5 h-3.5" />
                {{ post.readTime }}
              </span>
            </div>

            <h2 class="text-lg font-bold text-slate-900 group-hover:text-ocean-600 transition-colors leading-snug">
              {{ post.title }}
            </h2>

            <p class="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
              {{ post.excerpt }}
            </p>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500">By {{ post.author }}</span>
            <button
              type="button"
              class="inline-flex items-center gap-1 text-xs font-bold text-ocean-600 hover:text-ocean-700 transition-colors"
              @click="openArticleModal(post)"
            >
              <span>Read Full Article</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </article>
    </div>

    <!-- Article Detail Modal -->
    <div
      v-if="activePost"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
        <button
          type="button"
          class="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          @click="activePost = null"
        >
          <X class="w-5 h-5" />
        </button>

        <div class="space-y-2">
          <span class="inline-block bg-ocean-50 text-ocean-700 text-xs font-bold px-3 py-1 rounded-full">
            {{ activePost.category }}
          </span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
            {{ activePost.title }}
          </h2>
          <div class="flex items-center gap-3 text-xs text-slate-400">
            <span>By {{ activePost.author }}</span>
            <span>•</span>
            <span>{{ activePost.date }}</span>
            <span>•</span>
            <span>{{ activePost.readTime }}</span>
          </div>
        </div>

        <div class="rounded-2xl overflow-hidden h-64 bg-slate-100">
          <img :src="activePost.image" :alt="activePost.title" class="w-full h-full object-cover" />
        </div>

        <div class="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed whitespace-pre-line">
          {{ activePost.content }}
        </div>

        <div class="pt-6 border-t border-slate-100 flex items-center justify-between">
          <RouterLink
            to="/tours"
            class="px-5 py-2.5 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white font-bold text-xs shadow-sm transition-colors"
            @click="activePost = null"
          >
            Explore Related Tours
          </RouterLink>

          <button
            type="button"
            class="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
            @click="activePost = null"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: Script setup for BlogView managing category filters and full article reading modal.
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Calendar, Clock, ArrowRight, X } from 'lucide-vue-next'
import { blogPosts, type BlogPost } from '../data/blog'

const selectedCategory = ref('all')
const activePost = ref<BlogPost | null>(null)

const categories = Array.from(new Set(blogPosts.map(p => p.category)))

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'all') {
    return blogPosts
  }
  return blogPosts.filter(p => p.category === selectedCategory.value)
})

function openArticleModal(post: BlogPost) {
  activePost.value = post
}
</script>
