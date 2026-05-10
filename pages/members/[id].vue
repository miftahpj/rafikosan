<template>
  <div class="pt-32 pb-24 px-8 md:px-16 min-h-screen relative z-10">
    <!-- Loading -->
    <div v-if="loading" class="flex justify-center items-center min-h-[60vh]">
      <div class="w-10 h-10 rounded-full border-2 animate-spin" style="border-color: var(--cyan); border-top-color: transparent;" />
    </div>

    <!-- Not Found -->
    <div v-else-if="!member" class="text-center py-32">
      <p class="text-4xl font-black mb-4">404</p>
      <p style="color: var(--text-muted);">Anggota tidak ditemukan.</p>
      <NuxtLink to="/members" class="glass-btn-primary mt-8 inline-block">← Kembali</NuxtLink>
    </div>

    <!-- Member Detail -->
    <div v-else class="max-w-3xl mx-auto" data-aos="fade-up">
      <!-- Back -->
      <NuxtLink
        to="/members"
        class="inline-flex items-center gap-2 mb-10 text-[0.85rem] no-underline transition-colors duration-200"
        style="color: var(--text-muted);"
        @mouseover="e => e.currentTarget.style.color='var(--cyan)'"
        @mouseleave="e => e.currentTarget.style.color='var(--text-muted)'"
      >
        ← Kembali ke Tim
      </NuxtLink>

      <!-- Card Detail -->
      <div class="glass-card p-10">
        <!-- Index -->
        <span class="absolute top-6 right-6 font-mono text-[0.6rem] tracking-[1px]" style="color: var(--text-muted);">
          #{{ String(member.order_index).padStart(2, '0') }}
        </span>

        <div class="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <!-- Avatar -->
          <div class="gc-avatar-wrap relative flex-shrink-0 w-32 h-32" style="z-index:1;">
            <img
              v-if="member.avatar_url"
              :src="member.avatar_url"
              :alt="member.name"
              class="w-full h-full rounded-full object-cover"
            />
            <div
              v-else
              class="w-full h-full rounded-full flex items-center justify-center text-4xl font-black"
              style="background: rgba(0,195,204,0.15); color: var(--cyan);"
            >
              {{ initials }}
            </div>
          </div>

          <!-- Info -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-3xl font-black mb-1" style="color: var(--text);">{{ member.name }}</h1>
            <p class="font-mono text-[0.75rem] tracking-[2px] uppercase mb-6" style="color: var(--cyan);">
              {{ member.role }}
            </p>
            <p class="text-[0.95rem] leading-[1.8] mb-8" style="color: var(--text-muted);">
              {{ member.info }}
            </p>

            <!-- Skills -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(skill, i) in member.skills"
                :key="i"
                class="text-[0.75rem] px-3 py-1 rounded-full font-mono"
                :style="i % 2 === 0 ? cyanTag : violetTag"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Member } from '~/composables/useMembers'

definePageMeta({ layout: 'default' })

const route = useRoute()
const supabase = useSupabaseClient()

const member = ref<Member | null>(null)
const loading = ref(true)

onMounted(async () => {
  const { data } = await supabase
    .from('members')
    .select('*')
    .eq('id', route.params.id)
    .single()

  member.value = data as Member
  loading.value = false
})

const initials = computed(() =>
  member.value?.name
    .split(' ')
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase() ?? ''
)

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
