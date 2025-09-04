<template>
  <div class="flex flex-col border-r  border-gray-200 py-7 justify-between items-center">
    <nuxt-link to="/" class="icon-btn">
      <icon size="24" name="app-icon:home" />
    </nuxt-link>
    <nuxt-link to="/" class="icon-btn">
      <icon size="24" name="app-icon:exit" />
    </nuxt-link>
  </div>
</template>

<style scoped>
@reference "tailwindcss";
.icon-btn {
  @apply w-9 h-9 hover:bg-gray-100 grid place-items-center rounded-full;
}
</style>
