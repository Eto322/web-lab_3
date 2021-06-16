import { createStore } from "vuex";
import Model from "../model/model.js";
export default createStore({
  state: {
    model: new Model(),
  },
  mutations: {
    ADD(state, { name, tel, adress }) {
      state.model.add(name, tel, adress);
    },
    CHOOSE(state, id) {
      state.model.choose(id);
    },
    DELETE(state) {
      state.model.delete();
    },
    LOAD(state) {
      state.model.loadItems();
    },
  },
  actions: {},
  modules: {},
});
