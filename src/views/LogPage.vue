<!--
 * @Author: jinzhe
 * @Date: 2021-03-22 17:59:38
 * @LastEditors: jinzhe
 * @LastEditTime: 2021-03-22 18:00:58
-->
<template>
  <div class="log-page">
    <div class="ls-title">
      <div class="center">
        <div class="title">页面管理</div>
        <span style="flex: 1"></span>
        <el-input @keydown.enter="search" placeholder="搜索" style="width: 200px;margin: 0 20px">
          <el-button @click="search" slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button size="mini" type="primary">导出</el-button>
        <el-button size="mini" type="primary">刷新</el-button>
      </div>
    </div>
    <div class="ls-list">
      <div class="ls">
        <el-tabs class="tab">
          <el-tab-pane label="所有" name="first"></el-tab-pane>
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
            label="操作人"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="操作时间"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="操作模块"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="操作内容"
            align="center">
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
    }
  }
}
</script>

<style lang="scss" scoped>
.log-page{
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
