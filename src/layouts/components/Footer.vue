<script setup></script>

<template>
  <footer class="bg-base-300 border-t border-slate-200 mt-12">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <!-- Left -->
        <div class="text-sm text-slate-600">
          © {{ new Date().getFullYear() }} Bestell App · Alle Rechte vorbehalten
        </div>

        <!-- Center / Links -->
        <nav class="flex flex-wrap gap-4 text-sm">
          <a href="#" class="text-slate-600 hover:text-slate-900 transition">Impressum</a>
          <a href="#" class="text-slate-600 hover:text-slate-900 transition">Datenschutz</a>
          <a href="#" class="text-slate-600 hover:text-slate-900 transition">AGB</a>
        </nav>

        <!-- Right -->
        <div class="text-sm text-slate-500">Made with ❤️</div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
