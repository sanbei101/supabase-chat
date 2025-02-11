<script setup lang="ts">
import useStore from '@/store';
import { getRandomName } from '@/utils';

const store = useStore();
</script>
<template>
  <div class="w-full p-3 dark:bg-black flex justify-center z-10 select-none border-neutral-700">
    <div class="flex items-center justify-between w-full">
      <h1 class="font-medium dark:text-white text-green-500 animate-pulse">SupabaseChat</h1>

      <div class="flex items-center gap-3">
        <span class="text-base cursor-pointer text-neutral-100 font-semibold" id="name" @click="store.setUserName(getRandomName())">
          {{ store.userName }}
        </span>
      </div>
    </div>
  </div>
</template>
