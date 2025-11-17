<script setup>
import {inject} from "vue";
const theme = inject('theme')
const toggleTheme = inject('toggleTheme')
</script>

<template>
  <div class="content">
    <button @click="toggleTheme" class="">
      <i :class="theme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill' " ></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .content{
    display: flex;
  }
</style>
