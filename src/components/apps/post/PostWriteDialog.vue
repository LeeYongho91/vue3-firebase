<template>
  <q-dialog persistent v-bind="$attrs" @hide="onHide">
    <q-card :style="{ width: '600px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close"></q-btn>
      </q-toolbar>
      <q-separator />
      <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
      />
    </q-card>
  </q-dialog>
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
import { getCategories } from '@/services/category';
import PostForm from '@/components/apps/post/PostForm.vue';

const categories = getCategories();

const form = ref(getInitialForm());

const onHide = () => {
  form.value = getInitialForm();
};

const removeTag = () => {};
</script>

<style lang="scss" scoped></style>
