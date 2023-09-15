<template>
  <div class="home">
    <h1>TodoList</h1>
    <TodoList />
    <AddTodo />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'

export default {
  name: 'HomeView',
  components: {
    TodoList,
    AddTodo
  }
}
</script>
