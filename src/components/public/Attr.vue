<template>
  <el-form size="small">
    <el-form-item
      v-for="(key, index) in Object.keys(styleKeys)"
      :key="index"
      :label="map[key]"
      :class="key"
    >
      <div v-if="key == 'width'">
        <el-input-number
          :min="1"
          style="width: 115px; display: block"
          controls-position="right"
          @change="changeStyle()"
          v-model="styleKeys[key]"
        ></el-input-number>
      </div>
      <div v-if="key == 'height'">
        <el-input-number
          :min="1"
          style="width: 115px; display: block"
          controls-position="right"
          @change="changeStyle()"
          v-model="styleKeys[key]"
        ></el-input-number>
      </div>
      <div
        class="slider"
        v-if="key == 'left'"
      >
        <el-slider
          show-input
          :show-input-controls="false"
          input-size="small"
          :min="-300"
          :max="750"
          @change="changeStyle()"
          v-model="styleKeys[key]"
        ></el-slider>
      </div>
      <div
        class="slider"
        v-if="key == 'top'"
      >
        <el-slider
          show-input
          :show-input-controls="false"
          input-size="small"
          :min="-300"
          :max="750"
          @change="changeStyle()"
          v-model="styleKeys[key]"
        ></el-slider>
      </div>
      <el-tooltip
        size="small"
        v-else-if="key == 'fontFamily'"
        content="选择字体"
        placement="top"
      >
        <el-select
          class="dib"
          style="width: 115px; margin-right: 10px"
          @change="changeStyle()"
          v-model="styleKeys[key]"
        >
          <el-option
            v-for="item in fontFamilyOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-tooltip>
      <el-tooltip
        v-else-if="key == 'fontSize'"
        content="调整文字大小"
        placement="top"
      >
        <el-input-number
          :min="12"
          class="dib"
          style="width: 115px"
          controls-position="right"
          @change="changeStyle()"
          v-model="styleKeys[key]"
        ></el-input-number>
      </el-tooltip>
      <div
        style="height: 32px; margin-right: 38px"
        v-if="key == 'color'"
      >
        <el-color-picker
          @change="changeStyle()"
          v-model="styleKeys[key]"
        ></el-color-picker>
      </div>
      <div
        style="height: 32px"
        v-if="key == 'backgroundColor'"
      >
        <el-color-picker
          @change="changeStyle()"
          v-model="styleKeys[key]"
        ></el-color-picker>
      </div>
      <div
        v-else-if="key == 'textAlign'"
        style="display:block"
      >
        <el-radio-group
          @change="changeStyle()"
          v-model="styleKeys[key]"
        >
          <el-tooltip
            content="对齐方式"
            placement="top"
          >
            <span @click.stop.prevent="changeWritingMode">
              <el-checkbox-button class="bgC">
                <i class="iconfont iconhengshuA"></i>
              </el-checkbox-button>
            </span>
          </el-tooltip>
          <el-tooltip
            content="左对齐"
            placement="top"
          >
            <el-radio-button label="left">
              <i class="iconfont iconzuoduiqi"></i>
            </el-radio-button>
          </el-tooltip>
          <el-tooltip
            content="居中"
            placement="top"
          >
            <el-radio-button label="center">
              <i class="iconfont iconjuzhongduiqi"></i>
            </el-radio-button>
          </el-tooltip>
          <el-tooltip
            content="右对齐"
            placement="top"
          >
            <el-radio-button label="right">
              <i class="iconfont iconyouduiqi"></i>
            </el-radio-button>
          </el-tooltip>
        </el-radio-group>
      </div>
      <div
        v-else-if="key == 'fontStyle'"
        class="radio-group"
        style="display:block"
      >
        <el-checkbox-group
          v-model="styleKeys[key]"
          @change="changeStyle()"
        >
          <el-tooltip
            content="加粗"
            placement="top"
          >
            <el-checkbox-button label="bold">
              <i class="iconfont iconB"></i>
            </el-checkbox-button>
          </el-tooltip>
          <el-tooltip
            content="倾斜"
            placement="top"
          >
            <el-checkbox-button label="italic">
              <i class="iconfont iconI"></i>
            </el-checkbox-button>
          </el-tooltip>
          <el-tooltip
            content="下划线"
            placement="top"
          >
            <el-checkbox-button label="decoration">
              <i class="iconfont iconU"></i>
            </el-checkbox-button>
          </el-tooltip>
          <el-tooltip
            content="删除线"
            placement="top"
          >
            <el-checkbox-button label="through">
              <i class="iconfont el-icon-position"></i>
            </el-checkbox-button>
          </el-tooltip>
        </el-checkbox-group>
      </div>
      <div
        class="slider"
        v-if="key == 'lineHeight'"
      >
        <el-slider
          show-input
          :show-input-controls="false"
          input-size="small"
          :step="0.1"
          :min="1"
          :max="10"
          @change="changeStyle()"
          v-model="styleKeys[key]"
        ></el-slider>
      </div>
      <div
        class="slider"
        v-if="key == 'letterSpacing'"
      >
        <el-slider
          show-input
          :show-input-controls="false"
          input-size="small"
          :step="0.1"
          :min="0"
          :max="10"
          @change="changeStyle()"
          v-model="styleKeys[key]"
        ></el-slider>
      </div>
      <div
        class="slider"
        v-if="key == 'opacity'"
      >
        <el-slider
          show-input
          :show-input-controls="false"
          input-size="small"
          :step="0.1"
          :min="0"
          :max="1"
          @change="changeStyle()"
          v-model="styleKeys[key]"
        ></el-slider>
      </div>
      <div
        class="slider"
        v-if="key == 'transform'"
      >
        <el-slider
          show-input
          :show-input-controls="false"
          input-size="small"
          :min="-180"
          :max="180"
          @change="changeStyle()"
          v-model="styleKeys[key]"
        ></el-slider>
      </div>
      <el-tooltip
        v-else-if="key == 'borderStyle'"
        content="选择边框样式"
        placement="top"
      >
        <el-select
          class="borderStyle"
          style="width: 62px; margin-right: 5px;display:block"
          @change="changeStyle()"
          v-model="styleKeys[key]"
        >
          <el-option
            v-for="item in borderStyleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <div
              class="borderDiv"
              :style="{ borderBottomStyle: item.value }"
            ></div>
          </el-option>
        </el-select>
      </el-tooltip>
      <el-tooltip
        v-else-if="key == 'borderWidth'"
        content="边框宽度"
        placement="top"
      >
        <div class="radius">
          <el-input-number
            :min="1"
            style="width: 55px; margin-right: 8px"
            controls-position="right"
            @change="changeStyle()"
            v-model="styleKeys[key]"
          ></el-input-number>
        </div>
      </el-tooltip>
      <el-tooltip
        v-else-if="key == 'borderColor'"
        content="边框颜色"
        placement="top"
      >
        <div style="height: 32px;margin-right:6px">
          <el-color-picker
            v-model="styleKeys[key]"
            @change="changeStyle()"
          ></el-color-picker>
        </div>
      </el-tooltip>
      <div
        class="border dib"
        style="width: 72px"
        v-else-if="key == 'borderShow'"
      >

        <el-tooltip
          content="边框"
          placement="top"
        >
          <el-radio
            style="margin: 0 8px 0 0"
            @change="changeStyle()"
            v-model="styleKeys.borderShow"
            label="all"
            border
          >
            <i
              style="font-size: 26px"
              class="iconfont iconbiankuang"
            ></i>
          </el-radio>
        </el-tooltip>

        <el-tooltip
          content="独立边框"
          placement="top"
        >
          <el-radio
            style="margin: 0"
            @change="changeStyle()"
            v-model="styleKeys.borderShow"
            label="side"
            border
          >
            <i
              style="font-size: 26px"
              class="iconfont iconbiankuangkejianxing"
            ></i>
          </el-radio>
        </el-tooltip>
        <div
          style="position: relative; height: 30px"
          :style="{
                  display:
                    styleKeys.borderShow == 'side' ? 'block' : 'none',
                }"
        >
          <div class="showDiv">
            <el-checkbox-group
              @change="changeStyle()"
              v-model="styleKeys.borderShows"
            >
              <el-checkbox
                class="top"
                label="上"
              ></el-checkbox>
            </el-checkbox-group>
            <el-checkbox-group
              @change="changeStyle()"
              v-model="styleKeys.borderShows"
            >
              <el-checkbox
                class="bottom"
                label="下"
              ></el-checkbox>
            </el-checkbox-group>
            <el-checkbox-group
              @change="changeStyle()"
              v-model="styleKeys.borderShows"
            >
              <el-checkbox
                class="left"
                label="左"
              ></el-checkbox>
            </el-checkbox-group>
            <el-checkbox-group
              @change="changeStyle()"
              v-model="styleKeys.borderShows"
            >
              <el-checkbox
                class="right"
                label="右"
              ></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div
        class="radius"
        v-else-if="key == 'borderRadius'"
        :style="{
                  height: styleKeys.radiusType == 'side' ? '88px' : '32px',
                }"
      >
        <el-input-number
          :min="1"
          controls-position="right"
          @change="changeStyle()"
          v-model="styleKeys[key]"
        ></el-input-number>
        <el-tooltip
          content="圆角"
          placement="top"
        >
          <el-radio
            @change="changeStyle()"
            v-model="styleKeys.radiusType"
            label="all"
            border
          >
            <i
              style="font-size: 26px"
              class="iconfont iconbiankuang"
            ></i>
          </el-radio>
        </el-tooltip>
        <el-tooltip
          content="独立圆角"
          placement="top"
        >
          <el-radio
            @change="changeStyle()"
            v-model="styleKeys.radiusType"
            label="side"
            border
          >
            <i
              style="font-size: 26px"
              class="iconfont iconyuanjiao"
            ></i>
          </el-radio>
        </el-tooltip>
        <div
          :style="{
                  height:
                    styleKeys.radiusType == 'side' ? '65px' : '0',
                }"
          class="sideBox"
        >
          <div
            class="radiusDiv"
            style="padding: 0 0 0 20px"
          >
            <i class="iconfont iradius ileftT iconyuanjiaozuoshang"></i>
            <el-input
              v-model.number="styleKeys.radiusTop"
              type="number"
              :min="0"
              :max="50"
            ></el-input>
          </div>
          <div
            class="radiusDiv"
            style="padding: 0 20px 0 0"
          >
            <i class="iconfont iradius irightT iconyuanjiaoyoushang"></i>
            <el-input
              v-model.number="styleKeys.radiusRight"
              type="number"
              :min="0"
              :max="50"
            ></el-input>
          </div>
          <div
            class="radiusDiv"
            style="padding: 0 0 0 20px"
          >
            <i class="iconfont iradius ileftB iconyuanjiaozuoxia"></i>
            <el-input
              v-model.number="styleKeys.radiusLeft"
              type="number"
              :min="0"
              :max="50"
            ></el-input>
          </div>
          <div
            class="radiusDiv"
            style="padding: 0 20px 0 0"
          >
            <i class="iconfont iradius irightB iconyuanjiaoyouxia"></i>
            <el-input
              v-model.number="styleKeys.radiusBottom"
              type="number"
              :min="0"
              :max="50"
            ></el-input>
          </div>
        </div>
      </div>
      <div
        class="boxShadow"
        v-else-if="key == 'boxShadow'"
        style="width: 172px;height: 62px"
      >
        <el-radio
          @change="changeStyle()"
          v-model="styleKeys[key]"
          label="default"
          style="margin-right: 38px"
        >外阴影</el-radio>
        <el-radio
          @change="changeStyle()"
          v-if="styleKeys.type !== 'i-img' "
          v-model="styleKeys[key]"
          label="inset"
          style="margin:0"
        >内阴影</el-radio>
        <div
          class="shadowDiv"
          style="top:35px"
        >
          <template v-if="styleKeys[key] === 'default'">
            <el-tooltip
              content="外阴影颜色"
              placement="top"
            >
              <div style="height: 32px; margin-right: 6px">
                <el-color-picker
                  v-model="styleKeys.shadowC"
                  @change="changeStyle()"
                ></el-color-picker>
              </div>
            </el-tooltip>
            <el-tooltip
              content="X偏移"
              placement="top"
            >
              <div class="radius">
                <el-input-number
                  :min="-30"
                  :max="30"
                  style="width: 50px; margin: 2px"
                  size="mini"
                  controls-position="right"
                  @change="changeStyle()"
                  v-model="styleKeys.shadowX"
                ></el-input-number>
              </div>
            </el-tooltip>
            <el-tooltip
              content="Y偏移"
              placement="top"
            >
              <div class="radius">
                <el-input-number
                  :min="-30"
                  :max="30"
                  style="width: 50px; margin: 2px"
                  size="mini"
                  controls-position="right"
                  @change="changeStyle()"
                  v-model="styleKeys.shadowY"
                ></el-input-number>
              </div>
            </el-tooltip>
            <el-tooltip
              content="模糊"
              placement="top"
            >
              <div class="radius">
                <el-input-number
                  :min="0"
                  style="width: 50px; margin: 2px"
                  size="mini"
                  controls-position="right"
                  @change="changeStyle()"
                  v-model="styleKeys.shadowW"
                ></el-input-number>
              </div>
            </el-tooltip>
          </template>
          <template v-else-if="styleKeys[key] === 'inset'">
            <el-tooltip
              content="内阴影颜色"
              placement="top"
            >
              <div style="height: 32px; margin-right: 6px">
                <el-color-picker
                  v-model="styleKeys.insetShadowC"
                  @change="changeStyle()"
                ></el-color-picker>
              </div>
            </el-tooltip>
            <el-tooltip
              content="X偏移"
              placement="top"
            >
              <div class="radius">
                <el-input-number
                  :min="-30"
                  :max="30"
                  style="width: 50px; margin: 2px"
                  size="mini"
                  controls-position="right"
                  @change="changeStyle()"
                  v-model="styleKeys.insetShadowX"
                ></el-input-number>
              </div>
            </el-tooltip>
            <el-tooltip
              content="Y偏移"
              placement="top"
            >
              <div class="radius">
                <el-input-number
                  :min="-30"
                  :max="30"
                  style="width: 50px; margin: 2px"
                  size="mini"
                  controls-position="right"
                  @change="changeStyle()"
                  v-model="styleKeys.insetShadowY"
                ></el-input-number>
              </div>
            </el-tooltip>
            <el-tooltip
              content="模糊"
              placement="top"
            >
              <div class="radius">
                <el-input-number
                  :min="0"
                  style="width: 50px; margin: 2px"
                  size="mini"
                  controls-position="right"
                  @change="changeStyle()"
                  v-model="styleKeys.insetShadowW"
                ></el-input-number>
              </div>
            </el-tooltip>
          </template>
        </div>
      </div>
      <div
        class="openTypeBox"
        v-else-if="key === 'openType'"
      >
        <div>打开方式：</div>
        <el-radio-group
          v-model="styleKeys[key]"
          @change="changeStyle()"
        >
          <el-radio-button label="blank">新页面</el-radio-button>
          <el-radio-button label="self">当前页面</el-radio-button>
          <el-radio-button label="popup">弹窗页面</el-radio-button>
          <el-radio-button label="close">关闭页面</el-radio-button>
        </el-radio-group>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: ['curComponent', 'styleKeys', 'id', 'isIgroup'],
  data () {
    return {
      isShow: true,
      excludes: ['Picture', 'Group'], // 这些组件不显示内容
      borderShowOptions: ['上', '下', '左', '右'],
      borderStyleOptions: [
        {
          label: '————',
          value: 'solid'
        },
        {
          label: '黑体',
          value: 'dashed'
        },
        {
          label: '黑体',
          value: 'dotted'
        },
        {
          label: '黑体',
          value: 'double'
        }
      ],
      fontFamilyOptions: [
        {
          label: '黑体',
          value: 'SimHei'
        },
        {
          label: '仿宋',
          value: 'FangSong'
        },
        {
          label: '楷体',
          value: 'KaiTi'
        }
      ],
      map: {
        left: '左右调整',
        top: '上下调整',
        height: '默认高度',
        width: '默认宽度',
        fontFamily: '',
        fontSize: '',
        color: '文字颜色',
        backgroundColor: '背景颜色',
        textAlign: '',
        fontStyle: '',
        lineHeight: '行间距',
        letterSpacing: '字间距',
        fontWeight: '字体粗细',
        borderWidth: '',
        borderColor: '',
        writing: '',
        opacity: '透明度',
        transform: '旋转',
        borderRadius: '圆角',
        boxShadow: '阴影',
        openType: ''
      }
    }
  },
  methods: {
    changeStyle () {
      if (this.isIgroup) {
        const module = this.curComponent.propValue.find(item => item.id === this.styleKeys.id)
        this.$store.commit('moduleData/updModuleLs', {
          module: {
            ...module,
            styles: {
              ...module.styles,
              ...this.styleKeys
            }
          },
          pid: this.id,
          cid: this.styleKeys.id
        })
      } else {
        this.$store.commit('componentData/updComponent', {
          component: this.curComponent,
          id: this.id
        })
      }
    },
    changeWritingMode () {
      this.styleKeys.writingMode = !this.styleKeys.writingMode
      return this.changeStyle()
    }
  }
}
</script>

