<script setup lang="ts">
import TopWaifus from "@/components/TopWaifus.vue"
import MyWaifus from '@/components/MyWaifus.vue';
import NewWaifus from '@/components/NewWaifus.vue';
</script>


<template>
  <main>
    <top-waifus :section-title="'Top Waifus'" />
    <my-waifus :section-title="'My Waifus'" />
    <new-waifus :section-title="'New Waifus'" />
  </main>
</template>

<style scoped>

</style>
