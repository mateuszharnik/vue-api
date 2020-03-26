<template>
  <div class="w-full text-xl">
    <p class="my-2 text-yellow-dark">
      Director: <span class="text-white">{{ result.director }}</span>
    </p>
    <p class="my-2 text-yellow-dark">
      Producer: <span class="capitalize text-white">{{ result.producer }}</span>
    </p>
    <p class="my-2 text-yellow-dark">
      Episode: <span class="capitalize text-white">{{ result.episode_id }}</span>
    </p>
    <p class="my-2 text-yellow-dark">
      Opening: <span class="text-white">{{ result.opening_crawl }}</span>
    </p>
    <p class="my-2 text-yellow-dark">
      Release date: <span class="text-white">{{ date }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'film',
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      const { release_date: date } = this.result;
      return date.split('-').reverse().join().replace(/[,]/mg, '/');
    },
  },
};
</script>
