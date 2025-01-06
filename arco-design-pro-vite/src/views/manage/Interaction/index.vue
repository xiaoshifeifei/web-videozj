<template>
  <div class="container">
    <div class="myContent">
      <div class="box">
        <div class="boxContent">
          <div class="boxContent-L">
            <div class="guiZ">
              <div
                class="pl-config"
                :class="{ selected: selectedIndex === 1 }"
                @click="selectItem(1)"
                >评论管理</div
              >
              <div
                class="sx-config"
                :class="{ selected: selectedIndex === 2 }"
                @click="selectItem(2)"
                >私信管理</div
              >
            </div>
          </div>
          <div class="boxContent-R">
            <div class="contentTop">
              <div class="menuBox">
                <a-menu mode="horizontal" :default-selected-keys="['TikTok']">
                  <a-menu-item
                    v-for="item in selectOptions"
                    :key="item.label"
                    :disabled="item.disabled"
                  >
                    <span v-if="!item.disabled">
                      {{ item.label }}
                    </span>
                    <a-trigger
                      v-else
                      position="top"
                      auto-fit-position
                      :unmount-on-close="false"
                      :popup-translate="[0, -10]"
                    >
                      <span>{{ item.label }}</span>
                      <template #content>
                        <div
                          style="
                            background: rgba(0, 0, 0, 0.8);
                            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                            padding: 10px 20px;
                            color: #fff;
                            border-radius: 5px;
                          "
                        >
                          该媒体暂不支持评论
                        </div>
                      </template>
                    </a-trigger>
                  </a-menu-item>
                </a-menu>
                <a-select
                  v-model="formModel.contentType"
                  :options="contentTypeOptions"
                  placeholder="所有账号"
                />
              </div>
              <div class="videoBox">
                <div class="vL">
                  <div class="info">
                    <img
                      class="img"
                      src="../../../assets/images/1001_11_11zon.png"
                      alt=""
                    />
                    <div class="title">
                      <div class="titleT">天南海北</div>
                      <div class="titleB">
                        <div class="num">1.1万</div>
                        <div class="text">无备注</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vZ">
                  <div class="top">
                    <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      placeholder="所有账号"
                    />
                    <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      placeholder="所有账号"
                    />
                  </div>
                  <div class="videoList">
                    <div class="v-ul">
                      <div class="v-li xz">
                        <img
                          class="v-img"
                          src="../../../assets/images/demo_cover.png"
                          alt=""
                        />
                        <div class="liB">
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnL">星空璀璨</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                星空璀璨
                              </div>
                            </template>
                          </a-trigger>
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnR">4966</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                4996
                              </div>
                            </template>
                          </a-trigger>
                        </div>
                      </div>
                      <div class="v-li">
                        <img
                          class="v-img"
                          src="../../../assets/images/demo_cover.png"
                          alt=""
                        />
                        <div class="liB">
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnL">星空璀璨</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                星空璀璨
                              </div>
                            </template>
                          </a-trigger>
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnR">4966</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                4996
                              </div>
                            </template>
                          </a-trigger>
                        </div>
                      </div>
                      <div class="v-li">
                        <img
                          class="v-img"
                          src="../../../assets/images/demo_cover.png"
                          alt=""
                        />
                        <div class="liB">
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnL">星空璀璨</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                星空璀璨
                              </div>
                            </template>
                          </a-trigger>
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnR">4966</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                4996
                              </div>
                            </template>
                          </a-trigger>
                        </div>
                      </div>
                      <div class="v-li">
                        <img
                          class="v-img"
                          src="../../../assets/images/demo_cover.png"
                          alt=""
                        />
                        <div class="liB">
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnL">星空璀璨</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                星空璀璨
                              </div>
                            </template>
                          </a-trigger>
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnR">4966</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                4996
                              </div>
                            </template>
                          </a-trigger>
                        </div>
                      </div>
                      <div class="v-li">
                        <img
                          class="v-img"
                          src="../../../assets/images/demo_cover.png"
                          alt=""
                        />
                        <div class="liB">
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnL">星空璀璨</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                星空璀璨
                              </div>
                            </template>
                          </a-trigger>
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnR">4966</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                4996
                              </div>
                            </template>
                          </a-trigger>
                        </div>
                      </div>
                      <div class="v-li">
                        <img
                          class="v-img"
                          src="../../../assets/images/demo_cover.png"
                          alt=""
                        />
                        <div class="liB">
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnL">星空璀璨</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                星空璀璨
                              </div>
                            </template>
                          </a-trigger>
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnR">4966</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                4996
                              </div>
                            </template>
                          </a-trigger>
                        </div>
                      </div>
                      <div class="v-li">
                        <img
                          class="v-img"
                          src="../../../assets/images/demo_cover.png"
                          alt=""
                        />
                        <div class="liB">
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnL">星空璀璨</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                星空璀璨
                              </div>
                            </template>
                          </a-trigger>
                          <a-trigger
                            position="top"
                            auto-fit-position
                            :unmount-on-close="false"
                            :popup-translate="[0, -10]"
                          >
                            <div class="btnR">4966</div>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.5);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                4996
                              </div>
                            </template>
                          </a-trigger>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vR">
                  <div class="pl-top">
                    <div class="pl-left">
                      <div class="plLeftT">
                        <a-space>
                          <a-trigger
                            position="top"
                            :popup-translate="[0, -10]"
                            auto-fit-position
                            :unmount-on-close="false"
                          >
                            <a-button class="myBtn">
                              <template #icon>
                                <icon-play-circle-fill size="24" />
                              </template>
                            </a-button>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.8);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 10px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                查看视频
                              </div>
                            </template>
                          </a-trigger>
                        </a-space>
                        <div class="ge"></div>
                        <a-space>
                          <a-trigger
                            position="top"
                            :popup-translate="[0, -10]"
                            auto-fit-position
                            :unmount-on-close="false"
                          >
                            <a-button class="myBtn">
                              <template #icon>
                                <icon-bar-chart size="24" />
                              </template>
                            </a-button>
                            <template #content>
                              <div
                                style="
                                  background: rgba(0, 0, 0, 0.8);
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 10px 20px;
                                  color: #fff;
                                  border-radius: 5px;
                                "
                              >
                                查看数据
                              </div>
                            </template>
                          </a-trigger>
                        </a-space>
                      </div>
                      <div class="plLeftZ">
                        <div class="title">评论数</div>
                        <div class="num">4966</div>
                      </div>
                      <div class="plLeftR">
                        <div class="title">评论数</div>
                        <div class="num">39.38%</div>
                      </div>
                    </div>
                    <div class="pl-right">
                      <div class="title">评论舆情</div>
                      <div class="jdt">
                        <icon-thumb-up-fill
                          class="up-icon"
                          :rotate="90"
                          :size="20"
                        />

                        <div class="fux"> 负向 </div>
                        <a-progress
                          :percent="0.8"
                          :stroke-width="20"
                          :show-text="false"
                          :animation="true"
                          color="#FFB200"
                          track-color="#0672FF"
                          :style="{ width: '50%', marginTop: '5px' }"
                        />
                        <div class="zxi"> 正向 </div>
                        <icon-thumb-down-fill
                          class="down-icon"
                          :rotate="90"
                          :size="20"
                        />
                      </div>
                      <img
                        class="imgPl"
                        src="../../../assets/images/pl.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="pl-bottom">
                    <div class="myCon">
                      <div class="myConL">添加评论</div>
                      <div class="myConR">
                        <a-button shape="round" disabled>
                          <template #icon>
                            <icon-refresh />
                          </template>
                          <template #default>立即更新</template>
                        </a-button>
                        <a-button shape="round">
                          <template #icon>
                            <icon-sync />
                          </template>
                          <template #default>自动回复</template>
                        </a-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const selectedIndex = ref(1);
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
const selectOptions = computed(() => [
  {
    label: 'TikTok',
    value: 'TikTok',
  },
  {
    label: 'YouTube',
    value: 'YouTube',
  },
  {
    label: 'Facebook',
    value: 'Facebook',
  },
  {
    label: 'Instagram',
    value: 'Instagram',
  },
  {
    label: 'Threads',
    value: 'Threads',
  },
  {
    label: 'Pinterest',
    value: 'Pinterest',
    disabled: true,
  },
]);
const formModel = ref({
  contentType: '',
});
const selectItem = (index: number) => {
  selectedIndex.value = index; // 更新选中项
};
</script>

