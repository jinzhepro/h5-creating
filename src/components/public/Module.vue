<!--
 * @Author: jinzhe
 * @Date: 2021-03-17 10:19:27
 * @LastEditors: jinzhe
 * @LastEditTime: 2021-03-19 17:30:53
-->
<template>
  <div class="module-page">
    <div v-if="!moduleLs.length" style="text-align: center; padding-top: 30px">
      <el-button type="primary" size="large" @click="add(0)"
        >添加模块</el-button
      >
    </div>
    <div v-else class="module-box">
      <div
        v-for="(item, i) in moduleLs"
        :class="{
          module: true,
          custom: item.type === 'i-custom',
          active: item.id == curModule.id,
        }"
        @click="check($event, item.id)"
        :style="getSelectStyle(item.styles)"
        :key="i"
      >
        <ctx-menu
          v-show="menu.top && item.id == curModule.id"
          :menu="menu"
          :menuType="menuType"
        />

        <parse-module :element="item" />

        <div class="mask" @click="check($event, item.id)"></div>

        <div v-show="item.id === curModule.id" class="tools">
          <span
            v-show="item.id"
            class="h"
            @mousedown.stop.prevent="changeHeight($event, i)"
            >------调整高度------</span
          >
          <span style="flex: 1"></span>
          <span v-show="item.id && i !== 0" @click.stop.prevent="move('up', i)"
            ><i class=""></i> 上移</span
          >
          <span
            v-show="item.id && i !== moduleLs.length - 1"
            @click.stop.prevent="move('down', i)"
            >下移</span
          >
          <span v-show="item.id" @click.stop.prevent="del(i)">删除</span>
          <span v-show="item.id" @click.stop="copy(i)">复制</span>
          <span @click.stop.prevent="add(i)">添加模块</span>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="moduleShow">
      <el-radio-group v-model="addType">
        <el-radio-button :label="1">创建的模块</el-radio-button>
        <el-radio-button :label="2">自定义</el-radio-button>
      </el-radio-group>
      <div style="margin: 30px 0 0">
        <el-button v-show="addType === 1" v-for="item in customModules" :key="item.id" type="primary" plain @click="submit(item)">{{ item.label }}</el-button>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="moduleShow = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSelectStyle } from '../../utils/getStyles'
// import { a } from '../../utils/componentLs'
export default {
  data () {
    return {
      pid: 0,
      moudles: [
        {}
      ],
      addType: 1,
      moduleShow: false,
      index: ''
    }
  },
  computed: {
    ...mapGetters(['curModule', 'moduleLs', 'menu', 'menuType', 'componentLs', 'customModules']),
    getSelectStyle () {
      return getSelectStyle
    }
  },
  mounted () {
    this.$bus.$emit('pid', (val) => {
      console.log(val)
    })
  },
  methods: {
    changeHeight (e, index) {
      const y = e.y
      const target = e.path.find(item => item.className.indexOf('module') > -1)
      const height = parseInt(window.getComputedStyle(target).height)
      const move = (e) => {
        const ny = e.y
        if (ny > y) {
          console.log(target)
          target.style.cssText += `height: ${height + ny - y}px`
        }
        if (ny < y) {
          target.style.cssText += `height: ${height - (y - ny)}px`
        }
      }
      const up = () => {
        const module = {
          ...this.moduleLs[index],
          styles: {
            ...this.moduleLs[index].styles,
            height: parseInt(window.getComputedStyle(target).height)
          }
        }
        this.$store.commit('moduleData/updModuleLs', { module, pid: this.pid })
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    },
    move (type, index) {
      const module = this.moduleLs[index]
      if (type === 'up') {
        this.$store.commit('moduleData/updModuleLs', { i: index })
        this.$store.commit('moduleData/updModuleLs', { module, i: index - 1 })
      } else {
        this.$store.commit('moduleData/updModuleLs', { i: index })
        this.$store.commit('moduleData/updModuleLs', { module, i: index + 1 })
      }
    },
    del (index) {
      this.$store.commit('moduleData/updModuleLs', { i: index })
    },
    check (e, id) {
      console.log(this.moduleLs.find(n => n.id === id).type)
      this.$store.commit('app/setModel', this.moduleLs.find(n => n.id === id).type === 'i-group' ? 1 : 0)
      this.$store.commit('moduleData/setCurModule', this.moduleLs.find(n => n.id === id))
      this.$store.commit('ctxMenu/showMenu', {
        left: 0,
        top: 0,
        type: 1
      })
    },
    copy (index) {
      const t = String(new Date().getTime())
      this.$store.commit('moduleData/updModuleLs', { module: { ...this.moduleLs[index], id: t }, i: index })
      this.$bus.$emit('pid', t)
      this.pid = t
    },
    add (i) {
      this.moduleShow = true
      this.index = i
    },
    submit (item) {
      console.log(item)
      const t = String(new Date().getTime())
      if (this.addType === 1) {
        this.$store.commit('moduleData/updModuleLs', { module: { ...item, id: t }, i: this.index + 1 })
        this.$store.commit('moduleData/setCurModule', { ...item, id: t })
        this.$store.commit('app/setModel', 1)
      } else {
        const module = {
          type: 'i-custom',
          id: t,
          propValue: [],
          attr: [],
          styles: {
            height: 200
          }
        }
        this.$store.commit('moduleData/updModuleLs', {
          module,
          i: this.index + 1
        })
        this.$store.commit('app/setModel', 0)
        this.$store.commit('moduleData/setCurModule', module)
      }
      this.pid = t
      this.$bus.$emit('pid', t)
      this.moduleShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.module-page {
  height: 100%;
  padding: 50px 0;
  box-sizing: border-box;
  overflow: auto;
  .module-box {
    width: 750px;
    margin: 0 auto;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
  }
  .module {
    position: relative;
    min-height: 200px;
    width: 100% !important;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(192, 222, 237, 0.5);
      display: none;
    }
    &:hover:not(.custom) .mask {
      display: block;
    }
    .tools {
      position: absolute;
      height: 20px;
      background: rgba(13, 116, 219, 0.7);
      width: 100%;
      bottom: -20px;
      left: 0;
      color: #ffffff;
      padding: 0 10px;
      font-size: 12px;
      line-height: 20px;
      display: flex;
      z-index: 999;
      box-sizing: border-box;
      outline: 2px solid #59c7f9;
      span {
        cursor: pointer;
        margin: 0 5px;
        &:hover {
          color: #d9ecff;
        }
        &.h:hover {
          cursor: s-resize !important;
        }
      }
    }
    &.active {
      outline: 2px solid #59c7f9;
    }
  }
}
</style>
