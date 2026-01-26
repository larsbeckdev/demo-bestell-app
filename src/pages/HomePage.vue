<script setup>
import { HeroSection } from '@/sections/hero/HeroSection.vue'
</script>

<template>
  <div class="h-screen flex items-center justify-center flex-col space-y-4">
    <HeroSection />
    <h1 class="text-3xl font-bold underline">Startseite</h1>
    <router-link to="/bestellen" class="btn btn-primary">Menü anzeigen</router-link>
  </div>
</template>

<style scoped></style>
