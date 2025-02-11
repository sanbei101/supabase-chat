<script setup lang="ts">
import { Dot, MessageCircle } from 'lucide-vue-next';

import useStore from '@/store';

const store = useStore();
</script>
<template>
  <div class="dark:bg-neutral-950 w-full flex items-center px-3 justify-between py-2 bg-zinc-300 rounded-t-2xl">
    <div class="flex cursor-pointer text-green-500 items-center font-semibold animate-pulse">
      <p>当前在线人数:</p>
      <div class="relative ml-1">
        <Dot class="absolute size-5 font-bold top-0 left-0" />
        <span class="font-semibold text-xl">{{ store.onlinePeople }}</span>
      </div>
    </div>
    <div class="flex items-center cursor-pointer text-green-500">
      <MessageCircle class="w-4 -y-transition-1" />
      <span class="font-semibold">消息总数:{{ store.messageCount }}</span>
    </div>
  </div>
</template>
