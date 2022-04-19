import Vue from 'vue'

const bus = {
  install: function (V) {
    V.prototype.$bus = new Vue()
  }
}

export default bus
