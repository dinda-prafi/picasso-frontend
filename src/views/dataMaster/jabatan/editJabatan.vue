<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="title">Edit Jabatan
        </h2>
      </el-col>
    </el-row>
    <FormJabatan :is-edit="true" />
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
