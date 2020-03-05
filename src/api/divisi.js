import request from '@/utils/request'

export default function fetchListDivisi(params) {
  return request({
    url: '/mock/satuan-kerja',
    method: 'get',
    params
  })
}

export function createDivisi(data) {
  return request({
    url: '/mock/satuan-kerja/',
    method: 'post',
    data
  })
}

export function updateDivisi(params) {
  return request({
    url: '/satuan-kerja/?listId=${this.$route.params.id}`',
    method: 'put',
    params
  })
}

export function deleteDivisi(params) {
  return request({
    url: '/satuan-kerja/',
    method: 'delete',
    params
  })
}

