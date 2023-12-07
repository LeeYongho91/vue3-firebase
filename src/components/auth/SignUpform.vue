<template>
  <div>
    <div class="text-center text-h5 text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <q-input
        v-model="form.nickname"
        placeholder="닉네임"
        outlined
        dense
        hide-bottom-space
        :rules="[validateRequired]"
      ></q-input>
      <q-input
        v-model="form.email"
        placeholder="이메일"
        outlined
        dense
        hide-bottom-space
        :rules="[validateRequired, validateEmail]"
      ></q-input>
      <q-input
        v-model="form.password"
        placeholder="비밀번호(문자, 숫자조합 8자 이상)"
        outlined
        dense
        type="password"
        hide-bottom-space
        :rules="[validateRequired, validatePassword]"
      ></q-input>
      <q-input
        v-model="passwordConfirm"
        placeholder="비밀번호 확인"
        outlined
        dense
        type="password"
        hide-bottom-space
        :rules="[
          validateRequired,
          val => validatePasswordConfirm(form.password, val),
        ]"
      ></q-input>
      <q-btn
        type="submit"
        color="primary"
        label="가입하기"
        class="full-width"
        unelevated
        :loading="isLoading"
      ></q-btn>
      <q-separator />
      <q-btn
        label="로그인하기"
        class="full-width"
        unelevated
        flat
        @click="$emit('ChangeView', 'SignInForm')"
      ></q-btn>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { signUpWithEmail } from '@/services';
import {
  validateRequired,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from '@/utils/validate-rules';
import { useAsyncState } from '@vueuse/core';

const emit = defineEmits(['ChangeView', 'closeDialog']);

const $q = useQuasar();

const { isLoading, execute } = useAsyncState(signUpWithEmail, null, {
  immediate: false,
  throwError: false,
  onSuccess: () => {
    $q.notify('가입을 환영합니다 :)');
    $q.notify('이메일에서 인증 링크를 확인해주세요.');
    emit('closeDialog');
  },
  onError: err => {
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

const passwordConfirm = ref('');
const form = ref({
  nickname: '',
  email: '',
  password: '',
});

const handleSubmit = () => execute(1000, form.value);

// const handleSubmit = async () => {
//   await signUpWithEmail(form.value);
//   $q.notify('가입을 환영합니다 :)');
//   emit('closeDialog');
// };
</script>

<style lang="scss" scoped></style>
