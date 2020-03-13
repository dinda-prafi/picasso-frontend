<template>
  <div class="app-container">
    <el-row class="filter-container">
      <el-col :span="16">
        <p> List User </p>
      </el-col>
      <el-col :span="4" align="right">
        <search
          :value-search="listQuery"
          :handle-search="getListUser"
        />
      </el-col>
      <el-col :span="2" align="center">
        <el-button type="primary" @click="handleFilter">
          Cari
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="handleCreate">
          Tambah
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="listUser" border stripe fit highlight-current-row>
        <el-table-column type="index" width="50" align="center" label="No" :index="getTableRowNumbering" />
        <el-table-column prop="email" label="Email" align="center" min-width="150" />
        <el-table-column prop="username" label="Username" align="center" min-width="150" />
        <el-table-column align="center" label="Actions" min-width="150">
          <template slot-scope="scope">
            <router-link :to="'/editUser/' +scope.row.email">
              <el-button type="white" size="mini" icon="el-icon-edit-outline" />
            </router-link>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="handleDelete(scope.row.email)" />
            <router-link :to="'/detailUser/' +scope.row.email">
              <el-button type="white" size="mini" icon="el-icon-view" />
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getListUser"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { fetchListUser, removeUser } from '@/api/user'
import Search from '@/components/Search'

export default {
  name: 'ListUser',
  components: {
    Pagination,
    Search
  },
  data() {
    return {
      listUser: [],
      total: 0,
      listQuery: {
        search: '',
        page: 1,
        limit: 20
      }
    }
  },
  mounted() {
    this.getListUser()
  },
  methods: {
    async getListUser() {
      const response = await fetchListUser(this.listQuery)
      this.listUser = response.results
    },
    async handleDelete(id) {
      try {
        await removeUser(id)
        await this.$message.success('Data Berhasil Dihapus')
        await this.getListUser()
      } catch (e) {
        this.$message.success('Data Tidak Berhasil Dihapus')
      }
    },
    handleView() {
      this.$router.push('/detailUser')
    },
    handleFilter() {
      this.getListUser()
    },
    handleCreate() {
      this.$router.push('/formUser')
    },
    getTableRowNumbering(index) {
      return ((this.listQuery.page - 1) * this.listQuery.limit) + (index + 1)
    }
  }
}
</script>
