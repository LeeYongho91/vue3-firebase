<template>
  <div class="flex items-center q-mb-lg">
    <div class="text-h4">커뮤니티 목록</div>
    <q-space />
    <q-tabs
      dense
      narrow-indicator
      :modelValue="sort"
      @update:modelValue="value => $emit('update:sort', value)"
    >
      <q-tab label="최신순" name="createdAt" />
      <q-tab label="조회순" name="readCount" />
      <q-tab label="좋아요순" name="likeCount" />
    </q-tabs>
  </div>
</template>

<script setup>
const props = defineProps({
  sort: {
    type: String,
    default: 'createdAt',
  },
});
const emit = defineEmits(['update:sort']);
</script>

<style lang="scss" scoped></style>
