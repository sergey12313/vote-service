<script lang="ts" setup>
import { PostResponseSchema } from "~/domain/post";

const route = useRoute();
const config = useRuntimeConfig();

const postUrl = computed(() =>
  `${config.public.apiUrl}/posts/${route.params.id}`,

);

const { data } = useFetch(postUrl);

const post = computed(() => {
  if (data.value) {
    return PostResponseSchema.parse(data.value);
  }
  return undefined;
});

const author = {
  avatarUrl: "/image.jpg",
  userName: "PurpleSchool",
};
</script>

<template>
  <AppLoading v-if="!post" />

  <AppPost v-else :post="post" :author="author" full />
</template>
