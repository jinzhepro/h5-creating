
<template>
  <div class="toolsbar">
    <div v-if="type !== 'dialog'">
<!--      <el-button-->
<!--        @click="previous"-->
<!--        size="mini"-->
<!--        :disabled="curCacheData.length <= count"-->
<!--        >上一步</el-button-->
<!--      >-->
<!--      {{ count }}-->
<!--      {{ curCacheData.length }}-->
<!--      <el-button @click="nextStep" size="mini" :disabled="count === 0"-->
<!--        >下一步</el-button-->
<!--      >-->
<!--      <el-button size="mini">重做</el-button>-->
      <el-button size="mini" @click="preview">预览</el-button>
<!--      <el-button size="mini">清空画布</el-button>-->
<!--      <el-button size="mini" @click="group">组合</el-button>-->
<!--      <el-button size="mini">拆分</el-button>-->
<!--      <el-button size="mini">锁定</el-button>-->
<!--      <el-button size="mini">解锁</el-button>-->
    </div>
<!--    <div class="canvas-config">-->
<!--      <span>画布大小</span>-->
<!--      <input disabled v-model="canvasStyleData.width" />-->
<!--      <span>*</span>-->
<!--      <input v-model="canvasStyleData.height" />-->
<!--    </div>-->
    <div style="flex: 1"></div>
    <el-button
      size="mini"
      type="primary"
      @click="$route.path.indexOf(['dialog']) > -1 ? dialogSave() : save()"
      >保存</el-button
    >
    <el-button size="mini" type="danger">退出</el-button>
    <Preview v-model="isShowPreview" @change="handlePreviewChange" />
    <el-dialog :visible.sync="dialogShow" title="完善信息">
      <el-form size="mini">
        <el-form-item label="页面名称">
          <el-input style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="页面备注">
          <el-input style="width: 200px"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['type'],
  computed: {
    ...mapGetters([
      'componentLs',
      'area',
      'canvasStyleData',
      'count',
      'curCacheData'
    ])
  },
  data () {
    return {
      nid: '',
      isShowPreview: false
    }
  },
  created () {
    this.$bus.$on('nid', (nid) => {
      this.nid = nid
    })
  },
  methods: {
    group () {},
    dialogSave () {
      this.dialogShow = true
    },
    save () {
      const component = {
        type: 'i-group',
        label: '',
        id: new Date().getTime(),
        attr: this.componentLs.map((item) => {
          if (item.type === 'i-group') {
            return {
              ...item.attr,
              type: item.type,
              id: item.id,
              child: item.propValue.map((n) => {
                return {
                  ...n.attr,
                  type: n.type,
                  value: n.propValue,
                  id: n.id
                }
              })
            }
          }
          return {
            ...item.attr,
            type: item.type,
            value: item.propValue,
            id: item.id
          }
        }),
        propValue: this.componentLs.map((item) => {
          return {
            ...item,
            styles: {
              ...item.styles,
              top: item.styles.top - this.area.top - 1,
              left: item.styles.left - this.area.left - 1
            }
          }
        }),
        styles: {
          ...this.area,
          top: 0,
          left: 0,
          height: this.canvasStyleData.height
        }
      }
      this.$store.commit('componentData/saveArea')
      this.$prompt('', '请输入组件名称').then(({ value }) => {
        component.label = value
        this.$store.commit('moduleData/addCustomModules', component)
        this.$store.commit('componentData/clearList')
        this.$store.commit('componentData/setCurComponent', { component: {} })
        this.$store.commit('componentData/saveArea', 1)
        this.$message.success('添加成功')
      })
    },
    preview () {
      this.isShowPreview = true
      this.$store.commit('componentData/setEditMode', 'preview')
      this.$store.commit('componentData/setCurComponent', { component: {} })
    },
    handlePreviewChange () {
      this.$store.commit('componentData/setEditMode', 'edit')
    },
    previous () {
      this.$store.commit('componentData/updata', this.count + 1)
      this.$bus.$emit('nid', this.nid)
    },
    nextStep () {
      this.$store.commit('componentData/updata', this.count - 1)
      this.$bus.$emit('nid', this.nid)
    }
  }
}
</script>

<style lang="scss" scoped>
.toolsbar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background: #ffffff;
  min-width: 1000px !important;
  input {
    width: 50px;
    margin-left: 10px;
    outline: none;
    padding: 0 5px;
    border: 1px solid #ddd;
    color: #606266;
  }

  span {
    margin-left: 10px;
  }
}
</style>
