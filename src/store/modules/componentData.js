/*
 * @Author: Monica
 * @Date: 2021-03-19 17:23:16
 * @LastEditors: Monica
 * @LastEditTime: 2021-03-25 14:41:31
 */
import { deepCopy } from '../../utils/utils'
export default {
  namespaced: true,
  state: () => ({
    list: [],
    curComponent: {},
    editMode: 'edit',
    curCacheData: [],
    count: 0,
    area: {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    }
  }),
  mutations: {
    clearList (state) {
      state.list = []
    },
    updComponent (state, { component, id }) {
      // console.log(component, '----', state.curCacheData)
      const copyCpt = deepCopy(component)
      // let b = JSON.stringify(deepCopy(state.curCacheData[0] || []))

      if (id) {
        // const newComponent = {
        //   ...a,
        //   del: true
        // }
        // state.curCacheData.unshift(newComponent)
        state.list.splice(state.list.findIndex(item => item.id === id), 1, copyCpt)
        // state.list = state.list.filter(item => item.id)
      // } else if (id && state.list.findIndex(item => item.id === id) > -1) {
      //   state.list.splice(state.list.findIndex(item => item.id === id), 1, component)
      //   state.list = state.list.filter(item => item.id)
        // if (JSON.stringify(a) !== b && state.curCacheData.length > 0) {//数据改变时
        //   if (state.count > 0) {
        //     state.curCacheData.splice(0, state.count) // 当前步数不在最新时把之前后面的删除赋值成当前变化
        //     state.curCacheData.unshift(a)
        //     state.count = 0
        //   } else {
        //     state.curCacheData.unshift(a)
        //   }
        // }
      } else {
        state.list.push(copyCpt)
        // state.curCacheData.unshift(a)
      }
    },
    updata (state, count) {
      state.count = count
      // console.log(state.count, '=====', state.curCacheData);
      const component = state.curCacheData[state.count] || ''
      if (component !== '' && component.id) {
        for (let i = 0; i < state.list.length; i++) {
          if (state.list[i].id === component.id) {
            if (state.list.length - 1 - i > 0) {
              state.list[i + 1].del = true
              state.list.splice(i + 1, 1, state.list[i + 1])
            }
            component.del = false
            state.list.splice(i, 1, component)
          }
        }
      } else {
        state.list[0].del = true
        state.list.splice(0, 1, state.list[0])
      }
      console.log(state.list, 'oo')
    },
    setCurComponent (state, { component }) {
      // if (state.editMode === "preview") {
      //   return state.curComponent = {}
      // }
      state.curComponent = { ...component }
    },
    setEditMode (state, mode) {
      state.editMode = mode
    },
    saveArea (state, payload) {
      if (!payload) {
        state.area = {
          top: Math.min(...state.list.map(item => item.styles.top)) - 1,
          left: Math.min(...state.list.map(item => item.styles.left)) - 1,
          width: Math.max(...state.list.map(item => item.styles.left + item.styles.width)) - Math.min(...state.list.map(item => item.styles.left)),
          height: Math.max(...state.list.map(item => item.styles.top + item.styles.height)) - Math.min(...state.list.map(item => item.styles.top))
        }
      } else {
        state.area = {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        }
      }
    }
    // updateComponent(state, payload) {
    //   console.log(payload);

    //   state.list =  state.list.map(item => {
    //     if (item.id === payload.id) {
    //       console.log('1');

    //       return {
    //         ...item,
    //         styles: {
    //           ...item.styles,
    //           ...payload.styles
    //         }
    //       }
    //     }
    //     return item
    //   })
    // }
  },
  actions: {
    updCurAndLs ({ commit }, { component }) {
      commit('setCurComponent', { component })
      commit('updComponent', { component, id: component.id })
    }
  }

}
