<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import TodoItem from '@/components/TodoItem.vue'
import Wrapper_section from '@/components/Wrapper_section.vue'
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'

const todoStore = useTodoStore()
const todoFilter = ref('all')
// stop here I do not understand what he says or do
// no ! continue everyWhere u stuck go read about that part
// then continue
const setTodoFilter = () => {
  todoFilter.value = todoFilter.value === 'all' ? 'done' : 'all'
}
</script>

<template>
  <!--  <main>-->
  <!--    <TheWelcome />-->
  <!--  </main>-->
  <div class="header">

    <div style="left_header">
      <h1>{{ todoFilter === 'all' ? 'All Task' : 'Done Task' }}</h1>
      <h2>Count :  {{ todoStore.todoCount }}</h2>
    </div>

    <button @click="setTodoFilter">
      {{ todoFilter === 'all' ? 'Show done todo' : 'Show all todo' }}
    </button>

  </div>

  <div v-if="todoFilter === 'all'">
    <div v-for="todo in todoStore.sorted" :key="todo.id">
      <Wrapper_section>
        <TodoItem :todoProps="todo" />
      </Wrapper_section>
    </div>
  </div>

  <div v-if="todoFilter === 'done'">
    <div v-for="todo in todoStore.complete" :key="todo.id">
      <Wrapper_section>
        <TodoItem :todoProps="todo" />
      </Wrapper_section>
    </div>
  </div>
</template>

<style scoped lang="scss">

.header {
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    span {
      animation: spin 1s linear infinite;
    }
  }

  button {
    color: #fff;
    background-color: #1e40af;
    padding: 8px 15px;
    border-radius: 5px;
    border-style: none;

    &:hover {
      background-color: #60a5fa;
    }
  }
}
</style>
