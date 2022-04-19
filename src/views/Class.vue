<!--
 * @Author: jinzhe
 * @Date: 2021-03-22 18:10:24
 * @LastEditors: jinzhe
 * @LastEditTime: 2021-03-23 09:35:50
-->
<template>
  <div class="cpms-page">
    <div class="ls-title">
      <div class="center">
        <div class="title">素材分类</div>
        <span style="flex: 1"></span>
        <el-input @keydown.enter="search" placeholder="搜索" style="width: 200px;margin: 0 20px">
          <el-button @click="search" slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button size="mini" type="primary">导出</el-button>
        <el-button size="mini" type="primary" @click="show = true">新增</el-button>
        <el-button size="mini" type="primary">刷新</el-button>
      </div>
    </div>
    <div class="ls-list">
      <div class="ls">
        <el-tabs class="tab">
          <el-tab-pane label="图标分类" name="first"></el-tab-pane>
          <el-tab-pane label="图片分类" name="second"></el-tab-pane>
        </el-tabs>
        <el-table
          :data="tableData"
          row-key="id"
          :default-expand-all="true"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
          border>
          <el-table-column
            prop="date"
            label="序号"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="分类名称"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="分类图片"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="分类状态"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="操作人"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="创建时间"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="下级分类"
            align="center">
          </el-table-column>
          <el-table-column
            prop="date"
            label="操作"
            align="center">
            <template>
              <el-button type="text" size="mini">添加下级</el-button>
              <el-button type="text" size="mini">删除</el-button>
              <el-button type="text" size="mini">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog :visible.sync="show" :title="title">
      <el-form size="mini" label-width="100px">
        <el-form-item label="上级分类">
          <el-input style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="分类图片">
          <el-upload action="#" list-type="picture-card" :limit="1">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="分类状态">
          <el-radio-group>
            <el-radio>是</el-radio>
            <el-radio>否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="show = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      title: '新建分类',
      tableData: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [{
          id: 31,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 32,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }]
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
.cpms-page{
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
