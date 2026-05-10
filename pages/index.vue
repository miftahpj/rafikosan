<template>
  <div>
    <!-- Hero -->
    <HeroSection :members="members" />

    <!-- Members Grid -->
    <MembersSection :members="members" :loading="loading" :error="error" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const { members, loading, error, fetchMembers } = useMembers()

onMounted(() => {
  fetchMembers()
})
</script>
