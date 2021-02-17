<template>
  <nav
    id="site-navigation"
    role="navigation"
    class="fixed bottom-0 flex items-center justify-center w-full h-16 py-4 text-base shadow-md md:text-white bg-secondary text-primary md:relative md:bg-transparent md:h-full md:p-0 md:mt-4 z-1000 md:z-0 md:shadow-none rounded-t-md md:rounded-none"
    aria-label="Main"
  >
    <div class="relative w-full md:w-auto">
      <ul class="relative flex flex-row justify-center list-none md:flex-wrap">
        <li
          class="flex items-center justify-center w-1/3 p-4 md:w-auto"
          v-for="(link, index) in navLinks"
          :key="index"
        >
          <nuxt-link
            tabindex="0"
            class="flex flex-col items-center justify-center w-full text-xs duration-100 ease-out border-b border-transparent md:w-auto md:text-base md:opacity-75 solid hover:border-secondary hover:opacity-100 transition-border-color"
            :to="link.route"
          >
            <fa class="block md:hidden" :icon="link.icon" size="2x" />
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
          icon: ['fas', 'home']
        },
        {
          text: 'Book Collection',
          route: '/books',
          icon: ['fas', 'book']
        },
        {
          text: 'Add Books',
          route: '/books/add',
          icon: ['fas', 'plus-square']
        }
      ]
    }
  }
}
</script>

<style></style>
