<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="val => $emit('update:modelValue', val)"
    transition-show="none"
    transition-hide="none"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex justify-end">
        <!-- <q-space /> -->
        <q-btn icon="close" flat round dense v-close-popup></q-btn>
      </q-card-section>

      <q-card-section>
        <SignInForm />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import FindPasswordForm from './FindPasswordForm.vue';
import SignInForm from './SignInForm.vue';
import SignUpform from './SignUpform.vue';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped></style>
