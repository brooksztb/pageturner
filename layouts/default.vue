<template>
  <div class="bg-primary text-white min-h-screen">
    <the-header />
    <main class="max-w-6xl py-8">
      <div class="px-4 mx-auto sm:px-6 lg:px-8">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>
<style></style>
