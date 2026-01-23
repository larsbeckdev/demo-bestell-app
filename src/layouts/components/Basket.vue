<script setup></script>

<template>
  <div class="sticky top-6 rounded-lg bg-secondary">
    <!-- basket header -->
    <div class="flex items-center justify-between border-b border-base-300/70 p-4">
      <div class="flex items-center gap-2">
        <div class="badge badge-primary">Basket</div>
        <span class="text-sm opacity-70">Deine Auswahl</span>
      </div>
      <button class="btn btn-ghost btn-sm">Leeren</button>
    </div>

    <!-- basket scroll area -->
    <div class="p-4">
      <div class="max-h-[calc(100vh-11rem)] overflow-auto pr-1"></div>
    </div>

    <!-- basket footer -->
    <div class="border-t border-base-300/70 p-4">
      <div class="mb-3 flex items-center justify-between text-sm">
        <span class="opacity-70">Zwischensumme</span>
        <span class="font-semibold">€</span>
      </div>
      <button class="btn btn-primary w-full rounded-xl">Zur Kasse</button>
      <p class="mt-2 text-xs opacity-60">
        Weitere Informationen zur Bestellung findest du im Warenkorb.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
