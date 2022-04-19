/*
 * @Author: jinzhe
 * @Date: 2021-03-18 10:42:24
 * @LastEditors: jinzhe
 * @LastEditTime: 2021-03-25 13:59:07
 */
const routes = [
  {
    path: '/',
    component: () => import('../App.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home')
      },
      {
        path: 'edit',
        component: () => import('../layout/EditLayout.vue'),
        children: [
          {
            path: 'module',
            component: () => import('../views/ModulePage.vue')
          },
          {
            path: 'diy',
            component: () => import('../views/DIYPage.vue')
          },
          {
            path: 'dialog',
            component: () => import('../views/DialogPage.vue')
          },
          {
            path: 'search',
            component: () => import('../views/SearchPage.vue')
          }

        ]

      }
    ]

  },

  {
    path: '/components',
    component: () => import('../layout/HomeLayout.vue'),
    children: [
      {
        path: 'ls',
        component: () => import('../views/ComponentsPage.vue')
      }
    ]
  },
  {
    path: '/edit/system',
    component: () => import('../views/SystemPage.vue')
  },

  {
    path: 'system',
    component: () => import('../views/SystemPage.vue')
  },
  {
    path: '/h5',
    component: () => import('../layout/HomeLayout.vue'),
    children: [
      {
        path: 'ls',
        component: () => import('../views/H5Page.vue')
      }
    ]
  },
  {
    path: '/log',
    component: () => import('../layout/HomeLayout.vue'),
    children: [
      {
        path: 'ls',
        component: () => import('../views/LogPage.vue')
      }
    ]
  },
  {
    path: '/class',
    component: () => import('../layout/HomeLayout.vue'),
    children: [
      {
        path: 'ls',
        component: () => import('../views/Class.vue')
      }
    ]
  },
  {
    path: '/icon-img',
    component: () => import('../layout/HomeLayout.vue'),
    children: [
      {
        path: 'ls',
        component: () => import('../views/IconImg.vue')
      }
    ]
  }
]

export default routes
