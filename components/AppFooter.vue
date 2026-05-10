<template>
  <footer
    class="relative z-10 border-t footer-shell"
    style="border-color: var(--border);"
  >
    <div class="footer-inner">
      <!-- Logo -->
      <div class="text-center lg:text-left">
        <span
          class="font-black text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] tracking-[4px] sm:tracking-[6px] uppercase gradient-text"
        >
          RAFI KOSAN
        </span>
      </div>

      <!-- Social -->
      <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-chip"
        >
          {{ social.label }}
        </a>
      </div>

      <!-- Copyright -->
      <div class="text-center lg:text-right">
        <p
          class="font-mono text-[0.65rem] sm:text-[0.7rem] tracking-[1px] leading-relaxed"
          style="color: var(--text-muted);"
        >
          © 2026 · RAFI KOSAN · TSM
        </p>
      </div>
    </div>
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

<style scoped>
/* ===============================
   FOOTER LEBIH LUAS
================================= */
.footer-shell {
  width: 100%;
  padding: 1.2rem 0;
}

.footer-inner {
  width: 100%;
  max-width: 1650px; /* diperlebar */
  margin: 0 auto;
  padding: 0 28px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
}

/* desktop */
@media (min-width: 1024px) {
  .footer-inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0 42px;
  }
}

/* ultra wide */
@media (min-width: 1536px) {
  .footer-inner {
    max-width: 1800px;
    padding: 0 56px;
  }
}

/* mobile */
@media (max-width: 640px) {
  .footer-inner {
    padding: 0 16px;
    gap: 1.4rem;
  }
}

/* ===============================
   CHIP
================================= */
.footer-chip {
  padding: 0.62rem 1.15rem;
  border-radius: 999px;
  font-size: 0.74rem;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 0.3s ease;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-muted);
}

.footer-chip:hover {
  color: var(--cyan);
  border-color: rgba(0, 195, 204, 0.35);
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .footer-chip {
    font-size: 0.68rem;
    padding: 0.52rem 0.95rem;
  }
}
</style>