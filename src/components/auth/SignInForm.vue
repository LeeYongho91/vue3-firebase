<template>
  <div>
    <div class="text-center text-h5 text-weight-bold q-mb-xl">로그인</div>
    <q-form class="q-gutter-y-md">
      <q-input placeholder="이메일" outlined dense></q-input>
      <q-input placeholder="비밀번호" outlined dense></q-input>
      <div>
        <q-btn
          label="로그인하기"
          class="full-width"
          unelevated
          color="primary"
        ></q-btn>
        <div class="flex justify-between">
          <q-btn
            label="비밀번호 찾기"
            color="secondary"
            dense
            flat
            @click="$emit('ChangeView', 'FindPasswordForm')"
          ></q-btn>
          <q-btn
            label="이메일 가입하기"
            color="secondary"
            dense
            flat
            @click="$emit('ChangeView', 'SignUpForm')"
          ></q-btn>
        </div>
      </div>
      <q-separator />
      <q-btn
        label="구글 계정으로 로그인하기"
        color="primary"
        unelevated
        class="full-width"
        outline
        @click="handleSignInGoogle"
      ></q-btn>
    </q-form>
  </div>
</template>

<script setup>
import { signInWithGoogle } from '@/services/auth';
defineEmits(['ChangeView']);

const handleSignInGoogle = async () => {
  await signInWithGoogle();
};
</script>

<style lang="scss" scoped></style>
