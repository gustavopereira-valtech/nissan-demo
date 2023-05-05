<template>
  <div class="relative">
    <div class="justify-between flex flex-row h-14 mb-10">
      <Header />
    </div>
    <div class="flex flex-col z-1">
      <Sidebar />
      <HeroVideo poster="images/image-chapter.png" />
      <ChapterContent />
    </div>

    <!-- tagcloud -->
    <div class="cloud back-gray-light p-24 rounded-3xl">
      <ul
        class="flex m-auto justify-center flex-wrap max-w-xl align-center gap-2 leading-8"
      >
        <li><a href="#" class="text-2xl color-blue-light">Authentic</a></li>
        <li>
          <a href="#" class="text-4xl color-blue-dark">Active listening</a>
        </li>
        <li>
          <a href="#" class="text-6xl color-blue-dark"
            >Customer is the most important</a
          >
        </li>
        <li><a href="#" class="text-4xl color-blue-dark">Confident</a></li>
        <li>
          <a href="#" class="text-2xl color-blue-light"
            >Curious and respectful</a
          >
        </li>
        <li><a href="#" class="text-md color-blue-light">Relax</a></li>
      </ul>
    </div>
    <!-- tagcloud -->

    <!-- footer -->
    <div
      class="flex items-center justify-between mt-16 flex-col md:flex-row gap-1"
    >
      <span class="flex items-center gap-8">
        <Icon name="ico-arrow-l" alt="Icon Arrow" size="w-8" />
        <p>External New Vehicle Display area</p>
      </span>
      <div class="flex" @click="$router.push({ path: '/detail' })">
        <button
          class="p-4 font-semibold text-sm back-gray rounded-full shadow-sm"
        >
          BACK TO MAIN
        </button>
      </div>
      <span class="flex items-center gap-8 text-right">
        <p>Telephone Reception at the dealership</p>
        <Icon name="ico-arrow-r" alt="Icon Arrow" size="w-8" />
      </span>
    </div>
    <!-- footer -->
  </div>
</template>

<script>
import Header from '../components/Header'
import Icon from '../components/Icon'
import HeroVideo from '../components/HeroVideo'
import ChapterContent from '../components/ChapterContent'
import Sidebar from '../components/Sidebar'

export default {
  name: 'BoardPage',
  components: {
    Header,
    HeroVideo,
    ChapterContent,
    Sidebar,
    Icon,
  },
  transition: 'default',
}
</script>
<style>
.color-blue-light {
  color: #4d5273;
}
.color-blue-dark {
  color: #2b2e3f;
}
.back-gray-light {
  background: #8189bb;
}
.cloud li {
  text-align: center;
}
</style>
