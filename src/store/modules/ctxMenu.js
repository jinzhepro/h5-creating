export default {
  namespaced: true,
  state: () => ({
    copyComponent: {},
    type: 0,
    menu: {
      top: 0,
      left: 0
    },
    canvasStyleData: {
      width: 750,
      height: 740
    }
  }),
  mutations: {
    showMenu (state, { top, left, type }) {
      state.menu = {
        top,
        left
      }
      state.type = type || 0
    },
    addCopy (state, { component }) {
      state.copyComponent = component
    },
    setCanvasStyle (state, style) {
      state.canvasStyleData = style
    }
  },
  actions: {

  }

}
