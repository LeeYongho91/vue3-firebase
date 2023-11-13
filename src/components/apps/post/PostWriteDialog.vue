<template>
  <q-dialog persistent v-bind="$attrs">
    <q-card :style="{ width: '600px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close"></q-btn>
      </q-toolbar>
      <q-separator />
      <q-form class="q-pa-md">
        <q-input outlined placeholder="제목" />
        <q-select outlined v-model="form.category">
          <template v-if="!form.category" #selected>
            <span class="text-grey-7">카테고리를 선택하세요.</span>
          </template>
        </q-select>
        <q-input
          type="textarea"
          outlined
          placeholder="내용을 작성해주세요"
        ></q-input>
        <q-input
          outlined
          placeholder="태그를 입력해주세요"
          prefix="#"
        ></q-input>
      </q-form>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useAttrs, ref } from 'vue';
const attrs = useAttrs();
console.log(attrs);

const form = ref({
  category: '',
});
</script>

<style lang="scss" scoped></style>
