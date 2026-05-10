<template>
  <div class="pt-32 pb-24 px-16 min-h-screen relative z-10">
    <!-- Header -->
    <div class="text-center mb-12" data-aos="fade-up">
      <p class="font-mono text-[0.72rem] tracking-[4px] uppercase mb-4" style="color: var(--cyan);">
        // the crew
      </p>
      <h1
        class="font-black leading-none tracking-[-2px] mb-4"
        style="font-size: clamp(2.5rem, 5vw, 4.5rem);"
      >
        RAFI KOSAN
      </h1>
      <p class="text-[1rem]" style="color: var(--text-muted);">
        {{ members.length }} anggota aktif di Jakarta
      </p>
    </div>

    <!-- Search & Filter -->
    <div class="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
      <!-- Search -->
      <input
        v-model="search"
        type="text"
        placeholder="Cari nama atau role..."
        class="flex-1 px-5 py-3 rounded-full text-[0.9rem] outline-none transition-all duration-300"
        style="background: var(--surface); border: 1px solid var(--border); color: var(--text); font-family: 'Outfit', sans-serif;"
        @focus="e => e.target.style.borderColor='rgba(0,195,204,0.4)'"
        @blur="e => e.target.style.borderColor='var(--border)'"
      />

      <!-- Skill Filter -->
      <select
        v-model="selectedSkill"
        class="px-5 py-3 rounded-full text-[0.9rem] outline-none cursor-pointer"
        style="background: var(--surface); border: 1px solid var(--border); color: var(--text); font-family: 'Outfit', sans-serif;"
      >
        <option value="">Semua Skill</option>
        <option v-for="skill in allSkills" :key="skill" :value="skill">{{ skill }}</option>
      </select>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center items-center py-24">
      <div
        class="w-10 h-10 rounded-full border-2 animate-spin"
        style="border-color: var(--cyan); border-top-color: transparent;"
      />
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-center py-16" style="color: var(--text-muted);">
      Gagal memuat data anggota.
    </div>

    <!-- Members Grid -->
    <div v-else>
      <div
        v-if="filtered.length"
        class="grid gap-5"
        style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));"
      >
        <MemberCard
          v-for="(member, i) in filtered"
          :key="member.id"
          :member="member"
          :index="i + 1"
          :delay="i * 50"
        />
      </div>

      <div v-else class="text-center py-24" style="color: var(--text-muted);">
        <p class="text-xl">Tidak ada anggota ditemukan.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const { members, loading, error, fetchMembers } = useMembers()

const search = ref('')
const selectedSkill = ref('')

onMounted(() => {
  fetchMembers()
})

// Kumpulkan semua unique skills
const allSkills = computed(() => {
  const set = new Set<string>()
  members.value.forEach(m => m.skills?.forEach(s => set.add(s)))
  return Array.from(set).sort()
})

// Filter berdasarkan search dan skill
const filtered = computed(() => {
  return members.value.filter(m => {
    const q = search.value.toLowerCase()
    const matchSearch = !q || m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q)
    const matchSkill = !selectedSkill.value || m.skills?.includes(selectedSkill.value)
    return matchSearch && matchSkill
  })
})
</script>
