<template>
  <img
    class="pointer-events-none"
    :class="size"
    :src="`${name}.svg`"
    :alt="alt"
  />
</template>
<script>
export default {
  name: 'IconComponent',
  props: {
    name: { type: String, default: '' },
    size: { type: String, default: '' },
    alt: { type: String, default: 'Icon' },
  },
}
</script>
<style>
.back-red {
  background-color: #b42535;
}
</style>
