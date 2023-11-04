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
          <q-btn label="비밀번호 찾기" color="secondary" dense flat></q-btn>
          <q-btn label="이메일 가입하기" color="secondary" dense flat></q-btn>
        </div>
      </div>
      <q-separator />
      <q-btn
        label="구글 계정으로 로그인하기"
        color="primary"
        unelevated
        class="full-width"
        outline
      ></q-btn>
    </q-form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
