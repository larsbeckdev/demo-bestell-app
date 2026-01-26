<script setup>
import { computed, reactive, ref } from 'vue'
import OrderContent from '@/layouts/components/OrderContent.vue'
import Basket from '@/layouts/components/Basket.vue'

const heroUrl = new URL('@/assets/images/hero-7.webp', import.meta.url).href
const logoUrl = new URL('@/assets/images/Burger.png', import.meta.url).href

// Cart: [{ id, name, price, image, qty }]
const cart = reactive([])

// Abholung / Lieferung
const fulfillment = ref('pickup') // 'pickup' | 'delivery'
const deliveryFee = computed(() => (fulfillment.value === 'delivery' ? 5 : 0))

function addToCart(dish) {
  const item = cart.find((i) => i.id === dish.id)
  if (item) item.qty++
  else cart.push({ id: dish.id, name: dish.name, price: dish.price, image: dish.image, qty: 1 })
}

function removeFromCart(dishOrItem) {
  const id = dishOrItem.id
  const idx = cart.findIndex((i) => i.id === id)
  if (idx === -1) return
  cart[idx].qty--
  if (cart[idx].qty <= 0) cart.splice(idx, 1)
}

function clearCart() {
  cart.splice(0, cart.length)
}

const subtotal = computed(() => cart.reduce((sum, i) => sum + Number(i.price) * i.qty, 0))
const total = computed(() => subtotal.value + deliveryFee.value)

// Für "Added X" in DishCards:
function qtyForDish(dishId) {
  return cart.find((i) => i.id === dishId)?.qty ?? 0
}
</script>

<template>
  <!-- HERO -->
  <section class="relative w-full">
    <div
      class="relative mt-[80px] h-[260px] md:h-[380px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroUrl})` }"
    >
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <div class="relative -mt-16 md:-mt-20">
      <div class="max-w-3xl mx-auto px-4 text-center min-h-72">
        <div
          class="mx-auto w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <img
            :src="logoUrl"
            alt="BurgerHouse Logo"
            class="w-32 h-32 object-contain rounded-full border-4 border-white"
          />
        </div>

        <div class="mt-4">
          <h1 class="text-3xl font-bold"><span class="text-primary">Burger</span>House</h1>

          <div class="mt-2 flex items-center justify-center gap-2 text-sm text-gray-600">
            <div class="rating pointer-events-none">
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
            <span class="flex items-center gap-1"><strong>4.1</strong></span>
            <span class="opacity-60">(317)</span>
          </div>

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
          <OrderContent :qty-for-dish="qtyForDish" @add="addToCart" @remove="removeFromCart" />
        </div>

        <!-- RIGHT -->
        <aside class="lg:sticky lg:top-24 h-fit">
          <Basket
            :items="cart"
            :subtotal="subtotal"
            :delivery-fee="deliveryFee"
            :total="total"
            :fulfillment="fulfillment"
            @set-fulfillment="(v) => (fulfillment = v)"
            @add="addToCart"
            @remove="removeFromCart"
            @clear="clearCart"
          />
        </aside>
      </div>
    </div>
  </section>
</template>
