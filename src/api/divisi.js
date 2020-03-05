import request from '@/utils/request'

export function fetchListDivisi(params) {
  return request({
    url: '/satuan-kerja/list',
    method: 'GET',
    params
  })
}

export function createDivisi(data) {
  return request({
    url: '/satuan-kerja/create',
    method: 'POST',
    data
  })
}

export function updateDivisi(id, data) {
  return request({
    url: `/satuan-kerja/update/${id}`,
    method: 'PUT',
    data
  })
}

export function detailDivisi(id) {
  return request({
    url: `/satuan-kerja/detail/${id}`,
    method: 'GET'
  })
}

export function removeDivisi(id) {
  return request({
    url: `/satuan-kerja/delete/${id}`,
    method: 'DELETE'
  })
}
