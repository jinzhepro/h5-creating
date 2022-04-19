<template>
  <div
    class="shape"
    :style="getSelectStyle(element.styles)"
    :data-id="element.id"
    @mousedown="select"
  >
    <slot />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSelectStyle } from '../../utils/getStyles'
export default {
  props: ['element', 'parent'],
  computed: {
    ...mapGetters(['moduleLs']),
    getSelectStyle () {
      return getSelectStyle
    }
  },
  data () {
    return {
      pid: '',
      cid: '',
      l: 0,
      t: 0,
      newComponent: {},
      oDiv: '',
      oDiv2: ''
    }
  },
  created () {
    this.$bus.$on('pid', pid => {
      this.pid = pid
    })
  },
  methods: {
    select (ev) {
      console.log(ev)
      // this.$bus.$emit('cid', this.element.id)
      // this.$bus.$emit('pid', this.pid)
      console.log(this.element, this.parent)
      this.$store.commit('componentData/setCurComponent', this.element)
      ev.path.forEach(element => {
        if (element.className === 'resize') {
          this.oDiv = element
        }
        if (element.className === 'active') {
          this.oDiv2 = element
        }
      })
      let disX = 0
      let disY = 0
      disX = ev.clientX - this.oDiv.offsetLeft
      disY = ev.clientY - this.oDiv.offsetTop
      const move = (ev) => {
        const l = ev.clientX - disX
        const t = ev.clientY - disY
        this.l = l
        this.t = t
        this.oDiv.style.left = l + 'px'
        this.oDiv.style.top = t + 'px'
      }
      const up = () => {
        const newComponent = {
          ...this.element,
          styles: {
            ...this.element.styles,
            top: this.t,
            left: this.l
          }
        }
        this.$store.commit('moduleData/updModuleLs', { module: newComponent, pid: this.pid, cid: this.element.id })
        this.$store.commit('componentData/setCurComponent', { component: this.newComponent.id ? this.newComponent : this.element })
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    }

  }
}
</script>

<style lang="scss" scoped>
.shape {
  width: 100%;
  height: 100%;
  &:hover {
    cursor: move;
  }
  .shape-point {
    position: absolute;
    background: #fff;
    border: 1px solid #59c7f9;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    z-index: 1;
  }
}
</style>
