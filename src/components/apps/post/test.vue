<template>
  <label>
    <input type="text" v-bind="$attrs" />
    fdafafas {{ $attrs }}
  </label>
</template>
<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
console.log(attrs);
</script>

<style>
.test33 {
  border: 1px solid red;
}
</style>
