<script setup>
// import todo state
import { useTodoStore } from '@/stores/todo'
// use the useTodoStore
const todoStore = useTodoStore()

defineProps({
  todoProps: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="content">
    <div class="header">
      <div>
        <h2>Title : {{ todoProps.title }}</h2>
      </div>

      <div class="action">
        <button
          @click="todoStore.deleteTodo(todoProps.id)"
          class="bi bi-trash del"
          style="font-size: 1.3rem; margin: 0 5px"
        ></button>
        <label class="container">

          {{ todoProps.status ? 'done' : 'pending' }}
          <input
            @input="console.log('checkbox input checked')"
            type="checkbox"
            :checked="todoProps.status"/>
            
          <span class="checkmark"></span>
        </label>
      </div>
    </div>

    <div class="body">
      <span>ID : {{ todoProps.id }}</span>
      <div>
        <span>Date : {{ todoProps.createdAt }} </span>
        <strong>Body : {{ todoProps.body }}</strong>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  border: 3px solid #0284c7;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 10px 0;
}
.body div {
  display: flex;
  flex-direction: column;
}
.header {
  font-size: 12px;
  background-color: #0284c7;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f2f2f2;
  font-weight: 300;

  button {
    border-radius: 5px;
    background: transparent;
    border: none;
  }

  .action {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  div .del {
    font-size: 10px;
    background-color: #fff;
    color: #ef4444;
  }

  h1 {
    padding: 1rem;
  }
}

.body {
  padding: 1rem 2rem;
}
</style>
