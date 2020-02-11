/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const dataMasterRouter = {
  path: '/dataMaster',
  component: Layout,
  redirect: 'noRedirect',
  name: 'DataMaster',
  meta: {
    title: 'Data Master',
    icon: 'table',
    roles: ['admin']
  },
  children: [
    {
      path: '/divisi',
      component: () => import('@/views/dataMaster/divisi/list'),
      name: 'Divisi',
      meta: {
        title: 'Divisi'
      }
    },
    {
      path: '/form',
      component: () => import('@/views/dataMaster/divisi/form'),
      name: 'form',
      meta: {
        title: 'Tambah Divisi'
      },
      hidden: true
    },
    {
      path: '/edit',
      component: () => import('@/views/dataMaster/divisi/edit'),
      name: 'edit',
      meta: {
        title: 'Edit Divisi'
      },
      hidden: true
    },
    {
      path: '/detail',
      component: () => import('@/views/dataMaster/divisi/detail'),
      name: 'detail',
      meta: {
        title: 'Detail Divisi'
      },
      hidden: true
    }]
}
export default dataMasterRouter
