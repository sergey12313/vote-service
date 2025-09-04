<script setup lang="ts">
import { AppSidebar } from "#components";
</script>

<template>
  <div class="h-screen grid grid-cols-[72px_1fr]">
    <AppSidebar class="overflow-hidden" />
    <main>
      <slot />
    </main>
  </div>
</template>
