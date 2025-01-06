import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const MANAGE: AppRouteRecordRaw = {
  path: '/manage',
  name: 'manage',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.manage',
    requiresAuth: true,
    icon: 'icon-exclamation-circle',
    order: 6,
  },
  children: [
    {
      path: 'Post',
      name: 'Post',
      component: () => import('@/views/manage/Post/index.vue'),
      meta: {
        locale: 'menu.manage.Post',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'Interaction',
      name: 'Interaction',
      component: () => import('@/views/manage/Interaction/index.vue'),
      meta: {
        locale: 'menu.manage.Interaction',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'Account',
      name: 'Account',
      component: () => import('@/views/manage/Account/index.vue'),
      meta: {
        locale: 'menu.manage.Account',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default MANAGE;
