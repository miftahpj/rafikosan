<!-- layouts/default.vue -->

<template>
  <div
    class="relative min-h-screen bg-nova-bg font-outfit text-nova-text overflow-x-hidden"
  >
    <!-- Background -->
    <div class="orb orb-1" />
    <div class="orb orb-2" />
    <div class="orb orb-3" />

    <!-- Navbar -->
    <AppNavbar />

    <!-- CONTENT -->
    <!-- pt-[74px] penting agar tidak ketiban navbar -->
    <main class="relative z-10 pt-[74px]">
      <div class="site-container">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.AOS?.init({
      duration: 700,
      once: true,
      offset: 60
    })
  }
})
</script>

<style scoped>
.site-container {
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;
  padding-left: 28px;
  padding-right: 28px;
}

@media (max-width: 768px) {
  .site-container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>