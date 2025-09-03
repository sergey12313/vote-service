<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{ error: NuxtError }>();

function goToMain() {
  navigateTo("/");
}
</script>

<template>
  <NuxtLayout>
    <div class=" flex flex-col gap-5 items-center text-primary  text-center">
      <h1
        class="text-9xl"
      >
        {{ error.statusCode }}
      </h1>
      <p v-if="error.statusCode === 404" class="text-2xl font-light">
        Страница не найдена, вернитесь на главную страницу
      </p>
      <p v-else class="text-2xl font-light">
        {{ error.message }}
      </p>
      <UiButton variant="ghost" @click="goToMain">
        Главная страница
      </UiButton>
    </div>
  </NuxtLayout>
</template>
