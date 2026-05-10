<template>
  <div
    class="glass-card p-7 text-center"
    data-aos="fade-up"
    :data-aos-delay="delay"
  >
    <!-- Number badge -->
    <span class="absolute top-4 right-4 font-mono text-[0.6rem] tracking-[1px]" style="color: var(--text-muted);">
      {{ String(index).padStart(2, '0') }}
    </span>

    <!-- Avatar / Profile Photo -->
    <div class="gc-avatar-wrap relative w-[72px] h-[72px] mx-auto mb-5" style="z-index:1;">
      <img
        v-if="member.avatar_url"
        :src="member.avatar_url"
        :alt="member.name"
        class="w-full h-full rounded-full object-cover"
      />
      <div
        v-else
        class="w-full h-full rounded-full flex items-center justify-center text-[1.5rem] font-black"
        :style="avatarStyle"
      >
        {{ initials }}
      </div>
    </div>

    <!-- Name -->
    <p class="text-[0.95rem] font-bold mb-1" style="color: var(--text);">
      {{ member.name }}
    </p>

    <!-- Role -->
    <p class="font-mono text-[0.65rem] tracking-[1.5px] uppercase mb-4" style="color: var(--cyan);">
      {{ member.role }}
    </p>

    <!-- Info -->
    <p
      v-if="member.info"
      class="text-[0.75rem] leading-relaxed mb-4"
      style="color: var(--text-muted);"
    >
      {{ member.info }}
    </p>

    <!-- Skills -->
    <div class="flex flex-wrap gap-[6px] justify-center">
      <span
        v-for="(skill, i) in member.skills"
        :key="i"
        class="text-[0.62rem] px-[8px] py-[4px] rounded-full font-mono tracking-[0.5px]"
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
    ? { background: 'rgba(0,195,204,0.15)', color: 'var(--cyan)' }
    : { background: 'rgba(110,47,237,0.15)', color: '#c084fc' }
})

const cyanTag = {
  background: 'rgba(0,195,204,0.1)',
  color: 'var(--cyan)',
  border: '1px solid rgba(0,195,204,0.2)',
}

const violetTag = {
  background: 'rgba(110,47,237,0.1)',
  color: '#c084fc',
  border: '1px solid rgba(110,47,237,0.2)',
}
</script>
