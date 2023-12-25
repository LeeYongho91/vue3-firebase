<template>
  <q-page padding>
    <BaseCard>
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close"></q-btn>
      </q-toolbar>
      <q-separator />
      <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:tags="form.tags"
        @submit="handleSubmit"
      >
        <template #actions>
          <q-btn flat label="취소" v-close-popup />
          <q-btn
            type="submit"
            flat
            label="수정"
            color="primary"
            :isLoading="isLoading"
          />
        </template>
      </PostForm>
    </BaseCard>
  </q-page>
</template>

<script>
const getInitialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
});
</script>

<script setup>
import { useAttrs, ref } from 'vue';
import BaseCard from '@/components/base/BaseCard.vue';
import PostForm from '@/components/apps/post/PostForm.vue';

import { updatePost, getPost } from '@/services';
import { useAsyncState } from '@vueuse/core';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';

const route = useRoute();
const $q = useQuasar();

useAsyncState(
  () => getPost(route.params.id),
  {},
  {
    onSuccess: post => {
      form.value.title = post.title;
      form.value.category = post.category;
      form.value.content = post.content;
      form.value.tags = post.tags;
    },
  },
);

const form = ref(getInitialForm());

const { isLoading, execute: executeUpdatePost } = useAsyncState(
  updatePost,
  null,
  {
    immediate: false,
    throwError: true,
    onSuccess: () => {
      $q.notify('수정완료!');
    },
  },
);

const handleSubmit = async () => {
  if (confirm('수정 하시겠어요?') === false) {
    return;
  }
  await executeUpdatePost(1000, route.params.id, form.value);
};
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  width: 800px
</route>
