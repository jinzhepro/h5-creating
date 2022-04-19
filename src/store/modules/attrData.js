export default {
  namespaced: true,
  state: () => ({
    attrLs: {
    }
  }),
  mutations: {
    showMenu (state, { top, left }) {
      state.menu = {
        top,
        left
      }
    }
  },
  actions: {

  }

}
