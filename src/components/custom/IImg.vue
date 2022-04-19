<template>
  <div :style="styles">
    <div class="mask"></div>
    <img
      :style="styles"
      :src="propValue"
      :data-id="id"
    />
  </div>
</template>

<script>
export default {
  props: ['propValue', 'styles', 'id']
}
</script>

<style lang="scss" scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
img {
  user-select: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
