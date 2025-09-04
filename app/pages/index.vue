<script lang="ts" setup>
import { subDays } from "date-fns";

const posts = [{
  id: "1",
  avatarUrl: "/image.jpg",
  companyName: "PurpleSchool",
  createdAt: subDays(new Date(), 4),
  title: "Добавить функцию голосования",
  text: "Попробовать добавить в приложение функцию голосования, которая позволит определить, какая фича более полезна, а какая нет. После добавления поста появляется",
  likeCount: 12,
  unlikeCount: 12,
}, {
  id: "2",
  avatarUrl: "/image.jpg",
  companyName: "PurpleSchool",
  createdAt: subDays(new Date(), 3),
  title: "Добавить функцию голосования",
  text: "Попробовать добавить в приложение функцию голосования, которая позволит определить, какая фича более полезна, а какая нет. После добавления поста появляетсяПопробовать добавить в приложение функцию голосования, которая позволит определить, какая фича более полезна, а какая нет. После добавления поста появляется",
  likeCount: 132,
  unlikeCount: 112,
}];
</script>

<template>
  <div class="flex flex-col gap-4  w-[800px] mx-8">
    <AppPost v-for="post in posts" :key="post.id" v-bind="post" class="border-b border-gray-100 last:border-b-0" />
  </div>
</template>
