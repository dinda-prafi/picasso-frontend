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
      class="table-jabatan"
      :data="listJabatan"
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
        label="Nama Jabatan"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.nama_jabatan }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="Nama Divisi"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.satuan_kerja_id }}</span>
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
            @click="handleEdit(scope)"
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
// import fetchListJabatan from '@/api/jabatan'
import Search from '@/components/Search'
import { mapGetters } from 'vuex'

export default {
  name: 'ListJabatan',
  components: {
    Search
  },
  data() {
    return {
      // listJabatan: null,
      listQuery: {
        search: ''
      }
    }
  },
  computed: {
    ...mapGetters(['listJabatan'])
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
    await this.$store.dispatch('jabatan/getListJab', this.listQuery)
    // this.getListJabatan()
  },
  methods: {
    // async getListJabatan() {
    //   const response = await fetchListJabatan()
    //   this.listJabatan = response.data.items
    // },
    handleEdit() {
      this.$router.push('/editJabatan')
    },
    handleDelete() {
    },
    handleView() {
      this.$router.push('/detailJabatan')
    },
    handleFilter() {
    },
    handleCreate() {
      this.$router.push('/formJabatan')
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
.table-jabatan {
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
