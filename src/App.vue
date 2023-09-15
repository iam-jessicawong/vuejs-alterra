<template>
  <div id="app">
    <div>
      <h2>Todo List</h2>
      <TodoList :todos="todos" @edit-todo="editTodo" @delete-todo="deleteTodo"></TodoList>

      <div class="addTodoForm">
        <input type="text" v-model="inputTodo" @keyup.enter="addTodo" />
        <button @click="addTodo">Tambahkan</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [],
      inputTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.inputTodo) {
        this.todos.push(this.inputTodo);
        this.inputTodo = "";
      }
    },
    editTodo(index, updatedTodo) {
      this.todos[index] = updatedTodo;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  width: 100%;
}

.addTodoForm input {
  width: 80%;
}

.addTodoForm button {
  margin-left: 4rem;
}

.addTodoForm {
  width: 100%;
  display: flex;
}
</style>
