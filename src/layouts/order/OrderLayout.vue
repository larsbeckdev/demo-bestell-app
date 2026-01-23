<script setup>
import Header from '@/layouts/components/Header.vue'
import Footer from '@/layouts/components/Footer.vue'
import OrderContent from '@/layouts/components/OrderContent.vue'
import Basket from '@/layouts/components/Basket.vue'

const heroUrl = new URL('@/assets/images/hero-7.webp', import.meta.url).href
const logoUrl = new URL('@/assets/images/Burger.png', import.meta.url).href
</script>

<template>
  <Header />

  <main class="w-full">
    <!-- HERO -->
    <section class="relative w-full">
      <!-- Background -->
      <div
        class="relative h-[260px] md:h-[320px] bg-cover bg-center"
        :style="{ backgroundImage: `url(${heroUrl})` }"
      >
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      <!-- CONTENT -->
      <div class="relative -mt-16 md:-mt-20">
        <div class="max-w-3xl mx-auto px-4 text-center min-h-72">
          <!-- Logo -->
          <div
            class="mx-auto w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <img
              :src="logoUrl"
              alt="BurgerHouse Logo"
              class="w-32 h-32 object-contain rounded-full border-4 border-white"
            />
          </div>

          <!-- Text -->
          <div class="mt-4">
            <h1 class="text-3xl font-bold"><span class="text-primary">Burger</span>House</h1>

            <!-- Rating -->
            <div class="mt-2 flex items-center justify-center gap-2 text-sm text-gray-600">
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  aria-label="1 star"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  aria-label="3 star"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  aria-label="4 star"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  aria-label="5 star"
                />
              </div>
              <span class="flex items-center gap-1"> <strong>4.1</strong> </span>
              <span class="opacity-60">(317)</span>
            </div>

            <!-- Subtitle -->
            <p class="mt-3 text-gray-600 max-w-xl mx-auto">
              The best of Burgers, Pizza, and Greens, all in one great place.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ORDER GRID -->
    <section class="w-full bg-base-100">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="grid gap-6 lg:grid-cols-[1fr_380px] min-h-[900px]">
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

<style scoped></style>
