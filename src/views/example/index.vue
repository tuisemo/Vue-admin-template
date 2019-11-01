<!--  -->
<template>
  <div>
    <!-- <el-checkbox-group v-model="checkList"> -->
    <el-checkbox label="复选框 A" v-model="showA"></el-checkbox>
    <el-checkbox label="复选框 B" v-model="showB"></el-checkbox>
    <el-checkbox label="复选框 C" v-model="showC"></el-checkbox>
    <!-- </el-checkbox-group> -->
    <InputItem v-model="stateA" v-if="showA" />
    <InputItem v-model="stateB" v-if="showB" />
    <InputItem v-model="stateC" v-if="showC" />
  </div>
</template>

<script>
import InputItem from "./components/inputItem";
export default {
  components: { InputItem },
  data() {
    return {
      checkList: [],
      showA: false,
      showB: false,
      showC: false,
      stateA: [{ value: "" }],
      stateB: [{ value: "" }],
      stateC: [{ value: "" }]
    };
  }
};
</script>
<style lang='less' scoped>
</style>