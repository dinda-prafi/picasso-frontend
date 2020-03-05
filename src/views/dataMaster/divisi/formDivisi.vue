<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="title">Tambah Divisi
        </h2>
      </el-col>
    </el-row>
    <div class="filter-container">
      <el-form ref="formDivisi" :model="formDivisi" :rules="rulesDivisi" label-width="150px" label-position="left" class="divisiForm">
        <el-form-item label="Parent Divisi" prop="name_parent" class="divisiForm">
          <el-select v-model="formDivisi.name_parent" placeholder="Pilih Parent Divisi">
            <el-option
              v-for="item in listDivisi"
              :key="item.id"
              :value="item.nama_satuan_kerja"
            >
              <span>{{ item.nama_satuan_kerja }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Nama Divisi" prop="nama_satuan_kerja" class="divisiForm">
          <el-input v-model="formDivisi.nama_satuan_kerja" type="text" />
        </el-form-item>
        <el-form-item label="Deskripsi" prop="deskripsi" class="divisiForm">
          <el-input v-model="formDivisi.deskripsi" type="textarea" />
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
// import { fetchListDivisi, createDivisi } from '@/api/divisi'
import fetchListDivisi from '@/api/divisi'
import createDivisi from '@/api/divisi'

export default {
  name: 'FormDivisi',
  data() {
    // const validateParent = (rule, value, callback) => {
    //   if (this.formDivisi.name_parent == null) {
    //     callback(new Error('Pilih salah satu parent divisi!'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validateNama = (rule, value, callback) => {
    //   if (!this.formDivisi.nama_satuan_kerja.length > 0) {
    //     callback(new Error('Nama divisi tidak boleh kosong!'))
    //   } else {
    //     if (this.formDivisi.nama_satuan_kerja.length < 3) {
    //       callback(new Error('Nama divisi minimal 3 karakter!'))
    //     }
    //     callback()
    //   }
    // }
    // const validateDeskripsi = (rule, value, callback) => {
    //   if (!this.formDivisi.deskripsi.length > 0) {
    //     callback(new Error('Deskripsi tidak boleh kosong!'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      listDivisi: null,
      formDivisi: {
        name_parent: '',
        nama_satuan_kerja: '',
        deskripsi: ''
      },
      rulesDivisi: {
        name_parent: [{ required: true, message: 'Pilih salah satu parent divisi!', trigger: 'change' }],
        nama_satuan_kerja: [
          { required: true, message: 'Nama divisi tidak boleh kosong!', trigger: 'blur' },
          { min: 3, message: 'Nama divisi minimal 3 karakter!', trigger: 'blur' }
        ],
        deskripsi: [{ required: true, message: 'Deskripsi tidak boleh kosong!', trigger: 'blur' }]
      }
    }
  },
  mounted() {
    this.getNamaDivisi()
  },
  methods: {
    async getNamaDivisi() {
      const response = await fetchListDivisi()
      // console.log(response)
      this.listDivisi = response.data.items
    },
    handleSave() {
      this.$refs.formDivisi.validate(async valid => {
        if (valid) {
          await createDivisi(this.divisiForm)
          this.$message.success('Data Divisi Berhasil dimasukkan')
          this.$route.push('/divisi')
        } else {
          this.$message.error('Data Divisi Gagal dimasukkan')
        }
      })
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
.divisiForm {
  margin: 40px;
  margin-bottom: 40px;
}
.btn {
  margin-left: 40px;
}
</style>
