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
      <div class="" :class="{ 'text-right': props.isMe }">
        <span class="font-medium">@{{ props.author }}</span>
      </div>
      <div class="flex items-end gap-3" :class="{ 'flex-row-reverse': props.isMe }">
        <p
          class="break-words py-1 px-4 text-base bg-neutral-900 w-fit max-w-[80%] rounded-2xl mt-2"
          :class="{ 'bg-opacity-90 ': props.isMe }"
          style="white-space: pre-wrap">
          {{ props.text }}
        </p>
        <span class="text-xs text-neutral-500 select-none">
          {{ timeAgo }}
        </span>
      </div>
    </div>
  </div>
</template>
