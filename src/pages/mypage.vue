<template>
  <div>
    <div class="text-h5">My Page</div>
    <ul>
      <li>
        <router-link to="/mypage/profile">profile</router-link>
      </li>
      <li>
        <router-link to="/mypage/password">password</router-link>
      </li>
      <li>
        <router-link to="/mypage/bookmark">bookmark</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
