<template>
  <div
    style="position: absolute"
    :class="{
      group: true,
      active: element.id == nid,
    }"
    :style="getResizeStyle(element.styles)"
    :id="element.id"
    :ref="`box-${element.id}`"
    @mouseup="changeStyle"
  >
    <div
      style="position: absolute; z-index: 999999"
      :style="getSelectStyle(element.styles)"
      class="group-mask"
      :id="element.id"
      @mousedown="select"
      @contextmenu.stop.prevent="showMenu"
    ></div>
    <div
      style="position: absolute"
      v-for="(item, index) in element.propValue"
      :key="index"
      :id="element.id"
      :style="getResizeStyle(item.styles)"
    >
      <div
        style="position: absolute"
        :style="getSelectStyle(item.styles)"
        :id="element.id"
      >
        <component
          class="item groupitem"
          :is="item.type"
          :propValue="item.propValue"
          :style="getComponentStyle(item.styles)"
          :id="element.id"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getResizeStyle, getComponentStyle, getSelectStyle } from '../../utils/getStyles'
export default {
  props: ['element'],
  data () {
    return {
      newComponent: {},
      nid: ''
    }
  },
  computed: {
    ...mapGetters(['curComponent', 'componentLs', 'editMode']),
    getResizeStyle () {
      return getResizeStyle
    },
    getComponentStyle () {
      return getComponentStyle
    },
    getSelectStyle () {
      return getSelectStyle
    }
  },
  created () {
    this.$bus.$on('nid', nid => {
      this.nid = nid
    })
  },
  methods: {
    // clean(){},
    changeStyle (e) {
      const obj = {}
      if (this.editMode !== 'edit') return
      this.$bus.$emit('nid', this.element.id)
      const up = () => {
        const component = this.componentLs.find(item => item.id === this.element.id)
        component.propValue.forEach(item => {
          obj[item.id] = {
            top: item.styles.top / component.styles.height,
            left: item.styles.left / component.styles.width,
            width: item.styles.width / component.styles.width,
            height: item.styles.height / component.styles.height
          }
        })
        const newComponent = {
          ...component,
          propValue: component.propValue.map(item => {
            return {
              ...item,
              styles: {
                ...item.styles,
                top: obj[item.id].top * e.target.offsetHeight,
                left: obj[item.id].left * e.target.offsetWidth,
                width: obj[item.id].width * e.target.offsetWidth,
                height: obj[item.id].height * e.target.offsetHeight
              }
            }
          }),
          styles: {
            ...component.styles,
            width: e.target.offsetWidth,
            height: e.target.offsetHeight
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
      this.$bus.$emit('nid', this.element.id)
      this.$store.commit('ctxMenu/showMenu', {
        top: e.target.offsetParent.offsetTop + e.offsetY,
        left: e.target.offsetParent.offsetLeft + e.offsetX,
        type: 1
      })
    },
    select (ev) {
      this.nid = this.element.id
      this.$bus.$emit('nid', this.element.id)
      if (this.editMode !== 'edit') return
      ev.path.forEach(element => {
        if (element.className === 'group') {
          this.oDiv = element
        }
        if (element.className === 'com-ls') {
          this.oDiv2 = element
        }
      })
      let disX = 0
      let disY = 0
      disX = ev.clientX - this.oDiv.offsetLeft
      disY = ev.clientY - this.oDiv.offsetTop
      this.l = parseInt(this.oDiv.offsetLeft)
      this.t = parseInt(this.oDiv.offsetTop)
      const move = (ev) => {
        this.l = ev.clientX - disX
        this.t = ev.clientY - disY
        this.oDiv.style.left = this.l + 'px'
        this.oDiv.style.top = this.t + 'px'
      }
      const up = () => {
        this.$bus.$emit('nid', this.element.id)
        const newComponent = this.componentLs.find(item => item.id === this.element.id)
        newComponent.styles = {
          ...newComponent.styles,
          left: this.l,
          top: this.t,
          height: parseInt(window.getComputedStyle(this.oDiv).height),
          width: parseInt(window.getComputedStyle(this.oDiv).width)
        }
        this.$store.commit('componentData/updComponent', {
          component: newComponent.id ? newComponent : this.element,
          id: this.element.id
        })
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
.group {
  position: absolute;
  &:hover {
    cursor: move;
  }
  &.active {
    outline: 1px solid #409eff;
    -webkit-resize: both;
    -moz-resize: both;
    -o-resize: both;
    -ms-resize: both;
    resize: both;
    overflow: hidden;
  }
}
</style>
