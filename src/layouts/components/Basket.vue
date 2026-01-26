<script setup>
import { computed, ref, onBeforeUnmount, onMounted } from 'vue'
import {
  Trash2,
  Store,
  Truck,
  Minus,
  Plus,
  CreditCard,
  Info,
  ShoppingCart,
  X,
} from 'lucide-vue-next'

const props = defineProps({
  items: { type: Array, required: true },
  subtotal: { type: Number, required: true },
  deliveryFee: { type: Number, required: true },
  total: { type: Number, required: true },
  fulfillment: { type: String, required: true },
})

const emit = defineEmits(['add', 'remove', 'clear', 'set-fulfillment', 'checkout'])

function eur(v) {
  return `${Number(v || 0).toFixed(2)}€`
}

/* =========================
   Mobile Drawer State
   ========================= */
const isOpen = ref(false)

const itemCount = computed(() =>
  (props.items || []).reduce((sum, i) => sum + Number(i.qty || 0), 0),
)

function open() {
  isOpen.value = true
  // Scroll lock
  document.documentElement.classList.add('overflow-hidden')
}
function close() {
  isOpen.value = false
  document.documentElement.classList.remove('overflow-hidden')
}

function onKeyDown(e) {
  if (e.key === 'Escape' && isOpen.value) close()
}

onMounted(() => window.addEventListener('keydown', onKeyDown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
  document.documentElement.classList.remove('overflow-hidden')
})

/* =========================
   Test-Store Hinweis
   ========================= */
const showTestNotice = ref(false)
let noticeTimer = null

function onCheckout() {
  showTestNotice.value = true
  if (noticeTimer) clearTimeout(noticeTimer)
  noticeTimer = setTimeout(() => (showTestNotice.value = false), 4000)

  emit('clear')
  emit('checkout')

  // Mobile Drawer schließen (nice UX)
  close()
}
</script>

