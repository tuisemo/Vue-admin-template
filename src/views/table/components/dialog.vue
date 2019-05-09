<!-- 编辑弹窗 -->
<template>
  <span>
    <el-button type="text" @click="dialogVisible = true"><slot>编辑</slot></el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form :model="params" label-width="120px">
        <el-form-item label="活动名称:">
          <el-input v-model="params.name" placeholder />
        </el-form-item>
        <el-form-item label="激活码有效期:">
          <el-date-picker v-model="params.expiryDate" placeholder />
        </el-form-item>
        <el-form-item label="激活码限免天数:">
          <el-input-number v-model="params.days" controls-position="right" :min="1" :max="30" />
        </el-form-item>
        <el-form-item label="状态:">
          <el-select v-model="params.status" placeholder="活动区域">
            <el-option label="success" value="success" />
            <el-option label="warning" value="warning" />
            <el-option label="danger" value="danger" />
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </span>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      params: {},
      dialogVisible: false
    }
  },
  watch: {
    data: {
      handler(val) {
        this.params = val
      },
      immediate: true
    }
  },

  methods: {}
}
</script>
<style lang='less' scoped>
</style>
