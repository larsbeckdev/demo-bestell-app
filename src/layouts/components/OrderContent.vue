<script setup>
import DishList from '@/components/list/DishList.vue'

const props = defineProps({
  qtyForDish: {
    type: Function,
    required: true,
  },
})

const emit = defineEmits(['add', 'remove'])
</script>

<template>
  <div class="h-full">
    <div class="mb-4 flex flex-col justify-between w-full">
      <DishList
        :qty-for-dish="qtyForDish"
        @add="emit('add', $event)"
        @remove="emit('remove', $event)"
      />
    </div>
  </div>
</template>
