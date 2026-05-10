<template>
  <nav
    class="fixed top-0 w-full z-50 flex justify-between items-center px-16 h-[70px]"
    style="background: rgba(5,2,16,0.7); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border);"
  >
    <!-- Logo -->
    <NuxtLink to="/" class="font-outfit font-black text-[1.4rem] tracking-[6px] uppercase gradient-text">
      RAFIS KOSAN
    </NuxtLink>

    <!-- Nav Center -->
    <div
      class="flex gap-8 rounded-full px-3 py-[6px]"
      style="background: var(--surface); border: 1px solid var(--border);"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="text-[0.85rem] font-medium px-4 py-2 rounded-full transition-all duration-300 no-underline tracking-[0.5px]"
        :style="{ color: isActive(link.to) ? 'var(--text)' : 'var(--text-muted)', background: isActive(link.to) ? 'rgba(110,47,237,0.3)' : 'transparent' }"
        @click="mobileOpen = false"
      >
        {{ link.label }}
      </NuxtLink>
    </div>

    <!-- Nav Actions -->
    <div class="flex gap-4 items-center">
      <NuxtLink
        to="/portfolio"
        class="px-[1.4rem] py-2 rounded-full text-[0.82rem] font-semibold tracking-[0.5px] transition-all duration-300 no-underline"
        style="color: var(--cyan); border: 1px solid rgba(0,195,204,0.4);"
        @mouseover="e => e.currentTarget.style.background='rgba(0,195,204,0.1)'"
        @mouseleave="e => e.currentTarget.style.background='transparent'"
      >
        Portofolio
      </NuxtLink>
      <NuxtLink
        to="/join"
        class="px-[1.4rem] py-2 rounded-full text-[0.82rem] font-semibold tracking-[0.5px] transition-all duration-300 no-underline text-white"
        style="background: var(--violet); border: 1px solid transparent;"
      >
        Gabung Kami
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Tim', to: '/members' },
  // { label: 'Proyek', to: '/projects' },
  // { label: 'Blog', to: '/blog' },
  // { label: 'Kontak', to: '/contact' },
]

const mobileOpen = ref(false)

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>
