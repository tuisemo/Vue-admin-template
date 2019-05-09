<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="激活码ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="激活码有效期" align="center">
        <template slot-scope="scope">
          {{ scope.row.expiryDate }}
        </template>
      </el-table-column>
      <el-table-column label="是否已激活" width="150" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="激活时间" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.activeDate }}
        </template>
      </el-table-column>
      <el-table-column label="生成时间" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.createDate }}
        </template>
      </el-table-column>
      <el-table-column label="发放账号" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.account }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <el-button type="text">复制激活码</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getDetailList } from '@/api/table'

export default {
  data() {
    return {
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
      getDetailList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