<script lang="ts">
export default {
  name: '404',
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: calc(100vh - 80px);
  padding-top: 5px;
  background-color: #f9f9f9;
  .myContent {
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;

    .box {
      width: 100%;
      height: 100%;
      background-color: #f8f8f8;
      .boxContent {
        width: 1450px;
        height: 100vh;
        overflow: hidden;
        background-color: skyblue;
        margin: auto;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        .boxContent-L {
          width: 200px;
          height: 100%;
          background-color: #fff;

          .guiZ {
            .pl-config {
              width: 100%;
              height: 45px;
              line-height: 45px;
              font-size: 14px;
              color: #333;
              padding-left: 40px;
              margin-bottom: 3px;
              font-weight: 700;
              cursor: pointer;
            }
            .pl-config:hover {
              background-color: #f2f3f5;
            }
            .sx-config {
              width: 100%;
              height: 45px;
              line-height: 45px;
              font-size: 14px;
              color: #333;
              padding-left: 40px;
              margin-bottom: 3px;
              font-weight: 700;
              cursor: pointer;
            }
            .sx-config:hover {
              background-color: #f2f3f5;
            }
            .selected {
              color: #0672ff;
              background-color: #ebf3ff;
            }
          }
        }
        .boxContent-R {
          width: calc(100% - 200px);
          height: 100%;
          background-color: #f8f8f8;
          position: relative;
          .contentTop {
            width: calc(100% - 16px);
            height: calc(100% - 16px);
            // overflow-y: scroll;
            // scrollbar-width: none;
            padding-top: 16px;
            margin-left: 16px;
            .menuBox {
              width: 100%;
              height: 60px;
              margin-bottom: 16px;
              overflow: hidden;
              justify-content: space-between;
              box-shadow: 0 1px 6px #0000000d;
              border-radius: 10px;
              display: flex;
              justify-content: space-between;
              background-color: #fff;
              :deep(.arco-menu-inner) {
                height: 60px;
                width: calc(100% - 150px);
              }

              :deep(.arco-menu-selected-label) {
                width: 16px;
                bottom: 0;
                height: 4px;
                left: 50%;
                transform: translateX(-50%);
              }

              :deep(.arco-select-view-single) {
                width: 135px;
                height: 34px;
                border: 1px solid rgb(224, 224, 224);
                margin-top: 13px;
                margin-right: 12px;
                border-radius: 25px;
                background-color: #fff;
              }
            }
            .videoBox {
              width: 100%;
              height: calc(100% - 66px);
              display: flex;
              justify-content: flex-start;
              .vL {
                width: 245px;
                height: 100%;
                background-color: #fff;
                border-radius: 10px 10px 0 0;
                padding: 12px;
                .info {
                  width: 100%;
                  padding: 6px;
                  height: 50px;
                  border-radius: 10px;
                  background-color: #ebebeb;
                  display: flex;
                  justify-content: flex-start;
                  .img {
                    width: 38px;
                    height: 38px;
                  }
                  .title {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    .titleT {
                      font-size: 14px;
                      color: #333;
                      font-weight: 700;
                      margin-bottom: 2px;
                      padding-left: 10px;
                    }
                    .titleB {
                      display: flex;
                      justify-content: space-between;
                      font-size: 12px;
                      color: #999;
                      .num {
                        width: 50%;
                        text-align: left;
                        padding-left: 10px;
                      }
                      .text {
                        width: 50%;
                        text-align: left;
                      }
                    }
                  }
                }
              }
              .vZ {
                width: 245px;
                height: 100%;
                background-color: #fff;
                margin: 0 12px;
                overflow: hidden;
                overflow-y: scroll;
                scrollbar-width: none;
                border-radius: 10px 10px 0 0;
                padding: 12px;
                .top {
                  height: 40px;
                  display: flex;
                  justify-content: space-between;
                  padding-bottom: 10px;
                  :deep(.arco-select-view-single) {
                    height: 30px;
                    border-radius: 5px;
                    background-color: #eff0f6;
                    width: 47.9%;
                  }

                  :deep(.arco-select-view-value),
                  :deep(.arco-select-view-input) {
                    font-size: 11px;
                    line-height: 30px;
                  }
                }
                .videoList {
                  width: 100%;
                  height: calc(100% - 90px);
                  overflow: hidden;
                  overflow-y: scroll;
                  scrollbar-width: none;
                  padding: 10px 0 0;

                  .v-ul {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    .v-li {
                      width: 100px;
                      height: 200px;
                      background-color: skyblue;
                      margin: 0 21px 20px 0;
                      position: relative;
                      cursor: pointer;
                      border-radius: 5px;
                      overflow: hidden;
                      .liB {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 24px;
                        line-height: 24px;
                        width: 100%;
                        background: rgba(0, 0, 0, 0.5);
                        box-shadow: border-box;
                        font-size: 11px;
                        color: #fff;
                        text-align: center;
                        .basic {
                          width: 300px;
                          height: 30px;

                          background: rgba(0, 0, 0, 0.5);
                        }
                        .btnL {
                          width: 50%;
                          display: inline-block;
                          border-right: 1px solid #a7a1a1;
                          overflow: hidden; /* 确保超出容器的文本被裁剪 */
                          white-space: nowrap; /* 确保文本在一行内显示 */
                          text-overflow: ellipsis; /* 使用省略号表示文本超出 */
                          height: 24px;
                          line-height: 24px;
                        }
                        .btnR {
                          width: 50%;
                          height: 24px;
                          line-height: 24px;
                          display: inline-block;
                          overflow: hidden; /* 确保超出容器的文本被裁剪 */
                          white-space: nowrap; /* 确保文本在一行内显示 */
                          text-overflow: ellipsis; /* 使用省略号表示文本超出 */
                        }
                      }
                    }
                    .xz {
                      border: 2px solid #4a3aff;
                      box-shadow: border-box;
                    }
                    .v-li:nth-child(even) {
                      margin: 0;
                      background-color: skyblue; /* 例子：给偶数元素设置背景色 */
                    }
                  }
                  .v-img {
                    width: 100%;
                    height: 100%;
                  }
                }
              }
              .vR {
                width: calc(100% - 514px);
                height: 100%;
                overflow: hidden;
                overflow-y: scroll;
                scrollbar-width: none;
                border-radius: 10px 10px 0 0;
                .pl-top {
                  width: 100%;
                  height: 312px;
                  display: flex;
                  justify-content: space-between;
                  .pl-left {
                    width: 180px;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    .plLeftT {
                      width: 100%;
                      border-radius: 10px;
                      background-color: #fff;
                      height: 60px;
                      display: flex;
                      justify-content: space-evenly;
                      flex-direction: row;
                      .ge {
                        width: 3px;
                        height: 15px;
                        background-color: #4a3aff;
                        margin-top: 22.5px;
                      }
                      .myBtn {
                        height: 32px;
                        width: 32px;
                        background-color: #4a3aff;
                        border-radius: 6px;
                        color: #fff;
                      }
                      .myBtn:hover {
                        background-color: #6d60f7;
                      }
                    }
                    .plLeftZ {
                      width: 100%;
                      border-radius: 10px;
                      background-color: #fff;
                      height: 110px;
                      padding: 24px;
                      .title {
                        font-size: 16px;
                        color: #999;
                      }
                      .num {
                        color: #333;
                        font-size: 30px;
                      }
                    }
                    .plLeftR {
                      width: 100%;
                      border-radius: 10px;
                      background-color: #fff;
                      height: 110px;
                      padding: 24px;
                      .title {
                        font-size: 16px;
                        color: #999;
                      }
                      .num {
                        color: #333;
                        font-size: 30px;
                      }
                    }
                  }
                  .pl-right {
                    width: calc(100% - 196px);
                    height: 100%;
                    background-color: #fff;
                    border-radius: 10px;
                    padding: 16px 24px;
                    position: relative;
                    .title {
                      font-size: 16px;
                      color: #333;
                      font-weight: 700;
                    }
                    .jdt {
                      position: absolute;
                      top: 130px;
                      left: -40px;
                      width: 200px;
                      height: 30px;
                      margin-top: 20px;
                      transform: rotate(90deg); /* 旋转90度 */
                      line-height: 30px;
                      .fux {
                        display: inline-block;
                        color: rgb(255, 0, 132);
                        font-size: 12px;
                        transform: translateY(-4px) rotate(270deg);
                      }
                      .zxi {
                        display: inline-block;
                        color: #0672ff;
                        font-size: 12px;
                        transform: translateY(-4px) rotate(270deg);
                      }
                      .up-icon {
                        color: rgb(255, 0, 132);
                      }
                      .down-icon {
                        color: #0672ff;
                      }
                    }
                    .imgPl {
                      width: 360px;
                      display: block;
                      margin-left: 100px;
                    }
                  }
                }
                .pl-bottom {
                  margin-top: 10px;
                  width: 100%;
                  height: 2000px;
                  background-color: #fff;
                  border-radius: 10px;
                  padding: 25px 15px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
