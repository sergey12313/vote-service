<script setup lang="ts">
import { formatDistance } from "date-fns";
import { ru } from "date-fns/locale";

import type { Post } from "~/domain/post";

const {
  post,
  author,
} = defineProps<{ post: Post; author: { avatarUrl: string; userName: string } }>();

const {
  published_at,
  content,
  title,
  likes,
  dislikes,
} = post;

const formattedDate = computed(() => {
  return formatDistance(new Date(published_at), new Date(), { addSuffix: true, locale: ru });
});
const formattedText = computed(() => {
  return `${content.slice(0, 200)}...`;
});
</script>

<template>
  <div class="text-primary flex flex-col gap-3 py-4">
    <div class="flex items-center text-sm font-light">
      <img :src="author.avatarUrl" class="w-6 h-6 rounded-full object-cover " alt="user avatar">
      <span class="ml-3 mr-4">
        {{ author.userName }}
      </span>
      <span class="text-muted ">
        {{ formattedDate }}
      </span>
    </div>

    <h3 class="font-normal text-2xl">
      {{ title }}
    </h3>
    <p>
      {{ formattedText }}
    </p>
    <div class="flex justify-between items-center text-sm font-light">
      <div class="flex gap-1">
        <button class="flex items-center gap-2 hover:bg-gray-200 p-1 rounded cursor-pointer">
          <Icon name="lucide:thumbs-up" />
          {{ likes }}
        </button>
        <button class="flex items-center gap-2 hover:bg-gray-200 p-1 rounded cursor-pointer">
          <Icon name="lucide:thumbs-down" />
          {{ dislikes }}
        </button>
      </div>
      <div class="flex gap-2">
        <button class="flex items-center gap-2 hover:bg-gray-200 p-1 rounded cursor-pointer">
          <Icon name="lucide:trash" />
        </button>
        <button class="flex items-center gap-2 hover:bg-gray-200 p-1 rounded cursor-pointer">
          <Icon name="lucide:pencil" />
          Изменить
        </button>
      </div>
    </div>
  </div>
</template>
