export default {
  namespaced: true,
  state: () => ({
    customModules: [],
    curModule: {},
    moduleLs: [],
    moduleX: 0,
    moduleY: 0,
    setCurComponent: {}
  }),
  mutations: {
    setCurModule (state, payload) {
      state.curModule = payload
    },
    addCustomModules (state, payload) {
      state.customModules.push(payload)
    },
    updModuleLs (state, { module, pid, cid, i }) {
      if (!pid && !cid) {
        if (module && i !== undefined) {
          state.moduleLs.splice(i, 0, module)
        }
        if (!module && i !== undefined) { state.moduleLs.splice(i, 1) }
      }
      if (cid && pid) {
        state.moduleLs = state.moduleLs.map(item => {
          if (item.id === pid) {
            return {
              ...item,
              propValue: item.propValue.map(n => {
                if (n.id === cid) {
                  return module
                }
                return n
              })
            }
          }
          return item
        })
      }
      if (pid && !cid) {
        state.moduleLs = state.moduleLs.map(item => {
          if (item.id === pid) {
            return {
              ...item,
              ...module
            }
          }
          return item
        })
      }
    },
    delModuleLs (state, { pid, cid }) {
      state.moduleLs = state.moduleLs.map(item => {
        if (item.id === pid) {
          return {
            ...item,
            propValue: item.propValue.filter(n => n.id !== cid)
          }
        }
        return item
      })
    },
    setModulePosition (state, { x, y }) {
      state.moduleX = x
      state.moduleY = y
    },
    setCurComponent (state, { component }) {
      state.curComponent = { ...component }
    }
  },
  actions: {

  }

}
