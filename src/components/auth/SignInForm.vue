<template>
  <div>
    <div class="text-center text-h5 text-weight-bold q-mb-xl">로그인</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSignInEmail">
      <q-input
        v-model="form.email"
        placeholder="이메일"
        outlined
        dense
      ></q-input>
      <q-input
        v-model="form.password"
        placeholder="비밀번호"
        outlined
        dense
        type="password"
      ></q-input>
      <DisplayError :code="error?.code" />
      <div>
        <q-btn
          type="submit"
          label="로그인하기"
          class="full-width"
          unelevated
          color="primary"
          :loading="isLoading"
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
import { signInWithGoogle, signInWithEmail } from '@/services/auth';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { getErrorMessage } from '@/utils/firebase/error.message';

import DisplayError from '@/components/DisplayError.vue';
const emit = defineEmits(['ChangeView', 'closeDialog']);

const $q = useQuasar();

const isLoading = ref(false);
const error = ref(null);

// 이메일 로그인
const form = ref({
  email: '',
  password: '',
});

const handleSignInEmail = async () => {
  try {
    isLoading.value = true;
    await signInWithEmail(form.value);
    $q.notify('환영합니다 :)');
    emit('closeDialog');
  } catch (err) {
    error.value = err;
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  } finally {
    isLoading.value = false;
  }
};

// 로그인 (구글)
const handleSignInGoogle = async () => {
  await signInWithGoogle();
  $q.notify('환영합니다 :)');
  emit('closeDialog');
};
</script>

<style lang="scss" scoped></style>
