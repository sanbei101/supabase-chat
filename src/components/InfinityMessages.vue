<script setup lang="ts">
import MessageBubble from '@/components/MessageBubble.vue';

import { ref } from 'vue';
import { fetchMessages, Message } from '@/api';
import useStore from '@/store.js';

const store = useStore();
// const page = ref<number>(1);
const messages = ref<Message[]>([]);
fetchMessages().then((data) => {
  messages.value = data.reverse();
});
</script>

<template>
  <div class="flex flex-col gap-3 bg-neutral-950 px-3 py-14 relative overflow-y-scroll">
    <message-bubble
      v-for="item in messages"
      :key="item.id"
      :author="item.author"
      :created_at="item.created_at"
      :is-me="item.author === store.userName"
      :text="item.text" />
  </div>
</template>
