import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user-login/',
    method: 'post',
    data
  })
}

export function fetchListUser(params) {
  return request({
    url: '/user-list/',
    method: 'GET',
    params
  })
}

export function getInfo() {
  return request({
    url: '/user-list/',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
