<template>
  <div class="form-user">
    <el-row :gutter="20">
      <el-col :xs="24">
        <el-form
          ref="formUser"
          :model="formUser"
          :rules="userRules"
          :status-icon="true"
          label-width="130px"
          label-position="left"
        >
          <el-row>
            <el-col :span="6">
              <div v-if="imageUrl.length">
                <img src="imageUrl">
              </div>
              <div v-else>
                <UploadPicture v-model="formUser.foto" align="center" class="upload" />
              </div>
            </el-col>
            <el-col :span="18">
              <el-form-item label="Email" prop="email">
                <el-input v-model="formUser.email" type="text" class="fieldForm" />
              </el-form-item>
              <el-form-item label="Username" prop="username">
                <el-input v-model="formUser.username" type="text" />
              </el-form-item>
              <el-form-item label="Nama" required>
                <el-col :span="12">
                  <el-form-item prop="first_name">
                    <el-input
                      v-model="formUser.first_name"
                      type="text"
                      placeholder="Nama Depan"
                      class="fieldNama"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="last_name">
                    <el-input
                      v-model="formUser.last_name"
                      type="text"
                      placeholder="Nama Belakang"
                    />
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="Divisi" prop="divisi">
                <el-select v-model="formUser.divisi" placeholder="Pilih Divisi">
                  <el-option
                    v-for="item in listDivisi"
                    :key="item.id"
                    :label="item.name_satuan_kerja"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="Posisi" prop="jabatan">
                <el-select v-model="formUser.jabatan" placeholder="Pilih Jabatan">
                  <el-option
                    v-for="item in listJabatan"
                    :key="item.id"
                    :label="item.name_jabatan"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="Tanggal">
                <el-date-picker
                  type="date"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col class="tab">
              <h2 class="tab_title">Personal Data
              </h2>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="Tempat Lahir" prop="tempat_lahir">
                <el-input v-model="formUser.tempat_lahir" type="text" class="fieldForm" />
              </el-form-item>
              <el-form-item label="Tanggal Lahir">
                <el-date-picker
                  v-model="formUser.tanggal_lahir"
                  type="date"
                />
              </el-form-item>
              <el-form-item label="Gender">
                <el-radio-group>
                  <el-radio label="Laki-laki" />
                  <el-radio label="Perempuan" />
                </el-radio-group>
              </el-form-item>
              <el-form-item label="Status" prop="status_pernikahan">
                <el-radio-group v-model="formUser.status_pernikahan">
                  <el-radio label="Belum Menikah" />
                  <el-radio label="Menikah" />
                </el-radio-group>
              </el-form-item>
              <el-form-item label="Jumlah Anak" prop="jumlah_anak">
                <el-input v-model="formUser.jumlah_anak" type="text" class="fieldForm" />
              </el-form-item>
              <el-form-item label="No Hp Aktif" prop="telephone">
                <el-input v-model="formUser.telephone" type="text" class="fieldForm" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Agama" prop="agama">
                <el-select v-model="formUser.agama" placeholder="Pilih Agama" class="select">
                  <el-option
                    v-for="item in optionAgama"
                    :key="item.valueAgama"
                    :label="item.labelAgama"
                    :value="item.valueAgama"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="Golongan Darah" prop="golongan_darah">
                <el-select v-model="formUser.golongan_darah" placeholder="Pilih Golongan Darah" class="select">
                  <el-option
                    v-for="item in optionGolDar"
                    :key="item.valueGolDar"
                    :label="item.labelGolDar"
                    :value="item.valueGolDar"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="Alamat Lengkap">
                <el-row>
                  <el-col :span="12">
                    <el-select v-model="formUser.provinsi" placeholder="Pilih Provinsi" class="selectAlamat">
                      <!-- <el-option /> -->
                    </el-select>
                    <el-select v-model="formUser.kecamatan" placeholder="Pilih Kecamatan" class="selectAlamat">
                      <!-- <el-option /> -->
                    </el-select>
                  </el-col>
                  <el-col :span="12" align="right">
                    <el-select v-model="formUser.kabupaten" placeholder="Pilih Kota/Kab" class="selectAlamat">
                      <!-- <el-option /> -->
                    </el-select>
                    <el-select v-model="formUser.Kelurahan" placeholder="Pilih Kelurahan" class="selectAlamat">
                      <!-- <el-option /> -->
                    </el-select>
                  </el-col>
                </el-row>
                <el-row>
                  <el-form-item prop="alamat">
                    <el-input v-model="formUser.alamat" placeholder="Alamat Lengkap" type="textarea" />
                  </el-form-item>
                </el-row>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item>
                <el-button type="success" class="btn" @click="handleSave">Save</el-button>
                <el-button type="danger" class="btn" @click="handleCancel">Cancel</el-button>
              </el-form-item>
            </el-col>
          </el-row>
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
  fetchListJabatan
} from '@/api/jabatan'
import {
  createUser,
  updateUser,
  detailUser
} from '@/api/user'
import UploadPicture from './upload'

