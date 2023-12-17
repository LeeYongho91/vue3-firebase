<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" v-model:category="params.category" />
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
import { ref, watch } from 'vue';
import PostList from '@/components/apps/post/PostList.vue';
import PostHeader from '@/pages/components/PostHeader.vue';
import PostLeftBar from '@/pages/components/PostLeftBar.vue';
import PostRightBar from '@/pages/components/PostRightBar.vue';
import PostWriteDialog from '@/components/apps/post/PostWriteDialog.vue';

import { getPosts } from '@/services';
import { useAsyncState } from '@vueuse/core';
import { useRouter } from 'vue-router';

const router = useRouter();
const params = ref({
  category: null,
});

const { state: posts, execute } = useAsyncState(getPosts, [], {
  throwError: true,
});

watch(
  params,
  () => {
    execute(0, params.value);
  },
  {
    deep: true,
  },
);

const postDialog = ref(false);
const openWriteDialog = () => {
  postDialog.value = true;
};
</script>

<style lang="scss" scoped></style>
