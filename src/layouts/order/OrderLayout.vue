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
        <div class="grid gap-6 lg:grid-cols-[1fr_380px]">
          <!-- LEFT -->
          <div class="order-content">
            <div class="rounded-2xl bg-base-200 p-4 shadow-sm ring-1 ring-base-300/60">
              <div class="mb-4 flex items-center justify-between">
              </div>

              <div class="min-h-[60vh]">
                <OrderContent />
              </div>
            </div>
          </div>

          <!-- RIGHT -->
          <aside class="order-basket">
            <div class="sticky top-6 rounded-2xl bg-base-200 shadow-sm ring-1 ring-base-300/60">
              <!-- basket header -->
              <div class="flex items-center justify-between border-b border-base-300/70 p-4">
                <div class="flex items-center gap-2">
                  <div class="badge badge-primary">Basket</div>
                  <span class="text-sm opacity-70">Deine Auswahl</span>
                </div>
                <button class="btn btn-ghost btn-sm">Leeren</button>
              </div>

              <!-- basket scroll area -->
              <div class="p-4">
                <div class="max-h-[calc(100vh-11rem)] overflow-auto pr-1">
                  <Basket />
                </div>
              </div>

              <!-- basket footer -->
              <div class="border-t border-base-300/70 p-4">
                <div class="mb-3 flex items-center justify-between text-sm">
                  <span class="opacity-70">Zwischensumme</span>
                  <span class="font-semibold">€ —</span>
                </div>
                <button class="btn btn-primary w-full rounded-xl">Zur Kasse</button>
                <p class="mt-2 text-xs opacity-60">Lieferzeit & Gebühren im nächsten Schritt.</p>
              </div>
            </div>
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