<style lang="scss">
.title {
  line-height: 32px;
  .el-input {
    flex: 1;
  }
}
.borderStyle,
.textAlign,
.fontStyle,
.borderRadius,
.boxShadow,
.openType {
  clear: both;
}
.borderDiv {
  margin-top: 15px;
}
.borderStyle {
  .el-input__icon {
    width: 14px;
  }
  .el-input--small .el-input__inner {
    padding: 0 18px 0 5px;
  }
}
.showDiv,
.shadowDiv {
  position: absolute;
  right: 0;
  top: 5px;
  width: 240px;
  height: 32px;
  border-radius: 5px;
  background: #f7f8fa;
  display: inline-flex;
  justify-content: space-evenly;
  .el-color-picker__trigger {
    width: 28px !important;
    height: 28px !important;
    margin: 2px !important;
  }
  .el-checkbox {
    margin: 0 20px 0 0px;
  }
  .top {
    .el-checkbox__inner {
      border-top: 2px solid !important;
    }
  }
  .left {
    .el-checkbox__inner {
      border-left: 2px solid !important;
    }
  }
  .bottom {
    .el-checkbox__inner {
      border-bottom: 2px solid !important;
    }
  }
  .right {
    .el-checkbox__inner {
      border-right: 2px solid !important;
    }
  }
  .el-checkbox__inner {
    width: 18px;
    height: 18px;
  }
  .el-checkbox__inner::after {
    top: 2px;
    left: 6px;
  }
  .el-input-number--mini {
    right: 0;
    .el-input--mini .el-input__inner {
      height: 24px;
      line-height: 24px;
    }
    .el-input-number__decrease,
    .el-input-number__increase {
      width: 20px !important;
      height: 11px !important;
    }
    .el-input-number__decrease {
      bottom: 3px !important;
      line-height: 13px !important;
    }
    .el-input-number__increase {
      top: 3px !important;
      line-height: 10px !important;
    }
    .el-input__inner {
      padding-left: 4px !important;
      padding-right: 24px !important;
    }
  }
}
.sideBox {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 172px;
  margin-top: 8px;
  overflow: hidden;
  transition: all 0.2s;
  .el-input {
    width: auto;
  }
  .radiusDiv {
    line-height: 18px;
    width: 60px;
    height: 24px;
    text-align: center;
    padding: 0 0 0 20px;
    border-radius: 4px;
    background-color: #f6f7fc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    position: relative;
    .iradius {
      font-size: 24px;
      color: rgb(64, 158, 255);
      position: absolute;
    }
    .ileftT {
      top: 6px;
      left: 5px;
    }
    .ileftB {
      bottom: 6px;
      left: 5px;
    }
    .irightT {
      top: 6px;
      right: 5px;
    }
    .irightB {
      bottom: 6px;
      right: 5px;
    }
  }
  .el-input--small .el-input__inner {
    line-height: 24px;
    width: 60px;
    height: 24px;
    text-align: center;
    padding: 0;
    border-radius: 0;
    border: 0;
    background-color: #f6f7fc;
  }
  .borderBottom {
    .el-input__prefix {
      top: 0px;
      left: 12px;
    }
  }
  .borderTop {
    .el-input__prefix {
      top: 5px;
      left: 12px;
    }
  }
  .borderRight {
    .el-input__prefix {
      text-align: right;
      right: 6px;
    }
  }
}
.attr-box {
  height: 100%;
  right: 0;
  display: flex;
  overflow: hidden;
  color: #333;
  transition: all 0.3s;
  .attr-center {
    position: relative;
    .attr-arrow {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      box-shadow: inset -3px 0 4px -4px rgba(33, 36, 51, 0.2);
      .attr-div {
        display: flex;
        width: 16px;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 6px 0 0 6px;
        box-shadow: -0 0 4px 0 rgba(33, 36, 51, 0.1);
        position: absolute;
        left: 2px;
        cursor: pointer;
      }
    }
    .attr-list {
      position: absolute;
      width: 240px;
      height: 100%;
      top: 0;
      left: 18px;
      background: #fff;
      overflow: hidden;
      font-size: 14px;
      padding: 0 18px;
      .el-form-item__label {
        min-width: 68px;
        text-align: left;
      }

      .el-form-item--small {
        display: inline-flex;
        margin: 12px 0 0;
        float: left;
        .el-form-item__content {
          float: right;
        }
        .slider {
          .el-slider__input {
            width: auto;
            display: inline-block;
          }
          .el-slider__input.el-input-number--small {
            margin-top: 0;
          }
          .el-input-number.is-without-controls .el-input__inner {
            width: 40px;
            padding: 0 4px;
          }
          .el-slider__runway {
            width: 122px;
            height: 4px;
            margin: 11px 50px 0 0;
          }
          .el-slider__button {
            width: 8px;
            height: 8px;
          }
          .el-slider__button-wrapper {
            top: -16px;
          }
          .el-slider__bar {
            height: 4px;
          }
        }
        .radius,
        .border {
          transition: all 0.2s;
          .el-input-number--small {
            width: 60px;
          }
          .el-input-number.is-controls-right .el-input__inner {
            padding-left: 5px;
            padding-right: 28px;
          }
          .el-input-number--small .el-input-number__decrease,
          .el-input-number--small .el-input-number__increase {
            width: 22px;
          }
          .el-radio--small.is-bordered {
            margin: 0 0 0 22px;
            padding: 6px 5px 0 10px;
          }
          .el-radio__inner {
            display: none;
          }
          .el-radio--small.is-bordered {
            padding: 2px;
          }
          .el-radio__label {
            padding: 0;
          }
        }
        .radius {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .el-color-picker--small .el-color-picker__trigger {
          height: 32px;
          width: 32px;
          padding: 2px;
        }
        .el-radio-button--small .el-radio-button__inner,
        .el-checkbox-button--small .el-checkbox-button__inner {
          padding: 6px 20px;
          font-size: 18px;
        }
        .bgC {
          .el-checkbox-button__inner {
            color: #333;
            border-color: #dcdfe6;
            background: #fff;
            border-radius: 4px 0 0 4px;
          }
        }
        .bgC > .el-checkbox-button__inner:hover {
          color: #409eff;
          background: #fff;
        }
      }
      .openTypeBox {
        .el-radio-button--small .el-radio-button__inner,
        .el-checkbox-button--small .el-checkbox-button__inner {
          padding: 8px 6px;
          font-size: 12px;
        }
      }
    }
  }
  .mt15 {
    margin-top: 15px;
  }
  .mt30 {
    margin-top: 30px;
  }
}
</style>
