<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Burger & More',
  },
  subtitle: {
    type: String,
    default: 'Frisch zubereitet · Direkt bestellt · Schnell geliefert',
  },
  hint: {
    type: String,
    default: 'Dies ist ein Test-Store – Bestellungen haben keine Wirkung.',
  },
})

const heroUrl = new URL('@/assets/images/hero-7.webp', import.meta.url).href
</script>

<template>
  <section class="relative w-full">
    <!-- Background -->
    <div
      class="relative h-[260px] md:h-[380px] lg:h-[420px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroUrl})` }"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content Card -->
    <div class="relative -mt-24 md:-mt-28 px-4">
      <div class="mx-auto max-w-5xl rounded-3xl bg-base-100/95 backdrop-blur shadow-lg p-6 md:p-10">
        <div class="flex flex-col gap-4 text-center">
          <h1 class="text-2xl md:text-4xl font-bold leading-tight">
            {{ title }}
          </h1>

          <p class="text-base md:text-lg opacity-80">
            {{ subtitle }}
          </p>

          <div>
            <button class="btn">
              <router-link to="/bestellen">Jetzt bestellen</router-link>
            </button>
          </div>

          <!-- Test Hint -->
          <div
            class="mt-2 inline-flex items-center gap-2 rounded-xl bg-warning/15 px-4 py-2 text-sm text-warning-content justify-center"
          >
            <span class="font-semibold">Hinweis:</span>
            <span>{{ hint }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
