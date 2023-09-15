const state = () => ({
  todos: [],
  detailTodo: {}
});

const mutations = {
  getOne(state, param) {
    state.detailTodo = state.todos[param];
  },
  add(state, param) {
    if (param) {
      const newTodo = {
        todo: param,
        desc: "",
      };
      state.todos.push(newTodo);
    }
  },
  edit(state, param) {
    state.todos[param.index].todo = param.updatedTodo;
  },
  delete(state, param) {
    state.todos.splice(param, 1);
  },
  editDescription(state, param) {
    state.todos[param.index].desc = param.updatedDesc
  }
};

const actions = {
  getOneTodos(store, param) {
    store.commit("getOne", param);
  },
  addTodo(store, param) {
    store.commit("add", param);
  },
  editTodo(store, param) {
    store.commit("edit", param);
  },
  deleteTodo(store, param) {
    store.commit("delete", param);
  },
  editDesc(store, param) {
    store.commit("editDescription", param);
  }
};

export default {
  state,
  mutations,
  actions,
};
