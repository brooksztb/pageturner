<template>
  <div class="min-h-screen text-white bg-primary">
    <the-header />
    <the-navigation />
    <main
      id="content"
      class="relative pt-8 pb-24 divide-y md:pb-8 divide-secondary"
    >
      <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <nuxt keep-alive />
      </div>
    </main>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheNavigation from '~/components/TheNavigation.vue'

export default {
  components: {
    TheHeader,
    TheNavigation
  }
}
</script>
<style></style>
