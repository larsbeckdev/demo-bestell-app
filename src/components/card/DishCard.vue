<script setup>
const props = defineProps({
  dish: { type: Object, required: true },
})

import { Plus, Minus } from 'lucide-vue-next'
const emit = defineEmits(['add', 'remove'])
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 rounded-2xl bg-base-200">
    <!-- Image -->
    <img
      :src="dish.image"
      :alt="dish.name"
      class="w-full sm:w-28 h-40 sm:h-20 object-cover rounded-xl"
    />

    <!-- Text -->
    <div class="flex-1 min-w-0">
      <h3 class="font-semibold leading-tight sm:truncate">
        {{ dish.name }}
      </h3>
      <p class="text-sm opacity-70 sm:truncate">
        {{ dish.description }}
      </p>
    </div>

    <!-- Price + Controls -->
    <div
      class="flex items-center justify-between sm:flex-col sm:items-end sm:justify-between sm:self-stretch gap-3"
    >
      <div class="font-semibold whitespace-nowrap">{{ Number(dish.price).toFixed(2) }}€</div>

      <div class="flex items-center gap-2">
        <span
          v-if="dish.quantity > 0"
          class="rounded-full px-3 text-sm px-8 py-2 border-none bg-primary text-white"
        >
          {{ dish.quantity }}
        </span>

        <button
          v-if="dish.quantity > 0"
          class="btn btn-circle btn-sm btn-soft border-none"
          type="button"
          aria-label="Remove from basket"
          @click="emit('remove', dish)"
        >
          <Minus class="w-4 h-4" />
        </button>

        <button
          class="btn btn-circle btn-sm btn-primary border-none"
          type="button"
          aria-label="Add to basket"
          @click="emit('add', dish)"
        >
          <Plus class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>
