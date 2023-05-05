<template>
  <div
    :class="{ 'back-gray w-10/12 md:w-5/12': isExpanded }"
    class="sidebar w-0 min-h-screen fixed top-0 left-0 z-2"
  >
    <div class="min-h-screen">
      <div class="flex h-screen flex-col justify-between py-6 relative">
        <div class="opaque" :class="{ transp: !isExpanded }">
          <div
            class="w-max p-2.5 flex items-center"
            @click="$router.push({ path: '/detail' })"
          >
            <Icon name="ico-back" alt="Icon Back" size="w-8" /> Back
          </div>
          <ul class="mt-6 space-y-2 tracking-wide">
            <div class="session mb-16 p-8">
              <h2 class="text-2xl font-bold">Topics</h2>
              <div class="topics mt-8">
                <li class="flex justify-between mt-6 items-center">
                  <p class="pr-8">
                    Acknowledge your Customer and Establish rapport
                  </p>
                  <CircularProgress
                    class="self-center justify-center"
                    size="2rem"
                    classmod="w-8"
                    :value="100"
                  />
                </li>
                <li class="flex justify-between mt-6 items-center">
                  <p class="pr-8">External New Vehicle Display area</p>
                  <CircularProgress
                    class="self-center justify-center"
                    size="2rem"
                    classmod="w-8"
                    :value="100"
                  />
                </li>
                <li class="flex justify-between mt-6 items-center">
                  <p class="pr-8">Welcoming in the Showroom</p>
                  <CircularProgress
                    class="self-center justify-center"
                    size="2rem"
                    classmod="w-8"
                    :value="100"
                  />
                </li>
                <li class="flex justify-between mt-6 items-center">
                  <p class="pr-8">Telephone Reception at the dealership</p>
                  <CircularProgress
                    class="self-center justify-center"
                    size="2rem"
                    classmod="w-8"
                    :value="47"
                  />
                </li>
                <li class="flex justify-between mt-6 items-center">
                  <p class="pr-8">Through an Online Chat tool</p>
                  <CircularProgress
                    class="self-center justify-center"
                    size="2rem"
                    classmod="w-8"
                    :value="0"
                  />
                </li>
                <li class="flex justify-between mt-6 items-center">
                  <p class="pr-8">Greeting via a Video Call</p>
                  <CircularProgress
                    class="self-center justify-center"
                    size="2rem"
                    classmod="w-8"
                    :value="0"
                  />
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div
          class="expandarrow flex items-center w-max bottom-12 -right-14 absolute h-24"
          @click="togglePanel"
        >
          <div class="group space-x-4 rounded-md px-4 py-3">
            <Icon name="ico-expand" alt="Icon Expand" size="w-8" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../components/Icon'
import CircularProgress from '../components/CircularProgress'

export default {
  name: 'SideBar',
  components: {
    Icon,
    CircularProgress,
  },
  transition: 'default',
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    togglePanel() {
      this.isExpanded = !this.isExpanded
    },
  },
}
</script>
<style>
.sidebar {
  transition: all 0.4s ease-in-out;
}
.expandarrow {
  background-image: url('/element-expand.svg');
  background-repeat: no-repeat;
  background-position: center center;
}
.opaque {
  overflow: hidden;
  opacity: 1;
}
.transp {
  opacity: 0;
}
</style>
