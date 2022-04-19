<template>
  <div
    class="shape"
    :style="getSelectStyle(element.styles)"
    @mousedown="select"
  >
    <slot />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSelectStyle } from '../../utils/getStyles'
export default {
  props: ['element'],
  computed: {
    ...mapGetters(['curComponent', 'editMode', 'componentLs']),
    getSelectStyle () {
      return getSelectStyle
    }
  },
  created () {
    this.$bus.$on('nid', nid => {
      this.nid = nid
    })
  },
  data () {
    return {
      nid: '',
      flag: false,
      offsetX: 0,
      offsetY: 0,
      x: 0,
      y: 0,
      newComponent: {}
    }
  },
  methods: {
    select (ev) {
      // this.$bus.$emit('nid', this.element.id)
      console.log(ev)

      ev.path.forEach(element => {
        if (element.className === 'resize') {
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
        this.$store.commit('componentData/saveArea', 1)
      }
      const up = () => {
        this.$bus.$emit('nid', this.element.id)
        const newComponent = this.componentLs.find(item => item.id === this.nid)
        newComponent.styles = {
          ...newComponent.styles,
          left: this.l,
          top: this.t
        }
        this.$store.commit('componentData/updComponent', {
          component: this.newComponent.id ? this.newComponent : this.element,
          id: this.element.id
        })
        this.$store.commit('componentData/setCurComponent', { component: this.newComponent.id ? this.newComponent : this.element })

        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    }
    // select(e){
    //   if (this.editMode !== 'edit') return
    //   this.offsetX = e.offsetX
    //   this.offsetY = e.offsetY
    //   this.$store.commit('componentData/setCurComponent',{ component: this.element })
    //   this.$store.commit('componentData/saveArea','reset')
    //   this.$store.commit('ctxMenu/showMenu',{
    //     top:0,
    //     left: 0
    //   })
    //   let dom = document.getElementById('wrap');
    //   let domLeft = dom.offsetParent.offsetLeft;
    //   const move = (e) =>{
    //     this.flag = true
    //     this.$parent.$refs[`box-${this.element.id}`].style.left = e.x - domLeft - this.offsetX + 'px'
    //     this.$parent.$refs[`box-${this.element.id}`].style.top = e.y - 70 - this.offsetY + 'px'
    //     this.newComponent =  {
    //       ...this.curComponent,
    //       styles:{
    //         ...this.curComponent.styles,
    //         left: e.x - domLeft - this.offsetX,
    //         top: e.y - 70 - this.offsetY
    //       }
    //     }
    //   }
    //   const up = (e) =>{
    //     e.stopPropagation()
    //     e.preventDefault()
    //     this.offsetX = 0
    //     this.offsetY = 0
    //     document.removeEventListener('mousemove',move)
    //     document.removeEventListener('mouseup',up)
    //     if(this.flag){
    //       this.$store.commit('componentData/setCurComponent',{
    //         component: this.newComponent.id ? this.newComponent : this.element
    //       })
    //       this.$store.commit('componentData/updComponent',{
    //         component: this.newComponent.id ? this.newComponent : this.element,
    //         id: this.element.id
    //       })
    //     }
    //     this.flag = false
    //     this.$forceUpdate()
    //   }
    //   document.addEventListener('mousemove',move)
    //   document.addEventListener('mouseup',up)
    // },
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
