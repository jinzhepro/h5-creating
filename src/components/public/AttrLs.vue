<template>
  <div
    class="attr-box"
    :style="{ width: isShow ? '292px' : '16px' }"
    v-if="curComponent"
  >
    <div class="attr-center">
      <div class="attr-arrow">
        <div
          class="attr-div"
          @click.stop="isShow = !isShow"
        >
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="attr-list">
        <div
          v-for="(item, index) in model ? [curModule] : [curComponent]"
          :key="index"
        >
          <template v-if="!model && item.styles">
            <div v-if="Object.keys(item.styles).length > 0">
              <div
                class="mt15 title"
                style="display: flex;clear:both"
              >
                <span style="width:68px;display: inline-block">名称</span>
                <el-input
                  size="small"
                  @change="changeStyle()"
                  v-model="item.attr.title"
                  placeholder="请输入属性名称"
                ></el-input>
              </div>
              <Attr
                :curComponent="item"
                :styleKeys="item.styles"
                :isIgroup="isIgroup"
                :id="id"
              />
            </div>
          </template>
          <template v-else>
            <div
              v-for="(i,j) in item.attr"
              :key="j"
            >
              <div v-if="Object.keys(i).length > 0">
                <div
                  class="mt15 title"
                  style="display: flex;clear:both"
                >
                  <span style="width:68px;display: inline-block">{{i.title}}</span>
                </div>
                <Attr
                  :curComponent="item"
                  :styleKeys="i"
                  :isIgroup="isIgroup"
                  :id="id"
                />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Attr from './Attr.vue'
export default {
  components: { Attr },
  props: ['type'],
  data () {
    return {
      isShow: true,
      isIgroup: false,
      id: '',
      // curComponent: [{
      //   styles: {},
      //   attr: []
      // }],
      styleKeys: [],
      excludes: ['Picture', 'Group'] // 这些组件不显示内容
    }
  },
  computed: {
    ...mapGetters(['componentLs', 'moduleLs', 'model', 'curModule', 'curComponent'])
  },
  created () {
    // this.$bus.$on("nid", (nid) => {
    //   this.id = nid;
    //   this.isIgroup = false;
    //   let arr = [];
    //   if (this.componentLs.length > 0) {
    //     arr.push(this.componentLs.find((item) => item.id === this.id));
    //   }
    //   console.log(arr)
    //   this.curComponent = arr
    // })
    // this.$bus.$on('pid', pid => {
    //   this.id = pid
    //   this.isIgroup = true
    //   let arr = []
    //   let item = {}
    //   if (this.moduleLs) {
    //     item = this.moduleLs.find(item => item.id === this.id)
    //     if (item && item.type === 'i-group') {
    //       arr.push(this.moduleLs.find(item => item.id === this.id))
    //       this.curComponent = arr
    //     } else if (item && item.type === 'i-custom') {
    //       this.pid = pid
    //       this.getCidData()
    //     }
    //   }
    // })
    // this.$bus.$on('cid', cid => {
    //   this.cid = cid
    //   this.getCidData()
    // })
  },
  methods: {
    changeStyle () {
      this.$store.commit('componentData/updComponent', {
        component: this.curComponent,
        id: this.id
      })
    }
    // getCidData() {
    //   if (!this.cid || !this.pid) return
    //   let pData = this.moduleLs ? this.moduleLs.find(item => item.id === this.pid) : {}
    //   let cData = pData && pData.propValue ? pData.propValue.find(item => item.id === this.cid) : {}
    //   let arr = []
    //   if (cData) {
    //     arr.push(cData)
    //     this.id = this.cid
    //     this.isIgroup = false
    //     // this.curComponent = arr
    //   }
    // }
  }
}
</script>

<style lang="scss">
.title {
  line-height: 32px;
  .el-input {
    flex: 1;
  }
}
.attr-box {
  height: 100%;
  right: 0;
  display: flex;
  overflow: hidden;
  color: #333;
  transition: all 0.3s;
  .attr-center {
    position: relative;
    .attr-arrow {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      box-shadow: inset -3px 0 4px -4px rgba(33, 36, 51, 0.2);
      .attr-div {
        display: flex;
        width: 16px;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 6px 0 0 6px;
        box-shadow: -0 0 4px 0 rgba(33, 36, 51, 0.1);
        position: absolute;
        left: 2px;
        cursor: pointer;
      }
    }
    .attr-list {
      position: absolute;
      width: 240px;
      height: 100%;
      top: 0;
      left: 18px;
      background: #fff;
      overflow: hidden;
      font-size: 14px;
      padding: 0 18px;
    }
  }
}
</style>
