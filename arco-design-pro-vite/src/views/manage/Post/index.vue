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
              <!-- <a-button type="primary" class="myBtn" @click="handleClick">
                <template #icon>
                  <icon-plus />
                </template>
                <template #default>新建发布任务</template>
              </a-button> -->

              <a-trigger
                position="br"
                :popup-translate="[0, 10]"
                auto-fit-position
                :unmount-on-close="false"
              >
                <a-button class="myBtn">
                  <template #icon>
                    <icon-plus />
                  </template>
                  <template #default
                    >新建发布任务 <icon-caret-down style="margin-left: 10px"
                  /></template>
                </a-button>
                <template #content>
                  <div class="demo-basic">
                    <div>
                      <a-button
                        type="text"
                        class="deBtn"
                        @click="handleClick('video')"
                        >发布新视频</a-button
                      >
                    </div>
                    <div>
                      <a-button
                        type="text"
                        class="deBtn"
                        @click="handleClick('img')"
                        >发布新照片</a-button
                      >
                    </div>
                  </div>
                </template>
              </a-trigger>
              <a-trigger
                position="br"
                :popup-translate="[0, 10]"
                auto-fit-position
                :unmount-on-close="false"
              >
                <a-button class="myBtn">
                  <template #icon>
                    <icon-sun-fill />
                  </template>
                  <template #default
                    >AI<icon-caret-down style="margin-left: 10px"
                  /></template>
                </a-button>
                <template #content>
                  <div class="demo-basic">
                    <div>
                      <a-button type="text" class="deBtn">AI 发布视频</a-button>
                    </div>
                    <div>
                      <a-button type="text" class="deBtn"
                        >批量发布视频</a-button
                      >
                    </div>
                    <div>
                      <a-button type="text" class="deBtn"
                        >批量发布照片</a-button
                      >
                    </div>
                    <div>
                      <a-button type="text" class="deBtn"
                        >关联已有视频</a-button
                      >
                    </div>
                  </div>
                </template>
              </a-trigger>
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
            <a-col :span="3">
              <a-form-item field="contentType">
                <a-select
                  v-model="formModel.contentType"
                  :options="contentTypeOptions"
                  :style="{ width: '120px' }"
                  placeholder="所有账号"
                  allow-clear
                />
              </a-form-item>
            </a-col>
            <a-col :span="3">
              <a-form-item field="contentType">
                <a-select
                  v-model="formModel.contentType"
                  :options="contentTypeOptions"
                  :style="{ width: '120px' }"
                  placeholder="所有账号"
                  allow-clear
                />
              </a-form-item>
            </a-col>
            <a-col :span="3">
              <a-form-item field="contentType">
                <a-select
                  v-model="formModel.contentType"
                  :options="contentTypeOptions"
                  :style="{ width: '120px' }"
                  placeholder="所有账号"
                  allow-clear
                />
              </a-form-item>
            </a-col>
            <a-col :span="3">
              <a-cascader
                style="z-index: 2; position: relative"
                :options="casOptions"
                :default-value="['Shanghai']"
                :style="{ width: '260px' }"
                placeholder="Please select ..."
                multiple
              />
            </a-col>
          </a-row>
        </a-form>
        <div class="myB">
          <a-button
            type="primary"
            class="myBtnM"
            :class="{ myBtnR: lr }"
            @click="lr = true"
          >
            <template #default>列表模式</template>
          </a-button>
          <a-button
            type="primary"
            class="myBtnM"
            :class="{ myBtnR: !lr }"
            @click="lr = false"
          >
            <template #default>日历模式</template>
          </a-button>
        </div>
      </div>
      <div class="listBox">
        <div class="boxLi">
          <div class="confB">发布成功</div>
          <div class="carB">
            <div class="imgCar">
              <img src="../../../assets/images/demo_cover.png" alt="" />
              <icon-play-circle />
            </div>
            <div class="carRight">
              <div class="title">演示视频（新建任务后将被删除）</div>
              <div class="time">发布时间：2023-02-01 20:00:00</div>
              <div class="ulBox">
                <div class="liBox">
                  <div class="titleLi">播放量</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">点赞数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">评论数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">分享数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">收藏数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
              </div>
              <div class="imgBox">
                <img
                  class="imgU"
                  src="../../../assets/images/1005_15_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1009_19_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1001_11_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1008_18_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/10_10_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1002_12_11zon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="bottomContent">
            <div class="shH"><span class="sSpan">.</span> 全部审核通过</div>
            <div class="btmR">
              <div class="textImg"><icon-find-replace /><span>查看</span></div>
              <div class="textImg"><icon-bar-chart /><span>数据</span></div>
              <div class="textImg"><icon-message /><span>评论</span></div>

              <div class="textImg">
                <a-space size="large">
                  <a-dropdown
                    @select="handleSelect"
                    position="br"
                    :popup-translate="[20, 15]"
                  >
                    <icon-more-vertical />
                    <template #content>
                      <a-doption disabled>删除任务</a-doption>
                      <a-doption disabled>批量删除任务</a-doption>
                      <a-doption :value="{ value: 'Option3' }" disabled
                        >删除任务及视频</a-doption
                      >
                    </template>
                  </a-dropdown>
                </a-space>
              </div>
            </div>
          </div>
        </div>
        <div class="boxLi">
          <div class="confB">发布成功</div>
          <div class="carB">
            <div class="imgCar">
              <img src="../../../assets/images/demo_cover.png" alt="" />
              <icon-play-circle />
            </div>
            <div class="carRight">
              <div class="title">演示视频（新建任务后将被删除）</div>
              <div class="time">发布时间：2023-02-01 20:00:00</div>
              <div class="ulBox">
                <div class="liBox">
                  <div class="titleLi">播放量</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">点赞数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">评论数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">分享数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">收藏数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
              </div>
              <div class="imgBox">
                <img
                  class="imgU"
                  src="../../../assets/images/1005_15_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1009_19_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1001_11_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1008_18_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/10_10_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1002_12_11zon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="bottomContent">
            <div class="shH"><span class="sSpan">.</span> 全部审核通过</div>
            <div class="btmR">
              <div class="textImg"><icon-find-replace /><span>查看</span></div>
              <div class="textImg"><icon-bar-chart /><span>数据</span></div>
              <div class="textImg"><icon-message /><span>评论</span></div>

              <div class="textImg">
                <a-space size="large">
                  <a-dropdown
                    @select="handleSelect"
                    position="br"
                    :popup-translate="[20, 15]"
                  >
                    <icon-more-vertical />
                    <template #content>
                      <a-doption disabled>删除任务</a-doption>
                      <a-doption disabled>批量删除任务</a-doption>
                      <a-doption :value="{ value: 'Option3' }" disabled
                        >删除任务及视频</a-doption
                      >
                    </template>
                  </a-dropdown>
                </a-space>
              </div>
            </div>
          </div>
        </div>
        <div class="boxLi">
          <div class="confB">发布成功</div>
          <div class="carB">
            <div class="imgCar">
              <img src="../../../assets/images/demo_cover.png" alt="" />
              <icon-play-circle />
            </div>
            <div class="carRight">
              <div class="title">演示视频（新建任务后将被删除）</div>
              <div class="time">发布时间：2023-02-01 20:00:00</div>
              <div class="ulBox">
                <div class="liBox">
                  <div class="titleLi">播放量</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">点赞数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">评论数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">分享数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">收藏数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
              </div>
              <div class="imgBox">
                <img
                  class="imgU"
                  src="../../../assets/images/1005_15_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1009_19_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1001_11_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1008_18_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/10_10_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1002_12_11zon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="bottomContent">
            <div class="shH"><span class="sSpan">.</span> 全部审核通过</div>
            <div class="btmR">
              <div class="textImg"><icon-find-replace /><span>查看</span></div>
              <div class="textImg"><icon-bar-chart /><span>数据</span></div>
              <div class="textImg"><icon-message /><span>评论</span></div>

              <div class="textImg">
                <a-space size="large">
                  <a-dropdown
                    @select="handleSelect"
                    position="br"
                    :popup-translate="[20, 15]"
                  >
                    <icon-more-vertical />
                    <template #content>
                      <a-doption disabled>删除任务</a-doption>
                      <a-doption disabled>批量删除任务</a-doption>
                      <a-doption :value="{ value: 'Option3' }" disabled
                        >删除任务及视频</a-doption
                      >
                    </template>
                  </a-dropdown>
                </a-space>
              </div>
            </div>
          </div>
        </div>
        <div class="boxLi">
          <div class="confB">发布成功</div>
          <div class="carB">
            <div class="imgCar">
              <img src="../../../assets/images/demo_cover.png" alt="" />
              <icon-play-circle />
            </div>
            <div class="carRight">
              <div class="title">演示视频（新建任务后将被删除）</div>
              <div class="time">发布时间：2023-02-01 20:00:00</div>
              <div class="ulBox">
                <div class="liBox">
                  <div class="titleLi">播放量</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">点赞数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">评论数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">分享数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">收藏数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
              </div>
              <div class="imgBox">
                <img
                  class="imgU"
                  src="../../../assets/images/1005_15_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1009_19_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1001_11_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1008_18_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/10_10_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1002_12_11zon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="bottomContent">
            <div class="shH"><span class="sSpan">.</span> 全部审核通过</div>
            <div class="btmR">
              <div class="textImg"><icon-find-replace /><span>查看</span></div>
              <div class="textImg"><icon-bar-chart /><span>数据</span></div>
              <div class="textImg"><icon-message /><span>评论</span></div>

              <div class="textImg">
                <a-space size="large">
                  <a-dropdown
                    @select="handleSelect"
                    position="br"
                    :popup-translate="[20, 15]"
                  >
                    <icon-more-vertical />
                    <template #content>
                      <a-doption disabled>删除任务</a-doption>
                      <a-doption disabled>批量删除任务</a-doption>
                      <a-doption :value="{ value: 'Option3' }" disabled
                        >删除任务及视频</a-doption
                      >
                    </template>
                  </a-dropdown>
                </a-space>
              </div>
            </div>
          </div>
        </div>
        <div class="boxLi">
          <div class="confB">发布成功</div>
          <div class="carB">
            <div class="imgCar">
              <img src="../../../assets/images/demo_cover.png" alt="" />
              <icon-play-circle />
            </div>
            <div class="carRight">
              <div class="title">演示视频（新建任务后将被删除）</div>
              <div class="time">发布时间：2023-02-01 20:00:00</div>
              <div class="ulBox">
                <div class="liBox">
                  <div class="titleLi">播放量</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">点赞数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">评论数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">分享数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
                <div class="liBox">
                  <div class="titleLi">收藏数</div>
                  <div class="num">12,138</div>
                  <div class="lue">--</div>
                </div>
              </div>
              <div class="imgBox">
                <img
                  class="imgU"
                  src="../../../assets/images/1005_15_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1009_19_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1001_11_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1008_18_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/10_10_11zon.png"
                  alt=""
                />
                <img
                  class="imgU"
                  src="../../../assets/images/1002_12_11zon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="bottomContent">
            <div class="shH"><span class="sSpan">.</span> 全部审核通过</div>
            <div class="btmR">
              <div class="textImg"><icon-find-replace /><span>查看</span></div>
              <div class="textImg"><icon-bar-chart /><span>数据</span></div>
              <div class="textImg"><icon-message /><span>评论</span></div>

              <div class="textImg">
                <a-space size="large">
                  <a-dropdown
                    @select="handleSelect"
                    position="br"
                    :popup-translate="[20, 15]"
                  >
                    <icon-more-vertical />
                    <template #content>
                      <a-doption disabled>删除任务</a-doption>
                      <a-doption disabled>批量删除任务</a-doption>
                      <a-doption :value="{ value: 'Option3' }" disabled
                        >删除任务及视频</a-doption
                      >
                    </template>
                  </a-dropdown>
                </a-space>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreatedVideo
      v-if="visible"
      class="cv"
      :paramsType="textType"
      @changeClose="changeClose"
    ></CreatedVideo>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import CreatedVideo from './components/createdVideo.vue';
