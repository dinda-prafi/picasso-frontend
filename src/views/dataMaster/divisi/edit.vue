<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="title">Edit Divisi
        </h2>
      </el-col>
    </el-row>
    <div class="filter-container">
      <el-form :model="editDivisi" style="margin: 50px" label-width="150px" label-position="left" class="editDivisi">
        <el-form-item style="margin-bottom: 40px" label="Parent Divisi" prop="parent">
          <el-select v-model="editDivisi.parent" style="width:40%" placeholder="Pilih Parent Divisi">
            <el-option label="Parent 1" />
            <el-option label="Parent 2" />
          </el-select>
        </el-form-item>
        <el-form-item style="margin-bottom: 40px" label="Nama Divisi" prop="nama">
          <el-input v-model="editDivisi.nama" style="width:80%" />
        </el-form-item>
        <el-form-item style="margin-bottom: 40px" label="Deskripsi" prop="desc">
          <el-input v-model="editDivisi.desc" style="width:80%" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="handleSave">Save</el-button>
          <el-button type="danger" @click="handleCancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import fetchListDivisi from '@/api/divisi'

export default {
  name: 'Edit',
  data() {
    return {
      editDivisi: []
    }
  },
  methods: {
    async getDetailDivisi() {
      const response = await fetchListDivisi()
      this.editDivisi = response.data.items
    },
    handleSave() {
    },
    handleCancel() {
      this.$router.push('/divisi')
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
</style>
