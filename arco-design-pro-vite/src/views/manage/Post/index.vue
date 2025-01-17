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
              <!-- <a-trigger
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
              </a-trigger> -->
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
          <!-- <a-button
            type="primary"
            class="myBtnM"
            :class="{ myBtnR: !lr }"
            @click="lr = false"
          >
            <template #default>日历模式</template>
          </a-button> -->
        </div>
      </div>
      <div class="listBox">
        <div class="boxLi" @click="handleClickPop('2')">
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
              <div class="textImg" @click.stop="handleClickPop('1')"
                ><icon-find-replace /><span>查看</span></div
              >
              <div class="textImg" @click.stop="handleClickPop('2')"
                ><icon-bar-chart /><span>数据</span></div
              >
              <div class="textImg" @click.stop="handleClickPop('3')"
                ><icon-message /><span>评论</span></div
              >

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
        <div class="boxLi" @click="handleClickPop('2')">
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
              <div class="textImg" @click.stop="handleClickPop('1')"
                ><icon-find-replace /><span>查看</span></div
              >
              <div class="textImg" @click.stop="handleClickPop('2')"
                ><icon-bar-chart /><span>数据</span></div
              >
              <div class="textImg" @click.stop="handleClickPop('3')"
                ><icon-message /><span>评论</span></div
              >

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
        <div class="boxLi" @click="handleClickPop('2')">
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
              <div class="textImg" @click.stop="handleClickPop('1')"
                ><icon-find-replace /><span>查看</span></div
              >
              <div class="textImg" @click.stop="handleClickPop('2')"
                ><icon-bar-chart /><span>数据</span></div
              >
              <div class="textImg" @click.stop="handleClickPop('3')"
                ><icon-message /><span>评论</span></div
              >

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
        <div class="boxLi" @click="handleClickPop('2')">
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
              <div class="textImg" @click.stop="handleClickPop('1')"
                ><icon-find-replace /><span>查看</span></div
              >
              <div class="textImg" @click.stop="handleClickPop('2')"
                ><icon-bar-chart /><span>数据</span></div
              >
              <div class="textImg" @click.stop="handleClickPop('3')"
                ><icon-message /><span>评论</span></div
              >

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
        <div class="boxLi" @click="handleClickPop('2')">
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
              <div class="textImg" @click.stop="handleClickPop('1')"
                ><icon-find-replace /><span>查看</span></div
              >
              <div class="textImg" @click.stop="handleClickPop('2')"
                ><icon-bar-chart /><span>数据</span></div
              >
              <div class="textImg" @click.stop="handleClickPop('3')"
                ><icon-message /><span>评论</span></div
              >

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
    <a-drawer
      :width="950"
      :visible="visiblePop"
      @ok="handleOkPop"
      @cancel="handleCancelPop"
      unmountOnClose
      :header="false"
      :footer="false"
      :bodyStyle="{ padding: 0 }"
    >
      <div class="drawerContent">
        <div class="draLeft">
          <div class="draLeftLi draLeftLiB">
            <img
              class="vImg"
              src="../../../assets/images/demo_cover.png"
              alt=""
            />
            <div class="btnL">演示视频（新建任务后将被删除）</div>
          </div>
          <div class="draLeftLi">
            <img
              class="vImg"
              src="../../../assets/images/demo_cover.png"
              alt=""
            />
            <div class="btnL">演示视频（新建任务后将被删除）</div>
          </div>
          <div class="draLeftLi">
            <img
              class="vImg"
              src="../../../assets/images/demo_cover.png"
              alt=""
            />
            <div class="btnL">演示视频（新建任务后将被删除）</div>
          </div>
          <div class="draLeftLi">
            <img
              class="vImg"
              src="../../../assets/images/demo_cover.png"
              alt=""
            />
            <div class="btnL">演示视频（新建任务后将被删除）</div>
          </div>
          <div class="draLeftLi">
            <img
              class="vImg"
              src="../../../assets/images/demo_cover.png"
              alt=""
            />
            <div class="btnL">演示视频（新建任务后将被删除）</div>
          </div>
          <div class="draLeftLi">
            <img
              class="vImg"
              src="../../../assets/images/demo_cover.png"
              alt=""
            />
            <div class="btnL">演示视频（新建任务后将被删除）</div>
          </div>
          <div class="draLeftLi">
            <img
              class="vImg"
              src="../../../assets/images/demo_cover.png"
              alt=""
            />
            <div class="btnL">演示视频（新建任务后将被删除）</div>
          </div>
        </div>
        <div class="draZ">
          <div class="close" @click="handleCancelPop"
            ><icon-close style="color: #fff"
          /></div>
          <div
            class="see"
            @click="handleClickPop('1')"
            :class="{ see1: visibleIcon == '1' }"
            ><icon-find-replace :class="{ replace: visibleIcon == '1' }"
          /></div>
          <div
            class="see"
            @click="handleClickPop('2')"
            :class="{ see1: visibleIcon == '2' }"
            ><icon-bar-chart :class="{ replace: visibleIcon == '2' }"
          /></div>
          <div
            class="see"
            @click="handleClickPop('3')"
            :class="{ see1: visibleIcon == '3' }"
            ><icon-message :class="{ replace: visibleIcon == '3' }"
          /></div>
        </div>
        <div class="draRight">
          <template v-if="visibleIcon == '1'">
            <div style="width: 100%; height: 12px"></div>
            <div class="draContent">
              <div class="laoTie">
                <div class="text">帖子内容</div>
                <div class="task">
                  <div class="taskT">
                    <div class="taskTitle">任务名称</div>
                    <div class="taskContent"
                      >演示视频（新建任务后将被删除）</div
                    >
                  </div>
                  <div class="taskT">
                    <div class="taskTitle">帖子文件</div>
                    <div class="taskImg">
                      <img src="../../../assets/images/demo_cover.png" alt="" />
                      <icon-play-circle
                    /></div>
                  </div>
                  <div class="taskT">
                    <div class="taskTitle">发布时间</div>
                    <div class="taskContent">2025-01-01 20:20:20</div>
                  </div>
                </div>
              </div>
              <div class="laoTie">
                <div class="text">发布账号</div>
                <div class="fbAccount">
                  <div class="textName" @click="handleClickSetting">
                    <img
                      class="textImg"
                      src="../../../assets/images/1002_12_11zon.png"
                      alt=""
                    />
                    <div class="textImgName">
                      <div class="bgT">
                        <icon-find-replace
                          style="margin-right: 5px; font-size: 16px"
                        />查看视频
                        <icon-close-circle-fill class="bgText" @click.stop />
                      </div>
                      <div class="bgTiS">视频审核通过</div>
                      <img
                        class="Img"
                        src="../../../assets/images/1002_12_11zon.png"
                        alt=""
                      />
                      <div class="name">
                        <div class="nameTop">花开富贵</div>
                        <div class="nameBottom">无备注</div>
                      </div>
                      <icon-check-circle-fill class="circle" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="laoTie">
                <div class="text">帖子信息</div>
                <div class="task">
                  <div class="taskT">
                    <div class="taskTitle">多平台设置</div>
                    <div class="taskContent">共用基础信息</div>
                  </div>
                  <div class="taskT">
                    <div class="taskTitle taskTitle1">帖子简介</div>
                    <div class="taskContent"
                      >飞星创作者服务平台——让每一位创作者都能成为全球创作者</div
                    >
                  </div>
                  <div class="taskT">
                    <div class="taskTitle taskTitle1">帖子封面</div>
                    <div class="taskImg">
                      <img src="../../../assets/images/demo_cover.png" alt="" />
                    </div>
                  </div>
                  <div class="taskT">
                    <div class="taskTitle taskTitle1">高级设置</div>
                    <div class="taskTab">
                      <a-tabs default-active-key="2">
                        <a-tab-pane key="1" title="TikTok">
                          <div class="tabContent">
                            <div class="tabLi">
                              <div class="titleLi">是否允许评论</div>
                              <div class="contLi">允许</div>
                            </div>
                            <div class="tabLi">
                              <div class="titleLi">是否允许合拍</div>
                              <div class="contLi">允许</div>
                            </div>
                            <div class="tabLi">
                              <div class="titleLi">是否允许拼接 </div>
                              <div class="contLi">允许</div>
                            </div>
                          </div>
                        </a-tab-pane>
                        <a-tab-pane key="2" title="YouTube">
                          <div class="tabContent">
                            <div class="tabLi">
                              <div class="titleLi">标题</div>
                              <div class="contLi"
                                >飞星创作者服务平台——让每一位创作者都能成为全球创作者</div
                              >
                            </div>
                            <div class="tabLi">
                              <div class="titleLi">分类</div>
                              <div class="contLi">人物和博客</div>
                            </div>
                            <div class="tabLi">
                              <div class="titleLi">是否面向儿童</div>
                              <div class="contLi">否,内容是不面向儿童的</div>
                            </div>
                            <div class="tabLi">
                              <div class="titleLi">许可</div>
                              <div class="contLi">知识共享-署名</div>
                            </div>
                            <div class="tabLi">
                              <div class="titleLi">公开范围</div>
                              <div class="contLi">私密</div>
                            </div>
                            <div class="tabLi">
                              <div class="titleLi">是否允许嵌入</div>
                              <div class="contLi">不允许</div>
                            </div>
                          </div>
                        </a-tab-pane>
                        <a-tab-pane key="3" title="Facebook">
                          <div class="tabContent">
                            <div class="tabLi">
                              <div class="titleLi">标题</div>
                              <div class="contLi"
                                >飞星创作者服务平台——让每一位创作者都能成为全球创作者</div
                              >
                            </div>
                            <div class="tabLi">
                              <div class="titleLi">发布位置</div>
                              <div class="contLi">Facebook Reel</div>
                            </div>
                          </div>
                        </a-tab-pane>
                        <a-tab-pane key="4" title="Instagram">
                          <div class="tabContent">
                            <div class="tabLi">
                              <div class="titleLi">是否分享到动态</div>
                              <div class="contLi">否</div>
                            </div>
                          </div>
                        </a-tab-pane>
                        <a-tab-pane key="5" title="Threads">
                          <div class="tabContent">
                            <div class="tabLi">
                              <div class="titleLi">帖子标签</div>
                              <div class="contLi">无</div>
                            </div>
                          </div>
                        </a-tab-pane>
                        <a-tab-pane key="6" title="Pinterest">
                          <div class="tabContent">
                            <div class="tabLi">
                              <div class="titleLi">链接（可选）</div>
                              <div class="contLi">无</div>
                            </div>
                          </div>
                        </a-tab-pane>
                      </a-tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-if="visibleIcon == '2'">
            <div style="width: 100%; height: 12px"></div>
            <div class="menuBox">
              <a-tabs
                default-active-key="2"
                style="
                  width: calc(100% - 170px);
                  color: #333;
                  font-size: 16px;
                  margin-top: 10px;
                "
              >
                <a-tab-pane
                  :key="item.value"
                  :title="item.label"
                  v-for="item in selectOptions"
                >
                  {{ item.value }}
                </a-tab-pane>
              </a-tabs>
              <a-select
                v-model="formModel.contentType"
                :options="contentTypeOptions"
                style="width: 130px; height: 34px; margin: 13px 20px 0 10px"
                placeholder="所有账号"
              />
            </div>
            <div class="bfBox">
              <div class="bdpNum">
                <div class="bdpTitle"> 播放量 </div>
                <div class="bNums"> 12.138</div>
                <div class="dd">--</div>
              </div>
              <div class="bdpNum">
                <div class="bdpTitle"> 点赞数 </div>
                <div class="bNums"> 12.138</div>
                <div class="dd">--</div>
              </div>
              <div class="bdpNum">
                <div class="bdpTitle"> 评论数 </div>
                <div class="bNums"> 12.138</div>
                <div class="dd">--</div>
              </div>
              <div class="bdpNum">
                <div class="bdpTitle"> 分享数 </div>
                <div class="bNums"> 12.138</div>
                <div class="dd">--</div>
              </div>
              <div class="bdpNum">
                <div class="bdpTitle"> 收藏数 </div>
                <div class="bNums"> 12.138</div>
                <div class="dd">--</div>
              </div>
            </div>
            <div class="qsDb">
              <div class="qsLeft">
                <div class="qsTi">播放占比</div>
                <chartB v-show="chartShow" />
                <chartA v-show="!chartShow" />
                <div class="btnCha">
                  <icon-bar-chart
                    style="
                      cursor: pointer;
                      background-color: #d9d6f8;
                      color: #4a3aff;
                    "
                    @click="chartShow = true"
                  />
                  <icon-clock-circle
                    style="
                      cursor: pointer;
                      background-color: #d9d6f8;
                      color: #4a3aff;
                    "
                    @click="chartShow = false"
                  />
                </div>
              </div>
              <div class="qsRight">
                <div class="qsTi">趋势对比</div>
                <chartC />
                <div>111</div>
              </div>
            </div>
          </template>
          <template v-if="visibleIcon == '3'"> 3</template>
        </div>
      </div>
    </a-drawer>
    <a-modal
      v-model:visible="visibleSetting"
      :footer="false"
      title-align="start"
      @ok="handleOkSetting"
      @cancel="handleCancelSetting"
      hide-title
      ok-text="下一步"
      width="1000px"
      class="myModalSetting"
      :bodyStyle="{ padding: 0 }"
      fullscreen
    >
      <div class="box">
        <div class="top">
          <a-button type="dashed" class="btnTop" @click="handleCancelSetting">
            <template #icon>
              <icon-undo />
            </template>
            <template #default>返回</template>
          </a-button>
        </div>
        <div class="vid">
          <iframe
            tabindex="0"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            class="isIframe"
            id="my-iframe"
            :src="isVideo"
          ></iframe>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import chartA from './components/chartA.vue';
