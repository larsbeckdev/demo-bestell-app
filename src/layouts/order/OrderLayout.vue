<script setup>
import Header from '@/layouts/components/Header.vue'
import Footer from '@/layouts/components/Footer.vue'
import OrderContent from '@/layouts/components/OrderContent.vue'
import Basket from '@/layouts/components/Basket.vue'

// ✅ Vite-sicherer Asset-Pfad:
const heroUrl = new URL('@/assets/images/hero-3.webp', import.meta.url).href
// Falls dein Bild NICHT in src/assets liegt, sag kurz wo (public/ oder src/images), dann passe ich’s an.
</script>

<template>
  <Header />

  <main class="w-full">
    <!-- HERO -->
    <section
      class="relative w-full min-h-72 flex items-center bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${heroUrl})` }"
    >
      <div class="absolute inset-0 bg-black/40"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 py-10">
        <h1 class="text-3xl font-bold text-white">Bestellung</h1>
      </div>
    </section>

    <!-- INFO BAR -->
    <section class="w-full bg-base-200">
      <div class="max-w-7xl mx-auto px-4 py-3">
        <p class="text-sm opacity-70 text-center">
          Wähle deine gewünschten Artikel aus und lege sie in den Warenkorb.
        </p>
      </div>
    </section>

    <!-- ORDER GRID -->
    <section class="w-full">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="grid gap-6 lg:grid-cols-[1fr_380px]">
          <!-- LEFT -->
          <div>
            <OrderContent />
          </div>

          <!-- RIGHT -->
          <aside class="lg:sticky lg:top-24 h-fit">
            <Basket />
          </aside>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</template>

<style scoped>
</style>
