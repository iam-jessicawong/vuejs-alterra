import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import todos from "./todos";

Vue.use(Vuex);

const persistedDataState = createPersistedState({
  paths: ["todos"]
})

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    todos: {
      namespaced: true,
      ...todos
    }
  }
});
