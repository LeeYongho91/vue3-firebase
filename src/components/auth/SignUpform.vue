<template>
  <div>
    <div class="text-center text-h5 text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md">
      <q-input placeholder="닉네임" outlined dense></q-input>
      <q-input placeholder="이메일" outlined dense></q-input>
      <q-input
        placeholder="비밀번호(문자, 숫자조합 8자 이상)"
        outlined
        dense
      ></q-input>
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

defineEmits(['ChangeView']);

const form = ref({
  nickname: '',
  email: '',
  password: '',
});
</script>

<style lang="scss" scoped></style>
