<template>
  <div
    class="glass-card member-card p-5 sm:p-6 md:p-7 text-center relative"
    data-aos="fade-up"
    :data-aos-delay="delay"
  >
    <!-- Number badge -->
    <span
      class="absolute top-3 right-3 sm:top-4 sm:right-4 font-mono text-[0.58rem] sm:text-[0.65rem] tracking-[1px]"
      style="color: var(--text-muted);"
    >
      {{ String(index).padStart(2, '0') }}
    </span>

    <!-- Avatar -->
    <div
      class="gc-avatar-wrap relative w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] md:w-[78px] md:h-[78px] mx-auto mb-4 sm:mb-5"
      style="z-index:1;"
    >
      <img
        v-if="member.avatar_url"
        :src="member.avatar_url"
        :alt="member.name"
        class="w-full h-full rounded-full object-cover border border-white/10"
      />

      <div
        v-else
        class="w-full h-full rounded-full flex items-center justify-center text-[1.2rem] sm:text-[1.4rem] md:text-[1.5rem] font-black"
        :style="avatarStyle"
      >
        {{ initials }}
      </div>
    </div>

    <!-- Name -->
    <p
      class="text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] font-bold mb-1 leading-snug break-words"
      style="color: var(--text);"
    >
      {{ member.name }}
    </p>

    <!-- Role -->
    <p
      class="font-mono text-[0.62rem] sm:text-[0.68rem] tracking-[1.4px] uppercase mb-3 sm:mb-4"
      style="color: var(--cyan);"
    >
      {{ member.role }}
    </p>

    <!-- Info -->
    <p
      v-if="member.info"
      class="text-[0.72rem] sm:text-[0.76rem] leading-relaxed mb-4 line-clamp-3"
      style="color: var(--text-muted);"
    >
      {{ member.info }}
    </p>

    <!-- Skills -->
    <div class="flex flex-wrap gap-[6px] justify-center">
      <span
        v-for="(skill, i) in member.skills"
        :key="i"
        class="text-[0.58rem] sm:text-[0.62rem] px-[8px] py-[4px] rounded-full font-mono tracking-[0.4px]"
        :style="i % 2 === 0 ? cyanTag : violetTag"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Member } from '~/composables/useMembers'

const props = defineProps<{
  member: Member
  index: number
  delay?: number
}>()

const initials = computed(() => {
  return props.member.name
    .split(' ')
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
})

const avatarStyle = computed(() => {
  const isCyan = props.index % 2 !== 0

  return isCyan
    ? {
        background: 'rgba(0,195,204,0.15)',
        color: 'var(--cyan)',
      }
    : {
        background: 'rgba(110,47,237,0.15)',
        color: '#c084fc',
      }
})

const cyanTag = {
  background: 'rgba(0,195,204,0.10)',
  color: 'var(--cyan)',
  border: '1px solid rgba(0,195,204,0.2)',
}

const violetTag = {
  background: 'rgba(110,47,237,0.10)',
  color: '#c084fc',
  border: '1px solid rgba(110,47,237,0.2)',
}
</script>

<style scoped>
.member-card {
  min-height: 100%;
  border-radius: 1.4rem;
  transition: all 0.35s ease;
}

.member-card:hover {
  transform: translateY(-6px);
}

/* Mobile */
@media (max-width: 640px) {
  .member-card {
    padding: 1.1rem;
    border-radius: 1.2rem;
  }
}

/* Tablet */
@media (min-width: 768px) {
  .member-card {
    min-height: 320px;
  }
}

/* Desktop */
@media (min-width: 1280px) {
  .member-card {
    min-height: 340px;
  }
}
</style>