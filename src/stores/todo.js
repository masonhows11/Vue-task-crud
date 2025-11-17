import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// const todos = [
//   {
//     id: 1,
//     title: 'title-one',
//     body: 'sample body one one',
//     createdAt: '11/10/2024',
//     status: true,
//   },
//   {
//     id: 2,
//     title: 'title-two',
//     body: 'sample body one two',
//     createdAt: '11/09/2024',
//     status: true,
//   },
//   {
//     id: 3,
//     title: 'title-three',
//     body: 'sample body one three',
//     createdAt: '11/08/2024',
//     status: true,
//   },
//   {
//     id: 4,
//     title: 'title-four',
//     body: 'sample body one four',
//     createdAt: '11/07/2024',
//     status: false,
//   },
//   {
//     id: 5,
//     title: 'title-five',
//     body: 'sample body one five',
//     createdAt: '11/06/2024',
//     status: false,
//   },
// ]
export const useTodoStore = defineStore('todo-store', {
  state() {
    return {
      todo: [],
      loading: true,
      error: false,
      errorMsg: '',
    }
  },
  getters: {
    sorted() {
      return this.todo.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    },
    complete(state) {
      const result = []
      for (const todo of state.todo) {
        if (todo.status === false) {
          result.push(todo)
        }
      }
      return result
      // console.log(result)
    },
    todoCount() {
      return this.todo.length
    },
  },
  actions: {
    getTodo() {
      // api call
      fetch('http://laravel_app.test/api/task/all')
        .then((res) => res.json())
        .then((data) => {
          this.todo = data['tasks']
          this.loading = false
        })
        .catch((error) => {
          this.errorMsg = error
          this.loading = false
        })
    },
    addTodo(todo) {
      const newTask = {
        title: todo.title,
        body: todo.body,
        status: false,
      }
      // add this to state
      this.todo.push(newTask)
      // api call
      fetch('http://laravel_app.test/api/task/new', {
        method: 'POST',
        body: JSON.stringify(newTask),
      }).catch((error) => {
          this.errorMsg = error
          this.loading = false
        })
    },
    deleteTodo(id) {
      //
      const newList = []
      for (let i = 0; i < this.todo.length; i++) {
        if (this.todo[i].id !== id) {
          newList.push(this.todo[i])
        }
      }
      this.todo = newList
      // api call
      fetch(`http://laravel_app.test/api/task/delete/${id}`)
        .then((res) => res.json())
        .then((result) => console.log(result))
        .catch((error) => {
          console.log(error)
        })
    },
    updateTodo(id) {
      // update the status task
      const todo = this.todo.find((t) => t.id === id)
      todo.status = !todo.status
      // api call
      fetch(`http://laravel_app.test/api/task/update/${id}`)
        .then((res) => res.json())
        .then((result) => console.log(result))
        .catch((error) => {
          console.log(error)
        })
    },
  },
})
