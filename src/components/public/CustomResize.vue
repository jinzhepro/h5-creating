<template>
  <div
    :class="{ resize: true, 'active-c': element.id == curComponent.id }"
    :style="getResizeStyle(element.styles)"
    :ref="`box-${element.id}`"
    :data-id="element.id"
    @mousedown="resize"
    @contextmenu.stop.prevent="showMenu"
  >
    <slot></slot>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getResizeStyle } from '../../utils/getStyles'
export default {
  props: ['element'],
  data () {
    return {
      cid: '',
      pid: ''
    }
  },
  computed: {
    ...mapGetters(['moduleLs', 'componentLs', 'curModule', 'curComponent']),
    getResizeStyle: function () {
      return getResizeStyle
    }
  },
  created () {
    this.$bus.$on('cid', cid => {
      this.cid = cid
    })
    this.$bus.$on('pid', pid => {
      this.pid = pid
    })
  },
  methods: {
    resize (e) {
      const up = () => {
        const newComponent = {
          ...this.element,
          styles: {
            ...this.element.styles,
            height: parseInt(window.getComputedStyle(e.target).height),
            width: parseInt(window.getComputedStyle(e.target).width)
          }
        }
        this.$store.commit('moduleData/updModuleLs', { module: newComponent, pid: this.pid, cid: this.cid })
        document.removeEventListener('mouseup', up)
      }
      document.addEventListener('mouseup', up)
    },
    showMenu (e) {
      this.$bus.$emit('pid', this.pid)
      this.$bus.$emit('cid', this.cid)
      let top = 0
      let left = 0
      this.moduleLs.forEach(item => {
        if (item.id === this.pid) {
          item.propValue.forEach(n => {
            if (n.id === this.cid) {
              top = n.styles.top + e.offsetY
              left = n.styles.left + e.offsetX
            }
          })
        }
      })
      this.$store.commit('ctxMenu/showMenu', {
        top,
        left,
        type: 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.resize {
  position: absolute;
  &.active-c {
    outline: 1px solid #409eff;
    -webkit-resize: both;
    -moz-resize: both;
    -o-resize: both;
    -ms-resize: both;
    resize: both;
    overflow: hidden;
  }
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
}
</style>
