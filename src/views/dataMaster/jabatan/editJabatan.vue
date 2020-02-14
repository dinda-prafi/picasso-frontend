<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="title">Edit Jabatan
        </h2>
      </el-col>
    </el-row>
    <div class="filter-container">
      <el-form ref="editJabatan" :data="editJabatan" :rules="rules" style="margin: 50px" label-width="150px" label-position="left" class="editJabatan">
        <el-form-item label="Divisi" class="editJabatan">
          <el-select v-model="editJabatan.satuan_kerja_id" placeholder="Pilih Divisi">
            <el-option
              v-for="item in listJabatan"
              :key="item.id"
              :value="item.satuan_kerja_id"
            >
              <span>{{ item.satuan_kerja_id }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Nama Jabatan" prop="nama_jabatan" class="editJabatan">
          <el-input v-model="editJabatan.nama_jabatan" type="text" />
        </el-form-item>
        <el-form-item label="Deskripsi" prop="deskripsi" class="editJabatan">
          <el-input v-model="editJabatan.deskripsi" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="success" class="btn" @click="handleSave">Save</el-button>
          <el-button type="danger" class="btn" @click="handleCancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { fetchListJabatan, createJabatan } from '@/api/jabatan'
import fetchListJabatan from '@/api/jabatan'
import createJabatan from '@/api/jabatan'

export default {
  name: 'EditJabatan',
  data() {
    const validateNama = (rule, value, callback) => {
      if (!this.editJabatan.nama_jabatan.length > 0) {
        callback(new Error('Nama Jabatan tidak boleh kosong'))
      } else {
        callback()
      }
    }
    const validateDeskripsi = (rule, value, callback) => {
      if (!this.editJabatan.deskripsi.length > 0) {
        callback(new Error('Deskripsi tidak boleh kosong'))
      } else {
        callback()
      }
    }
    return {
      listJabatan: null,
      editJabatan: {
        nama_jabatan: '',
        satuan_kerja_id: '',
        deskripsi: ''
      },
      rules: {
        nama_jabatan: [
          { required: true, trigger: 'blur', validator: validateNama },
          { min: 3, message: 'Nama jabatan minimal 3 karakter', trigger: 'blur' }
        ],
        deskripsi: [{ required: true, trigger: 'blur', validator: validateDeskripsi }]
      }
    }
  },
  mounted() {
    this.getNamaJabatan()
  },
  methods: {
    async getNamaJabatan() {
      const response = await fetchListJabatan()
      // console.log(response)
      this.listJabatan = response.data.items
    },
    handleSave() {
      this.$refs.editJabatan.validate(async valid => {
        if (valid) {
          await createJabatan(this.editJabatan)
          this.$message.success('Data jabatan berhasil dimasukkan')
          this.$route.push('/jabatan')
        } else {
          this.$message.error('Data jabatan gagal dimasukkan')
        }
      })
    },
    handleCancel() {
      this.$router.push('/jabatan')
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
.editJabatan {
  margin: 40px;
  margin-bottom: 40px;
}
.btn {
  margin-left: 40px;
}
</style>
