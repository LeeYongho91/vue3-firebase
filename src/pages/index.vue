<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" v-model:category="params.category" />
      <section class="col-7">
        <PostHeader v-model:sort="params.sort" />
        <PostList :items="posts" />
        <q-btn
          label="더보기"
          class="full-width q-mt-md"
          outline
          @click="loadMore"
        />
      </section>
      <PostRightBar
        class="col-3"
        v-model:tags="params.tags"
        @open-write-dialog="openWriteDialog"
      />
    </div>
    <PostWriteDialog
      v-model="postDialog"
      @update:model-value="val => (postDialog = val)"
      @complete="completeRegisterationPost"
    />
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
  tags: [],
  sort: 'createdAt',
});

const { state: posts, execute } = useAsyncState(getPosts, [], {
  throwError: true,
  immediate: false,
});

watch(params, () => execute(0, params.value), {
  deep: true,
  immediate: true,
});

const postDialog = ref(false);
const openWriteDialog = () => {
  postDialog.value = true;
};

const completeRegisterationPost = () => {
  postDialog.value = false;
  execute(0, params.value);
};

const loadMore = () => {
  console.log(`test`);
};
</script>

<style lang="scss" scoped></style>
