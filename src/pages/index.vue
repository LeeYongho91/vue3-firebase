<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" />
      <section class="col-7">
        <PostHeader />
        <PostList :items="posts" />
      </section>
      <PostRightBar class="col-3" @open-write-dialog="openWriteDialog" />
    </div>
    <PostWriteDialog v-model="postDialog" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import PostList from '@/components/apps/post/PostList.vue';
import PostHeader from '@/pages/components/PostHeader.vue';
import PostLeftBar from '@/pages/components/PostLeftBar.vue';
import PostRightBar from '@/pages/components/PostRightBar.vue';
import PostWriteDialog from '@/components/apps/post/PostWriteDialog.vue';
import test from '@/components/apps/post/test.vue';

const posts = Array.from(Array(20), (_, index) => ({
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

const postDialog = ref(false);
const openWriteDialog = () => {
  postDialog.value = true;
};

const test12 = () => {
  console.log('test1212');
};
</script>

<style lang="scss" scoped>
.test33 {
  border: 1px solid red;
}
</style>
