import type { Router } from 'vue-router';
import { computed } from 'vue';
import { setRouteEmitter } from '@/utils/route-listener';
import setupUserLoginInfoGuard from './userLoginInfo';
import setupPermissionGuard from './permission';
import { useRouter } from 'vue-router';
const routerGo = useRouter();

function setupPageGuard(router: Router) {
  router.beforeEach(async (to) => {
    if (to.name) {
      let params = to.name
      if (typeof params === 'string') {
        sessionStorage.setItem('myRouter', params);
      }
    }
    setRouteEmitter(to);
  });
}

export default function createRouteGuard(router: Router) {
  setupPageGuard(router);
  setupUserLoginInfoGuard(router);
  setupPermissionGuard(router);
}