export default {
  name: 'FormUser',
  components: {
    UploadPicture
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      listDivisi: null,
      listJabatan: null,
      imageUrl: '',
      formUser: {
        email: '',
        username: '',
        first_name: '',
        last_name: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        telephone: '',
        divisi: '',
        jabatan: '',
        status_pernikahan: '',
        jumlah_anak: '',
        agama: '',
        golongan_darah: '',
        provinsi: '',
        kabupaten: '',
        kecamatan: '',
        desa: '',
        alamat: '',
        foto: ''
      },
      userRules: {
        first_name: [{
          required: true,
          message: 'Nama Depan tidak boleh kosong',
          trigger: 'blur'
        }],
        last_name: [{
          required: true,
          message: 'Nama Belakang tidak boleh kosong',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: 'Email tidak boleh kosong',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Masukan email yang valid',
          trigger: ['blur', 'change']
        }]
      },
      optionAgama: [{
        valueAgama: 'Islam',
        labelAgama: 'Islam'
      }, {
        valueAgama: 'Protestan',
        labelAgama: 'Protestan'
      }, {
        valueAgama: 'Katolik',
        labelAgama: 'Katolik'
      }, {
        valueAgama: 'Hindu',
        labelAgama: 'Hindu'
      }, {
        valueAgama: 'Budha',
        labelAgama: 'Budha'
      }, {
        valueAgama: 'Khonghucu',
        labelAgama: 'Khonghucu'
      }],
      valueAgama: '',
      optionGolDar: [{
        valueGolDar: 'A',
        labelGolDar: 'A'
      }, {
        valueGolDar: 'B',
        labelGolDar: 'B'
      }, {
        valueGolDar: 'O',
        labelGolDar: 'O'
      }, {
        valueGolDar: 'AB',
        labelGolDar: 'AB'
      }],
      valueGolDar: ''
    }
  },
  mounted() {
    this.getNamaDivisi()
    this.getNamaJabatan()
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.email
      this.getDetail(id)
    }
  },
  methods: {
    async getNamaDivisi() {
      const response = await fetchListDivisi()
      this.listDivisi = response.results
    },
    async getNamaJabatan() {
      const response = await fetchListJabatan()
      this.listJabatan = response.results
    },
    async handleSave() {
      const valid = await this.$refs.formUser.validate()
      if (valid) {
        if (this.isEdit) {
          const id = this.$route.params && this.$route.params.email
          await updateUser(id, this.formUser)
        } else {
          await createUser(this.formUser)
        }
        // console.log(this.formUser)
        this.$message.success('Data Hero Berhasil dimasukkan')
        this.$router.push('/user')
      } else {
        this.$message.error('Data Hero Gagal dimasukkan')
      }
      return true
    },
    async getDetail(id) {
      const response = await detailUser(id)
      Object.assign(this.formUser, response.results)
    },
    handleCancel() {
      this.$router.push('/user')
    }
  }
}
</script>

<style>
.tab {
  border-radius: 10px;
  background: #D5F5E3;
  margin-bottom: 30px;
}
.tab_title {
  margin-left: 20px;
}
.upload {
  margin-top: 20%;
}
.fieldNama {
  width: 98%;
}
.fieldForm {
  width: 90%;
}
.select {
  width: 48%;
}
.selectAlamat {
  margin-bottom: 20px;
  width: 95%;
}
</style>
