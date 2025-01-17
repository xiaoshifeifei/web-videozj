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
                            <a-button class="myBtn" @click="handleClickSetting">
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
                            <a-button class="myBtn" @click="handleClickZ">
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
                        <a-button shape="round" size="mini" disabled>
                          <template #icon>
                            <icon-refresh />
                          </template>
                          <template #default>立即更新</template>
                        </a-button>
                        <a-button
                          shape="round"
                          size="mini"
                          style="margin-left: 10px"
                        >
                          <template #icon>
                            <icon-sync />
                          </template>
                          <template #default>自动回复</template>
                        </a-button>
                      </div>
                    </div>
                    <a-textarea
                      placeholder="Please enter something"
                      :auto-size="{
                        minRows: 4,
                        maxRows: 50,
                      }"
                      style="margin: 10px 0; border: none; border-radius: 10px"
                    />
                    <div class="bt">
                      <a-space>
                        <a-button type="primary" class="myBtn">
                          <template #default>发送</template>
                        </a-button>
                      </a-space>
                    </div>
                    <div class="myCon">
                      <div class="myConL">评论列表</div>

                      <div class="myConR fy">
                        <a-space>
                          <a-switch size="small" />
                          智能翻译
                        </a-space>
                        <div>
                          <a-trigger
                            position="top"
                            :popup-translate="[0, -15]"
                            auto-fit-position
                            :unmount-on-close="false"
                          >
                            <img
                              width="20"
                              style="
                                margin: 0 10px 0 5px;
                                vertical-align: middle;
                                transform: translateY(-3px);
                              "
                              src="../../../assets/images/1101_21_11zon.png"
                              alt=""
                            />
                            <template #content>
                              <div
                                style="
                                  background-color: #1d2129;
                                  height: 50px;
                                  line-height: 50px;
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 0 15px;
                                  color: #fff;
                                "
                              >
                                开启后评论将自动翻译为系统的默认语言，可点击右上角头像，修改系统语言
                              </div>
                            </template>
                          </a-trigger>
                        </div>
                        <a-select
                          v-model="formModel.contentType"
                          :options="contentTypeOptions"
                          placeholder="所有账号"
                        />
                      </div>
                    </div>
                    <div class="plAll">
                      <a-space>
                        <a-button type="outline" class="myBtn myBtn1">
                          <template #default>所有评论</template>
                        </a-button>
                      </a-space>
                      <a-space style="margin-left: 10px">
                        <a-button type="outline" class="myBtn">
                          <template #default>我的评论</template>
                        </a-button>
                      </a-space>
                    </div>
                    <div class="contentP">
                      <div class="contentText">
                        <img
                          class="activeImg"
                          src="../../../assets/images/8_8_11zon.png"
                          alt=""
                        />
                        <div class="conRg">
                          <div class="title"
                            >海绵宝宝 <span class="zuz">作者</span></div
                          >
                          <div class="content"
                            >Through UPMee, I can share my creations with more
                            people and convey my thoughts and values</div
                          >

                          <div class="data">
                            <div class="dataL">2024-11-06</div>
                            <div class="dataR">
                              <div
                                ><icon-heart-fill style="cursor: pointer" />
                                100</div
                              >
                              <div
                                style="
                                  cursor: pointer;
                                  margin: 0 40px;
                                  color: #333;
                                "
                                @click="hf = !hf"
                                ><icon-message /> 回复</div
                              >
                              <div style="cursor: pointer"
                                ><icon-delete /> 删除</div
                              >
                            </div>
                          </div>
                          <div v-if="hf" class="dataTe">
                            <a-textarea
                              placeholder="Please enter something"
                              :auto-size="{
                                minRows: 2,
                                maxRows: 50,
                              }"
                              style="
                                margin: 10px 0;
                                border: none;
                                border-radius: 10px;
                              "
                            />
                            <div class="textRt">
                              <a-space>
                                <a-button
                                  type="dashed"
                                  @click="hf = !hf"
                                  class="myBtn1"
                                >
                                  <template #default>取消</template>
                                </a-button>
                              </a-space>
                              <a-space style="margin-left: 10px">
                                <a-button
                                  type="outline"
                                  @click="hf = !hf"
                                  class="myBtn"
                                >
                                  <template #default>发送</template>
                                </a-button>
                              </a-space>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="contentText">
                        <img
                          class="activeImg"
                          src="../../../assets/images/8_8_11zon.png"
                          alt=""
                        />
                        <div class="conRg">
                          <div class="title">海绵宝宝</div>
                          <div class="content"
                            >Through UPMee, I can share my creations with more
                            people and convey my thoughts and values</div
                          >
                          <div class="data">
                            <div class="dataL">2024-11-06</div>
                            <div class="dataR">
                              <div
                                ><icon-heart-fill style="cursor: pointer" />
                                100</div
                              >
                              <div
                                style="
                                  cursor: pointer;
                                  margin: 0 40px;
                                  color: #333;
                                "
                                ><icon-message /> 回复</div
                              >
                              <div style="cursor: pointer"
                                ><icon-delete /> 删除</div
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="contentText">
                        <img
                          class="activeImg"
                          src="../../../assets/images/8_8_11zon.png"
                          alt=""
                        />
                        <div class="conRg">
                          <div class="title">海绵宝宝</div>
                          <div class="content"
                            >Through UPMee, I can share my creations with more
                            people and convey my thoughts and values</div
                          >
                          <div class="data">
                            <div class="dataL">2024-11-06</div>
                            <div class="dataR">
                              <div
                                ><icon-heart-fill style="cursor: pointer" />
                                100</div
                              >
                              <div
                                style="
                                  cursor: pointer;
                                  margin: 0 40px;
                                  color: #333;
                                "
                                ><icon-message /> 回复</div
                              >
                              <div style="cursor: pointer"
                                ><icon-delete /> 删除</div
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="contentText">
                        <img
                          class="activeImg"
                          src="../../../assets/images/8_8_11zon.png"
                          alt=""
                        />
                        <div class="conRg">
                          <div class="title">海绵宝宝</div>
                          <div class="content"
                            >Through UPMee, I can share my creations with more
                            people and convey my thoughts and values</div
                          >
                          <div class="data">
                            <div class="dataL">2024-11-06</div>
                            <div class="dataR">
                              <div
                                ><icon-heart-fill style="cursor: pointer" />
                                100</div
                              >
                              <div
                                style="
                                  cursor: pointer;
                                  margin: 0 40px;
                                  color: #333;
                                "
                                ><icon-message /> 回复</div
                              >
                              <div style="cursor: pointer"
                                ><icon-delete /> 删除</div
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="contentText">
                        <img
                          class="activeImg"
                          src="../../../assets/images/8_8_11zon.png"
                          alt=""
                        />
                        <div class="conRg">
                          <div class="title">海绵宝宝</div>
                          <div class="content"
                            >Through UPMee, I can share my creations with more
                            people and convey my thoughts and values</div
                          >
                          <div class="data">
                            <div class="dataL">2024-11-06</div>
                            <div class="dataR">
                              <div
                                ><icon-heart-fill style="cursor: pointer" />
                                100</div
                              >
                              <div
                                style="
                                  cursor: pointer;
                                  margin: 0 40px;
                                  color: #333;
                                "
                                ><icon-message /> 回复</div
                              >
                              <div style="cursor: pointer"
                                ><icon-delete /> 删除</div
                              >
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
      </div>
    </div>
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
    <a-modal
      v-model:visible="visibleZ"
      :footer="false"
      title-align="start"
      @ok="handleOkZ"
      @cancel="handleCancelZ"
      hide-title
      width="900px"
      :bodyStyle="{ padding: 0 }"
      class="myModalZ"
    >
      <div class="topB">
        <div class="boxTop">
          <div class="title">夜幕降临</div>
          <div v-if="paramsTrue" class="btn"
            ><a-space>
              <a-trigger
                position="top"
                :popup-translate="[0, -10]"
                auto-fit-position
                :unmount-on-close="false"
              >
                <a-button class="myBtn" @click="handleClickSetting">
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
            <a-space>
              <a-trigger
                position="top"
                :popup-translate="[0, -10]"
                auto-fit-position
                :unmount-on-close="false"
              >
                <a-button class="myBtn" @click="paramsTrue = false">
                  <template #icon>
                    <icon-list size="24" />
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
                    查看评论
                  </div>
                </template>
              </a-trigger>
            </a-space>
          </div>
        </div>
        <div class="box" v-if="paramsTrue">
          <div class="boxLi">
            <div class="li">
              <div class="title">播放量</div>
              <div class="content">--</div>
              <div class="bottom">--</div>
            </div>
            <div class="li">
              <div class="title">点赞数</div>
              <div class="content">--</div>
              <div class="bottom">--</div>
            </div>
            <div class="li">
              <div class="title">评论数</div>
              <div class="content">--</div>
              <div class="bottom">--</div>
            </div>
            <div class="li">
              <div class="title">分享数</div>
              <div class="content">--</div>
              <div class="bottom">--</div>
            </div>
            <div class="li">
              <div class="title">收藏数</div>
              <div class="content">--</div>
              <div class="bottom">--</div>
            </div>
          </div>
          <div class="qus qum">
            <div class="title">趋势对比</div>
            <div class="select">
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
            <div class="emptyS">
              <a-empty style="background-color: #fff">
                <template #image>
                  <img
                    style="width: 200px; height: 200px"
                    src="https://cdn.dreamera.cn/upmee_pics/overview_emptyRq.svg"
                    alt=""
                  />
                </template>
                暂无数据
              </a-empty>
            </div>
          </div>
          <div class="qus">
            <div class="title">详细数据</div>
            <div class="emptyS">
              <a-empty style="background-color: #fff">
                <template #image>
                  <img
                    style="width: 200px; height: 200px"
                    src="https://cdn.dreamera.cn/upmee_pics/overview_emptyRq.svg"
                    alt=""
                  />
                </template>
                暂无数据
              </a-empty>
            </div>
          </div>
        </div>
        <div class="vR" v-else>
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
                    <a-button class="myBtn" @click="handleClickSetting">
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
                    <a-button class="myBtn" @click="paramsTrue = true">
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
                <icon-thumb-up-fill class="up-icon" :rotate="90" :size="20" />

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
              <img class="imgPl" src="../../../assets/images/pl.png" alt="" />
            </div>
          </div>
          <div class="pl-bottom">
            <div class="myCon">
              <div class="myConL">添加评论</div>
              <div class="myConR">
                <a-button shape="round" size="mini" disabled>
                  <template #icon>
                    <icon-refresh />
                  </template>
                  <template #default>立即更新</template>
                </a-button>
                <a-button shape="round" size="mini" style="margin-left: 10px">
                  <template #icon>
                    <icon-sync />
                  </template>
                  <template #default>自动回复</template>
                </a-button>
              </div>
            </div>
            <a-textarea
              placeholder="Please enter something"
              :auto-size="{
                minRows: 4,
                maxRows: 50,
              }"
              style="margin: 10px 0; border: none; border-radius: 10px"
            />
            <div class="bt">
              <a-space>
                <a-button type="primary" class="myBtn">
                  <template #default>发送</template>
                </a-button>
              </a-space>
            </div>
            <div class="myCon">
              <div class="myConL">评论列表</div>

              <div class="myConR fy">
                <a-space>
                  <a-switch size="small" />
                  智能翻译
                </a-space>
                <div>
                  <a-trigger
                    position="top"
                    :popup-translate="[0, -15]"
                    auto-fit-position
                    :unmount-on-close="false"
                  >
                    <img
                      width="20"
                      style="
                        margin: 0 10px 0 5px;
                        vertical-align: middle;
                        transform: translateY(-3px);
                      "
                      src="../../../assets/images/1101_21_11zon.png"
                      alt=""
                    />
                    <template #content>
                      <div
                        style="
                          background-color: #1d2129;
                          height: 50px;
                          line-height: 50px;
                          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                          padding: 0 15px;
                          color: #fff;
                        "
                      >
                        开启后评论将自动翻译为系统的默认语言，可点击右上角头像，修改系统语言
                      </div>
                    </template>
                  </a-trigger>
                </div>
                <a-select
                  v-model="formModel.contentType"
                  :options="contentTypeOptions"
                  placeholder="所有账号"
                />
              </div>
            </div>
            <div class="plAll">
              <a-space>
                <a-button type="outline" class="myBtn myBtn1">
                  <template #default>所有评论</template>
                </a-button>
              </a-space>
              <a-space style="margin-left: 10px">
                <a-button type="outline" class="myBtn">
                  <template #default>我的评论</template>
                </a-button>
              </a-space>
            </div>
            <div class="contentP">
              <div class="contentText">
                <img
                  class="activeImg"
                  src="../../../assets/images/8_8_11zon.png"
                  alt=""
                />
                <div class="conRg">
                  <div class="title"
                    >海绵宝宝 <span class="zuz">作者</span></div
                  >
                  <div class="content"
                    >Through UPMee, I can share my creations with more people
                    and convey my thoughts and values</div
                  >

                  <div class="data">
                    <div class="dataL">2024-11-06</div>
                    <div class="dataR">
                      <div><icon-heart-fill style="cursor: pointer" /> 100</div>
                      <div
                        style="cursor: pointer; margin: 0 40px; color: #333"
                        @click="hf = !hf"
                        ><icon-message /> 回复</div
                      >
                      <div style="cursor: pointer"><icon-delete /> 删除</div>
                    </div>
                  </div>
                  <div v-if="hf" class="dataTe">
                    <a-textarea
                      placeholder="Please enter something"
                      :auto-size="{
                        minRows: 2,
                        maxRows: 50,
                      }"
                      style="margin: 10px 0; border: none; border-radius: 10px"
                    />
                    <div class="textRt">
                      <a-space>
                        <a-button
                          type="dashed"
                          @click="hf = !hf"
                          class="myBtn1"
                        >
                          <template #default>取消</template>
                        </a-button>
                      </a-space>
                      <a-space style="margin-left: 10px">
                        <a-button
                          type="outline"
                          @click="hf = !hf"
                          class="myBtn"
                        >
                          <template #default>发送</template>
                        </a-button>
                      </a-space>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contentText">
                <img
                  class="activeImg"
                  src="../../../assets/images/8_8_11zon.png"
                  alt=""
                />
                <div class="conRg">
                  <div class="title">海绵宝宝</div>
                  <div class="content"
                    >Through UPMee, I can share my creations with more people
                    and convey my thoughts and values</div
                  >
                  <div class="data">
                    <div class="dataL">2024-11-06</div>
                    <div class="dataR">
                      <div><icon-heart-fill style="cursor: pointer" /> 100</div>
                      <div style="cursor: pointer; margin: 0 40px; color: #333"
                        ><icon-message /> 回复</div
                      >
                      <div style="cursor: pointer"><icon-delete /> 删除</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contentText">
                <img
                  class="activeImg"
                  src="../../../assets/images/8_8_11zon.png"
                  alt=""
                />
                <div class="conRg">
                  <div class="title">海绵宝宝</div>
                  <div class="content"
                    >Through UPMee, I can share my creations with more people
                    and convey my thoughts and values</div
                  >
                  <div class="data">
                    <div class="dataL">2024-11-06</div>
                    <div class="dataR">
                      <div><icon-heart-fill style="cursor: pointer" /> 100</div>
                      <div style="cursor: pointer; margin: 0 40px; color: #333"
                        ><icon-message /> 回复</div
                      >
                      <div style="cursor: pointer"><icon-delete /> 删除</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contentText">
                <img
                  class="activeImg"
                  src="../../../assets/images/8_8_11zon.png"
                  alt=""
                />
                <div class="conRg">
                  <div class="title">海绵宝宝</div>
                  <div class="content"
                    >Through UPMee, I can share my creations with more people
                    and convey my thoughts and values</div
                  >
                  <div class="data">
                    <div class="dataL">2024-11-06</div>
                    <div class="dataR">
                      <div><icon-heart-fill style="cursor: pointer" /> 100</div>
                      <div style="cursor: pointer; margin: 0 40px; color: #333"
                        ><icon-message /> 回复</div
                      >
                      <div style="cursor: pointer"><icon-delete /> 删除</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contentText">
                <img
                  class="activeImg"
                  src="../../../assets/images/8_8_11zon.png"
                  alt=""
                />
                <div class="conRg">
                  <div class="title">海绵宝宝</div>
                  <div class="content"
                    >Through UPMee, I can share my creations with more people
                    and convey my thoughts and values</div
                  >
                  <div class="data">
                    <div class="dataL">2024-11-06</div>
                    <div class="dataR">
                      <div><icon-heart-fill style="cursor: pointer" /> 100</div>
                      <div style="cursor: pointer; margin: 0 40px; color: #333"
                        ><icon-message /> 回复</div
                      >
                      <div style="cursor: pointer"><icon-delete /> 删除</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="width: 100%; height: 80px"></div>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const selectedIndex = ref(1);
