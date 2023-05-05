<template>
    <div class="pt-16 text-white">  
        <div class="containerdata m-auto">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-12" />
            <div class="text-sm md:text-base">
                <h2 class="text-2xl font-bold mb-8">{{ title }}</h2>
                <TopicsPill v-for="(topic, index) in topics" :key="index" :progress="topic.progress" :topid="topic.id" :title="topic.title" :time="topic.duration"/>
            </div>
        </div>
    </div>
</template>
<script>
import TopicsPill from '../components/TopicsPill'
import { useFavsStore } from '../store/favs'

export default {
  name: 'TopicsComponent',
    components: {
    TopicsPill,
  },
  transition: 'default',
  props: {
    title: { type: String, default: ''},
    complete: { type: Boolean, default: false }
  },
  data() {
      return {
        store: useFavsStore(),
      }
    },
  computed: {
    topics() {
      return this.complete ? this.store.data.trainings[0].topics.filter(training => training.progress === 100) : this.store.data.trainings[0].topics.filter(training => training.progress < 100)
    }
  }
}
</script>