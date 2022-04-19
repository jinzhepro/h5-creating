<!--
 * @Author: jinzhe
 * @Date: 2021-03-22 10:09:47
 * @LastEditors: jinzhe
 * @LastEditTime: 2021-03-23 09:58:33
-->
<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#409EFF"
      active-text-color="#ffffff"
    >
      <el-menu-item index="/components/ls">组件管理</el-menu-item>
      <el-menu-item index="/h5/ls">H5页面</el-menu-item>
      <el-menu-item index="/edit/system">平台装修</el-menu-item>
      <el-menu-item index="/log/ls">装修日志</el-menu-item>
      <el-menu-item index="/icon-img/ls">素材管理</el-menu-item>
      <el-menu-item index="/class/ls">素材分类</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/components/ls'
    }
  },
  methods: {
    handleSelect (key) {
      this.$router.push(key)
    }
  },
  created () {
    this.activeIndex = this.$route.path
  }
}
</script>

<style lang="scss">
.header{
  background: #409EFF;
  .el-menu{
    width: 1200px;
    margin: 0 auto;
    .el-menu-item{
      color: #ffffff !important;
    }
  }
}
</style>
