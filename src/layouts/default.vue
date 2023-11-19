<template>
  <q-layout view="lHh Lpr lff">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img src="/logo.png" />
            </q-avatar>
            짐코딩 클럽
          </q-toolbar-title>
        </q-btn>
        <q-space></q-space>
        <q-btn stretch flat label="Home" to="/home" />
        <q-btn stretch flat label="수강하기" href="https://google.com" />
        <q-btn stretch flat label="온라인 강의" href="https://google.com" />
        <q-btn stretch flat label="유튜브" href="https://google.com" />
        <q-separator class="q-my-md q-mr-md" vertical />
        <q-btn
          v-if="!authStore.isAuthenticated"
          color="primary"
          unelevated
          rounded
          label="로그인 / 회원가입"
          @click="openAuthDialog"
        ></q-btn>
        <q-btn v-if="authStore.isAuthenticated" round flat>
          <q-avatar>
            <img :src="authStore.user.photoURL" />
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup to="/mypage/profile">
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="handleLogout">
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>
    <AuthDialog v-model="authDialog" />
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import AuthDialog from '@/components/auth/AuthDialog.vue';
import { useAuthStore } from '@/stores/auth';
import { logout } from '@/services/auth';

const route = useRoute();

const authStore = useAuthStore();

const pageContainerStyles = computed(() => ({
  maxWidth: route.meta?.width || '1080px',
  margin: '0 auto',
}));

const authDialog = ref(false);

const openAuthDialog = () => (authDialog.value = true);
const handleLogout = async () => {
  await logout();
};
</script>
