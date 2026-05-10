<template>
  <footer
    class="px-16 py-12 flex justify-between items-center relative z-10"
    style="border-top: 1px solid var(--border);"
  >
    <!-- Logo -->
    <span class="font-black text-[1.2rem] tracking-[6px] uppercase gradient-text">RAFI KOSAN</span>

    <!-- Social Links -->
    <div class="flex gap-4">
      <a
        v-for="social in socials"
        :key="social.label"
        :href="social.href"
        target="_blank"
        class="px-5 py-[6px] rounded-full text-[0.75rem] tracking-[1px] transition-all duration-300 no-underline"
        style="background: var(--surface); border: 1px solid var(--border); color: var(--text-muted);"
        @mouseover="e => { e.currentTarget.style.color='var(--cyan)'; e.currentTarget.style.borderColor='rgba(0,195,204,0.3)' }"
        @mouseleave="e => { e.currentTarget.style.color='var(--text-muted)'; e.currentTarget.style.borderColor='var(--border)' }"
      >
        {{ social.label }}
      </a>
    </div>

    <!-- Copyright -->
    <p class="font-mono text-[0.68rem] tracking-[1px]" style="color: var(--text-muted);">
      © 2026 · RAFI KOSAN · TSM
    </p>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Behance', href: 'https://behance.net' },
]
</script>
