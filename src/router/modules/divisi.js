/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const divisiRouter = {
  path: '/divisi',
  component: Layout,
  redirect: 'noRedirect',
  meta: {
    title: 'Divisi',
    icon: 'user',
    roles: ['admin']
  },
  children: [
    {
      name: 'divisi-list',
      path: 'divisi-list',
      component: () => import('@/views/dataMaster/divisi/list'),
      meta: {
        title: 'Divisi'
      }
    }
  ]
}

export default divisiRouter
