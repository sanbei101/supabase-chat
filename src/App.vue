<template>
  <div class="h-dvh w-dvw dark:bg-black">
    <div class="mx-auto lg:max-w-[80%]">
      <Header />
      <div class="flex flex-col">
        <MessagesHeader />
        <InfinityMessages />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import MessagesHeader from '@/components/MessagesHeader.vue';
import InfinityMessages from '@/components/InfinityMessages.vue';
</script>
