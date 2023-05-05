<template>
  <div class="rounded-lg mb-10 overflow-hidden relative h-96">
    <div
      class="p-8 sm:p-9 md:p-7 xl:p-9 text-center z-10 relative flex flex-col justify-center items-center h-full"
    >
      <h3 class="text-sm">{{ title }}</h3>
      <p class="text-2xl text-body-color leading-relaxed mb-7">
        {{ description }}
      </p>
    </div>
    <img
      :src="image"
      alt="Card Alt"
      class="absolute bottom-0 left-0 object-cover w-full h-full overflow-hidden rounded-md"
    />
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  transition: 'default',
  props: {
    title: { type: String, default: '' },
    image: { type: String, default: '' },
    description: { type: String, default: '' },
  },
}
</script>
