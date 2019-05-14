<template>
  <div class="app-container">
    <!-- 表单筛选 -->
    <el-form :model="params" :inline="true">
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
      <el-form-item label>
        <el-button type="primary" @click="queryData">搜索</el-button>
      </el-form-item>
    </el-form>
    <!-- 列表数据展示 -->
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
    >
      <el-table-column align="center" label="活动名称">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="激活码有效期" align="center">
        <template slot-scope="scope">{{ scope.row.expiryDate }}</template>
      </el-table-column>
      <el-table-column label="激活码限免天数" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.days }}</span>
        </template>
      </el-table-column>
      <el-table-column label="激活码总数" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.count }}</template>
      </el-table-column>
      <el-table-column label="已发放激活码数" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.sended }}</template>
      </el-table-column>
      <el-table-column label="已激活激活码数" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.actived }}</template>
      </el-table-column>
      <el-table-column label="激活码状态" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <editDiaolg :data="scope.row">编辑</editDiaolg>
          <router-link :to="{path:`table/detail/${scope.row.id}`}">
            <el-button type="text">查看</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import editDiaolg from './components/dialog'

export default {
  components: { editDiaolg },
  data() {
    return {
      params: {},
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    queryData() {
      this.$store.dispatch('test').then(res => {
        console.log('res:====== ', res)
      })
    }
  }
}
</script>
