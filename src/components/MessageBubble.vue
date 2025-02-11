<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core';

const props = defineProps<{
  isMe: boolean;
  author: string;
  text: string;
  created_at: string;
}>();
const timeAgo = useTimeAgo(new Date(props.created_at));
</script>

<template>
  <div class="w-full flex" :class="props.isMe ? 'justify-end' : 'justify-start'">
    <div class="px-3 flex flex-col w-fit max-w-[90%]">
      <div class="dark:text-zinc-100" :class="{ 'text-right': props.isMe }">
        <span class="font-medium">@{{ props.author }}</span>
      </div>
      <div class="flex items-end gap-1 dark:text-zinc-100" :class="{ 'flex-row-reverse': props.isMe }">
        <p class="break-words py-1.5 px-2 text-base dark:bg-neutral-900 w-fit max-w-[80%] rounded-2xl mt-2 bg-neutral-200">
          {{ props.text }}
        </p>
        <span class="text-xs text-neutral-500 select-none">
          {{ timeAgo }}
        </span>
      </div>
    </div>
  </div>
</template>
