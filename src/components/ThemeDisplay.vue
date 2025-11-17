<script setup>
import {inject} from "vue";
const theme = inject('theme')
const toggleTheme = inject('toggleTheme')
</script>

<template>
  <div class="content">
    <button @click="toggleTheme" class="bi bi-sun-fill">
      {{ theme === "light" ? 'nightlight' : 'sunny'}}
    </button>
  </div>
</template>

<style lang="scss" scoped>

  .content{
    display: flex;
  }
  

</style>
