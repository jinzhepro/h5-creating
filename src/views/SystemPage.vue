<!--
 * @Author: jinzhe
 * @Date: 2021-03-23 09:51:00
 * @LastEditors: jinzhe
 * @LastEditTime: 2021-03-25 15:12:23
-->
<template>
  <div class="system-page">
    <div class="ls-title">
      <div class="center">
        <div class="title">页面管理</div>
        <span style="flex: 1"></span>
        <el-button size="mini" type="primary">导出</el-button>
        <el-button size="mini" type="primary">刷新</el-button>
      </div>
    </div>
    <div class="ls">
      <div class="nav">
        <div
          v-for="(item, index) in navList"
          :key="index"
          :class="{ active: index === navIndex }"
          @click="navClick(index)"
        >
          <i :class="item.icon"></i>
          <div>{{ item.label }}</div>
        </div>
      </div>
      <div class="components-ls">
        <draggable
          :list="componentLs"
          :group="{ name: 'ls', pull: 'clone', put: false }"
          @change="log"
        >
          <div class="item" v-for="(item, index) in componentLs" :key="index">
            <i :class="item.icon"></i>
            <div>{{ item.label }}</div>
          </div>
        </draggable>
      </div>
      <div class="edit">
        <div class="box">
          <draggable
            style="width: 100%; height: 100%"
            :list="moduleLs"
            :group="{ name: 'ls' }"
            @change="log"
          >
            <div
              :class="{ item: true, active: index === i }"
              v-for="(item, i) in moduleLs"
              :key="i"
              :style="{ height: item.height + 'px' }"
              @click="click(i, item)"
            >
              <div>{{ item.label }}</div>
            </div>
          </draggable>
        </div>
        <div class="bar">
          <div v-for="(item, index) in navBar" :key="index">
            <i :class="item.icon"></i>
            <div>{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="attrs">
      <div class="h">
        <el-button>删除</el-button>
        <div class="title">
          {{ moduleLs.find((item, i) => i === index).label }}
        </div>
      </div>
      <div class="attrLs">
        <el-form size="mini" label-width="50px">
          <div
            v-if="
              moduleLs.find((item, i) => i === index).type === 'home-header'
            "
          >
            <div class="title2">会员码</div>
            <el-form-item label="图标">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-success="upHomeHeaderImg"
              >
                <img
                  v-if="imageUrl"
                  :src="
                    moduleLs.find((item, i) => i === index).attr.member.link
                  "
                  class="avatar"
                />
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="状态">
              <el-radio-group
                v-model="
                  moduleLs.find((item, i) => i === index).attr.member.status
                "
              >
                <el-radio label="1">显示</el-radio>
                <el-radio label="2">隐藏</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="链接">
              <el-input
                type="textarea"
                style="width: 200px"
                v-model="
                  moduleLs.find((item, i) => i === index).attr.member.link
                "
              ></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>

    <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data () {
    return {
      navIndex: 0,
      index: 0,
      navList: [
        { label: '首页', icon: 'el-icon-s-home', type: 'home' },
        { label: '我的', icon: 'el-icon-user-solid', type: 'mine' }
      ],
      componentLs: [
        { label: '轮播', icon: 'el-icon-picture-outline', height: 100, id: 1 },
        { label: '广告', icon: 'el-icon-bank-card', height: 300, id: 2 }
      ],
      home: [
        {
          label: '头部',
          id: 1,
          height: 60,
          type: 'home-header',
          attr: {
            title: '',
            bg: '',
            member: {
              icon: '',
              status: '',
              link: ''
            },
            qr: {
              icon: '',
              status: '',
              link: ''
            },
            msg: {
              icon: '',
              status: '',
              link: ''
            }
          }
        },
        {
          label: '搜索栏',
          id: 1,
          height: 40
        },
        {
          label: '轮播图',
          id: 1,
          height: 100
        },
        {
          label: '导航栏',
          id: 1,
          height: 100
        },
        {
          label: '广告位',
          id: 1,
          height: 300
        }
      ],
      mine: [
        {
          label: '头部',
          id: 1,
          height: 60
        },
        {
          label: '订单图标',
          id: 1,
          height: 40
        },
        {
          label: '我的财富',
          id: 1,
          height: 100
        },
        {
          label: '我的服务',
          id: 1,
          height: 100
        },
        {
          label: '商家入驻',
          id: 1,
          height: 300
        }
      ],
      moduleLs: [
        {
          label: '头部',
          id: 1,
          height: 60
        },
        {
          label: '搜索栏',
          id: 1,
          height: 40
        },
        {
          label: '轮播图',
          id: 1,
          height: 100
        },
        {
          label: '导航栏',
          id: 1,
          height: 100
        },
        {
          label: '广告位',
          id: 1,
          height: 300
        }
      ],
      navBar: [
        {
          label: '首页',
          icon: 'el-icon-s-home'
        },
        {
          label: '分类',
          icon: 'el-icon-coin'
        },
        {
          label: '发现',
          icon: 'el-icon-thumb'
        },
        {
          label: '购物车',
          icon: 'el-icon-shopping-cart-2'
        },
        {
          label: '我的',
          icon: 'el-icon-user'
        }
      ]
    }
  },
  created () {
    this.moduleLs = this.home
  },
  methods: {
    navClick (index) {
      this.navIndex = index
      if (index === 0) {
        this.moduleLs = this.home
      } else {
        this.moduleLs = this.mine
      }
    },
    click (index, item) {
      this.index = index
      this.attrType = item.type
    },
    log (evt) {
      window.console.log(evt)
      this.index = evt.added ? evt.added.newIndex : evt.moved.newIndex
    }
  }
}
</script>

