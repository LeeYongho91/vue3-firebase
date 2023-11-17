<template><PostList :items="posts" /></template>

<script setup>
import PostList from '@/components/apps/post/PostList.vue';

const posts = Array.from(Array(3), (_, index) => ({
  id: 'A' + index,
  title: 'Vue3 Firebase 강의' + index,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.pti. Lorem ipsum dolor sit amet, consectetur adipisicing elit.pti.Lorem ipsum dolor sit amet, consectetur adipisicing elit.pti.',
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookmarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  uid: 'uid',
  category: '카테고리',
}));
</script>

<style lang="scss" scoped></style>
