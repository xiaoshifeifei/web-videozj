<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <img
          alt="logo"
          src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
        />
        <a-typography-title
          :style="{ margin: 0, fontSize: '18px' }"
          :heading="5"
        >
          飞星
        </a-typography-title>
        <icon-menu-fold
          v-if="!topMenu && appStore.device === 'mobile'"
          style="font-size: 22px; cursor: pointer"
          @click="toggleDrawerMenu"
        />
      </a-space>
    </div>
    <div class="center-side">
      <a-menu
        mode="horizontal"
        @menu-item-click="menuClick"
        :selected-keys="[myParams]"
      >
        <a-menu-item key="Post">内容发布</a-menu-item>
        <a-menu-item key="Interaction">互动管理</a-menu-item>
        <a-menu-item key="Account">账号管理</a-menu-item>
      </a-menu>
    </div>
    <ul class="right-side">
      <!-- <li>
        <a-tooltip :content="$t('settings.search')">
          <a-button class="nav-btn" type="outline" :shape="'circle'">
            <template #icon>
              <icon-search />
            </template>
          </a-button>
        </a-tooltip>
      </li> -->
      <!-- <li>
        <a-tooltip :content="$t('settings.language')">
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="setDropDownVisible"
          >
            <template #icon>
              <icon-language />
            </template>
          </a-button>
        </a-tooltip>
        <a-dropdown trigger="click" @select="changeLocale as any">
          <div ref="triggerBtn" class="trigger-btn"></div>
          <template #content>
            <a-doption
              v-for="item in locales"
              :key="item.value"
              :value="item.value"
            >
              <template #icon>
                <icon-check v-show="item.value === currentLocale" />
              </template>
              {{ item.label }}
            </a-doption>
          </template>
        </a-dropdown>
      </li> -->
      <!-- <li>
        <a-tooltip
          :content="
            theme === 'light'
              ? $t('settings.navbar.theme.toDark')
              : $t('settings.navbar.theme.toLight')
          "
        >
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="handleToggleTheme"
          >
            <template #icon>
              <icon-moon-fill v-if="theme === 'dark'" />
              <icon-sun-fill v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li> -->
      <!-- <li>
        <a-tooltip :content="$t('settings.navbar.alerts')">
          <div class="message-box-trigger">
            <a-badge :count="9" dot>
              <a-button
                class="nav-btn"
                type="outline"
                :shape="'circle'"
                @click="setPopoverVisible"
              >
                <icon-notification />
              </a-button>
            </a-badge>
          </div>
        </a-tooltip>
        <a-popover
          trigger="click"
          :arrow-style="{ display: 'none' }"
          :content-style="{ padding: 0, minWidth: '400px' }"
          content-class="message-popover"
        >
          <div ref="refBtn" class="ref-btn"></div>
          <template #content>
            <message-box />
          </template>
        </a-popover>
      </li> -->
      <!-- <li>
        <a-tooltip
          :content="
            isFullscreen
              ? $t('settings.navbar.screen.toExit')
              : $t('settings.navbar.screen.toFull')
          "
        >
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="toggleFullScreen"
          >
            <template #icon>
              <icon-fullscreen-exit v-if="isFullscreen" />
              <icon-fullscreen v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="$t('settings.title')">
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="setVisible"
          >
            <template #icon>
              <icon-settings />
            </template>
          </a-button>
        </a-tooltip>
      </li> -->
      <li>
        <a-avatar :size="32" :style="{ marginRight: '5px' }">
          <img alt="avatar" src="../../assets/images/default_avatar.jpg" />
        </a-avatar>
      </li>
      <li>
        <a-dropdown
          :popup-max-height="false"
          :hide-on-select="false"
          position="br"
          trigger="click"
          @popup-visible-change="popChange"
        >
          <div class="info"
            ><span>小史菲菲</span>
            <svg
              v-if="params"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              class="arco-icon arco-icon-caret-up right__select"
              stroke-width="4"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              data-v-4c848185=""
              style="font-size: 14px"
            >
              <path
                d="M23.063 13.171a1.2 1.2 0 0 1 1.875 0l13.503 16.88c.628.785.069 1.949-.937 1.949H10.497c-1.006 0-1.565-1.164-.937-1.95l13.503-16.879Z"
                fill="currentColor"
                stroke="none"
              ></path>
            </svg>
            <svg
              v-else
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              class="arco-icon arco-icon-caret-down right__select"
              stroke-width="4"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              data-v-4c848185=""
              style="font-size: 14px"
            >
              <path
                d="M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95L24.937 34.829Z"
                fill="currentColor"
                stroke="none"
              ></path>
            </svg>
          </div>
          <!-- <a-avatar
            :size="32"
            :style="{ marginRight: '8px', cursor: 'pointer' }"
          >
            <img alt="avatar" :src="avatar" />
          </a-avatar> -->

          <template #content>
            <a-doption>
              <div class="userInfo">
                <a-avatar
                  class="a-img"
                  :size="32"
                  :style="{ marginRight: '5px' }"
                >
                  <img
                    alt="avatar"
                    src="../../assets/images/default_avatar.jpg"
                  />
                </a-avatar>
                <div class="infoR">
                  <div class="text-t">哇哇哇哇</div>
                  <div class="text-b">1236547891@qq.com</div>
                </div>
              </div>
            </a-doption>
            <!-- <a-doption>
              <div class="tu-d">
                <div class="td-l">当前团队</div>
                <div class="td-r">青蛙</div>
              </div>
            </a-doption>
            <a-doption>
              <div class="tu-d">
                <div class="td-l">所属企业</div>
                <div class="td-r">青蛙</div>
              </div>
            </a-doption> -->
            <!-- <a-doption>
              <div class="tu-d">
                <div class="td-l">会员等级</div>
                <div class="td-r"
                  ><svg
                    class="tu-svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.1"
                      width="22"
                      height="22"
                      rx="4"
                      fill="#3b74fa"
                    />
                    <path
                      d="M12.6995 6L8.43844 10.6554V6H5.86035V6.0045H5V6.8056H5.86032V15.6564H8.43846L17 6.0045L12.6995 6Z"
                      fill="#3b74fa"
                    />
                  </svg>
                  <span class="span1">升级</span>
                </div>
              </div>
            </a-doption> -->
            <!-- <a-doption>
              <div class="tu-d">
                <div class="td-l">有效期至</div>
                <div class="td-r">2024-12-24 10:00:00</div>
              </div>
            </a-doption> -->
            <a-doption>
              <!-- <a-tooltip :content="$t('settings.language')">
                <a-button
                  class="nav-btn"
                  type="outline"
                  :shape="'circle'"
                  @click="setDropDownVisible"
                >
                  <template #icon>
                    <icon-language />
                  </template>
                </a-button>
              </a-tooltip> -->
              <a-dropdown
                :style="`width: 150px; left: 80% !important; transform: translateY(-40px);`"
                trigger="hover"
                @select="changeLocale as any"
              >
                <div class="lan-btn">语言</div>
                <template #content>
                  <a-doption
                    v-for="item in locales"
                    :key="item.value"
                    :value="item.value"
                  >
                    <template #icon>
                      <icon-check v-show="item.value === currentLocale" />
                    </template>
                    {{ item.label }}
                  </a-doption>
                </template>
              </a-dropdown>
            </a-doption>
            <a-doption>
              <a-space @click="handleLogout">
                <div style="width: 190px">
                  {{ $t('messageBox.logout') }}
                </div>
              </a-space>
            </a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, inject, watch } from 'vue';
