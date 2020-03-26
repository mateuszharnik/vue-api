<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <div class="flex items-center flex-no-shrink mr-6">
        <router-link
          to="/"
          @click.native="closeMenu"
          title="Home"
          class="text-yellow-dark no-underline hover:text-yellow-light"
        >
          <span class="font-semibold text-xl tracking-tight">SWAPI</span>
        </router-link>
      </div>
      <div class="block lg:hidden">
        <button
          type="button"
          class="flex items-center px-3 py-2 text-yellow-dark hover:text-yellow-light"
          @click="toggleMenu"
          :aria-expanded="expanded"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full lg:flex lg:items-center lg:w-auto" :class="active">
        <div class="text-center lg:flex-grow">
          <router-link
            v-for="category in categories"
            :key="category"
            :title="category"
            :to="`/${category.toLowerCase()}`"
            @click.native="closeMenu"
            class="block mt-4 no-underline text-yellow-dark capitalize hover:text-yellow-light mr-4
              lg:inline-block lg:mt-0"
          >
            {{ category }}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    isOpen: false,
    isDisabled: false,
    isExpanded: false,
  }),
  computed: {
    active() {
      return this.isOpen ? 'block' : 'hidden';
    },
    expanded() {
      return this.isExpanded ? 'true' : 'false';
    },
  },
  methods: {
    toggleMenu() {
      if (!this.isDisabled) {
        this.isOpen = !this.isOpen;
        this.isExpanded = !this.isExpanded;
        this.isDisabled = true;

        setTimeout(() => {
          this.isDisabled = false;
        }, 400);
      }
    },
    closeMenu() {
      this.isOpen = false;
      this.isExpanded = false;
    },
  },
};
</script>
