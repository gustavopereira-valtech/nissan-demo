<template>
  <section
    class="back-gray rounded-3xl relative overflow-hidden text-white-100"
  >
    <div
      class="p-16 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col justify-center items-center"
    >
      <span class="text-sm font-medium mb-2 lg:mb-4">WELCOMING</span>
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl"
      >
        Online & offline channel
      </h1>
      <div
        class="mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 mb-8"
      >
        <div class="flex flex-wrap justify-center items-center">
          <a
            href="#"
            class="mr-5 mb-5 lg:mb-0 flex justify-center items-center gap-2 lg:gap-4"
            ><Icon name="ico-pages" alt="Icon Pages" size="w-8" /> 8 Topics</a
          >
          <a
            href="#"
            class="mr-5 mb-5 lg:mb-0 flex justify-center items-center gap-2 lg:gap-4"
            ><Icon name="ico-user" alt="Icon User" size="w-8" />24 people
            finished this course</a
          >
          <a
            href="#"
            class="mr-5 mb-5 lg:mb-0 flex justify-center items-center gap-2 lg:gap-4"
            ><Icon name="ico-clock" alt="Icon Clock" size="w-8" />Course
            progress 60%</a
          >
        </div>
      </div>
      <div class="flex flex-col">
        <button
          class="p-4 font-semibold text-sm back-red rounded-full shadow-sm"
          @click="$router.push({ path: '/chapter' })"
        >
          RESUME COURSE
        </button>
      </div>
    </div>
    <div class="w-full h-2 rounded-full">
      <div class="w-2/3 h-full back-red rounded-full"></div>
    </div>
  </section>
</template>

<script>
import Icon from '../components/Icon'

export default {
  name: 'HeroBanner',
  components: {
    Icon,
  },
  transition: 'default',
}
</script>
