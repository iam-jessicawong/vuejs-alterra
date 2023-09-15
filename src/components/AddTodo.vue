<template>
  <div class="addTodoForm">
    <input type="text" v-model="inputTodo" @keyup.enter="addTodo" />
    <button @click="addTodo">Tambahkan</button>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      inputTodo: ""
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch("todos/addTodo", this.inputTodo);
      this.inputTodo = "";
    }
  }
};
</script>

<style scoped>
.addTodoForm {
  display: flex;
  gap: 1rem;
}
.addTodoForm input {
  flex-grow: 2;
}

</style>
