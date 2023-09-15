<template>
  <div class="todoList" v-if="todos.length > 0">
    <div v-for="(todo, index) in todos" :key="index" class="todoItems">
      <div class="todo">
        <router-link :to="'/' + index"><p class="index">{{ index + 1  }}.</p></router-link>
        <p v-if="editId === index" class="editInput">
          <input
            type="text"
            v-model="editInput"
            @keyup.enter="changeTodo(index)"
          />
        </p>
        <router-link :to="'/' + index" v-else>
          {{ todo.todo }}
        </router-link>
      </div>
      <div class="actions">
        <button @click="removeTodo(index)">Hapus</button>
        <button @click="changeTodo(index)" v-if="editId === index">Edit</button>
        <button @click="triggerEdit(index, todo.todo)" v-else>Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  computed: {
    todos() {
      return this.$store.state.todos.todos;
    }
  },
  data() {
    return {
      editId: -1,
      editInput: ""
    }
  },
  methods: {
    triggerEdit(id, todo) {
      this.editId = id;
      this.editInput = todo;
    },
    changeTodo(index) {
      const param = {
        index: index,
        updatedTodo: this.editInput
      }
      this.$store.dispatch("todos/editTodo", param);
      this.editId = "";
    },
    removeTodo(index) {
      this.editId = "";
      this.$store.dispatch("todos/deleteTodo", index);
    }
  }
}
</script>

<style scoped>
.todoItems {
  display: flex;
  gap: 1rem;
  margin-bottom: .5rem;
}

.todoItems .todo {
  flex-grow: 2;
}

.todoItems .actions {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
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
  /* width: 90%; */
  flex-grow: 2;
}

@media screen and (max-width: 700px) {
  .todo .index {
    width: 10%;
  }
}

a {
  text-decoration: none;
  color: unset;
}
</style>
