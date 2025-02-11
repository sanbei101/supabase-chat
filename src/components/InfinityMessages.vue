<script setup lang="ts">
import MessageBubble from '@/components/MessageBubble.vue';

import { onMounted, ref } from 'vue';
import { Message } from '@/api';
import useStore from '@/store.js';

const store = useStore();
// const page = ref<number>(1);
const messages = ref<Message[]>([
  {
    id: 1,
    author: 'Alice',
    text: '你好！今天天气真不错 👋',
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 2,
    author: store.userName, // 当前用户
    text: '是啊，适合出去走走 🌞',
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    author: 'Bob',
    text: '周末有人一起去爬山吗？ 🏃‍♂️',
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    author: store.userName,
    text: '算我一个！ 🙋‍♂️',
    created_at: new Date().toISOString()
  },
  {
    id: 1,
    author: 'Alice',
    text: '你好！今天天气真不错 👋',
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 2,
    author: store.userName, // 当前用户
    text: '是啊，适合出去走走 🌞',
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    author: 'Bob',
    text: '周末有人一起去爬山吗？ 🏃‍♂️',
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    author: store.userName,
    text: '算我一个！ 🙋‍♂️',
    created_at: new Date().toISOString()
  }
]);
onMounted(async () => {});
</script>

<template>
  <div class="flex flex-col gap-3 dark:bg-neutral-950 px-3 py-14 overflow-y-auto rounded-b-2xl bg-neutral-300">
    <message-bubble
      v-for="item in messages"
      :key="item.id"
      :author="item.author"
      :created_at="item.created_at"
      :is-me="item.author === store.userName"
      :text="item.text" />
    <textarea
      class="z-10 fixed bottom-20 self-center py-2 px-4 min-w-[80%] max-w-[90%] md:min-w-xl resize-none overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-700"
      rows="1"
      placeholder="输入消息...">
    </textarea>
  </div>
</template>
