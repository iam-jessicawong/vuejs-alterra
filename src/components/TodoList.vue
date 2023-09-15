<template>
  <div class="todoList" v-if="todos.length > 0">
    <div v-for="(todo, index) in todos" :key="index" class="todoItems">
      <div class="todo">
        <p class="index">{{ index + 1 }}.</p>
        <p v-if="editId === index" class="editInput">
          <input
            type="text"
            v-model="editInput"
            @keyup.enter="editTodo(index)"
          />
        </p>
        <p v-else>
          {{ todo }}
        </p>
      </div>
      <div class="actions">
        <button @click="deleteTodo(index)">Hapus</button>
        <button @click="editTodo(index)" v-if="editId === index">Edit</button>
        <button @click="triggerEdit(index, todo)" v-else>Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: Array,
  },
  data() {
    return {
      editInput: "",
      editId: "",
    };
  },
  methods: {
    triggerEdit(index, todo) {
      this.editId = index;
      this.editInput = todo;
      console.log(this.editInput);
    },
    editTodo(index) {
      this.$emit("edit-todo", index, this.editInput);
      this.editId = "";
    },
    deleteTodo(index) {
      this.$emit("delete-todo", index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todoItems {
  width: 100%;
  display: flex;
  margin-bottom: .5rem;
}

.todoItems .todo {
  width: 80%;
}

.todoItems .actions {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 0rem 1rem;
}

.todo {
  display: flex;
}

.todo .index {
  width: 3%;
}

.todo input {
  width: 100%;
}

.todo p {
  margin: 0;
}

.todo .editInput {
  width: 90%;
}

@media screen and (max-width: 700px) {
  .todo .index {
    width: 10%;
  }
}
</style>