const { t } = useI18n();
const generateFormModel = () => {
  return {
    name: '',
    contentType: '',
    content: '',
  };
};
const visible = ref(false);
const textType = ref('');

const handleClick = (params) => {
  textType.value = params || '';
  console.log('textType.value ', textType.value);

  visible.value = true;
};
const changeClose = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};

const formModel = ref(generateFormModel());
const lr = ref(true);
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
const casOptions = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'chaoyang',
        label: 'ChaoYang',
        children: [
          {
            value: 'datunli',
            label: 'Datunli',
          },
        ],
      },
      {
        value: 'haidian',
        label: 'Haidian',
      },
      {
        value: 'dongcheng',
        label: 'Dongcheng',
      },
      {
        value: 'xicheng',
        label: 'Xicheng',
        children: [
          {
            value: 'jinrongjie',
            label: 'Jinrongjie',
          },
          {
            value: 'tianqiao',
            label: 'Tianqiao',
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'huangpu',
        label: 'Huangpu',
      },
    ],
  },
];
const handleSelect = (v) => {
  console.log(v);
};
</script>

<script lang="ts">
export default {
  name: 'Account',
};
</script>

<style scoped lang="less">
:deep(.arco-select-view-single),
:deep(.arco-select-view-multiple),
:deep(.arco-select-view-inner) {
  border-radius: 25px !important;
  padding-left: 10px;
}
// :deep(.arco-select-view-inner) {
//   line-height: 35px !important;
//   padding-left: 10px;
// }

