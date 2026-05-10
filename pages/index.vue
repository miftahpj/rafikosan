<template>
  <div class="overflow-hidden">
    <!-- Hero -->
    <HeroSection
      :members="members"
      :loading="loading"
    />

    <!-- Members Grid -->
    <MembersSection
      :members="members"
      :loading="loading"
      :error="error"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const {
  members,
  loading,
  error,
  fetchMembers
} = useMembers()

onMounted(async () => {
  await fetchMembers()
})

useHead({
  title: 'RAFI KOSAN',
  meta: [
    {
      name: 'description',
      content:
        'Komunitas kreatif anak muda unper yang terdiri dari developer, designer, creator, dan strategist.'
    }
  ]
})
</script>