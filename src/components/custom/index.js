import Vue from 'vue'
const modules = require.context(
  './',
  false,
  /\.vue$/
)
modules.keys().forEach(item => {
  const name = item.split('/').pop().replace(/\.vue/, '')
  const module = modules(item).default || modules(item)
  Vue.component(name, module)
})
