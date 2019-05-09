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
          <el-button type="text">编辑</el-button>
          <router-link :to="{path:`table/detail/${scope.row.id}`}">
            <el-button type="text">查看</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table';

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
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
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
