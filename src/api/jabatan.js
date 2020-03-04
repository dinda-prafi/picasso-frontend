import request from '@/utils/request'

export function fetchListJabatan(params) {
  return request({
    url: '/jabatan/list',
    method: 'GET',
    params
  })
}

export function createJabatan(data) {
  return request({
    url: '/jabatan/create',
    method: 'POST',
    data
  })
}

export function updateJabatan(id, data) {
  return request({
    url: `/jabatan/update/${id}`,
    method: 'PUT',
    data
  })
}

export function detailJabatan(id) {
  return request({
    url: `/jabatan/detail/${id}`,
    method: 'GET'
  })
}

export function removeJabatan(id) {
  return request({
    url: `/jabatan/delete/${id}`,
    method: 'DELETE'
  })
}
