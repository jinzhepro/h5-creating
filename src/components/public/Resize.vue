<template>
  <div
    v-if="!element.del"
    :class="{ resize: true, active: element.id == nid }"
    :style="getResizeStyle(element.styles)"
    :ref="`box-${element.id}`"
    @mousedown="resize"
    @contextmenu.stop.prevent="showMenu"
  >
    <slot> </slot>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getResizeStyle } from '../../utils/getStyles'
export default {
  props: ['element'],
  data () {
    return {
      nid: ''
    }
  },
  computed: {
    ...mapGetters(['curComponent', 'componentLs', 'editMode']),
    getResizeStyle: function () {
      return getResizeStyle
    }
  },
  created () {
    this.$bus.$on('nid', nid => {
      this.nid = nid
    })
  },
  methods: {
    resize (e) {
      this.$bus.$emit('nid', this.element.id)
      if (this.editMode !== 'edit') return
      const up = () => {
        this.$bus.$emit('nid', this.element.id)
        const newComponent = {
          ...this.element,
          styles: {
            ...this.element.styles,
            height: parseInt(window.getComputedStyle(e.target).height),
            width: parseInt(window.getComputedStyle(e.target).width)
          }
        }
        this.$store.commit('componentData/updComponent', {
          component: newComponent,
          id: this.element.id
        })
        document.removeEventListener('mouseup', up)
      }
      document.addEventListener('mouseup', up)
    },
    showMenu (e) {
      if (this.editMode !== 'edit') return
      this.$store.commit('ctxMenu/showMenu', {
        top: this.componentLs[
          this.componentLs.findIndex(item => item.id === this.nid)
        ].styles.top + e.offsetY,
        left:
          this.componentLs[
            this.componentLs.findIndex(item => item.id === this.nid)
          ].styles.left + e.offsetX,
        type: 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.resize {
  position: absolute;
  &.active {
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
