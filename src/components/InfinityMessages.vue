<script setup lang="ts">
import MessageBubble from '@/components/MessageBubble.vue';
import { v4 } from 'uuid';
import { computed, onMounted, ref } from 'vue';
import { SendHorizontal } from 'lucide-vue-next';
import { createMessage, fetchMessages, Message } from '@/api';
import useStore from '@/store.js';

const store = useStore();

onMounted(async () => {
  store.messages = await fetchMessages();
});
const inputedText = ref<string>('');
const inputedMessage = computed<Message>(() => ({
  id: v4(),
  text: inputedText.value,
  author: store.userName,
  created_at: new Date().toISOString()
}));
function sendMessage() {
  if (inputedText.value.trim() === '') return;
  store.messages.push(inputedMessage.value);
  try {
    createMessage(inputedMessage.value);
  } catch (error) {
    console.error(error);
  } finally {
    inputedText.value = '';
  }
}
</script>

<template>
  <div class="flex flex-col gap-3 dark:bg-neutral-950 px-3 py-14 overflow-y-auto rounded-b-2xl bg-neutral-300">
    <message-bubble
      v-for="item in store.messages"
      :key="item.id"
      :author="item.author"
      :created_at="item.created_at"
      :is-me="item.author === store.userName"
      :text="item.text" />
    <div class="fixed bottom-20 left-0 right-0 px-4">
      <div class="flex items-center gap-2 max-w-3xl mx-auto">
        <input
          class="flex-1 py-3 px-4 rounded-xl bg-neutral-200 dark:bg-neutral-700 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="输入消息..."
          :value="inputedText" />
        <button class="p-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-colors cursor-pointer" @click="sendMessage">
          <send-horizontal class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>
