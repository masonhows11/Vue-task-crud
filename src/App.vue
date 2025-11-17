<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import AddTask from './views/AddTask.vue';
import { RouterView } from 'vue-router'
import { useTodoStore } from './stores/todo';
const todoStore  = useTodoStore()
todoStore.getTodo()

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/new-task" class="nav-link">New Todo</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  padding: 1rem 2rem;
  background-color: #1e40af;
  border-bottom: 1px solid #60a5fa;
  display: flex;
  justify-content: space-between;
}

nav .nav-link{
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  margin-right: 1.5rem;
}
.nav-link:hover{
  background: #60a5fa;
}

/*nav {
  .nav-link {
    color: #fff;
    padding: 5px 15px;
    border-radius: 5px;
    margin-right: 1.5rem;
  }
  &:hover {
    background: #60a5fa;
  }
}*/
</style>
