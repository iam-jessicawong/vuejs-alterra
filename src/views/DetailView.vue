<template>
  <div class="detailview">
    <button @click="back">Kembali</button>
    <h2>{{ todo.todo }}</h2>
    <p v-if="!editDesc">
      <span v-if="todo.desc">{{ todo.desc }}</span>
      <span v-else>Belum ada deskripsi</span>
    </p>
    <button v-if="!editDesc" @click="editDesc = true">Ubah Deskripsi</button>
    <div v-if="editDesc" class="formEditDesc">
      <input type="text" v-model="inputDesc" @keyup.enter="changeDesc" />
      <button @click="changeDesc">Simpan</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  data() {
    return {
      editDesc: false,
      inputDesc: this.$store.state.todos.detailTodo.desc,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    todo() {
      return this.$store.state.todos.detailTodo;
    },
  },
  mounted() {
    this.$store.dispatch("todos/getOneTodos", this.$route.params.id);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    changeDesc() {
      const param = {
        index: this.$route.params.id,
        updatedDesc: this.inputDesc,
      };
      this.$store.dispatch("todos/editDesc", param);
      this.editDesc = false;
    },
    cancelEdit() {
      this.editDesc = false;
      this.inputDesc = this.$store.state.todos.detailTodo.desc;
    },
  },
};
</script>

<style scoped>
.formEditDesc {
  display: flex;
}
.formEditDesc input {
  flex-grow: 2;
}
</style>
