<template>
  <div v-if="styles.width" :style="getResizeStyle(styles)" class="area"></div>
</template>

<script>
import { getResizeStyle } from '../../utils/getStyles'
export default {
  props: ['styles'],
  watch: {
    styles () {
      this.$forceUpdate()
    }
  },
  computed: {
    getResizeStyle () {
      return getResizeStyle
    }
  }
}
</script>

<style lang="scss" scoped>
.area {
  position: absolute;
  border: 1px solid red;
}
</style>
