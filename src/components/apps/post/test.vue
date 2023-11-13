<template>
  <div>
    <label>
      <input type="text" />
      fdafafas {{ $attrs.onClick }}
    </label>
    <div>fadfasfas</div>
  </div>
</template>
<script setup>
import { useAttrs } from 'vue';

// defineOptions({
//   inheritAttrs: false,
// });

const attrs = useAttrs();
console.log(attrs);
</script>

<style>
/* .test33 {
  border: 1px solid red;
} */
</style>
