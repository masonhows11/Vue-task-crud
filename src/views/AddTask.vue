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

<style lang="scss" scoped></style>
