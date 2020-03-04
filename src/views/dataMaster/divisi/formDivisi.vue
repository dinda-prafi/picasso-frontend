<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="title">Tambah Divisi
        </h2>
      </el-col>
    </el-row>
    <FormDivisi :is-edit="false" />
  </div>
</template>

<script>
import FormDivisi from './Form/index'

export default {
  name: 'CreateDivisi',
  components: {
    FormDivisi
  }
}
</script>

