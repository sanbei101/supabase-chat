<script setup lang="ts">
// import pulseDotIcon from '@/components/pulse-dot-icon.vue';
// import messagesIcon from '@/components/messages-icon.vue';
// import usersIcon from '@/components/users-icon.vue';
// import countryIcon from '@/components/country-icon.vue';
// import vSelect from '@/components/vSelect.vue';
import { Dot, MessageCircle } from 'lucide-vue-next';

import useStore from '@/store';

const store = useStore();
</script>
<template>
  <div class="bg-neutral-950 w-full flex items-center px-3 md:rounded-t-lg justify-between py-1">
    <div class="flex cursor-pointer text-green-500 items-center">
      <p>当前在线人数:</p>
      <div class="relative ml-1">
        <Dot class="absolute size-5 animate-ping font-bold top-0 left-0" />
        <span class="font-semibold text-xl">{{ store.onlinePeople }}</span>
      </div>
    </div>
    <div class="flex items-center gap-2 cursor-pointer text-green-500">
      <MessageCircle />
      <span>消息总数:{{ store.messageCount }}</span>
    </div>
  </div>
</template>
