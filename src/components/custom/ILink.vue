<template>
  <div
    class="ilink"
    :style="{ background: 'rgba(0,0,0,0.1)', ...styles }"
    :data-id="id"
  ></div>
</template>

<script>
export default {
  props: ['propValue', 'styles', 'id']
}
</script>

<style lang="scss" scoped>
.ilink {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
