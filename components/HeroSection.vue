<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-20 md:pb-24 relative z-10"
  >
    <!-- Badge -->
    <div
      class="inline-flex flex-wrap items-center justify-center gap-2 rounded-full px-4 sm:px-5 py-[6px] mb-8 md:mb-10 font-mono text-[0.65rem] sm:text-[0.75rem] uppercase tracking-[2px]"
      style="background: rgba(0,195,204,0.1); border: 1px solid rgba(0,195,204,0.3); color: var(--cyan);"
      data-aos="fade-down"
    >
      <span
        class="w-2 h-2 rounded-full bg-[#00C3CC]"
        style="animation: pulse-dot 2s ease infinite;"
      />
      {{ memberCount }} Anggota Aktif · Jakarta 2026
    </div>

    <!-- Headline -->
    <h1
      class="font-black leading-none tracking-[-2px] md:tracking-[-3px] mb-6 md:mb-8"
      style="font-size: clamp(2.4rem, 10vw, 8rem);"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <span class="block" style="color: var(--text);">WE CREATE</span>

      <span class="block gradient-text">THE FUTURE</span>

      <span
        class="block"
        style="color: transparent; -webkit-text-stroke: 1px rgba(240,238,255,0.3);"
      >
        TOGETHER
      </span>
    </h1>

    <!-- Subtitle -->
    <p
      class="max-w-xl text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] leading-[1.8] mb-10 md:mb-12 font-light px-2"
      style="color: var(--text-muted);"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Komunitas anak muda Jakarta yang bersatu — desainer, developer,
      kreator, dan strategi — untuk membangun hal-hal yang punya makna.
    </p>

    <!-- CTA -->
    <div
      class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto mb-14 md:mb-20"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <NuxtLink
        to="/members"
        class="glass-btn-primary w-full sm:w-auto text-center"
      >
        Kenali Tim Kami
      </NuxtLink>

      <NuxtLink
        to="/projects"
        class="glass-btn-secondary w-full sm:w-auto text-center"
      >
        Lihat Karya Kami →
      </NuxtLink>
    </div>

    <!-- Member Chips -->
    <div
      class="flex gap-3 sm:gap-4 justify-center flex-wrap max-w-[900px]"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <NuxtLink
        v-for="chip in previewChips"
        :key="chip.name"
        to="/members"
        class="chip-card"
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

        <div class="text-left min-w-0">
          <p
            class="text-[0.8rem] sm:text-[0.82rem] font-semibold truncate"
            style="color: var(--text);"
          >
            {{ chip.name }}
          </p>

          <p
            class="font-mono text-[0.65rem] sm:text-[0.68rem] truncate"
            style="color: var(--text-muted);"
          >
            {{ chip.role }}
          </p>
        </div>
      </NuxtLink>

      <!-- More -->
      <div class="chip-card cursor-default">
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-[0.7rem] font-bold"
          style="background: rgba(110,47,237,0.2); color: #c084fc;"
        >
          +{{ moreCount }}
        </div>

        <div class="text-left">
          <p
            class="text-[0.8rem] sm:text-[0.82rem] font-semibold"
            style="color: var(--text);"
          >
            Lainnya
          </p>

          <p
            class="font-mono text-[0.65rem] sm:text-[0.68rem]"
            style="color: var(--text-muted);"
          >
            Scroll ↓
          </p>
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
    initials: m.name
      .split(' ')
      .map(w => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase(),

    avatarStyle:
      i % 2 === 0
        ? {
            background: 'rgba(0,195,204,0.2)',
            color: 'var(--cyan)',
          }
        : {
            background: 'rgba(110,47,237,0.2)',
            color: '#c084fc',
          },
  }))
)

const memberCount = computed(() => props.members.length)
const moreCount = computed(() =>
  Math.max(0, props.members.length - PREVIEW_COUNT)
)
</script>

<style scoped>
.chip-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 999px;
  padding: 0.55rem 1rem 0.55rem 0.55rem;
  background: var(--surface);
  border: 1px solid var(--border);
  backdrop-filter: blur(16px);
  transition: all 0.3s ease;
  max-width: 100%;
}

.chip-card:hover {
  border-color: var(--border-hover);
  background: rgba(0, 195, 204, 0.08);
  transform: translateY(-2px);
}

/* Mobile */
@media (max-width: 640px) {
  .chip-card {
    width: 100%;
    justify-content: flex-start;
    border-radius: 18px;
  }
}
</style>