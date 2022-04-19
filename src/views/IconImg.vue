<!--
 * @Author: jinzhe
 * @Date: 2021-03-22 18:20:08
 * @LastEditors: jinzhe
 * @LastEditTime: 2021-03-23 09:32:21
-->
<template>
  <div class="cpms-page">
    <div class="ls-title">
      <div class="center">
        <div class="title">素材管理</div>
        <span style="flex: 1"></span>
        <el-input @keydown.enter="search" placeholder="搜索" style="width: 200px;margin: 0 20px">
          <el-button @click="search" slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button size="mini" type="primary" @click="show = true">新增</el-button>
        <el-button size="mini" type="primary">刷新</el-button>
      </div>
    </div>
    <div class="ls-list">
      <div class="ls">
        <el-tabs class="tab">
          <el-tab-pane label="图标库" name="first"></el-tab-pane>
          <el-tab-pane label="图片库" name="second"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="box">
        <div class="item" v-for="(item,index) in [1,2,3,4]" :key="index">
          <img src="https://placehold.it/100" alt="">
          <div class="bottom">
            <div class="left">
              <div>导航图标</div>
              <div>张三 2020-1-01</div>
            </div>
            <div class="right">
              <el-button type="text" size="mini">编辑</el-button>
              <el-button type="text" size="mini">删除</el-button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <el-dialog :visible.sync="show" :title="title">
      <el-form size="mini" label-width="100px">
        <el-form-item label="图标库图片">
          <el-upload action="#" list-type="picture-card" :limit="1">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="图标库名称">
          <el-input style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="图标库描述">
          <el-input style="width: 400px" type="textarea" rows="5"></el-input>
        </el-form-item>
        <el-form-item label="图标库分类"></el-form-item>
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
      title: '新建图标库',
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

    .ls,.box{
      margin: 0 auto;
      width: 1200px;
      .item{
        float: left;
        margin: 20px;
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 200px;
        border-radius: 5px;
        box-shadow: 0 0 5px 2px #dddddd;
        .bottom{
          display: flex;
          align-items: center;
          padding: 5px 10px;
          & div:nth-child(1){
            flex: 1;
          }
          & div:nth-child(2){
            font-size: 12px;
            color: #cccccc;
          }
        }
      }
    }
  }
}
</style>
