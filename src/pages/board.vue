<template>
  <div class="grid flex">
    <div class="justify-between flex flex-row h-14 mb-10">
      <Header />
    </div>
    <div class="flex flex-col">
      <div class="session title mb-10">
        <div class="heading flex justify-between text-4xl">Learn</div>
      </div>
      <div class="session block mb-10">
        <div class="sub-heading flex justify-between mb-5">
          <p class="text-2xl">Favourites</p>
          <p class="text-base text-gray-600">See all</p>
        </div>
        <div>
          <p v-if="store.getFavsCount === 0" class="text-base italic text-gray-600">You don't have favourites yet</p>
          <FavouritePill v-else class="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"/>
        </div>
      </div>
      <div class="session block mb-10">
        <div class="sub-heading flex justify-between mb-5">
          <p class="text-2xl">Themes</p>
        </div>
        <div class="head-content flex mb-5 gap-2 text-xs font-bold">
          <div class="flex py-2  px-4 back-gray rounded-full">
            All courses
            <img
                class="w-5 pointer-events-none ml-2"
                src="ico-world.svg"
                alt="World Icon"
            />
          </div>
          <div class="flex py-2 px-4 back-gray rounded-full text-xs font-bold">
            New Courses
            <img
                class="w-5 pointer-events-none ml-2"
                src="ico-news.svg"
                alt="New Icon"
            />
          </div>
        </div>
        <TrainingPill class="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8" />
      </div>
    </div>
  </div>
</template>

<script>
import { useFavsStore } from '../store/favs'

import Header from '../components/Header'
import FavouritePill from '../components/FavouritePill'
import TrainingPill from '../components/TrainingPill'

export default {
  name: 'BoardPage',
  components: {
    Header,
    FavouritePill,
    TrainingPill,
  },
  transition: 'default',
  data() {
    return {
      store: useFavsStore(),
    }
  },
}
</script>
<style>
  .text-accent {
    color: #8DC7FA;
  }
</style>