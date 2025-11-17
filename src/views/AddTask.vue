<script setup>
import { reactive } from 'vue'
//
import Wrapper_section from '@/components/Wrapper_section.vue'
// import todo state
import { useTodoStore } from '@/stores/todo'
// use the useTodoStore
const todoStore = useTodoStore()

const todo = reactive({
  title: '',
  body: '',
  status: '',
})

const submitForm = () => {

  todoStore.addTodo(todo)
}
</script>

<template>
  <Wrapper_section>
    <form @submit.prevent="submitForm">
      <h3>Create New Task</h3>

      <div>
        <label for="title">Title</label>
        <input v-model="todo.title" type="text" id="title" />
      </div>

      <div>
        <label for="body">Body</label>
        <textarea v-model="todo.body" name="" id="body" rows="4" cols="8"></textarea>
      </div>

      <div>
        <label for="status">Status</label>
        <select id="status" v-model="todo.status">
          <option value="0">Active</option>
          <option value="1">Deactive</option>
        </select>
      </div>

      <div>
        <button type="submit">Save Task</button>
      </div>
    </form>
  </Wrapper_section>
</template>

<style lang="scss" scoped>
form {
  padding: 2rem;
  border: 1px solid #3b82f6;
  border-radius: 10px;
  height: 100%;
}
h3 {
  margin-bottom: 2rem;
}
div {
  margin-bottom: 1rem;
  label {
    font-weight: 300;
  }
  input,
  textarea,
  select {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    border: 1px solid #333;
    padding: 5px;
    border-radius: 5px;
    &:focus {
      outline: 2px solid #3b82f6;
      border: none;
    }
  }
  button {
    background: #3b82f6;
    color: #fff;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      background: #2563eb;
    }
    &:disabled {
      background: #aaa;
      cursor: not-allowed;
    }
  }
}
</style>
