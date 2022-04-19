import axios from 'axios'

const app = axios.create({

})

app.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

app.interceptors.response.use(function (res) {
  return res
}, function (err) {
  return Promise.reject(err)
})

const request = {
  install: function (Vue) {
    Vue.prototype.$request = function (url, data, requestOption = {}) {
      return app({
        url,
        ...requestOption,
        method: requestOption.method || 'post',
        [requestOption.method === 'get' ? 'params' : 'data']: data
      })
    }
  }
}

export default request
