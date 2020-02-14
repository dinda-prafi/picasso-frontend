<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="title">Tambah Jabatan
        </h2>
      </el-col>
    </el-row>
    <div class="filter-container">
      <el-form ref="formJabatan" :data="formJabatan" :rules="rules" label-width="150px" label-position="left" class="jabatanForm">
        <el-form-item label="Divisi" prop="satuan_kerja_id" class="jabatanForm">
          <el-select v-model="formJabatan.satuan_kerja_id" placeholder="Pilih Divisi">
            <el-option
              v-for="item in listDivisi"
              :key="item.nama_satuan_kerja"
              :value="item.nama_satuan_kerja"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Nama Jabatan" prop="nama_jabatan" class="jabatanForm">
          <el-input v-model="formJabatan.nama_jabatan" type="text" />
        </el-form-item>
        <el-form-item label="Deskripsi" prop="deskripsi" class="jabatanForm">
          <el-input v-model="formJabatan.deskripsi" type="textarea" />
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
import fetchListDivisi from '@/api/divisi'

export default {
  name: 'FormJabatan',
  data() {
    const validateNama = (rule, value, callback) => {
      if (!this.formJabatan.nama_jabatan.length > 0) {
        callback(new Error('Nama jabatan tidak boleh kosong!'))
      } else {
        if (this.formJabatan.nama_jabatan.length < 3) {
          callback(new Error('Nama jabatan minimal 3 karakter!'))
        }
        callback()
      }
    }
    const validateDeskripsi = (rule, value, callback) => {
      if (!this.formJabatan.deskripsi.length > 0) {
        callback(new Error('Deskripsi tidak boleh kosong!'))
      } else {
        callback()
      }
    }
    return {
      listJabatan: null,
      listDivisi: null,
      formJabatan: {
        nama_jabatan: '',
        satuan_kerja_id: '',
        deskripsi: ''
      },
      rules: {
        satuan_kerja_id: [{ required: true, message: 'Pilih salah satu divisi!', trigger: 'blur' }],
        nama_jabatan: [
          { required: true, trigger: 'blur', validator: validateNama }
          // { min: 3, message: 'Nama jabatan minimal 3 karakter', trigger: 'blur' }
        ],
        deskripsi: [{ required: true, trigger: 'blur', validator: validateDeskripsi }]
      }
    }
  },
  mounted() {
    this.getNamaJabatan()
    this.getNamaDivisi()
  },
  methods: {
    async getNamaJabatan() {
      const response = await fetchListJabatan()
      // console.log(response)
      this.listJabatan = response.data.items
    },
    async getNamaDivisi() {
      const response = await fetchListDivisi()
      // console.log(response)
      this.listDivisi = response.data.items
    },
    handleSave() {
      this.$refs.formJabatan.validate(async valid => {
        if (valid) {
          await createJabatan(this.jabatanForm)
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
.jabatanForm {
  margin: 40px;
  margin-bottom: 40px;
}
.btn {
  margin-left: 40px;
}

</style>
