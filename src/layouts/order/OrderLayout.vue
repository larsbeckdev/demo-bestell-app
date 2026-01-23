<script setup>
import Header from '@/layouts/components/Header.vue'
import Footer from '@/layouts/components/Footer.vue'
import OrderContent from '@/layouts/components/OrderContent.vue'
import Basket from '@/layouts/components/Basket.vue'
</script>

<template>
  <Header />

  <main class="main-layout">
    <section
      class="hero-section relative w-full min-h-72 flex items-center bg-cover bg-center bg-no-repeat"
      style="background-image: url('../../images/hero-3.webp')"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4">
        <h1 class="text-3xl font-bold text-white">Bestellung</h1>
      </div>
    </section>

    <section class="order-section w-full">
      <div class="order-section-inner mx-auto max-w-7xl px-4 py-6">
        <div class="grid gap-6 lg:grid-cols-[1fr_380px] h-screen">
          <!-- LEFT -->
          <div class="order-content">
            <OrderContent />
          </div>

          <!-- RIGHT -->
          <aside class="order-basket">
            <Basket />
          </aside>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</template>

<style scoped>
header {
  height: 65px;
}

main {
  height: calc(100vh - 130px);
  padding: 0 !important;
}

footer {
  height: 65px;
}
</style>
