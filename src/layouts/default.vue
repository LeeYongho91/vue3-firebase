<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="/logo.png" />
          </q-avatar>
          짐코딩 클럽
        </q-toolbar-title>
        <q-btn stretch flat label="Home" to="/home" />
        <q-btn stretch flat label="수강하기" href="https://google.com" />
        <q-btn stretch flat label="온라인 강의" href="https://google.com" />
        <q-btn stretch flat label="유튜브" href="https://google.com" />
        <q-separator dark vertical />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
