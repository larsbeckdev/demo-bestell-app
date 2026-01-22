<script setup>
import ThemeController from '@/components/ui/theme/ThemeController.vue'
</script>

<template>
  <header>
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Bestell App</a>
      </div>
      <div class="flex-none flex">
        <ul class="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul class="bg-base-100 rounded-t-none p-2">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
        <div class="flex align-center"><ThemeController /></div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
