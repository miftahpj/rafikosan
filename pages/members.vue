<template>
  <div
    class="pt-28 md:pt-32 pb-20 md:pb-24 px-4 sm:px-6 md:px-10 lg:px-16 min-h-screen relative z-10"
  >
    <!-- Header -->
    <div class="text-center mb-10 md:mb-12" data-aos="fade-up">
      <p
        class="font-mono text-[0.68rem] sm:text-[0.72rem] tracking-[4px] uppercase mb-4"
        style="color: var(--cyan);"
      >
        // the crew
      </p>

      <h1
        class="font-black leading-none tracking-[-2px] mb-4"
        style="font-size: clamp(2.2rem, 8vw, 4.5rem);"
      >
        RAFI KOSAN
      </h1>

      <p
        class="text-[0.92rem] sm:text-[1rem]"
        style="color: var(--text-muted);"
      >
        {{ members.length }} anggota aktif di Jakarta
      </p>
    </div>

    <!-- Search + Filter -->
    <div
      class="flex flex-col md:flex-row gap-3 md:gap-4 mb-10 md:mb-12 max-w-3xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <!-- Search -->
      <input
        v-model="search"
        type="text"
        placeholder="Cari nama atau role..."
        class="filter-input flex-1"
      />

      <!-- Skill -->
      <select
        v-model="selectedSkill"
        class="filter-input md:max-w-[230px] cursor-pointer"
      >
        <option value="">Semua Skill</option>

        <option
          v-for="skill in allSkills"
          :key="skill"
          :value="skill"
        >
          {{ skill }}
        </option>
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
    <div
      v-else-if="error"
      class="text-center py-16"
      style="color: var(--text-muted);"
    >
      Gagal memuat data anggota.
    </div>

    <!-- Grid -->
    <div v-else>
      <div
        v-if="filtered.length"
        class="members-grid"
      >
        <MemberCard
          v-for="(member, i) in filtered"
          :key="member.id"
          :member="member"
          :index="i + 1"
          :delay="i * 50"
        />
      </div>

      <div
        v-else
        class="text-center py-24"
        style="color: var(--text-muted);"
      >
        <p class="text-lg sm:text-xl">
          Tidak ada anggota ditemukan.
        </p>
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

const allSkills = computed(() => {
  const set = new Set<string>()

  members.value.forEach(m =>
    m.skills?.forEach(s => set.add(s))
  )

  return Array.from(set).sort()
})

const filtered = computed(() => {
  return members.value.filter(m => {
    const q = search.value.toLowerCase()

    const matchSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q)

    const matchSkill =
      !selectedSkill.value ||
      m.skills?.includes(selectedSkill.value)

    return matchSearch && matchSkill
  })
})
</script>

<style scoped>
/* Input */
.filter-input {
  width: 100%;
  padding: 0.9rem 1.15rem;
  border-radius: 999px;
  font-size: 0.92rem;
  outline: none;
  transition: 0.3s ease;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: 'Outfit', sans-serif;
}

.filter-input:focus {
  border-color: rgba(0, 195, 204, 0.45);
}

/* Grid */
.members-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
}

/* small phone */
@media (min-width: 480px) {
  .members-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* tablet */
@media (min-width: 768px) {
  .members-grid {
    gap: 1.2rem;
    grid-template-columns: repeat(3, 1fr);
  }
}

/* laptop */
@media (min-width: 1024px) {
  .members-grid {
    gap: 1.25rem;
    grid-template-columns: repeat(4, 1fr);
  }
}

/* desktop */
@media (min-width: 1280px) {
  .members-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>