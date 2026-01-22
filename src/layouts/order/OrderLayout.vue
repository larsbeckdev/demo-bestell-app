<script setup>
import Header from '@/layouts/components/Header.vue'
import Footer from '@/layouts/components/Footer.vue'
import OrderContent from '@/layouts/components/OrderContent.vue'
import Basket from '@/layouts/components/Basket.vue'
</script>

<template>
  <Header />

  <main class="order-layout">
    <section class="order-content">
      <OrderContent />
    </section>

    <aside class="order-basket">
      <Basket />
    </aside>
  </main>

  <Footer />
</template>

<style scoped>
header {
  background: red;
}

main {
  background: blue;
}

footer {
  background: green;
}

.order-content {
  background: yellow;
}

.order-basket {
  background: lightgray;
}

.order-layout {
  display: grid;
  grid-template-columns: 1fr 360px; /* links flexibel, rechts Warenkorb */
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
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
