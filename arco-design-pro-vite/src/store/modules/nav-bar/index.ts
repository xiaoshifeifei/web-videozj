import { defineStore } from 'pinia';
import {
  login as userLogin,
  logout as userLogout,
  getUserInfo,
  LoginData,
} from '@/api/user';
import { setToken, clearToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';
import { UserState } from './types';
import useAppStore from '../app';

const useNavStore = defineStore('navBar', {
  state: (): UserState => ({
    myRouter: sessionStorage.getItem("myRouter") || undefined,
  }),


  actions: {
    setRouter(myRouter: string) {
      this.myRouter = myRouter
    },
  },
});

export default useNavStore;
