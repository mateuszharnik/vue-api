import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import navbar from '@/store/NavBar';

Vue.use(Vuex);

const URL = 'https://swapi.co/api';

export default new Vuex.Store({
  modules: {
    navbar,
  },
  state: {
    categories: [
      'People',
      'Planets',
      'Species',
      'Films',
    ],
  },
  getters: {

  },
  mutations: {

  },
  actions: {
    async getData(_, data) {
      const resp = await axios.get(`${URL + data}`);
      return resp.data;
    },
    async getNextPage(_, data) {
      const resp = await axios.get(`${data}`);
      return resp.data;
    },
  },
});
