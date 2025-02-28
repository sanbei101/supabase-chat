import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { Message } from './api';
import { getRandomName } from './utils';

export default defineStore('main', () => {
  const userName = ref<string>(getRandomName());
  const messages = ref<Message[]>([]);
  const messageCount = computed(() => messages.value.length);
  const onlinePeople = ref<number>(0);
  function setUserName(name: string) {
    userName.value = name;
  }
  return {
    messages,
    userName,
    messageCount,
    onlinePeople,
    setUserName
  };
});
