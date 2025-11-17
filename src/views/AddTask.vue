<script setup>
import Wrapper_section from '@/components/Wrapper_section.vue'
import {reactive, ref, watch} from 'vue'
import {useRouter} from "vue-router";
// import todo state
import {useTodoStore} from '@/stores/todo'
// use the useTodoStore
const todoStore = useTodoStore()
const router = useRouter()
const selectStatus = ref(1)
const newTask = reactive({
  title: '',
  body: '',
})
//
const submitForm = () => {
  todoStore.addTodo({
    ...newTask,
    status: selectStatus.value
  })
}
// todo is object use as state in this project
watch(todoStore.todo,
  () => router.push({name: 'home'}))

</script>

<template>
  <Wrapper_section>
    <form @submit.prevent="submitForm">
      <h3>Create New Task</h3>

      <div>
        <label for="title">Title</label>
        <input v-model="newTask.title" type="text" id="title"/>
      </div>

      <div>
        <label for="body">Body</label>
        <textarea v-model="newTask.body" name="" id="body" rows="4" cols="8"></textarea>
      </div>

      <div>

        <label for="status">Status</label>
        <label style="margin: 10px 0">: {{ newTask.status }}</label>
        <select id="status" v-model="selectStatus">
          <option :value="true">Active</option>
          <option :value="false">DeActive</option>
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
