<template>
  <span>
<div v-for="(topic, index) in topics" :key="index" class="flex py-2 text-sm  px-4 back-gray rounded-2xl justify-between">
    <img
        class="w-6 pointer-events-none"
        src="ico-completed.svg"
        alt="Completed Icon"
    />
    <div class="mx-4 self-center flex flex-col">
      <p>{{ topic.title }}</p>
      <p class="italic text-accent">Welcoming</p>
    </div>
    <div class="flex place-items-center gap-2">
      <img
          class="w-5 pointer-events-none"
          src="ico-time.svg"
          alt="Completed Icon"
      />
      <p>{{ topic.duration }}</p>
      <img
          class="w-5 ml-2"
          src="favs-filled.svg"
          alt="Favs Icon"
          @click="store.removeFavs(topic.id)"
      />
    </div>
  </div>
</span>
</template>

<script>
import { useFavsStore } from '../store/favs';
export default {
  name: 'FavouritePill',
  props: {
        topid: { type: Number, default: 0 },
  },
  data() {
        return {
            store: useFavsStore(),
        }
    },
  computed: {
    topics() {
      return this.store.data.trainings[0].topics.filter(training => this.store.favs.includes(training.id))
    }
  }
}
</script>
