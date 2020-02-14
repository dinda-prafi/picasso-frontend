import request from '@/utils/request'

export default function fetchListJabatan(params) {
  return request({
    url: '/mock/jabatan/',
    method: 'get',
    params
  })
}

export function createJabatan(data) {
  return request({
    url: '/mock/jabatan/',
    method: 'post',
    data
  })
}
