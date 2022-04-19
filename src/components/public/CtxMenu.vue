<template>
  <div
    class="ctx-menu"
    :style="{ top: menu.top + 'px', left: menu.left + 'px' }"
  >
    <div class="box">
      <div v-if="menuType" @click.prevent.stop="copy">复制</div>
      <div @click.prevent.stop="paster">粘贴</div>
      <div v-if="menuType" @click.prevent.stop="del">删除</div>
      <div v-if="menuType" @click.prevent.stop="up">图层向前</div>
      <div v-if="menuType" @click.prevent.stop="down">图层向后</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['menu', 'menuType'],
  computed: {
    ...mapGetters(['curComponent', 'copyComponent', 'moduleLs', 'componentLs'])
  },
  data () {
    return {
      type: '',
      pid: '',
      cid: '',
      nid: ''
    }
  },
  mounted () {
    this.type = this.$route.path.indexOf('module') > -1 ? 'module' : 'diy'
    this.$bus.$on('cid', cid => {
      this.cid = cid
    })
    this.$bus.$on('pid', pid => {
      this.pid = pid
    })
    this.$bus.$on('nid', nid => {
      this.nid = nid
    })
  },
  methods: {
    copy () {
      if (this.type === 'module') {
        let obj = {}
        this.moduleLs.forEach(item => {
          if (item.id === this.pid) {
            item.propValue.forEach(n => {
              if (n.id === this.cid) {
                obj = n
              }
            })
          }
        })
        this.$store.commit('ctxMenu/addCopy', {
          component: obj
        })
      } else {
        const component = this.componentLs.find(item => item.id === this.nid)
        this.$store.commit('ctxMenu/addCopy', {
          component: component
        })
      }
      this.$store.commit('ctxMenu/showMenu', { top: 0, left: 0 })
    },
    paster () {
      console.log(this.copyComponent)
      if (!this.copyComponent.id) {
        this.$message({
          type: 'error',
          message: '剪切板为空!!!'
        })
        return
      }
      if (this.type === 'module') {
        console.log(this.pid, this.cid)
        const index = this.moduleLs.findIndex(item => item.id === this.pid)
        console.log(this.moduleLs[index].propValue.concat([{ ...this.copyComponent }]))
        const a = {
          ...this.copyComponent,
          id: String(new Date().getTime()),
          styles: {
            ...this.copyComponent.styles,
            ...this.menu
          }
        }
        const obj = {
          module: {
            ...this.moduleLs[index],
            propValue: this.moduleLs[index].propValue.concat([{ ...a }])
          },
          pid: this.pid
        }
        console.log(obj)

        this.$store.commit('moduleData/updModuleLs', obj)
      } else {
        const component = {
          ...this.copyComponent,
          id: String(new Date().getTime()),
          styles: {
            ...this.copyComponent.styles,
            ...this.menu
          }
        }
        this.$store.commit('componentData/updComponent', { component })
      }
      this.$store.commit('ctxMenu/showMenu', { top: 0, left: 0 })
    },
    del () {
      if (this.type === 'module') {
        this.$store.commit('moduleData/delModuleLs', { pid: this.pid, cid: this.cid })
      } else {
        const component = this.componentLs.find(item => item.id === this.nid)
        this.$store.commit('componentData/updComponent', { component: {}, id: component.id })
      }
      this.$store.commit('ctxMenu/showMenu', { top: 0, left: 0 })
    },
    up () {
      if (this.type === 'module') {
        const module = this.moduleLs.find(item => item.id === this.pid).propValue.find(n => n.id === this.cid)
        module.styles['z-index'] = (module.styles['z-index'] || 0) + 1
        this.$store.commit('moduleData/updModuleLs', { module, pid: this.pid, cid: this.cid })
      } else {
        const component = this.componentLs.find(item => item.id === this.nid)
        component.styles['z-index'] = (component.styles['z-index'] || 0) + 1
        this.$store.commit('componentData/updComponent', { component: component, id: this.nid })
      }
      this.$store.commit('ctxMenu/showMenu', { top: 0, left: 0 })
    },
    down () {
      if (this.type === 'module') {
        const module = this.moduleLs.find(item => item.id === this.pid).propValue.find(n => n.id === this.cid)
        if (module.styles['z-index'] === 0) {
          this.$message({
            type: 'error',
            message: '该图层已在最底!'
          })
          this.$store.commit('ctxMenu/showMenu', { top: 0, left: 0 })
          return
        }
        module.styles['z-index'] = (module.styles['z-index'] || 0) - 1
        this.$store.commit('moduleData/updModuleLs', { module, pid: this.pid, cid: this.cid })
      } else {
        const component = this.componentLs.find(item => item.id === this.nid)
        if (component.styles['z-index'] === 0) {
          this.$message({
            type: 'error',
            message: '该图层已在最底!'
          })
          this.$store.commit('ctxMenu/showMenu', { top: 0, left: 0 })
          return
        }
        const newComponent = {
          ...component,
          styles: {
            ...component.styles,
            'z-index': component.styles['z-index'] - 1
          }
        }
        this.$store.commit('componentData/updComponent', { component: newComponent, id: newComponent.id })
      }
      this.$store.commit('ctxMenu/showMenu', { top: 0, left: 0 })
    }
  }
}
</script>

<style lang="scss" scoped>
.ctx-menu {
  position: absolute;
  z-index: 99999999999999;
  .box {
    background: #ffffff;
    div {
      font-size: 12px;
      text-align: center;
      padding: 5px 10px;
      border: 1px solid #999999;
      z-index: 99999999;
      &:hover {
        background: #409eff;
        cursor: pointer;
        color: #ffffff;
      }
    }
  }
}
</style>
