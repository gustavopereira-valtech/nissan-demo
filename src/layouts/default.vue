<template>
  <div class="nssw-default-layout p-2 md:p-6 lg:p-10">
    <nuxt></nuxt>
  </div>
</template>

<script>
import { useFavsStore } from './../store/favs'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      store: useFavsStore(),
    }
  },
  beforeMount() {
    window.NSSW = window.NSSW || {}

    if (localStorage.session && localStorage.session.length) {
      const session = localStorage.session.split(",")
      session.forEach(el => {
        this.store.addFavs(Number(el))
      });
    } else {
      localStorage.session = []
    }
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  touch-action: none;
  background-color: #14172B;
  color: white;
}
.nssw-default-layout {
  display: block;
}

.default-leave-active {
  animation-name: fadeout;
  animation-duration: 300ms;
  animation-iteration-count: 1;
}
.default-enter {
  @keyframes fadeout {
    0% {
      background-color: #14172B;
    }
    50% {
      background-color: #2B2E40;
    }
    100% {
      background-color: #14172B;
    }
  }
}
</style>
