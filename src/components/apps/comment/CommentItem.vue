<template>
  <q-item>
    <q-item-section side top>
      <q-avatar size="md">
        <img src="https://cdn.quasar.dev/img/avatar.png" alt="" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="flex text-caption">
        <span>짐코딩</span>
        <span class="q-mx-xs">&middot;</span>
        <span class="text-grey-6">3일 전</span>
      </div>
      <div class="q-mt-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In magni
        deleniti obcaecati consequuntur aliquid voluptatibus praesentium fugiat
        nobis facere et, rerum consequatur sit beatae, quis veritatis temporibus
        natus odit hic!
      </div>
    </q-item-section>
    <q-item-section side top>
      <q-btn flat color="grey" icon="sym_o_delete" round dense></q-btn>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped></style>
