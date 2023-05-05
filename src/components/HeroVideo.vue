<template>
    <section class="hero-video back-gray rounded-3xl text-white-100" :style="cssProps">
        <div class="h-full flex flex-col justify-center items-center">
            <section v-if="!isPlaying" class="p-16 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
                <span class="text-sm font-medium mb-2 lg:mb-4">Acknowledge your customer</span> 
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Welcoming in showroom</h1>
                <div class="mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 mb-8">
                    <div class="flex flex-wrap justify-center items-center">
                        <a href="#" class="mr-5 mb-5 lg:mb-0 flex justify-center items-center gap-2  lg:gap-4">Points: 500 <Icon name="ico-star" alt="Icon Star" size="w-4"/></a>
                        <a href="#" class="mr-5 mb-5 lg:mb-0 flex justify-center items-center gap-2 lg:gap-4">Duration: 03:00</a>
                    </div>
                </div>
                <div class="flex flex-col" @click="playVideo">
                    <button class="p-4 font-semibold text-sm back-red rounded-full shadow-sm flex justify-center items-center">START VIDEO <Icon class="ml-4" name="ico-play" alt="Icon Play" size="w-2"/></button>
                </div>
            </section>
            <iframe v-else width="100%" height="720" src="https://www.youtube.com/embed/0aZVgImpkaQ" title="The Nissan Z, built for excitement" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </section>
</template>


<script>
import Icon from '../components/Icon'

export default {
  name: 'HeroVideo',
    components: {
      Icon,
    },
    transition: 'default',
    props: {
        poster: { type: String, default: '' },
        url: { type: String, default: '' },
    },
    data() {
        return {
            isPlaying: false,
        }
    },
    computed: {
        cssProps() {
            return {
                'background-image': `url(${this.poster})`,
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
            }
        }
    },
    methods: {
        playVideo() {
            this.isPlaying = !this.isPlaying
        }
    }
}
</script>
<style>
    .hero-video {
        height: 720px;
    }
</style>