<template>
  <div class="container">
    <div class="top">
      <div class="topBox">
        <div class="box">
          <div class="account">
            <div class="accountTop">发布任务管理</div>
            <div class="accountBottom"> 可以在此发布和管理帖子</div>
          </div>
          <div>
            <a-space>
              <a-button type="primary" class="myBtn">
                <template #icon>
                  <icon-plus />
                </template>
                <template #default>新建发布任务</template>
              </a-button>
              <a-button class="myBtn">
                <template #icon>
                  <icon-more />
                </template>
                <template #default>AI</template>
              </a-button>
            </a-space>
          </div>
        </div>
      </div>
      <div class="contentBox">
        <a-form
          :model="formModel"
          :label-col-props="{ span: 2 }"
          :wrapper-col-props="{ span: 22 }"
          label-align="left"
        >
          <a-row :gutter="1">
            <a-col :span="4">
              <a-form-item field="contentType">
                <a-select
                  v-model="formModel.contentType"
                  :options="contentTypeOptions"
                  placeholder="所有账号"
                  allow-clear
                />
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item field="content">
                <a-select
                  v-model="formModel.content"
                  :options="contentOptions"
                  :style="{ width: '360px' }"
                  placeholder="账号分组"
                  multiple
                  :max-tag-count="2"
                  allow-clear
                >
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item field="name">
                <a-input-search
                  :style="{ width: '320px' }"
                  v-model="formModel.name"
                  allow-clear
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <div>
          <a-space>
            <a-button type="primary" class="myBtnR">
              <template #icon>
                <icon-apps />
              </template>
              <template #default>自动化</template>
            </a-button>
            <a-button type="primary" class="myBtnR">
              <template #icon>
                <icon-apps />
              </template>
              <template #default>分组</template>
            </a-button>
          </a-space>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const generateFormModel = () => {
  return {
    name: '',
    contentType: '',
    content: '',
  };
};
const formModel = ref(generateFormModel());
const contentTypeOptions = computed(() => [
  {
    label: '所有账号',
    value: '0',
  },
  {
    label: '有效',
    value: '2',
  },
  {
    label: '已失效',
    value: '3',
  },
]);

const contentOptions = computed(() => [
  {
    label: '账号1',
    value: '0',
  },
  {
    label: '账号2',
    value: '2',
  },
  {
    label: '账号3',
    value: '3',
  },
  {
    label: '账号4',
    value: '4',
  },
]);
contentOptions;
</script>

<script lang="ts">
export default {
  name: 'Account',
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: calc(100vh - 64px);
  background-color: #f9f9f9;
  overflow-y: scroll;
  .top {
    width: 100%;
    height: 120px;
    background-color: #fff;
    z-index: 9999;
    .topBox {
      background-color: #fff;
      padding: 30px 0;
      width: 100%;
      height: 120px;
      // position: fixed;
      // top: 62px;
      // left: 50%;
      // transform: translateX(-50%);
      .box {
        display: flex;
        justify-content: space-between;
        width: 1420px;
        height: 100%;
        margin: auto;

        .account {
          display: flex;
          justify-content: space-between;
          flex-direction: column;

          .accountTop {
            font-size: 24px;
            font-weight: 700;
            color: #333;
          }
          .accountBottom {
            font-size: 12px;
            font-weight: 500;
            color: #9b9b9b;
          }
        }
      }
      .myBtn {
        height: 50px;
        background-color: #4a3aff;
        padding: 0 25px;
        border-radius: 12px;
        color: #fff;
      }
      .myBtn:hover {
        background-color: #6d60f7;
      }
    }
  }
}
.contentBox {
  padding-top: 30px;
  width: 1440px;
  margin: auto;
  color: #333;
  display: flex;
  justify-content: space-between;
  .myBtnR {
    height: 40px;
    background-color: #f0efff;
    padding: 0 19px;
    border-radius: 12px;
    color: #4a3aff;
  }
}
:deep(.arco-select-view-single),
:deep(.arco-select-view-multiple),
:deep(.arco-select-view-inner) {
  height: 40px !important;
  border-radius: 25px !important;
  line-height: 40px !important;
  padding-left: 10px;
}
:deep(.arco-select-view-inner) {
  line-height: 35px !important;
  padding-left: 10px;
}

:deep(.arco-input-wrapper) {
  height: 40px !important;
  line-height: 40px !important;
  border-radius: 25px !important;
  padding-left: 10px;
}
</style>
