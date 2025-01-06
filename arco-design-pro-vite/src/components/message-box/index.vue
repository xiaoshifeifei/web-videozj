<template>
  <a-spin style="display: block" :loading="loading">
    <a-tabs v-model:activeKey="messageType" class="tabBox">
      <a-button type="text" class="btnTop" @click="handleAdd">
        <template #icon>
          <icon-plus />
        </template>
        <template #default>新增</template>
      </a-button>
      <a-tab-pane v-for="(item, index) in tabList" :key="item.key">
        <template #title>
          <span> {{ item.title }}{{ index + 1 }} </span>
        </template>
        <div class="tabContent">1</div>
        <div class="tabContent" id="matchingRules"> </div>
        <div class="tabContent" id="responseScope">回复范围</div>
        <div class="tabContent" id="replyRules">回复规则</div>
        <div class="tabContent" id="information">基础信息</div>
      </a-tab-pane>
    </a-tabs>
  </a-spin>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  queryMessageList,
  setMessageStatus,
  MessageRecord,
  MessageListType,
} from '@/api/message';
import useLoading from '@/hooks/loading';
import List from './list.vue';
const { loading, setLoading } = useLoading(true);
const messageType = ref('1');
const { t } = useI18n();
const messageData = reactive<{
  renderList: MessageRecord[];
  messageList: MessageRecord[];
}>({
  renderList: [],
  messageList: [],
});
toRefs(messageData);
const tabList = ref([
  {
    key: '1',
    title: '规则',
  },
  {
    key: '2',
    title: '规则',
  },
  {
    key: '3',
    title: '规则',
  },
]);
async function fetchSourceData() {
  setLoading(true);
  try {
    const { data } = await queryMessageList();
    messageData.messageList = data;
  } catch (err) {
    // you can report use errorHandler or other
  } finally {
    setLoading(false);
  }
}
async function readMessage(data: MessageListType) {
  const ids = data.map((item) => item.id);
  await setMessageStatus({ ids });
  fetchSourceData();
}
const renderList = computed(() => {
  return messageData.messageList.filter(
    (item) => messageType.value === item.type
  );
});
const unreadCount = computed(() => {
  return renderList.value.filter((item) => !item.status).length;
});
const getUnreadList = (type: string) => {
  const list = messageData.messageList.filter(
    (item) => item.type === type && !item.status
  );
  return list;
};
const formatUnreadLength = (type: string) => {
  const list = getUnreadList(type);
  return list.length ? `(${list.length})` : ``;
};
const handleItemClick = (items: MessageListType) => {
  if (renderList.value.length) readMessage([...items]);
};
const emptyList = () => {
  messageData.messageList = [];
};
fetchSourceData();

const handleAdd = () => {
  tabList.value.push({
    key: tabList.value.length + 1 + '',
    title: '规则',
  });
};
</script>

<style scoped lang="less">
// :deep(.arco-popover-popup-content) {
//   padding: 0;
// }

// :deep(.arco-list-item-meta) {
//   align-items: flex-start;
// }
// :deep(.arco-tabs-nav) {
//   padding: 14px 0 12px 16px;
//   border-bottom: 1px solid var(--color-neutral-3);
// }
// :deep(.arco-tabs-content) {
//   padding-top: 0;
//   .arco-result-subtitle {
//     color: rgb(var(--gray-6));
//   }
// }
.tabBox {
  position: relative;
  // height: 70px;
  :deep(.arco-tabs-nav) {
    height: 70px;
    padding-left: 20px;
    font-size: 16px;
  }
  .btnTop {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .tabContent {
    width: 500px;
    height: 500px;
    background-color: yellow;
  }
}
:deep(.arco-tabs-nav-ink) {
  bottom: 7px;
  width: 16px !important;
  height: 3px;
  left: 50%;
  transform: translateX(50%);
}
</style>
