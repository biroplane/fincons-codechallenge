/* eslint-disable prettier/prettier */
import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: []
  },
  getters: {
    people: (state) => state.people || []
  },

  actions: {
    async loadPeople({ commit }) {
      let _people = await Axios({
        method: "GET",
        url: "https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/People"
      });

      console.log("People loaded ", _people);
      commit("SET_PEOPLE", _people.data.value);
      // commit("SET_PEOPlE", _people.data);
    }
  },
  mutations: {
    SET_PEOPLE: (state, people) => {
      state.people = [...people];
    }
  }
});
