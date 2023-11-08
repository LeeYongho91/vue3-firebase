<template>
  <q-icon name="sym_o_visibility" color="grey" size="xs" v-bind="$attrs" />
  <span v-if="label" class="text-grey q-ml-xs text-body2">{{ label }}</span>
  <q-tooltip v-if="tooltip" :offset="[0, 4]">{{ tooltip }}</q-tooltip>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: Number,
  },
  tooltip: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
