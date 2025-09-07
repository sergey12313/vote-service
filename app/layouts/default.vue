<script setup lang="ts">
import { AppSidebar } from "#components";
</script>

<template>
  <div class="h-screen max-h-screen grid grid-cols-[72px_1fr]">
    <AppSidebar class="overflow-hidden" />
    <main class="overflow-y-scroll">
      <div class="w-[800px] mx-8 my-5">
        <slot />
      </div>
    </main>
  </div>
</template>
