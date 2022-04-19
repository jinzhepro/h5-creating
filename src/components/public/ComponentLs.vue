<template>
  <div class="wrap">
    <div class="base">
      <div
        class="item"
        @click="click(item)"
        @dragstart="dragStart($event, item)"
        v-for="(item, index) in baseLs"
        :key="index"
        draggable
      >
        <i class="el-icon-tickets"></i>
        <span>{{ item.label }}</span>
      </div>
    </div>
    <!-- <hr />
    <div class="group">
      <div class="item" @dragstart="dragStart($event,item)" v-for="(item,index) in groupLs" :key="index" draggable>
        <i class="el-icon-tickets"></i>
        <span>{{item.label}}</span></div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { baseLs } from '../../utils/componentLs'
export default {
  name: 'componentLs',
  computed: {
    ...mapGetters(['moduleLs', 'curModule'])
  },
  data () {
    return {
      pid: '',
      baseLs: baseLs,
      groupLs: [{
        label: '123'
      }, {
        label: '123'
      }, {
        label: '123'
      }, {
        label: '123'
      }, {
        label: '123'
      }, {
        label: '123'
      }, {
        label: '123'
      }]
    }
  },
  created () {
    this.$bus.$on('pid', pid => {
      this.pid = pid
    })
  },
  methods: {
    dragStart (e, parmas) {
      e.dataTransfer.setData('dragComponent', JSON.stringify(parmas))
    },
    click (item) {
      console.log(item)
      const t = String(new Date().getTime())
      const custom = {
        ...item,
        id: t
      }
      const index = this.moduleLs.findIndex(item => item.id === this.curModule.id)
      if (this.moduleLs[index].type === 'i-custom') {
        const obj = {
          module: {
            ...this.moduleLs[index],
            propValue: this.moduleLs[index].propValue.concat(custom).map(n => {
              if (n.id === t) {
                return {
                  ...n,
                  id: t,
                  styles: {
                    ...n.styles,
                    top: 0,
                    left: 0
                  }
                }
              }
              return n
            })
          },
          pid: this.curModule.id
        }
        this.$store.commit('moduleData/updModuleLs', obj)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 200px;
  height: 100%;
  background: #cccccc;
  .base,
  .group {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 5px 0;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 6px;
      width: 50px;
      height: 50px;
      border: 1px solid #111111;
      i {
        font-size: 27px;
      }
      span {
        font-size: 14px;
      }
    }
  }
}
</style>
