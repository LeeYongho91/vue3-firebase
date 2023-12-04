<template>
  <div v-if="code" class="text-red text-center">
    {{ errorMessage }}
  </div>
</template>

<script setup>
import { computed } from 'vue';

import { getErrorMessage } from '@/utils/firebase/error.message';

const props = defineProps({
  code: {
    type: String,
  },
});

const errorMessage = computed(() => getErrorMessage(props.code));
</script>

<style lang="scss" scoped></style>
