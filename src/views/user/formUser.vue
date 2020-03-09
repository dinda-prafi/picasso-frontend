<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="tab_title">Tambah Hero
        </h2>
      </el-col>
    </el-row>
    <FormUser />
  </div>
</template>

<script>
import FormUser from './Form/index'

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
