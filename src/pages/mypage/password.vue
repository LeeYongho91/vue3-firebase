<template>
  <BaseCard>
    <q-form @submit.prevent="handleSubmit">
      <q-card-section class="q-gutter-y-md">
        <div class="text-h6">비밀번호 변경</div>
        <q-input
          type="password"
          outlined
          dense
          label="새로운 비밀번호"
          v-model="form.newPassword"
        ></q-input>
        <q-input
          type="password"
          outlined
          dense
          label="새로운 비밀번호 확인"
          v-model="form.newPasswordConfirm"
        ></q-input>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-actions>
        <q-space />
        <q-btn label="저장하기" flat color="primary" type="submit" />
      </q-card-actions>
    </q-form>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/base/BaseCard.vue';
import { ref } from 'vue';
import { updateUserPassword } from '@/services';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const form = ref({
  newPassword: '',
  newPasswordConfirm: '',
});

const handleSubmit = async () => {
  await updateUserPassword(form.value.newPassword);
  $q.notify('비밀번호가 변경되었습니다.');
  form.value.newPassword = '';
  form.value.newPasswordConfirm = '';
};
</script>

<style lang="scss" scoped></style>
