/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const userRouter = {
  path: '/hero',
  component: Layout,
  redirect: 'noRedirect',
  name: 'DataHero',
  meta: {
    title: 'Data Hero',
    icon: 'table',
    roles: ['admin']
  },
  children: [
    {
      path: '/user',
      component: () => import('@/views/user/listUser'),
      name: 'User',
      meta: {
        title: 'Hero',
        icon: 'user'
      }
    },
    {
      path: '/formUser',
      component: () => import('@/views/user/formUser'),
      name: 'FormUser',
      meta: {
        title: 'Tambah Hero'
      },
      hidden: true
    },
    {
      path: '/editUser/:email',
      component: () => import('@/views/user/editUser'),
      name: 'EditUser',
      meta: {
        title: 'Edit Hero'
      },
      hidden: true
    },
    {
      path: '/detailUser',
      component: () => import('@/views/user/detailUser'),
      name: 'DetailUser',
      meta: {
        title: 'Detail Hero'
      },
      hidden: true
    }
  ]
}
export default userRouter
