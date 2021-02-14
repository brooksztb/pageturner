<template>
  <nav
    role="navigation"
    class="fixed bottom-0 flex items-center justify-center w-full h-16 py-4 text-base shadow-md md:text-white bg-secondary text-primary md:relative md:bg-transparent md:h-full md:p-0 z-100 md:z-0 md:shadow-none rounded-t-md md:rounded-none"
  >
    <div class="w-full md:w-auto">
      <ul class="flex justify-center w-full h-full list-none">
        <li
          class="flex items-center justify-center w-1/2 p-4 md:w-full"
          v-for="(link, index) in navLinks"
          :key="index"
        >
          <nuxt-link
            class="flex flex-col items-center justify-center text-xs duration-100 ease-out border-b border-transparent md:text-base md:opacity-75 solid hover:border-secondary hover:opacity-100 transition-border-color"
            :to="link.route"
          >
            <fa class="block md:hidden" :icon="['fas', link.icon]" size="2x" />
            {{ link.text }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          text: 'Home',
          route: '/',
          icon: 'home'
        },
        {
          text: 'Books',
          route: '/books',
          icon: 'book'
        }
      ]
    }
  }
}
</script>

<style></style>
