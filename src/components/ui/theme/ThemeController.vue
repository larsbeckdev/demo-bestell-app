<script setup>
import { ref, onMounted } from 'vue'
import { THEMES } from './data.js'
import { initTheme, applyTheme, setStoredTheme, getStoredTheme } from './utils.js'
import { PaintBucket } from 'lucide-vue-next'

const selected = ref('light')

function setTheme(theme) {
  selected.value = theme
  applyTheme(theme)
  setStoredTheme(theme)
}

onMounted(() => {
  const theme = initTheme('light')
  selected.value = theme

  const stored = getStoredTheme()
  if (stored) selected.value = stored
})
</script>

<template>
  <div class="dropdown dropdown-end">
    <button
      type="button"
      tabindex="0"
      class="btn btn-sm btn-info gap-2 "
      aria-label="Theme auswählen"
    >
      <!-- Palette Icon -->
      <PaintBucket class="h-4 w-4 opacity-80" />

      <!-- <span class="font-medium">Theme</span> -->
    </button>

    <div
      tabindex="0"
      class="dropdown-content z-[60] mt-6 w-64 rounded-box border border-base-200 bg-base-100 shadow-xl -mr-12 text-base-content"
    >
      <div class="px-3 py-2 border-b border-base-200">
        <div class="text-xs opacity-70">Aktiv</div>
        <div class="text-sm font-semibold capitalize">{{ selected }}</div>
      </div>

      <ul class="max-h-80 overflow-auto p-2">
        <li v-for="t in THEMES" :key="t">
          <label
            class="btn btn-sm btn-ghost w-full justify-between"
            :class="selected === t ? 'bg-base-200' : ''"
          >
            <span class="capitalize">{{ t }}</span>

            <span class="flex items-center gap-2">
              <!-- Check -->
              <svg
                v-if="selected === t"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>

              <!-- DaisyUI Theme Controller (Radio) -->
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller sr-only"
                :aria-label="t"
                :value="t"
                :checked="selected === t"
                @change="setTheme(t)"
              />
            </span>
          </label>
        </li>
      </ul>

      <div class="p-2 border-t border-base-200 flex justify-end">
        <button type="button" class="btn btn-xs btn-ghost" @click="setTheme('light')">Reset</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* optional */
</style>
