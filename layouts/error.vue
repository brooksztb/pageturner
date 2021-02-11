<template>
  <div>
    <div class="relative">
      <div
        class="flex flex-col justify-center w-full mx-auto text-4xl text-center text-primary"
      >
        <h1 class="" v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
        <nuxt-link class="text-white" to="/">Go to Home page</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
