<template>
  <section class="md:max-w-sm md:mx-auto rounded bg-black overflow-hidden shadow-lg">
    <div class="px-6 py-6 flex flex-wrap">
      <div class="w-full mb-6 text-center font-bold text-xl capitalize">{{ text }}</div>
      <div class="w-full text-center">
        <router-link
          class="bg-yellow-dark no-underline hover:bg-yellow text-black
            font-bold py-2 px-4 rounded"
          :to="`/${text.toLowerCase()}`"
          :title="text"
        >
          See more...
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'category',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