const paramsTrue = ref(true);
const isVideo = ref('https://cdn.dreamera.cn/upmee_video/demo_video.mp4');
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

const visibleZ = ref(false);

const handleClickZ = () => {
  visibleZ.value = true;
};
const handleOkZ = () => {
  visibleZ.value = false;
};
const handleCancelZ = () => {
  visibleZ.value = false;
};

const formModel = ref({
  contentType: '',
});
const hf = ref(false);

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
                      border: 2px solid #3b74fa;
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
                        background-color: #3b74fa;
                        margin-top: 22.5px;
                      }
                      .myBtn {
                        height: 32px;
                        width: 32px;
                        background-color: #3b74fa;
                        border-radius: 6px;
                        color: #fff;
                      }
                      .myBtn:hover {
                        background-color: #6a97ff;
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
                  margin-top: 16px;
                  width: 100%;
                  min-height: 550px;
                  background-color: #fff;
                  border-radius: 10px;
                  padding: 25px 15px;
                  .myCon {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    height: 32px;
                    line-height: 32px;
                    font-size: 12px;
                    .myConL {
                      font-size: 14px;
                      color: #333;
                      font-weight: 700;
                    }
                    .fy {
                      display: flex;
                      justify-content: flex-end;
                      color: #333;
                      font-size: 14px;

                      :deep(.arco-select-view-single) {
                        width: 120px;
                        height: 30px;
                        line-height: 30px;
                        border: none;
                        background-color: #fff;
                      }
                    }
                  }
                  .plAll {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    margin-top: 10px;
                    .myBtn {
                      width: 100px;
                      height: 35px;
                      line-height: 35px;
                      padding: 0 25px;
                      border-radius: 5px;
                      border: 1px solid #e6e6e6;
                      color: #333;
                      font-size: 14px;
                    }
                    .myBtn:hover {
                      background-color: #ebf3ff;
                      border: 1px solid #388eff;
                      color: #388eff;
                    }
                    .myBtn1 {
                      background-color: #ebf3ff;
                      border: 1px solid #388eff;
                      color: #388eff;
                    }
                  }
                  :deep(.arco-textarea) {
                    border: 1px solid #dee0e3;
                    background-color: #fff;
                    border-radius: 10px;
                    height: 180px;
                  }
                  .bt {
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 20px;
                    .myBtn {
                      width: 100px;
                      height: 40px;
                      background-color: #3b74fa;
                      padding: 0 25px;
                      border-radius: 8px;
                      color: #fff;
                    }
                    .myBtn:hover {
                      background-color: #6a97ff;
                    }
                  }
                  .contentP {
                    width: 100%;
                    margin-top: 20px;
                    height: 600px;
                    overflow: hidden auto;
                    padding: 20px 0 50px 0;
                    scrollbar-width: none; /* 隐藏滚动条 */
                    .contentText {
                      width: 100%;
                      margin-bottom: 50px;
                      display: flex;
                      justify-content: flex-start;
                      .activeImg {
                        margin-right: 12px;
                        width: 40px;
                        height: 40px;
                        border-radius: 25px;
                      }
                      .conRg {
                        width: calc(100% - 52px);
                        padding: 0 10px 0 0;
                        .title {
                          text-align: left;
                          font-size: 17px;
                          color: #333;
                          font-weight: 700;
                          .zuz {
                            display: inline-block;
                            background-color: #ebf3ff;
                            padding: 5px 10px;
                            border-radius: 5px;
                            color: #338bff;
                            font-size: 12px;
                            margin-left: 10px;
                          }
                        }
                        .content {
                          text-align: left;
                          padding: 12px 0;
                          min-height: 20px;
                          max-height: 80px;
                          display: block;
                          overflow: hidden auto;
                          font-size: 14px;
                          color: #1d2129;
                        }
                        .data {
                          display: flex;
                          justify-content: space-between;
                          margin-top: 20px;
                          .dataL {
                            color: #999;
                            font-size: 14px;
                          }
                          .dataR {
                            display: flex;
                            justify-content: flex-end;
                            margin-right: 8px;
                            color: #999999;
                          }
                        }
                        .dataTe {
                          padding-top: 10px;
                        }
                        .textRt {
                          display: flex;
                          justify-content: flex-end;
                          margin-top: 8px;
                          .myBtn1 {
                            height: 30px;
                            border-radius: 5px;
                            color: #4e5969;
                          }

                          .myBtn {
                            height: 30px;
                            background-color: #3b74fa;
                            border-radius: 5px;
                            color: #fff;
                          }
                          .myBtn:hover {
                            background-color: #6a97ff;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
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
.myModalZ {
  background-color: #f7f8fa;
  overflow: hidden;
  scrollbar-width: none; /* 隐藏滚动条 */
  .topB {
    width: 100%;
    height: 900px;
    background-color: #f7f8fa;
    padding: 20px;
    overflow: hidden;
    scrollbar-width: none; /* 隐藏滚动条 */
    .boxTop {
      width: 100%;
      height: 80px;
      line-height: 80px;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      box-shadow: 0 1px 6px #0000000d;
      padding: 0 20px;
      border-radius: 10px;
      .title {
        color: #333;
        font-size: 16px;
        font-weight: 700;
      }
      .btn {
        display: flex;
        justify-content: flex-end;

        .myBtn {
          height: 35px;
          width: 35px;
          background-color: #3b74fa;
          border-radius: 6px;
          color: #fff;
          margin-left: 15px;
        }
        .myBtn:hover {
          background-color: #6a97ff;
        }
      }
    }
    .box {
      width: 100%;
      height: 760px;
      overflow: hidden scroll;
      scrollbar-width: none; /* 隐藏滚动条 */
      position: relative;
      margin-top: 20px;

      .boxLi {
        width: 100%;
        height: 130px;
        margin: 0 auto 15px;
        display: flex;
        justify-content: space-between;
        .li {
          height: 130px;
          width: calc(20% - 10px);
          background-color: #fff;
          padding: 16px;
          box-shadow: 0 1px 6px #0000000d;
          border-radius: 8px;
          .title {
            color: #666;
            font-size: 16px;
            text-align: left;
          }
          .content {
            color: #333;
            font-size: 30px;
            text-align: left;
          }
          .bottom {
            padding: 0px 10px;
            border-radius: 25px;
            width: 50%;
            background-color: #d3eadd;
            text-align: center;
          }
        }
      }
      .qus {
        width: 100%;
        background-color: #fff;
        box-shadow: 0 1px 6px #0000000d;
        padding: 40px 20px;
        border-radius: 10px;
        .title {
          color: #333;
          font-size: 16px;
          font-weight: 700;
        }
        .select {
          width: 100%;
          display: flex;
          justify-content: space-between;
          :deep(.arco-select-view-single) {
            width: 150px;
            height: 34px;
            border: 1px solid rgb(224, 224, 224);
            margin-top: 13px;
            margin-right: 12px;
            border-radius: 5px;
            background-color: #fff;
          }
        }
        .emptyS {
          width: 100%;
          height: 240px;
          background-color: #fff;
        }
      }
      .qum {
        margin-bottom: 15px;
      }
    }
    .vR {
      width: 100%;
      height: 760px;
      overflow: hidden;
      overflow-y: scroll;
      scrollbar-width: none;
      border-radius: 10px;
      margin-top: 20px;
      margin-bottom: 400px;
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
              background-color: #3b74fa;
              margin-top: 22.5px;
            }
            .myBtn {
              height: 32px;
              width: 32px;
              background-color: #3b74fa;
              border-radius: 6px;
              color: #fff;
            }
            .myBtn:hover {
              background-color: #6a97ff;
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
        margin-top: 16px;
        width: 100%;
        height: 830px;
        background-color: #fff;
        border-radius: 10px;
        padding: 25px 15px;
        overflow: hidden;

        .myCon {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 32px;
          line-height: 32px;
          font-size: 12px;
          .myConL {
            font-size: 14px;
            color: #333;
            font-weight: 700;
          }
          .fy {
            display: flex;
            justify-content: flex-end;
            color: #333;
            font-size: 14px;

            :deep(.arco-select-view-single) {
              width: 120px;
              height: 30px;
              line-height: 30px;
              border: none;
              background-color: #fff;
            }
          }
        }
        .plAll {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          margin-top: 10px;
          .myBtn {
            width: 100px;
            height: 35px;
            line-height: 35px;
            padding: 0 25px;
            border-radius: 5px;
            border: 1px solid #e6e6e6;
            color: #333;
            font-size: 14px;
          }
          .myBtn:hover {
            background-color: #ebf3ff;
            border: 1px solid #388eff;
            color: #388eff;
          }
          .myBtn1 {
            background-color: #ebf3ff;
            border: 1px solid #388eff;
            color: #388eff;
          }
        }
        :deep(.arco-textarea) {
          border: 1px solid #dee0e3;
          background-color: #fff;
          border-radius: 10px;
          height: 180px;
        }
        .bt {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 20px;
          .myBtn {
            width: 100px;
            height: 40px;
            background-color: #3b74fa;
            padding: 0 25px;
            border-radius: 8px;
            color: #fff;
          }
          .myBtn:hover {
            background-color: #6a97ff;
          }
        }
        .contentP {
          width: 100%;
          margin-top: 20px;
          height: 600px;
          overflow: hidden auto;
          padding: 20px 0 50px 0;
          scrollbar-width: none; /* 隐藏滚动条 */
          .contentText {
            width: 100%;
            margin-bottom: 50px;
            display: flex;
            justify-content: flex-start;
            .activeImg {
              margin-right: 12px;
              width: 40px;
              height: 40px;
              border-radius: 25px;
            }
            .conRg {
              width: calc(100% - 52px);
              padding: 0 10px 0 0;
              .title {
                text-align: left;
                font-size: 17px;
                color: #333;
                font-weight: 700;
                .zuz {
                  display: inline-block;
                  background-color: #ebf3ff;
                  padding: 5px 10px;
                  border-radius: 5px;
                  color: #338bff;
                  font-size: 12px;
                  margin-left: 10px;
                }
              }
              .content {
                text-align: left;
                padding: 12px 0;
                min-height: 20px;
                max-height: 80px;
                display: block;
                overflow: hidden auto;
                font-size: 14px;
                color: #1d2129;
              }
              .data {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                .dataL {
                  color: #999;
                  font-size: 14px;
                }
                .dataR {
                  display: flex;
                  justify-content: flex-end;
                  margin-right: 8px;
                  color: #999999;
                }
              }
              .dataTe {
                padding-top: 10px;
              }
              .textRt {
                display: flex;
                justify-content: flex-end;
                margin-top: 8px;
                .myBtn1 {
                  height: 30px;
                  border-radius: 5px;
                  color: #4e5969;
                }

                .myBtn {
                  height: 30px;
                  background-color: #3b74fa;
                  border-radius: 5px;
                  color: #fff;
                }
                .myBtn:hover {
                  background-color: #6a97ff;
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
