<template>
  <div class="text-center select-none">
    <div class="mb-4" @click="startSection">
      <img
        class="m-auto w-32 md:w-42 lg:w-48 pointer-events-none"
        src="icon.svg"
        alt="NSSW icon"
      />
      <h1 class="text-xs mt-4">e-learning platform</h1>
    </div>
  </div>
</template>
<script>
import { useFavsStore } from './../store/favs'

export default {
  name: 'WelcomeScreen',

  data() {
    return {
      store: useFavsStore(),
    }
  },

  methods: {
    startSection() {
      window.navigator?.vibrate?.([50, 200, 50, 200])
      this.$router.push({ path: '/board' })
    },
  },
}
</script>
