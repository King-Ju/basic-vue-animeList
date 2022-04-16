import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
// Vue.use(axios);

export default new Vuex.Store({
  state: {
    animeList: [],
  },
  getters: {
    getAnimeList(state) {
      return state.animeList;
    },
  },
  mutations: {
    setAnimeList(state, animeList) {
      state.animeList = animeList;
    },
  },
  actions: {
    async fetchAnimeList({ commit }, animeName) {
      const animeList = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${animeName}`
      );
      console.log("test", animeList);
      commit("setAnimeList", animeList.data.data);
    },
  },
  modules: {},
});
