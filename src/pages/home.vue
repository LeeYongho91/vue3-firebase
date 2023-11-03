<template>
  <div class="text-h4">home</div>
  <div>
    {{ $route.name }}
    {{ $route.meta }}
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: 'name-override'
meta:
  requiresAuth: false
</route>
