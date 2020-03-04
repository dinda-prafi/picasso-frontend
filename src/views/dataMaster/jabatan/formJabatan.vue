<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="title">Tambah Jabatan
        </h2>
      </el-col>
    </el-row>
    <FormJabatan :is-edit="false" />
  </div>
</template>

<script>
import FormJabatan from './Form/index'

export default {
  name: 'CreateJabatan',
  components: {
    FormJabatan
  }
}
</script>

