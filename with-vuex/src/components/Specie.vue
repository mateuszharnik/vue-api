<template>
  <div class="w-full text-xl">
    <p class="my-2 text-yellow-dark">
      Language: <span class="capitalize text-white">{{ result.language }}</span>
    </p>
    <p class="my-2 text-yellow-dark">
      Average height: <span class="text-white">{{ result.average_height }} cm</span>
    </p>
    <p class="my-2 text-yellow-dark">
      Average lifespan: <span class="text-white">{{ result.average_lifespan }}</span>
    </p>
    <p class="my-2 text-yellow-dark">
      Skin colors: <span class="capitalize text-white">{{ result.skin_colors }}</span>
    </p>
    <p class="my-2">
      <router-link
        :to="`/planets/${id}`"
        title="Go to planet"
        class="text-yellow-dark no-underline hover:text-yellow"
      >
        Homeworld
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'specie',
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  computed: {
    id() {
      const { homeworld } = this.result;
      const index = homeworld.substr(homeworld.search(/[0-9]/));
      return parseInt(index, 10);
    },
  },
};
</script>
