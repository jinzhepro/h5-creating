<!--
 * @Author: jinzhe
 * @Date: 2021-03-22 17:45:30
 * @LastEditors: jinzhe
 * @LastEditTime: 2021-03-25 13:59:56
-->
<template>
  <div class="h5-page">
    <div class="ls-title">
      <div class="center">
        <div class="title">页面管理</div>
        <span style="flex: 1"></span>
        <el-input @keydown.enter="search" placeholder="搜索" style="width: 200px;margin: 0 20px">
          <el-button @click="search" slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button size="mini" type="primary" @click="add">新增</el-button>
        <el-button size="mini" type="primary">刷新</el-button>
      </div>
    </div>
    <div class="ls-list">
      <div class="ls">
        <el-tabs class="tab" v-model="activeTab">
          <el-tab-pane label="普通页面" name="1"></el-tab-pane>
          <el-tab-pane label="弹窗页面" name="2"></el-tab-pane>
          <el-tab-pane label="搜索页面" name="3"></el-tab-pane>
        </el-tabs>
        <el-table
          :data="tableData"
          border>
          <el-table-column
            prop="date"
            label="序号"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="标题"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="发布状态"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="创建时间"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="链接"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="备注"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="访客数"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="浏览量"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="商品访客数"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="商品浏览量"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="使用位置"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="操作"
            align="center">
            <template>
              <el-button size="mini" type="text">预览</el-button>
              <el-button size="mini" type="text">编辑</el-button>
              <el-button size="mini" type="text">复制</el-button>
              <el-button size="mini" type="text">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: '1',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    search () {

    },
    add () {
      if (this.activeTab === '1') {
        this.$router.push('/edit/module')
      } else if (this.activeTab === '2') {
        this.$router.push('/edit/dialog')
      } else {
        this.$router.push('/edit/search')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.h5-page{
  height: 100%;
  background: #ffffff;
  .ls-title{
    height: 40px;
    background: #ffffff;
    .center{
      margin: 0 auto;
      height: 40px;
      width: 1200px;
      display: flex;
      align-items: center;
      .title{
        height: 30px;
        line-height: 30px;
        margin:  0 0 0 20px;
        padding: 0 0 0 10px;
        border-left: 5px solid #409EFF;
      }
    }
  }
  .ls-list{
    .tab{
      margin: 10px 0;
    }

    .ls{
      margin: 0 auto;
      width: 1200px;
    }
  }
}
</style>
