<script setup>
import { computed } from 'vue'
import { dishes } from '@/data/dishes'
import DishCard from '@/components/card/DishCard.vue'

import {
  Beef,
  Pizza,
  Salad,
  Sandwich,
  IceCream,
  Coffee,
  Beer,
  CupSoda,
  Fish,
  Flame,
  Soup,
  CakeSlice,
  Utensils,
} from 'lucide-vue-next'

const props = defineProps({
  qtyForDish: { type: Function, required: true },
})

const emit = defineEmits(['add', 'remove'])

// Kategorie Icons zuordnen
const categoryIconMap = [
  { match: /^Burger & Sandwiches$/, icon: Beef },
  { match: /^Pizza$/, icon: Pizza },
  { match: /^Pasta$/, icon: Soup },
  { match: /^Salat$/, icon: Salad },
  { match: /^Desert$/, icon: CakeSlice },
  { match: /^Drinks$/, icon: CupSoda },
]

function resolveCategoryIcon(categoryName = '') {
  return categoryIconMap.find((e) => e.match.test(categoryName))?.icon || Utensils
}

// dishes nach Kategorie gruppieren
const groupedDishes = computed(() => {
  return dishes.reduce((groups, dish) => {
    const d = {
      ...dish,
      quantity: props.qtyForDish(dish.id),
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
      <div
        class="flex items-center gap-1 bg-primary text-white text-2xl px-8 py-2 rounded-full mb-4 justify-center"
      >
        <div class="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
          <component :is="resolveCategoryIcon(categoryName)" class="w-8 h-8 shrink-0" />
        </div>

        <span class="font-semibold">{{ categoryName }}</span>
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
