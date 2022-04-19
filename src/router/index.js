/*
 * @Author: jinzhe
 * @Date: 2021-03-10 09:38:36
 * @LastEditors: jinzhe
 * @LastEditTime: 2021-03-22 17:55:46
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
