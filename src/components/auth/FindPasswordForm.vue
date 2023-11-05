<template>
  <div>
    <div class="text-center text-h5 text-weight-bold q-mb-xl">
      비밀번호 찾기
    </div>
    <q-form class="q-gutter-y-md">
      <q-input placeholder="가입한 이메일" outlined dense></q-input>
      <q-btn label="확인" class="full-width" color="primary" unelevated></q-btn>
      <q-separator />
      <q-btn
        label="로그인 하기"
        class="full-width"
        unelevated
        flat
        @click="$emit('ChangeView', 'SignInForm')"
      ></q-btn>
    </q-form>
  </div>
</template>

<script setup>
defineEmits(['ChangeView']);
</script>

<style lang="scss" scoped></style>
