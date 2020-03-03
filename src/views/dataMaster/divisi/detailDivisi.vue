<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="title">Detail Divisi
        </h2>
      </el-col>
    </el-row>
    <el-table
      class="detailDivisi"
      :data="dataDivisi"
    >
      <el-table-column
        align="center"
        label="Parent Divisi"
        width="300"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.name_parent }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="Nama Divisi"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.nama_satuan_kerja }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="Deskripsi"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.deskripsi }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import fetchListDivisi from '@/api/divisi'

export default {
  name: 'DetailDivisi',
  data() {
    return {
      dataDivisi: null
    }
  },
  mounted() {
    this.getDataDivisi()
  },
  methods: {
    async getDataDivisi() {
      const response = await fetchListDivisi()
      this.dataDivisi = response.data.items
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
.detailDivisi {
  width: 100%;
  margin-top: 40px;
}
.app-container {
  overflow-x: auto;
  width: 100%;
  margin: auto;
}
.table-divisi {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
</style>
