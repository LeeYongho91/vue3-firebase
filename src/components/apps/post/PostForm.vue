<template>
  <q-form @submit.prevent="handleSubmit">
    <q-card-section class="q-gutter-y-sm">
      <q-input
        v-model="titleModel"
        outlined
        placeholder="제목"
        hide-bottom-space
        :rules="[validateRequired]"
      />
      <q-select
        outlined
        v-model="categoryModel"
        :options="categories"
        emit-value
        map-options
        hide-bottom-space
        :rules="[validateRequired]"
      >
        <template v-if="!categoryModel" #selected>
          <span class="text-grey-7">카테고리를 선택하세요.</span>
        </template>
      </q-select>
      <TiptapEditor v-model="contentModel" />
      <q-input
        outlined
        placeholder="태그를 입력해주세요 (입력 후 Enter)"
        prefix="#"
        @keypress.enter.prevent="onRegistTag"
      ></q-input>
      <q-chip
        v-for="(tag, idx) in tags"
        :key="tag"
        outline
        dense
        removable
        @remove="removeTag(idx)"
        color="teal"
        >{{ tag }}</q-chip
      >
    </q-card-section>

    <q-separator />
    <q-card-actions align="right">
      <slot name="actions">
        <q-btn flat label="취소하기" v-close-popup />
        <q-btn
          type="submit"
          flat
          label="저장하기"
          color="primary"
          :loading="isLoading"
      /></slot>
    </q-card-actions>
  </q-form>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import { getCategories } from '@/services/category';
import TiptapEditor from '@/components/tiptap/TiptapEditor.vue';
import { validateRequired } from '@/utils/validate-rules';

const props = defineProps({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  content: {
    type: String,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  'update:title',
  'update:category',
  'update:content',
  'update:tags',
  'submit',
]);

const $q = useQuasar();

const titleModel = computed({
  get: () => props.title,
  set: val => emit('update:title', val),
});
const categoryModel = computed({
  get: () => props.category,
  set: val => emit('update:category', val),
});
const contentModel = computed({
  get: () => props.content,
  set: val => emit('update:content', val),
});

const categories = getCategories();

const handleSubmit = () => {
  if (!contentModel.value) {
    $q.notify('내용을 작성하세요.');
    return;
  }

  emit('submit');
};

const useTag = () => {
  const onRegistTag = e => {
    console.log(e);
    const tagValue = e.target.value.replace(/ /g, '');
    if (!tagValue) {
      return;
    }
    if (props.tags.length >= 10) {
      $q.notify('태그는 10개 이상 등록할 수 없습니다.');
      return;
    }

    if (props.tags.includes(tagValue) === false) {
      emit('update:tags', [...props.tags, tagValue]);
    }

    e.target.value = '';
  };

  const removeTag = idx => {
    const model = [...props.tags];
    model.splice(idx, 1);
    emit('update:tags', model);
  };

  return {
    onRegistTag,
    removeTag,
  };
};

const { onRegistTag, removeTag } = useTag();
</script>

<style lang="scss" scoped></style>
