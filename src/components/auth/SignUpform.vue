<template>
  <div>
    <div class="text-center text-h5 text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <q-input
        v-model="form.nickname"
        placeholder="닉네임"
        outlined
        dense
      ></q-input>
      <q-input
        v-model="form.email"
        placeholder="이메일"
        outlined
        dense
      ></q-input>
      <q-input
        v-model="form.password"
        placeholder="비밀번호(문자, 숫자조합 8자 이상)"
        outlined
        dense
        type="password"
      ></q-input>
      <q-btn
        type="submit"
        color="primary"
        label="가입하기"
        class="full-width"
        unelevated
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
import { signUpWithEmail } from '@/services';

defineEmits(['ChangeView']);

const form = ref({
  nickname: '',
  email: '',
  password: '',
});

const handleSubmit = async () => {
  await signUpWithEmail(form.value);
  alert('가입완료!');
};
</script>

<style lang="scss" scoped></style>
