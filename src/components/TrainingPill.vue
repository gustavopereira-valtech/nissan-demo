<template>
    <span>
    <div v-for="(training, index) in store.data.trainings" :key="index" class="p-8 back-gray rounded-2xl align-center text-center flex flex-col gap-4">
        <CircularProgress :value="training.progress"/>
        <img
            class="w-32 pointer-events-none m-auto py-8"
            :src="training.icon"
            alt="Car Icon"
        />
        <div class="mx-4">
          <p>{{ training.name }}</p>
        </div>
        <button class="p-4 font-semibold text-sm back-red text-white rounded-full shadow-sm" @click="$router.push({ path: '/detail' })">
            START COURSE
        </button>
      </div>
    </span>
</template>
    
<script>
import CircularProgress from '../components/CircularProgress'
import { useFavsStore } from '../store/favs';

export default {
  name: 'TrainingPill',
  components: {
    CircularProgress,
  },
  props: {
        progress: { type: Number, default: 0 },
  },
  data() {
        return {
            store: useFavsStore(),
        }
    },
}
</script>
<style>
    .back-red {
        background-color: #B42535;
    }
</style>
    