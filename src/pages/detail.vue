<template>
  <div class="grid flex">
    <div class="justify-between flex flex-row h-14 mb-10">
      <Header />
    </div>
    <div class="flex mb-10" @click="$router.push({ path: '/board' })">
      <img class="w-8 pointer-events-none" src="ico-back.svg" alt="Back Icon" />
      <p class="pt-1">Back</p>
    </div>
    <div class="flex flex-col">
      <Hero />
      <DetailedDescription />
      <Topics title="Topics" :complete="true" />
      <Topics title="Detailed Process" />

      <div class="py-16 text-white">
        <div class="containerdata m-auto px-6 md:px-12 xl:px-6">
          <div
            class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-12 text-center"
          >
            <div class="md:w-6/12 lg:w-8/12 text-base md:px-12 lg:px-36">
              <h2 class="text-2xl font-bold">
                After finishing the course, take the quiz to earn an extra
                point.
              </h2>
            </div>
            <div class="md:w-6/12 lg:w-4/12 text-base">
              <button
                class="p-4 font-semibold text-sm back-red rounded-full shadow-sm whitespace-nowrap"
              >
                TAKE THE QUIZ
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- cards -->
      <section class="pt-16">
        <div class="containerdata">
          <div
            class="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-8"
          >
            <div class="w-full">
              <Card
                image="images/image1.png"
                title="Podcast"
                description="The Modern Customer Podcast"
              />
            </div>
            <div class="w-full">
              <Card
                image="images/image2.png"
                title="Interview"
                description="In conversation: Transforming your customer experience"
              />
            </div>
            <div class="w-full">
              <Card
                image="images/image3.png"
                title="Article"
                description="Omotenashi guide: 10 mindset tips"
              />
            </div>
            <div class="w-full">
              <Card
                image="images/image4.png"
                title="Video"
                description="Providing extraordinary customer experience"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { useFavsStore } from '../store/favs'

import Header from '../components/Header'
import Card from '../components/Card'
import Hero from '../components/Hero'
import DetailedDescription from '../components/DetailedDescription'
import Topics from '../components/Topics'

export default {
  name: 'BoardPage',
  components: {
    Header,
    Card,
    Hero,
    DetailedDescription,
    Topics,
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
  color: #8dc7fa;
}
</style>
