<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="title">Edit Divisi
        </h2>
      </el-col>
    </el-row>

    <FormDivisi :is-edit="true" />
  </div>
</template>

<script>
import FormDivisi from './Form/index'

export default {
  name: 'EditDivisi',
  components: {
    FormDivisi
  }
}
</script>
