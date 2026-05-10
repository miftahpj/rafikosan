<!-- components/AppNavbar.vue -->

<template>
  <!-- FIXED NAVBAR -->
  <header class="fixed top-0 left-0 w-full z-50">
    <nav
      class="navbar-shell"
      style="
        background: rgba(5,2,16,0.72);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--border);
      "
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="font-outfit font-black text-[1.1rem] md:text-[1.3rem] xl:text-[1.4rem] tracking-[4px] md:tracking-[6px] uppercase gradient-text whitespace-nowrap"
      >
        RAFIS KOSAN
      </NuxtLink>

      <!-- Center Menu -->
      <div
        class="hidden md:flex gap-2 rounded-full px-2 py-[6px]"
        style="background: var(--surface); border:1px solid var(--border);"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-[0.82rem] font-medium px-4 py-2 rounded-full transition-all duration-300 no-underline"
          :style="{
            color: isActive(link.to)
              ? 'var(--text)'
              : 'var(--text-muted)',
            background: isActive(link.to)
              ? 'rgba(110,47,237,0.30)'
              : 'transparent'
          }"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Right -->
      <div class="hidden md:flex gap-3 items-center">
        <NuxtLink
          to="/portfolio"
          class="px-5 py-2 rounded-full text-[0.8rem] font-semibold no-underline"
          style="
            color: var(--cyan);
            border:1px solid rgba(0,195,204,0.4);
          "
        >
          Portofolio
        </NuxtLink>

        <NuxtLink
          to="/join"
          class="px-5 py-2 rounded-full text-[0.8rem] font-semibold no-underline text-white"
          style="background: var(--violet);"
        >
          Gabung Kami
        </NuxtLink>
      </div>

      <!-- Mobile -->
      <button
        class="md:hidden mobile-btn"
        @click="mobileOpen = !mobileOpen"
      >
        ☰
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden mobile-menu"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="mobile-link"
        @click="mobileOpen = false"
      >
        {{ link.label }}
      </NuxtLink>

      <NuxtLink
        to="/portfolio"
        class="mobile-link"
        @click="mobileOpen = false"
      >
        Portofolio
      </NuxtLink>

      <NuxtLink
        to="/join"
        class="mobile-link active-mobile"
        @click="mobileOpen = false"
      >
        Gabung Kami
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Tim', to: '/members' }
]

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<style scoped>
.navbar-shell {
  height: 74px;
  max-width: 1550px;
  margin: 0 auto;
  padding: 0 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

/* Mobile */
.mobile-btn {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid var(--border);
}

.mobile-menu {
  padding: 14px 20px 18px;
  background: rgba(5,2,16,0.95);
  border-bottom: 1px solid var(--border);
}

.mobile-link {
  display: block;
  padding: 12px 14px;
  margin-bottom: 8px;
  border-radius: 14px;
  text-decoration: none;
  color: var(--text);
  background: var(--surface);
}

.active-mobile {
  background: var(--violet);
  color: white;
}

/* Desktop */
@media (min-width: 1400px) {
  .navbar-shell {
    padding-left: 42px;
    padding-right: 42px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .navbar-shell {
    padding: 0 16px;
    height: 68px;
  }
}
</style>