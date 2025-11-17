<script setup>
import Wrapper_section from '@/components/Wrapper_section.vue'

// import todo state
import { useTodoStore } from '@/stores/todo'
// use the useTodoStore
const todoStore = useTodoStore()

const submitForm = () => {
       todoStore.addTodo 
}
</script>

<template>
  <Wrapper_section>
    <form @submit.prevent="submitForm"></form>
  </Wrapper_section>
</template>

<style lang="scss" scoped></style>
