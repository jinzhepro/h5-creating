<!--
 * @Author: jinzhe
 * @Date: 2021-03-22 10:08:26
 * @LastEditors: jinzhe
 * @LastEditTime: 2021-03-25 15:18:45
-->
<template>
  <div id="page-2">
    <header-bar />
    <div id="content-2">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#page-2{
  display: flex;
  height: 100%;
  flex-direction: column;
  #content-2{
    flex: 1
  }
}
</style>
