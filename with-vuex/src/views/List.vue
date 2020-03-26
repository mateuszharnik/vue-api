<template>
  <transition-group :tag="null" name="fade" :duration="1000">
    <spiner key="spinner" v-if="isLoading"></spiner>
    <section key="section" v-else class="w-full absolute">
      <alert v-if="isError"></alert>
      <div v-else class="flex flex-wrap">
        <h2 class="w-full text-center text-5xl mb-2 text-yellow-dark">{{ category }}</h2>
        <div
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
          v-for="result in results"
          :key="result.created"
        >
          <card :result="result"></card>
        </div>
        <div v-if="nextPage" class="w-full text-center mt-4 mb-8">
          <button
            :disabled="isDisabled"
            title="Load more"
            type="button"
            @click="loadMore"
            class="bg-yellow-dark hover:bg-yellow text-black font-bold py-3 px-6 rounded-full"
          >
            Load more
            <i v-if="isDisabled" class="ml-1 fas fa-circle-notch fa-spin" />
          </button>
        </div>
      </div>
    </section>
  </transition-group>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Card from '@/components/Card.vue';
import Spiner from '@/components/Spiner.vue';
import Alert from '@/components/Alert.vue';

export default {
  name: 'list',
  components: {
    Card,
    Spiner,
    Alert,
  },
  data: () => ({
    results: [],
    isLoading: true,
    isError: false,
    isDisabled: false,
    isComponentMounted: false,
    nextPage: null,
  }),
  computed: {
    ...mapState(['categories']),
    category() {
      const result = this.categories.filter(data => `/${data}`.toLowerCase() === this.$route.path.toLowerCase());
      return result[0];
    },
  },
  methods: {
    ...mapActions(['getData', 'getNextPage']),
    async loadMore() {
      if (this.nextPage) {
        this.isDisabled = true;

        try {
          const data = await this.getNextPage(this.nextPage);

          if (this.isComponentMounted) {
            this.results = [
              ...this.results,
              ...data.results,
            ];
            this.nextPage = data.next;
            this.isDisabled = false;
          }
        } catch (error) {
          this.isDisabled = false;
          this.isError = true;
        }
      }
    },
  },
  async mounted() {
    this.isComponentMounted = true;

    const { path } = this.$route;

    try {
      const data = await this.getData(path);

      if (this.isComponentMounted) {
        this.results = data.results;
        this.isLoading = false;
        this.nextPage = data.next;
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
