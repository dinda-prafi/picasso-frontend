<template>
  <form>
    <el-input
      v-model="valueSearch.search"
      placeholder="Cari"
      class="filter-item"
      @keyup.enter.native="handleSearch"
    />
  </form>
</template>

<script>
export default {
  name: 'Search',
  props: {
    valueSearch: {
      type: Object,
      default: null
    },
    handleSearch: {
      type: Function,
      default: null
    }
  }
}
</script>
