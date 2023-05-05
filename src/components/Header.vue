<template>
  <div class="flex w-full">
    <img
      class="mr-6 w-16"
      src="icon.svg"
      alt="NSSW Icon"
      @click="$router.push({ path: '/' })"
    />
    <UserPoints />
  </div>
</template>

<script>
import UserPoints from '../components/UserPoints'

export default {
  name: 'HeaderComponent',
  components: {
    UserPoints,
  },
}
</script>

<style></style>