import { Message } from '@arco-design/web-vue';
import { useDark, useToggle, useFullscreen } from '@vueuse/core';
import { useAppStore, useUserStore, useNavStore } from '@/store';
import { LOCALE_OPTIONS } from '@/locale';
import useLocale from '@/hooks/locale';
import useUser from '@/hooks/user';
import Menu from '@/components/menu/index.vue';
import MessageBox from '../message-box/index.vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

const myParams = ref();

const appStore = useAppStore();
const userStore = useUserStore();
const navStore = useNavStore();
const { logout } = useUser();
const { changeLocale, currentLocale } = useLocale();
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();
const locales = [...LOCALE_OPTIONS];

const avatar = computed(() => {
  return userStore.avatar;
});
const theme = computed(() => {
  return appStore.theme;
});
const navData = computed(() => {
  return navStore.myRouter;
});

const topMenu = computed(() => appStore.topMenu && appStore.menu);
const isDark = useDark({
  selector: 'body',
  attribute: 'arco-theme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'arco-theme',
  onChanged(dark: boolean) {
    // overridden default behavior
    appStore.toggleTheme(dark);
  },
});
const getData = () => {
  if (
    sessionStorage.getItem('myRouter') &&
    sessionStorage.getItem('myRouter') != 'undefined'
  ) {
    myParams.value = sessionStorage.getItem('myRouter');
  } else {
    myParams.value = 'Post';
  }
};
getData();
const toggleTheme = useToggle(isDark);
const handleToggleTheme = () => {
  toggleTheme();
};
const setVisible = () => {
  appStore.updateSettings({ globalSettings: true });
};
const refBtn = ref();
const params = ref(false);
const triggerBtn = ref();
const setPopoverVisible = () => {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  refBtn.value.dispatchEvent(event);
};
const handleLogout = () => {
  logout();
};
const setDropDownVisible = () => {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  triggerBtn.value.dispatchEvent(event);
};

