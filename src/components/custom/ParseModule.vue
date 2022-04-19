<template>
  <div
    class="custom-wrap"
    :data-id="element.id"
    @contextmenu.prevent.capture="showMenu"
  >
    <div
      v-if="element.type === 'i-group'"
      :style="getSelectStyle(element.styles)"
      style="position: relative"
    >
      <template v-for="(item, index) in element.propValue">
        <template v-if="item.type !== 'i-group'">
          <div
            :key="index"
            style="position: absolute"
            :style="getResizeStyle(item.styles)"
          >
            <component
              :key="index"
              class="item groupitem"
              :is="item.type"
              :propValue="item.propValue"
              :style="getComponentStyle(item.styles)"
              :id="element.id"
            ></component>
          </div>
        </template>
        <template v-else>
          <div
            :key="index"
            style="position: absolute"
            :style="getResizeStyle(item.styles)"
          >
            <template v-for="(n, i) in item.propValue">
              <div
                :key="i"
                style="position: absolute"
                :style="getResizeStyle(n.styles)"
              >
                <component
                  class="item groupitem"
                  :is="n.type"
                  :propValue="n.propValue"
                  :style="getComponentStyle(n.styles)"
                  :id="n.id"
                ></component>
              </div>
            </template>
          </div>
        </template>
      </template>
    </div>
    <template v-else>
      <template v-for="(item, index) in element.propValue">
        <custom-resize :key="index" :element="item">
          <custom-shape :element="item" :parent="element">
            <component
              class="item"
              :is="item.type"
              :propValue="item.propValue"
              :style="getComponentStyle(item.styles)"
              :id="item.id"
              :ref="item.id"
            ></component>
          </custom-shape>
        </custom-resize>
      </template>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getResizeStyle, getSelectStyle, getComponentStyle } from '../../utils/getStyles'
export default {
  props: ['element'],
  data () {
    return {
      pid: ''
    }
  },
  computed: {
    ...mapGetters(['menu', 'menuType']),
    getSelectStyle () {
      return getSelectStyle
    },
    getComponentStyle () {
      return getComponentStyle
    },
    getResizeStyle () {
      return getResizeStyle
    }
  },
  created () {
    this.$bus.$on('pid', pid => {
      this.pid = pid
    })
  },
  methods: {
    showMenu (e) {
      this.$store.commit('ctxMenu/showMenu', {
        left: e.offsetX,
        top: e.offsetY
      })
      // this.$bus.$emit('move', e)
      // this.$bus.$emit('pid', this.pid)
      // this.$store.commit('moduleData/setModulePosition',{x: e.offsetX,y: e.offsetY})
    }
    // a(e){
    //   console.log(e);
    //   this.$store.commit('ctxMenu/showMenu',{
    //     top: e.clientY,
    //     left: e.clientX,
    //   })
    // this.$bus.$emit('move', e)
    // this.$bus.$emit('pid', this.pid)
    // this.$store.commit('moduleData/setModulePosition',{x: e.offsetX,y: e.offsetY})
    // }
  }
}
</script>

<style lang="scss" scoped>
.custom-wrap {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
