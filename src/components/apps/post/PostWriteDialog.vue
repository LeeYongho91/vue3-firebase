<template>
  <q-dialog persistent v-bind="$attrs" @hide="onHide">
    <q-card :style="{ width: '600px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close"></q-btn>
      </q-toolbar>
      <q-separator />
      <q-form>
        <q-card-section class="q-gutter-y-sm">
          <q-input v-model="form.title" outlined placeholder="제목" />
          <q-select outlined v-model="form.category" :options="categories">
            <template v-if="!form.category" #selected>
              <span class="text-grey-7">카테고리를 선택하세요.</span>
            </template>
          </q-select>
          <q-input
            type="textarea"
            outlined
            placeholder="내용을 작성해주세요"
            v-model="form.content"
          ></q-input>
          <q-input
            v-model="tagField"
            outlined
            placeholder="태그를 입력해주세요 (입력 후 Enter)"
            prefix="#"
          ></q-input>
          <q-chip outline dense removable @remove="removeTag" color="teal"
            >vuejs</q-chip
          >
        </q-card-section>

        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="취소하기" v-close-popup />
          <q-btn flat label="저장하기" color="primary" v-close-popup />
        </q-card-actions>
      </q-form>
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

const categories = getCategories();

const form = ref(getInitialForm());
const tagField = ref('');

const onHide = () => {
  form.value = getInitialForm();
  tagField.value = '';
};

const removeTag = () => {};
</script>

<style lang="scss" scoped></style>
