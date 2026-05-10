<template>
  <section id="members" class="py-24 px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
    <!-- Section Header -->
    <div class="text-center mb-12 md:mb-16" data-aos="fade-up">
      <p
        class="font-mono text-[0.72rem] tracking-[4px] uppercase mb-4"
        style="color: var(--cyan);"
      >
        // the crew
      </p>

      <h2
        class="font-black leading-none tracking-[-2px]"
        style="font-size: clamp(2.2rem, 7vw, 4.5rem);"
      >
        MEET THE <br />
        RAFI KOSAN
      </h2>
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
      Gagal memuat data.
    </div>

    <!-- Grid -->
    <template v-else>
      <div class="members-grid mb-4">
        <MemberCard
          v-for="(member, i) in rowOne"
          :key="member.id"
          :member="member"
          :index="i + 1"
          :delay="i * 60"
        />
      </div>

      <div v-if="rowTwo.length" class="members-grid">
        <MemberCard
          v-for="(member, i) in rowTwo"
          :key="member.id"
          :member="member"
          :index="rowOne.length + i + 1"
          :delay="i * 60"
        />
      </div>
    </template>

    <!-- Stats Strip -->
    <div
      class="about-strip stats-strip relative mt-14 md:mt-16 rounded-3xl overflow-hidden"
      data-aos="fade-up"
    >
      <div class="stats-inner">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="stat-group"
        >
          <div class="text-center">
            <span class="stat-num gradient-text-static">
              {{ stat.value }}
            </span>
            <span class="stat-lbl">
              {{ stat.label }}
            </span>
          </div>

          <div v-if="i < stats.length - 1" class="stat-div desktop-only" />
        </div>

        <div class="stat-div desktop-only" />

        <div class="stat-text">
          <h3>Satu Tim, Infinite Kemungkinan</h3>
          <p>
            Kami percaya bahwa kolaborasi adalah kunci inovasi terbesar.
            Bersama, kami mendorong batas.
          </p>
        </div>

        <div class="stat-cta">
          <NuxtLink
            to="/join"
            class="glass-btn-primary"
            style="padding:0.8rem 1.8rem;font-size:0.82rem;"
          >
            Gabung Sekarang
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Member } from '~/composables/useMembers'

const props = defineProps<{
  members: Member[]
  loading: boolean
  error: string | null
}>()

const rowOne = computed(() => props.members.slice(0, 5))
const rowTwo = computed(() => props.members.slice(5, 10))

const stats = [
  { value: '10', label: 'Members' },
  { value: '47', label: 'Projects' },
  { value: '3', label: 'Awards' },
  { value: '12K', label: 'Followers' },
]
</script>

<style scoped>
/* =========================
   MEMBERS GRID RESPONSIVE
========================= */
.members-grid {
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
  grid-template-columns: repeat(1, 1fr);
}

/* tablet kecil */
@media (min-width: 480px) {
  .members-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* tablet */
@media (min-width: 768px) {
  .members-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* laptop */
@media (min-width: 1024px) {
  .members-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* desktop besar */
@media (min-width: 1280px) {
  .members-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

/* =========================
   STATS BOX
========================= */
.stats-strip {
  background: var(--surface);
  border: 1px solid var(--border);
  backdrop-filter: blur(20px);
}

.stats-inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.stat-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.stat-num {
  display: block;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1;
}

.stat-lbl {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: var(--text-muted);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.stat-div {
  width: 1px;
  height: 55px;
  background: var(--border);
}

.stat-text {
  flex: 1;
  min-width: 250px;
  text-align: center;
}

.stat-text h3 {
  font-size: clamp(1.1rem, 4vw, 1.5rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-text p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.stat-cta {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* =========================
   DESKTOP STYLE
========================= */
@media (min-width: 1024px) {
  .stats-inner {
    justify-content: space-between;
    padding: 3rem 4rem;
  }

  .stat-text {
    text-align: left;
  }

  .stat-cta {
    width: auto;
  }
}

/* =========================
   MOBILE CLEANUP
========================= */
@media (max-width: 767px) {
  .desktop-only {
    display: none;
  }

  .stats-inner {
    gap: 1.5rem;
  }

  .stat-group {
    width: 45%;
    justify-content: center;
  }
}
</style>