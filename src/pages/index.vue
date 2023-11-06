<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <aside class="col-grow bg-yellow"></aside>
      <section class="col-7 bg-yellow">
        <div class="text-h4">커뮤니티 목록</div>
        <PostList :items="posts" />
      </section>
      <aside class="col-3 bg-yellow"></aside>
    </div>
  </q-page>
</template>

<script setup>
import PostList from '@/components/apps/post/PostList.vue';

const posts = Array.from(Array(20), (_, index) => ({
  id: index,
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
