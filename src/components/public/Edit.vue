<template>
  <div
    class="wrap-box"
    :style="{
      width: canvasStyleData.width + 'px',
      height: canvasStyleData.height + 'px',
    }"
  >
    <!-- 点击遮罩 -->
    <!-- <div
      class="wrap"
      id="wrap"
      @mousedown.stop.prevent="reset"
      @contextmenu.stop.prevent="showMenu"
    >
    </div> -->
    <!-- 生成组 -->
    <group-box :styles="area" />
    <!-- 右击菜单 -->
    <ctx-menu
      v-show="menu.top"
      :menu="menu"
      :menuType="menuType"
    />
    <div
      class="com-ls"
      :style="{
        width: canvasStyleData.width + 'px',
        height: canvasStyleData.height + 'px',
      }"
      style="position: relative; top: 0; left: 0"
      @click="check"
      @contextmenu.prevent.capture="showMenu"
    >
      <template v-for="(item, index) in componentLs">
        <!-- 组合组件 -->
<!--        <i-group-->
<!--          v-if="item.propValue[0].id"-->
<!--          :key="index"-->
<!--          :element="item"-->
<!--        >-->
<!--        </i-group>-->
        <!-- 普通组件 -->
        <resize
          :key="index"
          :element="item"
        >
          <shape
            :element="item"
            v-if="!item.del"
          >
            <component
              class="item"
              :is="item.type"
              :propValue="item.propValue"
              :style="getComponentStyle(item.styles)"
              :id="item.id"
              :ref="item.id"
            ></component>
          </shape>
        </resize>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getComponentStyle, getSelectStyle } from '../../utils/getStyles'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['canvasStyleData', 'componentLs', 'curComponent', 'area', 'menu', 'menuType']),
    getComponentStyle () {
      return getComponentStyle
    },
    getSelectStyle () {
      return getSelectStyle
    }
  },
  methods: {

    showMenu (e) {
      this.$store.commit('ctxMenu/showMenu', {
        top: e.offsetY,
        left: e.offsetX
      })
      // this.$store.commit('componentData/setCurComponent',{
      //   component: {}
      // })
    },
    check () {
      this.$store.commit('ctxMenu/showMenu', {
        left: 0,
        top: 0,
        type: 1
      })
    },
    reset () {
      this.$store.commit('ctxMenu/showMenu', { top: 0, left: 0 })
      this.$store.commit('componentData/setCurComponent', {
        component: {}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap-box {
  position: relative;
  overflow: hidden;
  margin: 20px auto;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  .wrap {
    position: relative;
    width: 100%;
    height: 100%;
    .item {
      position: absolute;
    }
  }
}
</style>
