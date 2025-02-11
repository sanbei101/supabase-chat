import { ref } from 'vue';
import { defineStore } from 'pinia';

export default defineStore('main', () => {
  const userName = ref<string>('Mike');
  const messageCount = ref<number>(0);
  const onlinePeople = ref<number>(0);
  function setUserName(name: string) {
    userName.value = name;
  }
  function incrementMessageCount() {
    messageCount.value++;
  }
  return {
    userName,
    messageCount,
    onlinePeople,
    setUserName,
    incrementMessageCount
  };
});
