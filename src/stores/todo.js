import {ref, computed} from 'vue'
import {defineStore} from 'pinia'


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
      return this.todo.sort((a, b) => b.id - a.id)
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
      //
      const errorMsg = ref('')
      const successMsg = ref('')
      const loading = ref(false)
      //
      errorMsg.value = ''
      successMsg.value = ''
      loading.value = true
      ////
      const newTask = {
        title: todo.title,
        body: todo.body,
        status: todo.status,
      }

      // add this to state
      this.todo.push(newTask)
      // api call
      fetch('http://laravel_app.test/api/task/new', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(`Http error ! status: ${response.status},msg:${text}`)
          })
        }
        return response.json()
      }).then(data => {
        successMsg.value = data.msg || 'Task added successfully'
        console.log('Server response:', data)

        //// clear the form
        newTask.title = ''
        newTask.body = ''
        newTask.status = 1
        ////
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
