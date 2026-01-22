<script setup>
import ThemeController from '@/components/ui/theme/ThemeController.vue'
</script>

<template>
  <header class="w-full">
    <div class="navbar bg-base-100 shadow-sm px-4">
      <!-- Left -->
      <div class="navbar-start">
        <a class="btn btn-ghost text-xl">Bestell App</a>
      </div>

      <!-- Right -->
      <div class="navbar-end">
        <div class="flex items-center gap-4">
          <ul class="menu menu-horizontal px-1 items-center">
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

          <!-- Theme -->
          <ThemeController />
        </div>
      </div>
    </div>
  </header>
</template>
