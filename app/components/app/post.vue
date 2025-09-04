<script setup lang="ts">
import { formatDistance, subDays } from "date-fns";
import { ru } from "date-fns/locale";

type Props = {
  avatarUrl: string;
  companyName: string;
  createdAt: Date;
  title: string;
  text: string;
  likeCount: number;
  unlikeCount: number;
  id: string;

};
const {

  avatarUrl,
  companyName,
  createdAt,
  title,
  text,
  likeCount,
  unlikeCount,
} = defineProps<Props>();

const formattedDate = computed(() => {
  return formatDistance(createdAt, new Date(), { addSuffix: true, locale: ru });
});
const formattedText = computed(() => {
  return `${text.slice(0, 200)}...`;
});
</script>

<template>
  <div class="text-primary flex flex-col gap-3 py-4">
    <div class="flex items-center text-sm font-light">
      <img :src="avatarUrl" class="w-6 h-6 rounded-full object-cover " alt="user avatar">
      <span class="ml-3 mr-4">
        {{ companyName }}
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
          {{ likeCount }}
        </button>
        <button class="flex items-center gap-2 hover:bg-gray-200 p-1 rounded cursor-pointer">
          <Icon name="lucide:thumbs-down" />
          {{ unlikeCount }}
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
