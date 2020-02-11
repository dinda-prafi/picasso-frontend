import request from '@/utils/request'

export function fetchListDivisi(params) {
  return request({
    url: '/mock/satuan-kerja/',
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
