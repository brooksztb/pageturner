<template>
  <div class="min-h-screen text-white bg-primary">
    <the-header />
    <main id="content" class="relative py-8">
      <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <nuxt keep-alive />
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
