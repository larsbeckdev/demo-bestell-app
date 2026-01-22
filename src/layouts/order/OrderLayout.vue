<script setup>
import Header from '@/layouts/components/Header.vue'
import Footer from '@/layouts/components/Footer.vue'
import OrderContent from '@/layouts/components/OrderContent.vue'
import Basket from '@/layouts/components/Basket.vue'
</script>

<template>
  <Header />

  <main class="main-layout">
    <section class="main-content">
      <div class="inner-section">
        <OrderContent />
      </div>
    </section>

    <aside class="main-basket">
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
  background: orange;
}

.main-content {
  background: yellow;
}

.main-basket {
  background: lightgray;
}

.main-layout {
  display: grid;
  grid-template-columns: 1fr 360px; /* links flexibel, rechts Warenkorb */
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
