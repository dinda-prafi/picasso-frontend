<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="tab_title">Tambah Hero
        </h2>
      </el-col>
    </el-row>
    <FormUser :is-edit="false" />
  </div>
</template>

<script>
import FormUser from './components/form/index'

export default {
  name: 'CreateUser',
  components: {
    FormUser
  }
}
</script>

<style>
.tab_title {
  margin-left: 20px;
}
</style>