// :deep(.arco-input-wrapper) {
//   height: 40px !important;
//   line-height: 40px !important;
//   border-radius: 25px !important;
//   padding-left: 10px;
// }
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
  height: 80px;
  .myBtnM {
    height: 30px;
    padding: 0 19px;
    border-radius: 25px;
    color: #4e5969;
    background-color: #ebebeb;
  }
  .myBtnR {
    height: 30px;
    background-color: #4a3aff;
    padding: 0 19px;
    border-radius: 25px;
    color: #fff;
  }
  .myB {
    display: flex;
    justify-content: flex-end;
    background-color: #ebebeb;
    height: 30px;
    border-radius: 25px;
  }
}
.listBox {
  width: 1440px;
  margin: 10px auto;
  .boxLi {
    box-shadow: 0 2px 8px #e1e0e0;
    width: calc(50% - 8px);
    background-color: #fff;
    display: inline-block;
    margin-right: 16px;
    margin-bottom: 16px;
    vertical-align: top;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    .carB {
      width: 100%;
      padding: 14px 20px;
      display: flex;
      justify-content: flex-start;
      border-bottom: 1px solid #ebebeb;
      .imgCar {
        width: 100px;
        position: relative;
        img {
          width: 100%;
          border-radius: 5px;
        }
        :deep(.arco-icon) {
          color: #fff;
          font-size: 30px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .carRight {
        width: calc(100% - 100px);
        height: 100%;
        padding: 5px 20px 0;
        .title {
          width: 100%;
          white-space: nowrap; /* 禁止换行 */
          overflow: hidden; /* 超出部分隐藏 */
          text-overflow: ellipsis; /* 显示省略号 */
          font-size: 17px;
          color: #333;
          font-weight: 700;
        }
        .time {
          width: 100%;
          white-space: nowrap; /* 禁止换行 */
          overflow: hidden; /* 超出部分隐藏 */
          text-overflow: ellipsis; /* 显示省略号 */
          margin-top: 15px;
          font-size: 12px;
          color: #666;
        }
        .ulBox {
          width: 100%;
          height: 65px;
          margin-top: 15px;
          .liBox {
            width: 20%;
            height: 100%;
            display: inline-block;
            vertical-align: top;

            .titleLi {
              font-size: 12px;
              color: #999;
            }
            .num {
              font-size: 20px;
              font-weight: 700;
              color: #333;
              margin-top: 10px;
            }
            .lue {
              font-size: 16px;
              font-weight: 700;
              color: #219653;
            }
          }
        }
        .imgBox {
          width: 100%;
          height: 20px;
          margin-top: 20px;
          .imgU {
            width: 20px;
            height: 20px;
            border-radius: 25px;
            margin-right: 10px;
          }
        }
      }
    }
    .confB {
      position: absolute;
      right: 0;
      top: 0;
      width: 70px;
      height: 22px;
      line-height: 22px;
      background-color: #f3faf0;
      color: #6abf40;
      font-size: 12px;
      text-align: center;
      border-radius: 0 0 0 10px;
    }
    .bottomContent {
      width: 100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      .shH {
        font-size: 12px;
        color: #6abf40;
        position: relative;
        padding-left: 15px;
        .sSpan {
          font-size: 30px;
          position: absolute;
          left: 0px;
          top: -10px;
        }
      }
      .btmR {
        display: flex;
        justify-content: flex-start;
        .textImg {
          margin-left: 40px;
          font-size: 14px;
          color: #333;
          cursor: pointer;
        }
        span {
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
  }
  .boxLi:nth-child(2n) {
    margin: 0;
  }
}
.cv {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 3333;
}

.demo-basic {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  .deBtn {
    width: 100%;
    height: 45px;
    text-align: left;
    color: #000;
    padding-right: 100px;
  }
}
</style>
