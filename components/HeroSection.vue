<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center text-center px-16 pt-32 pb-24 relative z-10"
  >
    <!-- Badge -->
    <div
      class="inline-flex items-center gap-2 rounded-full px-5 py-[6px] mb-10 font-mono text-[0.75rem] uppercase tracking-[2px]"
      style="background: rgba(0,195,204,0.1); border: 1px solid rgba(0,195,204,0.3); color: var(--cyan);"
      data-aos="fade-down"
    >
      <span class="w-2 h-2 rounded-full bg-[#00C3CC]" style="animation: pulse-dot 2s ease infinite;" />
      {{ memberCount }} Anggota Aktif · Jakarta 2026
    </div>

    <!-- Headline -->
    <h1
      class="font-black leading-none tracking-[-3px] mb-8"
      style="font-size: clamp(3.5rem, 8vw, 8rem);"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <span class="block" style="color: var(--text);">WE CREATE</span>
      <span class="block gradient-text">THE FUTURE</span>
      <span class="block" style="color: transparent; -webkit-text-stroke: 1px rgba(240,238,255,0.3);">TOGETHER</span>
    </h1>

    <!-- Subtitle -->
    <p
      class="max-w-xl text-[1.1rem] leading-[1.8] mb-12 font-light"
      style="color: var(--text-muted);"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Komunitas anak muda Jakarta yang bersatu — desainer, developer, kreator, dan strategi — untuk membangun hal-hal yang punya makna.
    </p>

    <!-- CTA Buttons -->
    <div class="flex gap-4 justify-center mb-20" data-aos="fade-up" data-aos-delay="300">
      <NuxtLink to="/members" class="glass-btn-primary">
        Kenali Tim Kami
      </NuxtLink>
      <NuxtLink to="/projects" class="glass-btn-secondary">
        Lihat Karya Kami →
      </NuxtLink>
    </div>

    <!-- Member Preview Chips -->
    <div
      class="flex gap-4 justify-center flex-wrap max-w-[700px]"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <NuxtLink
        v-for="chip in previewChips"
        :key="chip.name"
        to="/members"
        class="flex items-center gap-3 rounded-full px-4 py-2 pl-2 no-underline transition-all duration-300"
        style="background: var(--surface); border: 1px solid var(--border); backdrop-filter: blur(16px);"
        @mouseover="e => { e.currentTarget.style.borderColor='var(--border-hover)'; e.currentTarget.style.background='rgba(0,195,204,0.08)' }"
        @mouseleave="e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='var(--surface)' }"
      >
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-[0.7rem] font-bold overflow-hidden flex-shrink-0"
          :style="chip.avatarStyle"
        >
          <img
            v-if="chip.avatar_url"
            :src="chip.avatar_url"
            :alt="chip.name"
            class="w-full h-full object-cover rounded-full"
          />
          <span v-else>{{ chip.initials }}</span>
        </div>
        <div>
          <p class="text-[0.82rem] font-semibold" style="color: var(--text);">{{ chip.name }}</p>
          <p class="font-mono text-[0.68rem]" style="color: var(--text-muted);">{{ chip.role }}</p>
        </div>
      </NuxtLink>

      <!-- More chip -->
      <div
        class="flex items-center gap-3 rounded-full px-4 py-2 pl-2 cursor-default"
        style="background: var(--surface); border: 1px solid var(--border);"
      >
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-[0.7rem] font-bold"
          style="background: rgba(110,47,237,0.2); color: #c084fc;"
        >
          +{{ moreCount }}
        </div>
        <div>
          <p class="text-[0.82rem] font-semibold" style="color: var(--text);">Lainnya</p>
          <p class="font-mono text-[0.68rem]" style="color: var(--text-muted);">Scroll ↓</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Member } from '~/composables/useMembers'

const props = defineProps<{
  members: Member[]
}>()

const PREVIEW_COUNT = 5

const previewChips = computed(() =>
  props.members.slice(0, PREVIEW_COUNT).map((m, i) => ({
    ...m,
    initials: m.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase(),
    avatarStyle: i % 2 === 0
      ? { background: 'rgba(0,195,204,0.2)', color: 'var(--cyan)' }
      : { background: 'rgba(110,47,237,0.2)', color: '#c084fc' },
  }))
)

const memberCount = computed(() => props.members.length)
const moreCount = computed(() => Math.max(0, props.members.length - PREVIEW_COUNT))
</script>
