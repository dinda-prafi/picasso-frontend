<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="title">Tambah Divisi
        </h2>
      </el-col>
    </el-row>
    <div class="filter-container">
      <el-form ref="form" :data="formDivisi" :rules="rules" style="margin: 50px" label-width="150px" label-position="left" class="divisiForm">
        <el-form-item label="Parent Divisi" class="divisiForm">
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
          <el-button type="success" @click="handleSave()">Save</el-button>
          <el-button type="danger" @click="handleCancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import fetchListDivisi from '@/api/divisi'
// import createDivisi from '@/api/divisi'

export default {
  name: 'Form',
  data() {
    // const validateNama = (rule, value, callback) => {
    //   if (value.length < 11) {
    //     callback(new Error('Nama divisi maximal 10 karakter'))
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
      rules: {
        nama_satuan_kerja: [{ required: false, message: 'Nama divisi tidak boleh kosong!', trigger: 'blur' }],
        deskripsi: [{ required: false, message: 'Deskripsi tidak boleh kosong!', trigger: 'blur' }]
      }
    }
  },
  mounted() {
    this.getNamaDivisi()
  },
  methods: {
    async getNamaDivisi() {
      const response = await fetchListDivisi()
      this.listDivisi = response.data.items
    },
    handleSave() {
      // const valid = this.$refs.form.validate()
      // if (!valid) {
      //   return
      // }
      console.log(this.formDivisi)
      //   (valid) => {
      //   if (valid) {
      //     // alert('submit!')
      //     console.log(this.formDivisi)
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
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
  margin-bottom: 40px;
}
</style>
