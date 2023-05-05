<template>
  <div class="grid flex h-screen p-5">
    <div class="flex justify-center items-center">
      <WelcomeScreen />
    </div>
  </div>
</template>

<script>
import { useFavsStore } from './../store/favs'
import WelcomeScreen from './../components/WelcomeScreen'

export default {
  name: 'IndexPage',
  components: {
    WelcomeScreen,
  },
  transition: 'default',
  data() {
    return {
      store: useFavsStore(),
    }
  },
}
</script>
