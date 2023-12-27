<template>
  <div>
    <div class="text-subtitle1 text-weight-bold q-mb-lg">
      댓글 {{ comments.length }}
    </div>

    <div v-if="isActive">
      <q-form @submit.prevent="handleAddComment">
        <q-input
          v-model="message"
          type="textarea"
          outlined
          :rules="[validateRequired]"
          hide-bottom-space
        ></q-input>
        <div class="flex justify-end q-gutter-x-sm q-mt-sm">
          <q-btn
            label="취소"
            color="dark"
            unelevated
            @click="toggleActive"
          ></q-btn>
          <q-btn
            type="submit"
            label="등록"
            color="primary"
            unelevated
            :loading="isLoading"
          ></q-btn>
        </div>
      </q-form>
    </div>

    <BaseCard
      v-if="!isActive"
      @click="toggleActive"
      class="cursor-pointer"
      bordered
      flat
    >
      <q-card-section class="flex items-center">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" alt="" />
        </q-avatar>
        <div class="text-grey-6 q-ml-md">댓글을 작성해보세요.</div>
      </q-card-section>
    </BaseCard>

    <CommentList
      :items="comments"
      :postId="$route.params.id"
      @deleted="deletedComment"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CommentList from '@/components/apps/comment/CommentList.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import { addComment, getComments } from '@/services';
import { useAsyncState } from '@vueuse/core';
import { useRoute } from 'vue-router';
import { validateRequired } from 'src/utils/validate-rules';
import { useAuthStore } from 'src/stores/auth';

const isActive = ref(false);
const toggleActive = () => (isActive.value = !isActive.value);
const route = useRoute();
const authStore = useAuthStore();

const { state: comments, execute: executeGetComments } = useAsyncState(
  () => getComments(route.params.id),
  [],
  {
    resetOnExecute: false, // 빈 배열로 초기화 안되고 새로운 데이터만 추가됨
  },
);

const message = ref('');
const { isLoading, execute: executeAddComment } = useAsyncState(
  addComment,
  null,
  {
    immediate: false,
    throwError: true,
    onSuccess: () => {
      message.value = '';
      isActive.value = false;
      executeGetComments();
    },
  },
);

const handleAddComment = async () => {
  executeAddComment(0, route.params.id, {
    message: message.value,
    uid: authStore.uid,
  });
};

const deletedComment = () => executeGetComments(0);
</script>

<style lang="scss" scoped></style>
