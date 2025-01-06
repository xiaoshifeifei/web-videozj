import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useTabBarStore from './modules/tab-bar';
import useNavStore from './modules/nav-bar';

const pinia = createPinia();

export { useAppStore, useUserStore, useTabBarStore, useNavStore };
export default pinia;
