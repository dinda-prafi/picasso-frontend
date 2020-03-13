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
    url: '/user/',
    method: 'GET',
    params
  })
}

export function createUser(data) {
  return request({
    url: '/user/',
    method: 'POST',
    data
  })
}

export function uploadImage(data) {
  return request({
    url: 'https://jsonplaceholder.typicode.com/posts/',
    method: 'POST',
    data
  })
}

export function updateUser(id, data) {
  return request({
    url: `/user/${id}`,
    method: 'PUT',
    data
  })
}

export function detailUser(id) {
  return request({
    url: `/user/${id}`,
    method: 'GET'
  })
}

export function removeUser(id) {
  return request({
    url: `/user/${id}`,
    method: 'DELETE'
  })
}

export function getInfo() {
  return request({
    url: '/user/',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
