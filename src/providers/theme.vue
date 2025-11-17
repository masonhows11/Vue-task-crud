<script setup>
import {ref,provide} from "vue";

const theme = ref('light')
const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light"
}


provide('theme', theme)
provide('toggleTheme', toggleTheme)
</script>

<template>
  <div :class="theme">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>

.light {
  background-color: #fff;
  color: #000;
  height: 100%;
}

.dark {
  background-color: #000;
  color: #fff;
  height: 100%;
}
</style>