<template>
  <!-- =========================
       DESKTOP (lg+): normales Basket Card
       ========================= -->
  <div class="hidden lg:block">
    <div class="rounded-lg bg-base-200">
      <!-- Header -->
      <div class="flex items-center justify-between border-b border-base-300/70 p-4">
        <span class="text-sm font-bold opacity-70">Warenkorb</span>

        <button class="btn btn-ghost btn-sm" :disabled="items.length === 0" @click="emit('clear')">
          <Trash2 class="w-4 h-4 opacity-70" />
          Leeren
        </button>
      </div>

      <!-- Abholung / Lieferung -->
      <div class="p-4 border-b border-base-300/70">
        <div class="join w-full bg-base-300/80 rounded-lg">
          <button
            class="btn join-item w-1/2 gap-2"
            :class="fulfillment === 'pickup' ? 'btn-primary' : 'btn-ghost'"
            @click="emit('set-fulfillment', 'pickup')"
          >
            <Store class="w-4 h-4" />
            Abholung
          </button>

          <button
            class="btn join-item w-1/2 gap-2"
            :class="fulfillment === 'delivery' ? 'btn-primary' : 'btn-ghost'"
            @click="emit('set-fulfillment', 'delivery')"
          >
            <Truck class="w-4 h-4" />
            Lieferung
          </button>
        </div>

        <p v-if="fulfillment === 'delivery'" class="mt-2 text-xs opacity-70">
          Liefergebühr: {{ eur(deliveryFee) }}
        </p>
      </div>

      <!-- Items -->
      <div class="p-4">
        <div class="max-h-[300px] overflow-auto pr-1 space-y-3">
          <div v-if="items.length === 0" class="text-sm opacity-60">Dein Warenkorb ist leer.</div>

          <div
            v-for="item in items"
            :key="item.id"
            class="flex items-center gap-3 rounded-xl bg-base-100/60 p-3"
          >
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.name"
              class="w-12 h-12 rounded-lg object-cover"
            />

            <div class="flex-1 min-w-0">
              <div class="font-semibold truncate">{{ item.name }}</div>
              <div class="text-xs opacity-70">{{ eur(item.price) }} · Menge: {{ item.qty }}</div>
            </div>

            <div class="flex items-center gap-2">
              <button class="btn btn-sm" @click="emit('remove', item)">
                <Minus class="w-4 h-4" />
              </button>

              <button class="btn btn-sm btn-primary" @click="emit('add', item)">
                <Plus class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="border-t border-base-300/70 p-4">
        <div class="mb-2 flex items-center justify-between text-sm">
          <span class="opacity-70">Zwischensumme</span>
          <span class="font-semibold">{{ eur(subtotal) }}</span>
        </div>

        <div v-if="fulfillment === 'delivery'" class="mb-2 flex justify-between text-sm">
          <span class="opacity-70">Liefergebühr</span>
          <span class="font-semibold">{{ eur(deliveryFee) }}</span>
        </div>

        <div class="mb-3 flex items-center justify-between">
          <span class="font-semibold opacity-70">Gesamt</span>
          <span class="text-lg font-bold">{{ eur(total) }}</span>
        </div>

        <button
          class="btn btn-primary w-full gap-2"
          :disabled="items.length === 0"
          @click="onCheckout"
        >
          <CreditCard class="w-4 h-4" />
          Zur Kasse
        </button>

        <Transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-1"
        >
          <div v-if="showTestNotice" class="alert mt-3 bg-info/30 border-info text-info">
            <Info class="w-4 h-4" />
            <span class="text-sm">
              Hinweis: Dies ist ein <b>Test-Store</b>. Bestellungen dienen nur zur Demo und werden
              nicht ausgeführt.
            </span>
          </div>
        </Transition>

        <p class="mt-2 text-xs opacity-60">Weitere Informationen findest du in unseren AGB.</p>
      </div>
    </div>
  </div>

  <!-- =========================
       MOBILE (<lg): Floating Button
       ========================= -->
  <button
    class="lg:hidden fixed z-40 right-4 bottom-4 btn btn-primary rounded-full shadow-lg gap-2"
    @click="open"
  >
    <ShoppingCart class="w-4 h-4" />
    <span class="font-semibold">Warenkorb</span>
    <span class="badge badge-ghost bg-base-100/20 border-base-100/20 text-primary-content">
      {{ itemCount }}
    </span>
    <span class="opacity-90">{{ eur(total) }}</span>
  </button>

  <!-- Overlay + Drawer -->
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="lg:hidden fixed inset-0 z-50" aria-modal="true" role="dialog">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50" @click="close"></div>

      <!-- Drawer -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-full"
        enter-to-class="translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0"
        leave-to-class="translate-y-full"
      >
        <div
          v-if="isOpen"
          class="absolute inset-x-0 bottom-0 bg-base-100 rounded-t-2xl shadow-xl border-t border-base-300"
        >
          <!-- Drawer Header -->
          <div class="flex items-center justify-between p-4 border-b border-base-300/70">
            <div class="flex items-center gap-2">
              <ShoppingCart class="w-4 h-4 opacity-70" />
              <span class="font-bold">Warenkorb</span>
              <span class="text-xs opacity-60">({{ itemCount }})</span>
            </div>
            <button class="btn btn-ghost btn-sm" @click="close">
              <X class="w-4 h-4" />
            </button>
          </div>

          <!-- Content -->
          <div class="p-4 space-y-4">
            <!-- Abholung / Lieferung -->
            <div>
              <div class="join w-full bg-base-200 rounded-lg">
                <button
                  class="btn join-item w-1/2 gap-2"
                  :class="fulfillment === 'pickup' ? 'btn-primary' : 'btn-ghost'"
                  @click="emit('set-fulfillment', 'pickup')"
                >
                  <Store class="w-4 h-4" />
                  Abholung
                </button>

                <button
                  class="btn join-item w-1/2 gap-2"
                  :class="fulfillment === 'delivery' ? 'btn-primary' : 'btn-ghost'"
                  @click="emit('set-fulfillment', 'delivery')"
                >
                  <Truck class="w-4 h-4" />
                  Lieferung
                </button>
              </div>

              <p v-if="fulfillment === 'delivery'" class="mt-2 text-xs opacity-70">
                Liefergebühr: {{ eur(deliveryFee) }}
              </p>
            </div>

            <!-- Items -->
            <div class="max-h-[45vh] overflow-auto pr-1 space-y-3">
              <div v-if="items.length === 0" class="text-sm opacity-60">
                Dein Warenkorb ist leer.
              </div>

              <div
                v-for="item in items"
                :key="item.id"
                class="flex items-center gap-3 rounded-xl bg-base-200/60 p-3"
              >
                <img
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.name"
                  class="w-12 h-12 rounded-lg object-cover"
                />

                <div class="flex-1 min-w-0">
                  <div class="font-semibold truncate">{{ item.name }}</div>
                  <div class="text-xs opacity-70">
                    {{ eur(item.price) }} · Menge: {{ item.qty }}
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button class="btn btn-sm" @click="emit('remove', item)">
                    <Minus class="w-4 h-4" />
                  </button>

                  <button class="btn btn-sm btn-primary" @click="emit('add', item)">
                    <Plus class="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <!-- Actions / Totals -->
            <div class="rounded-xl bg-base-200 p-4">
              <div class="mb-2 flex items-center justify-between text-sm">
                <span class="opacity-70">Zwischensumme</span>
                <span class="font-semibold">{{ eur(subtotal) }}</span>
              </div>

              <div v-if="fulfillment === 'delivery'" class="mb-2 flex justify-between text-sm">
                <span class="opacity-70">Liefergebühr</span>
                <span class="font-semibold">{{ eur(deliveryFee) }}</span>
              </div>

              <div class="mb-3 flex items-center justify-between">
                <span class="font-semibold opacity-70">Gesamt</span>
                <span class="text-lg font-bold">{{ eur(total) }}</span>
              </div>

              <div class="flex gap-2">
                <button
                  class="btn btn-ghost flex-1"
                  :disabled="items.length === 0"
                  @click="emit('clear')"
                >
                  <Trash2 class="w-4 h-4" />
                  Leeren
                </button>

                <button
                  class="btn btn-primary flex-1 gap-2"
                  :disabled="items.length === 0"
                  @click="onCheckout"
                >
                  <CreditCard class="w-4 h-4" />
                  Zur Kasse
                </button>
              </div>

              <Transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div v-if="showTestNotice" class="alert mt-3 bg-info/30 border-info text-info">
                  <Info class="w-4 h-4" />
                  <span class="text-sm">
                    Hinweis: Dies ist ein <b>Test-Store</b>. Bestellungen dienen nur zur Demo und
                    werden nicht ausgeführt.
                  </span>
                </div>
              </Transition>

              <p class="mt-2 text-xs opacity-60">
                Weitere Informationen findest du in unseren AGB.
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
