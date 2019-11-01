
<template>
  <el-form
    :model="dynamicValidateForm"
    ref="dynamicValidateForm"
    label-width="100px"
    class="demo-dynamic"
  >
    <el-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :label="'域名' + index"
      :key="domain.key"
      :prop="'domains.' + index + '.value'"
      :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
    >
      <el-input v-model="domain.value" class="inline_input"></el-input>
      <el-button @click.prevent="removeDomain(domain)">删除</el-button>
    </el-form-item>
    <el-form-item>
      <el-button @click="addDomain">新增域名</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => {
        return [{ value: "" }];
      }
    }
  },
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ]
      }
    };
  },
  watch: {
    value: {
      // 若父组件的数据发生变动，及时更新，保持tempdata的值与value一致
      handler(val) {
        this.dynamicValidateForm.domains = val;
      },
      immediate: true
    },
    "dynamicValidateForm.domains"(val) {
      // 当tempdata发生变动时，触发‘input’事件向父组件执行对value的修改
      this.$emit("input", val);
    }
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    }
  }
};
</script>
<style scoped>
.inline_input {
  width: 200px;
}
</style>