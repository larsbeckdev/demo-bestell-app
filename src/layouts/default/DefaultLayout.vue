<script setup>
import Header from '@/layouts/components/Header.vue'
import Main from '@/layouts/components/Main.vue'
import Footer from '@/layouts/components/Footer.vue'
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>

<style scoped>
header {
  background: red;
}

main {
  background: blue;
}

footer {
  background: green;
}
</style>