<style lang="scss">
.system-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
  position: relative;
  .ls-title {
    height: 40px;
    background: #ffffff;
    .center {
      margin: 0 auto;
      height: 40px;
      width: 1200px;
      display: flex;
      align-items: center;
      .title {
        height: 30px;
        line-height: 30px;
        margin: 0 0 0 20px;
        padding: 0 0 0 10px;
        border-left: 5px solid #409eff;
      }
    }
  }
  .ls {
    position: relative;
    margin: 10px auto 0;
    width: 1200px;
    flex: 1;
    display: flex;
    .nav {
      width: 80px;
      height: 100%;
      background: #ffffff;
      border-right: 1px solid #cccccc;
      & > div {
        width: 50px;
        margin: 10px auto;
        text-align: center;
        font-size: 12px;
        color: #303133;
        border: 1px solid #303133;
        border-radius: 10px;
        padding: 3px 0;
        cursor: pointer;
        &.active {
          border-color: #409eff;
          color: #409eff;
        }
        i {
          font-size: 25px;
        }
      }
    }
    .components-ls {
      width: 200px;
      height: 100%;
      background: #ffffff;
      .item {
        float: left;
        width: 50px;
        margin: 15px 20px;
        text-align: center;
        font-size: 12px;
        color: #303133;
        border: 1px solid #303133;
        border-radius: 10px;
        padding: 3px 0;
        &.active {
          border-color: #409eff;
          color: #409eff;
        }
        i {
          font-size: 25px;
        }
      }
    }
    .edit {
      flex: 1;
      height: 100%;
      background: #cccccc;
      .box {
        position: relative;
        margin: 0 auto;
        width: 350px;
        height: 700px;
        background: #ffffff;
        overflow: auto;
        padding: 5px;
        box-sizing: border-box;
        .item {
          margin-bottom: 5px;
          height: 50px;
          border: 1px solid #f2f2f2;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          &.active {
            border-color: #409eff;
            color: #409eff;
          }
        }
      }
      .bar {
        background: #ffffff;
        margin: 0 auto;
        width: 350px;
        display: flex;
        justify-content: space-around;
        div {
          text-align: center;
          font-size: 12px;
          i {
            font-size: 25px;
          }
        }
      }
    }
  }
  .attrs {
    position: absolute;
    height: calc(100% - 40px);
    right: 0;
    top: 40px;
    width: 300px;
    background: #ffffff;
    .h {
      display: flex;
      align-items: center;
      height: 40px;
      border-top: 1px solid #f2f2f2;
      border-bottom: 1px solid #f2f2f2;
      button {
        margin: 0 10px;
      }
      .title {
        flex: 1;
        text-align: center;
      }
    }
    .title2 {
      text-align: center;
      // padding: 0 0 0 20px;
      line-height: 30px;
    }
    .el-upload--picture-card {
      width: 50px;
      height: 50px;
      line-height: 60px;
    }
  }
}
</style>