import chartB from './components/chartB.vue';
import chartC from './components/chartC.vue';
import * as echarts from 'echarts';
const isVideo = ref('https://cdn.dreamera.cn/upmee_video/demo_video.mp4');
const router = useRouter();
const { t } = useI18n();
const generateFormModel = () => {
  return {
    name: '',
    contentType: '',
    content: '',
  };
};
const visible = ref(false);

const visiblePop = ref(false);

const visibleIcon = ref('1');

const handleClickPop = (params) => {
  visibleIcon.value = params;
  visiblePop.value = true;
};
const handleOkPop = () => {
  visiblePop.value = false;
};
const handleCancelPop = () => {
  visiblePop.value = false;
};

const visibleSetting = ref(false);

const handleClickSetting = () => {
  visibleSetting.value = true;
};
const handleOkSetting = () => {
  visibleSetting.value = false;
};
const handleCancelSetting = () => {
  visibleSetting.value = false;
};

const handleClick = (params) => {
  router.push({
    name: 'createdVideo',
    query: {
      dataParams: params,
    },
  });
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
const selectOptions = ref([
  {
    label: '总览',
    value: 'zl',
  },
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
const chartShow = ref(true);
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
    cursor: pointer;
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

.drawerContent {
  width: 100%;
  height: 100%;
  background: #fdfdfd;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  .draLeft {
    width: 122px;
    height: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 16px #dadada40;
    margin-right: 12px;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: none; /* 隐藏 Firefox 滚动条 */
    .draLeftLi {
      width: 110px;
      border-radius: 5px;
      overflow: hidden;
      margin-bottom: 10px;
      .vImg {
        width: 100%;
        display: block;
      }
      .btnL {
        width: 100%;
        height: 32px;
        line-height: 32px;
        font-size: 13px;
        color: #fff;
        text-align: center;
        background: rgba(0, 0, 0, 0.5);
        white-space: nowrap; /* 禁止换行 */
        overflow: hidden; /* 隐藏超出部分 */
        text-overflow: ellipsis; /* 超出部分显示省略号 */
        padding: 0 10px;
      }
    }
    .draLeftLiB {
      border: 3px solid #4a3aff;
      box-sizing: border-box;
    }
  }
  .draZ {
    width: 50px;
    margin-right: 12px;
    background-color: #fff;
    box-shadow: 0px 0px 16px #dadada40;
    .close {
      width: 50px;
      height: 50px;
      background-color: #2d3e55;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      cursor: pointer;
    }
    .see {
      width: 50px;
      height: 50px;
      background-color: #fff;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      cursor: pointer;
    }
    .see1 {
      background-color: #4a3aff;
    }
    .replace {
      color: #fff;
    }
  }
  .draRight {
    width: calc(100% - 196px);
    height: 100%;
    box-shadow: 0px 0px 16px #dadada40;
    background: #f9f9f9;
    overflow: hidden;
    .title {
      width: 100%;
      height: 50px;
      line-height: 50px;
      background-color: #fff;
      color: #333;
      font-size: 16px;
      font-weight: 700;
      padding-left: 20px;
      margin-bottom: 12px;
    }
    .draContent {
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      overflow-y: scroll;
      scrollbar-width: none;
      .laoTie {
        width: 100%;
        padding: 24px;
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 12px;
        .text {
          color: #333;
          text-align: left;
          font-size: 16px;
          margin-bottom: 20px;
          font-weight: 700;
        }
        .task {
          width: 100%;
          padding-left: 40px;
          .taskT {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            margin-bottom: 20px;
            .taskTitle {
              color: #666;
              font-size: 14px;
              font-weight: 700;
            }
            .taskTitle1 {
              padding-left: 15px;
            }
            .taskContent {
              color: #444;
              font-size: 14px;
              font-weight: 700;
              margin-left: 20px;
            }
            .taskImg {
              width: 80px;
              margin-left: 20px;
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
            .taskTab {
              margin-left: 20px;
              width: 460px;
              border: 1px solid #e5e6eb;
              .tabContent {
                width: calc(100% - 30px);
                margin: 0 auto 15px;
                padding: 20px;
                background-color: #f8f8f8;

                .tabLi {
                  display: flex;
                  justify-content: flex-start;
                  margin-bottom: 20px;
                  font-weight: 700;
                  .titleLi {
                    width: 100px;
                    font-size: 12px;
                    color: #666;
                    text-align: right;
                  }
                  .contLi {
                    width: calc(100% - 100px);
                    font-size: 12px;
                    color: #333;
                    text-align: left;
                    padding-left: 12px;
                  }
                }
              }
            }
          }
        }
      }
      .fbAccount {
        width: 100%;
        max-height: 390px;
        background-color: #fff;
        overflow: hidden;
        overflow-y: scroll;
        scrollbar-width: none;
        .textName {
          width: 100%;
          height: 56px;
          margin-bottom: 12px;
          display: flex;
          justify-content: flex-start;
          .textImg {
            width: 25px;
            height: 25px;
            border-radius: 25px;
            margin-top: 15px;
          }
          .textImgName {
            background-color: #f8f8f8;
            margin-left: 20px;
            padding: 12px;
            display: flex;
            justify-content: flex-start;
            border-radius: 10px;
            position: relative;
            .bgT {
              display: none;
              width: 100%;
              height: 56px;
              position: absolute;
              cursor: pointer;
              line-height: 56px;
              text-align: center;
              color: #666;
              top: 0;
              left: 0;
              background-color: #f8f8f8;
              .bgText {
                position: absolute;
                color: #9e9e9e;
                font-size: 20px;
                top: 0px;
                right: 0px;
              }
            }
            .bgTiS {
              display: none;
              padding: 10px;
              border-radius: 10px;
              background-color: #000;
              color: #fff;
              width: 120px;
              text-align: center;
              position: absolute;
              right: -150px;
              top: 5px;
            }
            .Img {
              width: 30px;
              height: 30px;
              border-radius: 25px;
            }
            .name {
              margin-left: 12px;
              .nameTop {
                font-size: 14px;
                color: #333;
              }
              .nameBottom {
                font-size: 10px;
                color: #666;
              }
            }
            .circle {
              color: #6abf40;
              font-size: 18px;
              margin-top: 8px;
              margin-left: 40px;
            }
          }
          .textImgName:hover .bgT {
            display: block;
          }
          .textImgName:hover .bgTiS {
            display: block;
          }
        }
      }
    }
    .menuBox {
      width: calc(100% - 12px);
      border-radius: 10px;
      color: #000;
      background-color: #fff;
      height: 60px;
      display: flex;
      justify-content: space-between;
      box-shadow: 0 0 10px #e7e7e7;
      :deep(.arco-tabs-nav) {
        color: #222;
        font-size: 22px;
        font-weight: 700 !important;
      }
      :deep(.arco-tabs-tab:hover) {
        font-weight: 700 !important;
      }
      :deep(.arco-tabs-tab-active) {
        font-weight: 700 !important;
      }
      :deep(.arco-tabs-tab-active:hover) {
        font-weight: 700 !important;
      }
    }
    .bfBox {
      width: calc(100% - 12px);
      display: flex;
      justify-content: space-between;
      margin: 12px 0;
      .bdpNum {
        width: 18.7%;
        padding: 16px;
        background-color: #fff;
        box-shadow: 0 0 10px #e7e7e7;
        border-radius: 10px;
        .bdpTitle {
          color: #666;
          font-size: 16px;
          text-align: left;
        }
        .bNums {
          font-size: 20px;
          color: #333;
          font-weight: 700;
          margin: 5px 0 10px;
          text-align: left;
        }
        .dd {
          border-radius: 25px;
          height: 20px;
          font-size: 20px;
          color: #000;
          background-color: rgba(93, 163, 123, 0.2);
          text-align: center;
          width: 50px;
          line-height: 18px;
        }
      }
    }
    .qsDb {
      width: calc(100% - 12px);
      padding: 16px;
      background-color: #fff;
      box-shadow: 0 0 10px #e7e7e7;
      display: flex;
      justify-content: space-between;
      border-radius: 10px;
      .qsLeft {
        width: 35%;
        .qsTi {
          color: #000;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .btnCha {
          width: 55px;
          padding: 10px;
          border-radius: 5px;
          background-color: #f1f6fc;
          margin: 20px auto 0;
          display: flex;
          justify-content: space-between;
        }
      }
      .qsRight {
        width: 60%;
        .qsTi {
          color: #000;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 20px;
        }
      }
    }
  }
}
.demoBasicName {
  padding: 10px 15px;
  background-color: #000;
  color: #fff;
}
.myModalSetting {
  width: 100%;
  height: 100%;
  .box {
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    .top {
      width: 100%;
      height: 64px;
      background-color: #fff;
      position: relative;
      .btnTop {
        position: absolute;
        left: 30px;
        top: 15px;
      }
    }
    .vid {
      width: 1024px;
      height: 756px;
      background-color: rgba(0, 0, 0, 1);
      margin: 50px auto 0;
      border-radius: 25px;
      .isIframe {
        width: 100%;
        height: 100%;
        border-radius: 25px;
      }
    }
  }
}
</style>
