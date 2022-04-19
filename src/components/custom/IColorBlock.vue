<template>
  <div
    class="colorblock"
    :style="{ styles }"
    :data-id="id"
  ></div>
</template>

<script>
export default {
  props: ['propValue', 'styles', 'id']
}
</script>

<style lang="scss" scoped>
.colorblock {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
