<template>
  <div class="relative min-h-screen bg-nova-bg font-outfit text-nova-text overflow-x-hidden">
    <!-- Ambient Background Orbs -->
    <div class="orb orb-1" />
    <div class="orb orb-2" />
    <div class="orb orb-3" />

    <!-- Navbar -->
    <AppNavbar />

    <!-- Main Content -->
    <main class="relative z-10">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Inisialisasi AOS setelah mount
onMounted(() => {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    if (window.AOS) window.AOS.init({ duration: 700, once: true, offset: 60 })
  }
})
</script>
