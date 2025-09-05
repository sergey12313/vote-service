<script lang="ts" setup>
import { PostsResponseSchema } from "~/domain/post";

const config = useRuntimeConfig();
const postsUrl = `${config.public.apiUrl}/posts`;
const { data } = useFetch(postsUrl);
const posts = computed(() => {
  if (data.value) {
    return PostsResponseSchema.parse(data.value).posts;
  }
  return undefined;
});

const author = {
  avatarUrl: "/image.jpg",
  userName: "PurpleSchool",
};
</script>

<template>
  <div class="flex flex-col gap-4  w-[800px] mx-8">
    <AppPost v-for="post in posts" :key="post.id" :post="post" :author="author" class="border-b border-gray-100 last:border-b-0" />
  </div>
</template>
