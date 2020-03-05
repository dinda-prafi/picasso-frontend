<template>
  <div class="form-divisi">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="16">
        <el-form
          ref="formJabatan"
          :model="formJabatan"
          :rules="jabatanRules"
          :status-icon="true"
          label-width="210px"
          label-position="left"
        >
          <el-form-item label="Parent Divisi" class="divisiForm">
            <el-select v-model="formJabatan.satuan_kerja_id" placeholder="Pilih Parent Divisi">
              <el-option
                v-for="item in listDivisi"
                :key="item.id"
                :label="item.name_satuan_kerja"
                :value="item.id"
              >
                <span>{{ item.name_satuan_kerja }}</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Nama Divisi" prop="name_jabatan" class="divisiForm">
            <el-input v-model="formJabatan.name_jabatan" type="text" />
          </el-form-item>
          <el-form-item label="Deskripsi" class="divisiForm">
            <el-input v-model="formJabatan.description" type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button type="success" class="btn" @click="handleSave">Save</el-button>
            <el-button type="danger" class="btn" @click="handleCancel">Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  fetchListDivisi
} from '@/api/divisi'

import {
  detailJabatan,
  createJabatan,
  updateJabatan
} from '@/api/jabatan'

export default {
  name: 'FormJabatan',
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateNama = (rule, value, callback) => {
      if (!value.length > 0) {
        callback(new Error('Nama jabatan tidak boleh kosong!'))
      } else {
        if (value.length < 3) {
          callback(new Error('Nama jabatan minimal 3 karakter!'))
        }
        callback()
      }
    }
    return {
      listDivisi: null,
      formJabatan: {
        satuan_kerja_id: '',
        name_jabatan: '',
        description: ''
      },
      jabatanRules: {
        name_jabatan: [
          {
            required: true,
            message: 'Bidang ini tidak boleh kosong',
            trigger: 'blur'
          },
          {
            min: 3,
            trigger: 'blur',
            validator: validateNama
          }
        ]
      }
    }
  },
  mounted() {
    this.getNamaDivisi()
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.getDetail(id)
    }
  },
  methods: {
    async getNamaDivisi() {
      const response = await fetchListDivisi()
      this.listDivisi = response.results
    },
    async handleSave() {
      const valid = await this.$refs.formJabatan.validate()
      if (valid) {
        if (this.isEdit) {
          const id = this.$route.params && this.$route.params.id
          await updateJabatan(id, this.formJabatan)
        } else {
          await createJabatan(this.formJabatan)
        }
        this.$message.success('Data Jabatan Berhasil dimasukkan')
        this.$router.push('/divisi')
      } else {
        this.$message.error('Data Jabatan Gagal dimasukkan')
      }
      return true
    },
    async getDetail(id) {
      const response = await detailJabatan(id)
      Object.assign(this.formJabatan, response.results)
    },
    handleCancel() {
      this.$router.push('/jabatan')
    }
  }
}
</script>
