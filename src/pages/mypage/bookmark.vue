<template>
  <PostList :items="items" />
</template>

<script setup>
import PostList from '@/components/apps/post/PostList.vue';
import { useAuthStore } from 'src/stores/auth';
import { ref } from 'vue';
import { getUserBookmarks } from '@/services';
import { useAsyncState } from '@vueuse/core';

// const posts = Array.from(Array(3), (_, index) => ({
//   id: 'A' + index,
//   title: 'Vue3 Firebase 강의' + index,
//   content:
//     'Lorem ipsum dolor sit amet, consectetur adipisicing elit.pti. Lorem ipsum dolor sit amet, consectetur adipisicing elit.pti.Lorem ipsum dolor sit amet, consectetur adipisicing elit.pti.',
//   readCount: 1,
//   commentCount: 2,
//   likeCount: 3,
//   bookmarkCount: 4,
//   tags: ['html', 'css', 'javascript'],
//   uid: 'uid',
//   category: '카테고리',
// }));

const authStore = useAuthStore();

const { state: items } = useAsyncState(() => getUserBookmarks(authStore.uid));
</script>

<style lang="scss" scoped></style>
