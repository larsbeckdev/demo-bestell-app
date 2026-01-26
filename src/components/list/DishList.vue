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
  { match: /burger|beef|rind/i, icon: Beef },
  { match: /pizza/i, icon: Pizza },
  { match: /pasta|nudel|sandwich|wrap|baguette/i, icon: Sandwich },
  { match: /salat|vegan|vegetar/i, icon: Salad },
  { match: /fisch|fish|lachs|thun/i, icon: Fish },
  { match: /suppe|soup|ramen/i, icon: Soup },
  { match: /dessert|sweet|eis|ice/i, icon: IceCream },
  { match: /kaffee|coffee/i, icon: Coffee },
  { match: /bier|beer|alkohol/i, icon: Beer },
  { match: /getränk|drink|soft|cola|wasser|saft/i, icon: CupSoda },
  { match: /special|hot|spicy|scharf/i, icon: Flame },
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
        class="flex items-center gap-3 bg-primary text-white text-2xl px-4 py-2 rounded-full mb-4"
      >
        <div
          class="bg-primary rounded-full p-2 w-16 h-16 mx-2 -my-6 flex items-center justify-center"
        >
          <component :is="resolveCategoryIcon(categoryName)" class="w-8 h-8 shrink-0" />
        </div>

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
