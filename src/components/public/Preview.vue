<template>
  <div class="bg" v-if="show">
    <el-button @click="close" class="close">关闭</el-button>
    <div class="canvas-container">
      <div
        class="canvas"
        :style="{
          width: canvasStyleData.width + 'px',
          height: canvasStyleData.height + 'px',
        }"
      >
        <template v-for="(item, index) in componentLs" @click="handleClick">
          <i-group
            v-if="item.propValue[0].id"
            :key="index"
            :element="item"
          ></i-group>
          <shape :key="index" :element="item">
            <component
              class="item"
              :is="item.type"
              :propValue="item.propValue"
              :style="getComponentStyle(item.styles)"
              :id="item.id"
            ></component>
          </shape>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { getComponentStyle } from '../../utils/getStyles'
import { mapGetters } from 'vuex'
export default {
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['canvasStyleData', 'componentLs']),
    getComponentStyle () {
      return getComponentStyle
    }
  },
  methods: {
    close () {
      this.$emit('change', false)
    },
    handleClick () {
      const events = this.config.events
      Object.keys(events).forEach(event => {
        this[event](events[event])
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999990;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 20px;

  .canvas-container {
    width: calc(100% - 40px);
    height: calc(100% - 120px);
    overflow: auto;

    .canvas {
      background: #fff;
      position: relative;
      margin: auto;
    }
  }

  .close {
    position: absolute;
    right: 60px;
    top: 20px;
  }
}
</style>
