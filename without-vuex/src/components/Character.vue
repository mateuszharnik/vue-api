<template>
  <div class="w-full text-xl">
    <p class="my-2 text-yellow-dark">
      Birth year: <span class="text-white">{{ result.birth_year }}</span>
    </p>
    <p class="my-2 text-yellow-dark">
      Gender: <span class="capitalize text-white">{{ result.gender }}</span>
    </p>
    <p class="my-2 text-yellow-dark">
      Eye color: <span class="capitalize text-white">{{ result.eye_color }}</span>
    </p>
    <p class="my-2 text-yellow-dark">
      Hair color: <span class="capitalize text-white">{{ result.hair_color }}</span>
    </p>
    <p class="my-2 text-yellow-dark">
      Height: <span class="text-white">{{ result.height }} cm</span>
    </p>
    <p class="my-2 text-yellow-dark">
      Mass: <span class="text-white">{{ result.mass }} kg</span>
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
  name: 'character',
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
