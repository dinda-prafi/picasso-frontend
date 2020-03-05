<template>
  <div class="app-container">
    <div class="filter-container">
      <search
        :value-search="listQuery"
      />
      <el-button class="filter-item" type="primary" @click="handleFilter">
        Cari
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" @click="handleCreate">
        Tambah
      </el-button>
    </div>

    <el-table
      class="table-divisi"
      :data="listDivisi"
      border
    >
      <el-table-column
        align="center"
        label="No"
        width="100"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="Parent Divisi"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.name_parent }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="Nama Divisi"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.nama_satuan_kerja }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="Aksi"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit(scope.row.id)"
          />
          <el-button
            size="mini"
            icon="el-icon-delete"
            @click="handleDelete(scope)"
          />
          <el-button
            size="mini"
            icon="el-icon-view"
            @click="handleView(scope)"
          />
        </template>
      </el-table-column>
    </el-table>

    <!-- <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" /> -->
  </div>
</template>

<script>
// import Pagination from '@/components/Pagination'
// import fetchListDivisi from '@/api/divisi'
import Search from '@/components/Search'
import { mapGetters } from 'vuex'

export default {
  name: 'ListDivisi',
  components: {
    Search
  },
  data() {
    return {
      listQuery: {
        search: ''
      }
    }
  },
  computed: {
    ...mapGetters(['listDivisi'])
  },
  watch: {
    'listQuery.search': {
      handler: function(value) {
        console.log(value)
      },
      immadiate: true
    }
  },
  async mounted() {
    await this.$store.dispatch('divisi/getListDiv', this.listQuery)
  },
  methods: {
    handleEdit(listId) {
      this.$router.push(`/editDivisi/${listId}`)
    },
    handleDelete() {
    },
    handleView() {
      this.$router.push('/detailDivisi')
    },
    handleFilter() {
    },
    handleCreate() {
      this.$router.push('/formDivisi')
    }
  }
}
</script>

<style>
.app-container {
  overflow-x: auto;
  width: 100%;
  margin: auto;
}
.table-divisi {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
.filter-container {
  float: right;
  width: 200px;
}
</style>
