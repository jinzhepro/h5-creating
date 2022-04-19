<!--
 * @Author: Monica
 * @Date: 2021-03-19 17:23:16
 * @LastEditors: Monica
 * @LastEditTime: 2021-03-22 17:46:10
-->
<template>
  <div class="content">
    <component-ls />
    <div
      class="right"
      @drop.stop.prevent="drop"
      @dragover.prevent="(e) => (e.dataTransfer.dropEffect = 'copy')"
    >
      <edit />
    </div>
    <attr-ls />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['componentLs'])
  },
  methods: {
    drop (e) {
      const component = JSON.parse(e.dataTransfer.getData('dragComponent'))
      if (e.target.className === 'com-ls') {
        component.styles.left = e.offsetX
        component.styles.top = e.offsetY
      } else {
        console.log(e)
        component.styles.left = this.componentLs[this.componentLs.findIndex(item => item.id === (e.target.className === 'group-mask' ? e.target.id : e.target.dataset.id))].styles.left + e.offsetX
        component.styles.top = this.componentLs[this.componentLs.findIndex(item => item.id === (e.target.className === 'group-mask' ? e.target.id : e.target.dataset.id))].styles.top + e.offsetY
      }
      component.id = String(new Date().getTime())
      this.$store.commit('componentData/updComponent', { component })
      this.$store.commit('ctxMenu/showMenu', {
        top: 0,
        left: 0
      })
    }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  height: 100%;
  min-width: 1000px !important;
  .right {
    flex: 1;
  }
}
</style>
