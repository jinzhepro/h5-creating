<template>
  <div class="text" :style="styles" :data-id="id">{{ propValue }}</div>
</template>

<script>
export default {
  props: ['propValue', 'styles', 'id']
}
</script>

<style lang="scss" scoped>
.text {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
