<template>
  <transition-group :tag="null" name="fade" :duration="1000">
    <spiner key="spinner" v-if="isLoading"></spiner>
    <section key="section" v-else class="w-full p-1 md:p-2 absolute">
      <alert v-if="isError || result.detail"></alert>
      <div v-else class="md:max-w-sm md:mx-auto h-full rounded bg-black overflow-hidden shadow-lg">
        <div class="px-10 py-10 flex flex-wrap">
          <div class="w-full mb-2 text-yellow-dark font-bold text-4xl capitalize">
            {{ result.name || result.title }}
          </div>
          <film v-if="result.director" :result="result"></film>
          <planet v-else-if="result.climate" :result="result"></planet>
          <specie v-else-if="result.average_height" :result="result"></specie>
          <character v-else :result="result"></character>
          <router-link
            :to="`/${backLink}`"
            title="Back"
            class="bg-yellow-dark hover:bg-yellow text-black
              font-bold no-underline py-2 px-4 rounded-full"
          >
            Back
          </router-link>
        </div>
      </div>
    </section>
  </transition-group>
</template>

<script>
import Spiner from '@/components/Spiner.vue';
import Alert from '@/components/Alert.vue';
import Specie from '@/components/Specie.vue';
import Film from '@/components/Film.vue';
import Character from '@/components/Character.vue';
import Planet from '@/components/Planet.vue';
import { getData } from '@/API';

export default {
  name: 'item',
  components: {
    Spiner,
    Alert,
    Planet,
    Specie,
    Film,
    Character,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    result: [],
    isLoading: true,
    isError: false,
    isComponentMounted: false,
  }),
  computed: {
    backLink() {
      return this.$route.params.pathMatch;
    },
  },
  async mounted() {
    this.isComponentMounted = true;

    const { path } = this.$route;

    try {
      const data = await getData(path);

      if (this.isComponentMounted) {
        this.result = data;
        this.isLoading = false;
      }
    } catch (error) {
      this.isLoading = false;
      this.isError = true;
    }
  },
  beforeDestroy() {
    this.isComponentMounted = false;
  },
};
</script>
