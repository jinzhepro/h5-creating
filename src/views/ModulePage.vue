<!--
 * @Author: Monica
 * @Date: 2021-03-19 17:23:16
 * @LastEditors: Monica
 * @LastEditTime: 2021-03-22 16:25:50
-->
<template>
  <div class="module-content">
    <!-- <attr-ls /> -->
    <component-ls />
    <div class="right">
      <module />
    </div>
    <attr-ls type="" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['componentLs'])
  },
  methods: {
    // drop(e){
    //   let component = JSON.parse(e.dataTransfer.getData('dragComponent'))
    //   if(e.target.className === 'wrap'){
    //     component.styles.left = e.offsetX
    //     component.styles.top = e.offsetY
    //   }else{
    //     component.styles.left = this.componentLs[this.componentLs.findIndex(item=>item.id === (e.target.className === 'group' ? e.target.id : e.target.dataset.id))].styles.left + e.offsetX
    //     component.styles.top = this.componentLs[this.componentLs.findIndex(item=>item.id === (e.target.className === 'group' ? e.target.id : e.target.dataset.id))].styles.top + e.offsetY
    //   }
    //   component.id = String(new Date().getTime())
    //   this.$store.commit('componentData/updComponent',{ component })
    //   this.$store.commit('ctxMenu/showMenu',{
    //     top: 0,
    //     left: 0
    //   })
    // },
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.module-content {
  display: flex;
  height: 100%;
  min-width: 1000px !important;
  .right {
    // display: flex;
    // justify-content: center;
    flex: 1;
  }
}
</style>
