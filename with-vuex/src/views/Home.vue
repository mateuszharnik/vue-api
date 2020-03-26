<template>
  <section class="w-full absolute">
    <h2 class="text-center text-5xl p-4 mb-2 text-yellow-dark">Hello Star Wars API</h2>
    <p class="text-center text-2xl mb-6 text-yellow-dark">
      Data from
      <a href="https://swapi.co/" title="Go to the website" class="text-yellow hover:text-yellow-dark">
        swapi.co
      </a>
    </p>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 p-1 md:p-2" v-for="category in categories" :key="category">
        <category :text="category"></category>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

import Category from '@/components/Category.vue';

export default {
  name: 'home',
  components: {
    Category,
  },
  computed: mapState(['categories']),
};
</script>
