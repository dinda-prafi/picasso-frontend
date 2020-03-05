<template>
  <div class="form-user">
    <el-row :gutter="20">
      <el-col :xs="24">
        <el-form
          ref="formUser"
          :model="formUser"
          :status-icon="true"
          label-width="130px"
          label-position="left"
        >
          <el-row>
            <el-col :span="6">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon" />
              </el-upload>
            </el-col>
            <el-col :span="18">
              <el-form-item label="NIK" class="userForm">
                <el-input v-model="formUser.nik" type="text" />
              </el-form-item>
              <el-form-item label="Nama" class="userForm">
                <el-input v-model="formUser.nama_lengkap" type="text" />
              </el-form-item>
              <el-form-item label="Role" class="userForm">
                <el-select placeholder="Pilih Role">
                  <el-option label="" />
                </el-select>
              </el-form-item>
              <el-form-item label="Tanggal" class="userForm">
                <el-date-picker
                  v-model="formUser.date"
                  type="date"
                />
              </el-form-item>
              <el-form-item label="Divisi" class="userForm">
                <el-select placeholder="Pilih Divisi">
                  <el-option
                    v-for="item in listDivisi"
                    :key="item.id"
                    :label="item.name_satuan_kerja"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col class="tab">
              <h2 class="title">Personal Data
              </h2>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="Tempat Lahir" class="userForm">
                <el-input v-model="formUser.tempat_lahir" type="text" class="fieldForm" />
              </el-form-item>
              <el-form-item label="Tanggal Lahir" class="userForm">
                <el-date-picker
                  v-model="formUser.tanggal_lahir"
                  type="date"
                />
              </el-form-item>
              <el-form-item label="Gender" class="userForm">
                <el-radio-group v-model="formUser.gender">
                  <el-radio label="Laki-laki" />
                  <el-radio label="Perempuan" />
                </el-radio-group>
              </el-form-item>
              <el-form-item label="Status" class="userForm">
                <el-radio-group v-model="formUser.status">
                  <el-radio label="Belum Menikah" />
                  <el-radio label="Menikah" />
                </el-radio-group>
              </el-form-item>
              <el-form-item label="Jumlah Anak" class="userForm">
                <el-input v-model="formUser.jumlah_anak" type="text" class="fieldForm" />
              </el-form-item>
              <el-form-item label="No Hp Aktif" class="userForm">
                <el-input v-model="formUser.no_ho_aktif" type="text" class="fieldForm" />
              </el-form-item>
              <el-form-item label="Email" class="userForm">
                <el-input v-model="formUser.email" type="text" class="fieldForm" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Agama" class="userForm">
                <el-select placeholder="Pilih Agama">
                  <el-option label="" />
                </el-select>
              </el-form-item>
              <el-form-item label="Golongan Darah" class="userForm">
                <el-select placeholder="Pilih Golongan Darah">
                  <el-option label="" />
                </el-select>
              </el-form-item>
              <el-form-item label="Alamat Lengkap" class="userForm">
                <el-select placeholder="Pilih Provinsi" class="fieldAlamat">
                  <el-option label="" />
                </el-select>
                <el-select placeholder="Pilih Kota/Kab">
                  <el-option label="" />
                </el-select>
                <el-select placeholder="Pilih Kecamatan">
                  <el-option label="" />
                </el-select>
                <el-select placeholder="Pilih Kelurahan">
                  <el-option label="" />
                </el-select>
                <el-input placeholder="Alamat Lengkap" type="textarea" />
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

export default {
  name: 'FormUser',
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      listDivisi: null,
      formUser: {
        email: '',
        nama_lengkap: '',
        username: ''
      },
      imageUrl: ''
    }
  },
  mounted() {
    this.getNamaDivisi()
  },
  methods: {
    async getNamaDivisi() {
      const response = await fetchListDivisi()
      this.listDivisi = response.results
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    },
    handleSave() {

    },
    handleCancel() {
      this.$router.push('/hero')
    }
  }
}
</script>

<style>
.fieldForm {
  width: 80%;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
