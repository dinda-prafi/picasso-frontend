<template>
  <div class="app-container">
    <el-row>
      <el-col class="tab">
        <h2 class="tab_title">Edit Hero
        </h2>
      </el-col>
    </el-row>
    <FormUser :is-edit="true" />
  </div>
</template>

<script>
import FormUser from './components/form/index'

export default {
  name: 'EditUser',
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
