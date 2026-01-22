<script setup>
import Header from '@/layouts/components/Header.vue'
import Footer from '@/layouts/components/Footer.vue'
import OrderContent from '@/layouts/components/OrderContent.vue'
import Basket from '@/layouts/components/Basket.vue'
</script>

<template>
  <Header />

  <main class="main-layout">
    <section class="hero-section p-4 mb-4 min-h-72 ">
      <h1 class="text-3xl font-bold">Bestellung</h1>
    </section>

    <section class="order-section">
      <div class="order-section-inner">
        <div class="order-content p-4">
          <OrderContent />
        </div>
        <div class="main-basket">
          <Basket />
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

.main-content {
}

.main-basket {
}

.order-section-inner {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 2rem;
  padding: 2rem 1rem;
}

/* Mobile */
@media (max-width: 900px) {
  .order-layout {
    grid-template-columns: 1fr;
  }

  .order-basket {
    order: 2;
  }
}
</style>
