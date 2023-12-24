<template>
  <q-dialog
    persistent
    v-bind="$attrs"
    @hide="onHide"
    transition-hide="none"
    transition-show="none"
  >
    <q-card :style="{ minWidth: '600px' }">
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
        @submit="
          execute(1000, {
            ...form,
            uid: authStore.uid,
          })
        "
        :isLoading="isLoading"
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
import { ref } from 'vue';
import PostForm from '@/components/apps/post/PostForm.vue';
import { useAsyncState } from '@vueuse/core';
import { createPost } from '@/services';
import { useAuthStore } from 'src/stores/auth';
import { useRouter } from 'vue-router';

const emit = defineEmits(['complete']);

const authStore = useAuthStore();
const form = ref(getInitialForm());
const router = useRouter();
const onHide = () => {
  form.value = getInitialForm();
};

const { isLoading, execute } = useAsyncState(createPost, null, {
  immediate: false,
  throwError: true,
  onSuccess: postId => {
    console.log('postId: ', postId);
    // router.push(`/posts/${postId}`);
    emit('complete');
  },
});
</script>

<style lang="scss" scoped></style>
