export default {
  namespaced: true,
  state: () => ({
    model: '',
    menu: {
      top: 0,
      left: 0
    }
  }),
  mutations: {
    showMenu (state, { top, left }) {
      state.menu = {
        top,
        left
      }
    },
    setModel (state, payload) {
      state.model = payload
    }
  },
  actions: {

  }

}
