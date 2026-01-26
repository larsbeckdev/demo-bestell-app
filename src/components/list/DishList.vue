<script setup>
import { computed } from 'vue'
import { dishes } from '@/data/dishes'
import DishCard from '@/components/card/DishCard.vue'

const props = defineProps({
  qtyForDish: { type: Function, required: true },
})

const emit = defineEmits(['add', 'remove'])

// dishes nach Kategorie gruppieren
const groupedDishes = computed(() => {
  return dishes.reduce((groups, dish) => {
    const d = {
      ...dish,
      quantity: props.qtyForDish(dish.id), // <-- Added X kommt von Cart
    }

    if (!groups[d.category]) groups[d.category] = []
    groups[d.category].push(d)
    return groups
  }, {})
})
</script>

<template>
  <div class="flex flex-col gap-8">
    <div
      v-for="(categoryDishes, categoryName) in groupedDishes"
      :key="categoryName"
      class="flex flex-col gap-3"
    >
      <div class="flex items-center gap-3 bg-primary text-white text-2xl px-4 py-2 rounded-md">
        <span v-if="categoryName.includes('Burger')">🍔</span>
        <span v-else-if="categoryName.includes('Pizza')">🍕</span>
        <span v-else>🥗</span>
        <span>{{ categoryName }}</span>
      </div>

      <DishCard
        v-for="dish in categoryDishes"
        :key="dish.id"
        :dish="dish"
        @add="emit('add', $event)"
        @remove="emit('remove', $event)"
      />
    </div>
  </div>
</template>
