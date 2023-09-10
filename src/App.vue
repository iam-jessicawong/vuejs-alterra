<template>
  <div id="app">
    <ol v-if="todos.length > 0">
      <li v-for="todo in todos" :key="todo">{{ todo }}</li>
    </ol>

    <input type="text" v-model="todo" v-on:keyup.enter="addTodo" />
    <button v-on:click="addTodo">Tambahkan</button>

    <p v-if="todos.length > 3">Hebat!</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.todo) {
        this.todos.push(this.todo);
        this.todo = "";
      }
    },
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
}
</style>
