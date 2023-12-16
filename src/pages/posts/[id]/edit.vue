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
        @submit.prevent
      >
        <template #actions>
          <q-btn flat label="취소" v-close-popup />
          <q-btn flat label="저장" color="primary" v-close-popup />
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

const form = ref(getInitialForm());

const onHide = () => {
  form.value = getInitialForm();
  tagField.value = '';
};
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  width: 800px
</route>
