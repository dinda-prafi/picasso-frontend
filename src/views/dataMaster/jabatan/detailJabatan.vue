<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="title">Detail Jabatan
        </h2>
      </el-col>
    </el-row>
    <el-table
      class="detailJabatan"
      :data="dataJabatan"
    >
      <el-table-column
        align="left"
        label="No"
        width="300"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="left"
        label="Parent Divisi"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.nama_jabatan }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchListJabatan } from '@/api/jabatan'

export default {
  name: 'DetailJabatan',
  data() {
    return {
      dataJabatan: null
    }
  },
  mounted() {
    this.getDataJabatan()
  },
  methods: {
    async getDataJabatan() {
      const response = await fetchListJabatan()
      this.dataJabatan = response.data.items
    }
  }
}
</script>

<style>
.tab {
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background: #e5e9f2;
}
.title {
  margin-top: 10px;
  margin-left: 20px;
  color: #97a8be;
}
.detailJabatan {
  width: 100%;
  margin-top: 40px;
}
.app-container {
  overflow-x: auto;
  width: 100%;
  margin: auto;
}
.table-jabatan {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
</style>
