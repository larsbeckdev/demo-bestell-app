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
          <!-- Desktop Menu -->
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

          <!-- Mobile Menu Button -->
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <!-- Theme -->
          <ThemeController />
        </div>
      </div>
    </div>
  </header>
</template>
