<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" />
      <section class="col-7">
        <PostHeader />
        <PostList :items="posts" />
      </section>
      <PostRightBar class="col-3" />
    </div>
  </q-page>
</template>

<script setup>
import PostList from '@/components/apps/post/PostList.vue';
import PostHeader from '@/pages/components/PostHeader.vue';
import PostLeftBar from '@/pages/components/PostLeftBar.vue';
import PostRightBar from '@/pages/components/PostRightBar.vue';

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
