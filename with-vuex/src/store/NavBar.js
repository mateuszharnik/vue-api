export default {
  namespaced: true,
  state: {
    isOpen: false,
    isDisabled: false,
    isExpanded: false,
  },
  getters: {
    active(state) {
      return state.isOpen ? 'block' : 'hidden';
    },
    expanded(state) {
      return state.isExpanded ? 'true' : 'false';
    },
  },
  mutations: {
    closeMenu(state) {
      state.isOpen = false;
      state.isExpanded = false;
    },
    toggleMenu(state) {
      state.isOpen = !state.isOpen;
      state.isExpanded = !state.isExpanded;
      state.isDisabled = true;
    },
    setIsDisabled(state) {
      state.isDisabled = false;
    },
  },
  actions: {
    toggleMenu({ commit, state }) {
      if (!state.isDisabled) {
        commit('toggleMenu');
        setTimeout(() => {
          commit('setIsDisabled');
        }, 400);
      }
    },
  },
};
