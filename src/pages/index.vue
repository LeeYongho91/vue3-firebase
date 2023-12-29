<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" v-model:category="category" />
      <section class="col-7">
        <PostHeader v-model:sort="sort" />
        <PostList :items="items" />
        <q-btn
          v-if="isLoadMore"
          label="더보기"
          class="full-width q-mt-md"
          outline
          @click="loadMore"
        />
        <div v-intersection-observer="handleIntersectionObserver"></div>
      </section>
      <PostRightBar
        class="col-3"
        v-model:tags="tags"
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
import { computed, ref, watch } from 'vue';
import PostList from '@/components/apps/post/PostList.vue';
import PostHeader from '@/pages/components/PostHeader.vue';
import PostLeftBar from '@/pages/components/PostLeftBar.vue';
import PostRightBar from '@/pages/components/PostRightBar.vue';
import PostWriteDialog from '@/components/apps/post/PostWriteDialog.vue';

import { getPosts } from '@/services';
import { useAsyncState } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { vIntersectionObserver } from '@vueuse/components';

import { usePostQuery } from '@/composables/usePostQuery';
import { useAuthStore } from 'src/stores/auth';

const { category, sort, tags } = usePostQuery();
const authStore = useAuthStore();

const params = computed(() => ({
  category: category.value,
  tags: tags.value,
  sort: sort.value,
  limit: 4,
}));

const items = ref([]);
const start = ref(null);
const isLoadMore = ref(true);

const { execute } = useAsyncState(getPosts, [], {
  throwError: true,
  immediate: false,
  onSuccess: result => {
    if (start.value) {
      items.value = items.value.concat(result.items);
    } else {
      items.value = result.items;
    }
    isLoadMore.value = result.items.length >= params.value.limit;
    start.value = result.lastItem;
  },
});

watch(
  params,
  () => {
    start.value = null;
    execute(0, params.value);
  },
  {
    deep: true,
    // immediate: true,
  },
);

const postDialog = ref(false);

const openWriteDialog = () => {
  if (!authStore.isAuthenticated) {
    alert('로그인 후 이용 가능합니다');
    return;
  }
  postDialog.value = true;
};

const completeRegisterationPost = () => {
  postDialog.value = false;
  execute(0, params.value);
};

// const vIntersectionObserver = {
//   beforeMount: (el, binding) => {
//     const observer = new IntersectionObserver(binding.value);
//     observer.observe(el);
//   },
// };

const loadMore = () => {
  execute(0, { ...params.value, start: start.value });
};

const handleIntersectionObserver = ([{ isIntersecting }]) => {
  if (isIntersecting && isLoadMore.value === true) {
    console.log(`### handleIntersectionObserver ###`);
    loadMore();
  }
};
</script>

<style lang="scss" scoped></style>
