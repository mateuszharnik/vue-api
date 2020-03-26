<template>
  <div>
    <nav-bar></nav-bar>
    <main class="container mx-auto mt-8 relative">
      <transition name="fade" :duration="1000" appear>
        <router-view :key="key"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar,
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #3d4852;
}

::-webkit-scrollbar-thumb {
  background: #f2d024;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffed4a;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-active {
  transition: opacity 0.5s ease-in-out 0.5s;
}
</style>
