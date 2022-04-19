<!--
 * @Author: jinzhe
 * @Date: 2021-03-10 09:38:36
 * @LastEditors: jinzhe
 * @LastEditTime: 2021-03-25 15:20:16
-->
<template>
  <div id="page">
    <tools-bar type="type" />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: ''
    }
  },
  created () {
    this.type = this.$route.path.indexOf('dialog') > -1 ? 'dialog' : 'normal'
  }
}
</script>
