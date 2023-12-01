<template>
  <div class="q-gutter-y-md">
    <BaseCard @submit.prevent="handleSubmitProfile">
      <q-form>
        <q-card-section class="q-gutter-y-md">
          <div class="text-h6">프로필 변경</div>
          <q-input outlined dense label="닉네임"></q-input>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-actions>
          <q-space />
          <q-btn type="submit" label="저장하기" flat color="primary" />
        </q-card-actions>
      </q-form>
    </BaseCard>
    <BaseCard @submit.prevent="handleSubmitEmail">
      <q-form>
        <q-card-section class="q-gutter-y-md">
          <div class="text-h6">이메일 변경</div>
          <q-input outlined dense label="이메일"></q-input>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-actions>
          <q-space />
          <q-btn type="submit" label="저장하기" flat color="primary" />
        </q-card-actions>
      </q-form>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from '@/components/base/BaseCard.vue';
</script>

<style lang="scss" scoped></style>
