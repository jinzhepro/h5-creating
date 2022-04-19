/*
 * @Author: Monica
 * @Date: 2021-03-16 18:28:33
 * @LastEditors: Monica
 * @LastEditTime: 2021-03-25 11:23:11
 */
export default {
  customModules: (state) => state.moduleData.customModules,
  model: (state) => state.app.model,
  componentLs: (state) => state.componentData.list,
  curComponent: (state) => state.componentData.curComponent,
  curCacheData: (state) => state.componentData.curCacheData, // 自定义模块缓存数据
  count: (state) => state.componentData.count, // 自定义模块缓存数据
  area: (state) => state.componentData.area,
  menu: (state) => state.ctxMenu.menu,
  copyComponent: (state) => state.ctxMenu.copyComponent,
  menuType: (state) => state.ctxMenu.type,
  canvasStyleData: (state) => state.ctxMenu.canvasStyleData,
  editMode: (state) => state.componentData.editMode,
  curModule: (state) => state.moduleData.curModule,
  moduleLs: (state) => state.moduleData.moduleLs,
  moduleX: (state) => state.moduleData.moduleX,
  moduleY: (state) => state.moduleData.moduleY,
  setMCurComponent: (state) => state.moduleData.curComponent
}
