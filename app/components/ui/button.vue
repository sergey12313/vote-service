<script setup lang="ts">

</script>

<template>
  <button
    class="bg-app-black text-white px-6 py-3 rounded-full font-medium cursor-pointer
     hover:bg-app-black/80 transition
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-app-black
       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-app-black
      "
  >
    <slot />
  </button>
</template>
