<template>
    <div class="flex p-4 back-gray rounded-2xl justify-between items-center mb-4">
        <div class="flex justify-center items-center gap-2 md:gap-4 lg:gap-8 max-70">
            <CircularProgress classmod="w-8" size="2rem" :value="progress"/>
            <h2 class="mx-1 md:mx-2 lg:mx-4">{{ title }}</h2>
        </div>
        <div class="flex place-items-center gap-2 md:gap-4 lg:gap-8">
          <img
              class="w-5 pointer-events-none"
              src="ico-time.svg"
              alt="Completed Icon"
          />
          <p>{{ time }}</p>
          <img
              class="w-5 ml-2"
              :src="iconname"
              alt="Favs Icon"
              @click="actionToFav()"
          />
        </div>
      </div>
</template>
    
<script>
import { useFavsStore } from '../store/favs';
import CircularProgress from '@/components/CircularProgress'

export default {
  name: 'TopicsPill',
  components: {
    CircularProgress,
  },
  props: {
        progress: { type: Number, default: 0 },
        topid: { type: Number, default: 0 },
        title: { type: String, default: '' },
        time: { type: String, default: '0:00' }
  },
  data() {
    return {
      store: useFavsStore(),
      active: false,
    }
  },
  computed: {
    iconname() {
        return this.active ? 'favs-filled.svg' : 'favs.svg'
    },
  },
  mounted() {
    this.active = this.store.getFav(this.topid)
  },
  methods: {
    async actionToFav() {
      this.active ? await this.store.removeFavs(this.topid) : await this.store.addFavs(this.topid)
      this.active = this.store.getFav(this.topid)
      localStorage.session = this.store.favs
    }
  }
}
</script>
<style>
    .back-red {
        background-color: #B42535;
    }
    .max-70 {
      max-width: 70%;
    }
</style>