<template>
  <div class="home">
    <el-button @click="$router.push('/edit/diy')">建造组件</el-button>
    <el-button @click="$router.push('/edit/module')">建造页面</el-button>
    <el-button @click="$router.push('/edit/system')">建造其他页面</el-button>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
