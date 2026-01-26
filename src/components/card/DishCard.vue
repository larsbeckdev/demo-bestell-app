<script setup>
const props = defineProps({
  dish: { type: Object, required: true },
})

import { Plus, Minus } from 'lucide-vue-next'
const emit = defineEmits(['add', 'remove'])
</script>

<template>
  <div class="flex items-center gap-4 p-4 rounded-2xl bg-base-200">
    <img :src="dish.image" :alt="dish.name" class="w-28 h-20 object-cover rounded-xl" />

    <div class="flex-1 min-w-0">
      <h3 class="font-semibold leading-tight truncate">{{ dish.name }}</h3>
      <p class="text-sm opacity-70 truncate">{{ dish.description }}</p>
    </div>

    <div class="flex flex-col items-end justify-between self-stretch">
      <div class="font-semibold whitespace-nowrap">{{ Number(dish.price).toFixed(2) }}€</div>

      <div class="flex items-center gap-2">
        <span v-if="dish.quantity > 0" class="badge badge rounded-full p-3 bg-base-300">
          {{ dish.quantity }}
        </span>

        <button
          v-if="dish.quantity > 0"
          class="btn btn-circle btn-sm btn-base bg-base-300"
          type="button"
          aria-label="Remove from basket"
          @click="emit('remove', dish)"
        >
          <Minus class="w-4 h-4" />
        </button>

        <button
          class="btn btn-circle btn-sm btn-primary"
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
