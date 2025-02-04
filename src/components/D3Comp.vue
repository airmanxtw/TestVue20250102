<template>
  {{ $attrs.class }}
  <p :class="$attrs.class">
    hello D3Comp.vue
  </p>
  <p :class="$attrs.class">
    abc
  </p>

</template>
<style scoped>
.happy {
  color: blue;
  font-size: larger;
}
</style>