const menuClick = (event: any) => {
  // 更新用户信息

  if (event) {
    // navStore.setRouter({ myRouter: event });
    sessionStorage.setItem('myRouter', event);
    router.push({
      name: event,
    });
  } else {
    sessionStorage.setItem('myRouter', 'Post');
    router.push({
      name: 'Post',
    });
  }
};
const switchRoles = async () => {
  const res = await userStore.switchRoles();
  Message.success(res as string);
};
const toggleDrawerMenu = inject('toggleDrawerMenu') as () => void;

const popChange = (val: boolean) => {
  if (val) {
    params.value = true;
  } else {
    params.value = false;
  }
};
watch(
  () => route.path, // 监听路由路径
  (newPath) => {
    if (newPath && route.name) {
      sessionStorage.setItem('myRouter', route.name as string);
      setTimeout(() => {
        myParams.value = route.name;
        getData();
      }, 200);
    } else {
      myParams.value = '';
    }
  },
  { deep: true, immediate: true } // 确保首次加载时也执行一次更新
);
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  justify-content: space-between;
  height: 64px;
  background-color: var(--color-bg-2);
  // border-bottom: 1px solid var(--color-border);
}

.left-side {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.center-side {
  flex: 1;
}

.right-side {
  display: flex;
  padding-right: 20px;
  list-style: none;
  :deep(.locale-select) {
    border-radius: 20px;
  }
  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  a {
    color: var(--color-text-1);
    text-decoration: none;
  }
  .nav-btn {
    border-color: rgb(var(--gray-2));
    color: rgb(var(--gray-8));
    font-size: 16px;
  }
  .trigger-btn,
  .ref-btn {
    position: absolute;
    bottom: 14px;
  }
  .trigger-btn {
    margin-left: 14px;
  }
}
.center-side {
  padding-left: 100px;
  cursor: pointer;
  .arco-menu-item {
    font-weight: 700;
    font-size: 14px;
    color: rgb(126, 135, 148) !important;
  }
  .arco-menu-selected {
    color: #333 !important;
    font-weight: 700;
    font-size: 14px;

    :deep(.arco-menu-selected-label) {
      width: 14px !important;
      height: 3px !important;
      bottom: 0 !important;
      margin: auto;
    }
  }
}
.info {
  cursor: pointer;
  span {
    margin-right: 20px;
  }
}
.lan-btn {
  width: 190px;
  display: inline-block;
}
.userInfo {
  width: 170px;
  padding: 0 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;

  .infoR {
    width: calc(100% - 50px);
    height: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .text-t {
      color: #333;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      overflow: hidden; /* 确保超出容器的文本被裁剪 */
      white-space: nowrap; /* 确保文本在一行内显示 */
      text-overflow: ellipsis; /* 使用省略号表示文本超出 */
    }
    .text-b {
      color: #999;
      height: 16px;
      line-height: 16px;
      font-size: 10px;
      overflow: hidden; /* 确保超出容器的文本被裁剪 */
      white-space: nowrap; /* 确保文本在一行内显示 */
      text-overflow: ellipsis; /* 使用省略号表示文本超出 */
    }
  }
}
.tu-d {
  width: 190px;
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  .td-l {
    width: 30%;
    color: #999;
    font-weight: 400;
    font-size: 12px;
  }
  .td-r {
    width: 70%;
    color: #333;
    font-weight: 700;
    font-size: 12px;
    overflow: hidden; /* 确保超出容器的文本被裁剪 */
    white-space: nowrap; /* 确保文本在一行内显示 */
    text-overflow: ellipsis; /* 使用省略号表示文本超出 */
    .tu-svg {
      vertical-align: middle;
      transform: translateY(-2px);
    }
    .span1 {
      color: #3b74fa;
      margin-left: 10px;
    }
  }
}
</style>

<style lang="less">
.message-popover {
  .arco-popover-content {
    margin-top: 0;
  }
}
</style>
