<template>
  <div class="container">
    <div class="top">
      <div class="topBox">
        <div class="box">
          <div class="account">
            <div class="accountTop">账号管理</div>
            <div class="accountBottom">可以在此管理各个媒体的账号</div>
          </div>
          <div>
            <a-space>
              <a-button type="primary" @click="handleClick" class="myBtn">
                <template #icon>
                  <icon-plus />
                </template>
                <template #default>添加账号</template>
              </a-button>
              <a-trigger
                position="br"
                :popup-translate="[0, 10]"
                auto-fit-position
                :unmount-on-close="false"
              >
                <a-button class="myBtn">
                  <template #icon>
                    <icon-more />
                  </template>
                </a-button>
                <template #content>
                  <div class="demo-basic">
                    <div>
                      <a-button type="text" @click="handleClickFen"
                        >账号分组</a-button
                      >
                    </div>
                    <div>
                      <a-button type="text" @click="handleClickPj"
                        >批量解绑</a-button
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
            <a-button type="primary" @click="handleClickZd" class="myBtnR">
              <template #icon>
                <icon-apps />
              </template>
              <template #default>自动化</template>
            </a-button>
            <a-button type="primary" class="myBtnR" @click="handleClickFen">
              <template #icon>
                <icon-apps />
              </template>
              <template #default>分组</template>
            </a-button>
          </a-space>
        </div>
      </div>
      <div class="footerBox" v-if="data">
        <div class="footer">
          <div class="footerL">
            <img src="../../../assets/images/7_7_11zon.png" alt="" />
          </div>
          <div class="footerR">
            <div class="footerInfoL">
              <a-space>
                <a-tooltip content="当前授权账号已过期,点击重新授权">
                  <div class="foBox">
                    <div class="rTop">已失效</div>
                    <div class="infoT">
                      <div class="infoImg">
                        <img src="../../../assets/images/xn.jpg" alt="" />
                      </div>
                      <div class="content">
                        <div class="title">哈哈哈你就将就</div>
                        <a-space>
                          <a-tooltip content="点击修改">
                            <a-input
                              :style="{ width: '170px' }"
                              placeholder="备注"
                              allow-clear
                            />
                          </a-tooltip>
                        </a-space>
                        <div class="title1">
                          <span> 0 粉丝 </span>
                          <a-trigger
                            position="br"
                            auto-fit-position
                            :unmount-on-close="false"
                          >
                            <icon-more class="icon" />
                            <template #content>
                              <div class="demo-basic">
                                <a-button @click="handleClickJc">
                                  解除关联</a-button
                                >
                              </div>
                            </template>
                          </a-trigger>
                        </div>
                      </div>
                    </div>
                    <div class="infoB">
                      <div class="sp">
                        <img
                          width="11"
                          style="
                            vertical-align: middle;
                            opacity: 0.7;
                            transform: translateY(-2px);
                          "
                          src="../../../assets/images/3_3_11zon.png"
                          alt=""
                        />
                        0
                      </div>
                      <div class="sp">
                        <img
                          width="11"
                          style="
                            vertical-align: middle;
                            opacity: 0.7;
                            transform: translateY(-2px);
                          "
                          src="../../../assets/images/4_4_11zon.png"
                          alt=""
                        />
                        0
                      </div>
                      <div class="sp">
                        <img
                          width="11"
                          style="
                            vertical-align: middle;
                            opacity: 0.7;
                            transform: translateY(-2px);
                          "
                          src="../../../assets/images/5_5_11zon.png"
                          alt=""
                        />
                        0
                      </div>
                    </div>
                  </div>
                </a-tooltip>
              </a-space>
            </div>
            <div class="footerInfoR">
              <a-space>
                <a-trigger
                  position="br"
                  auto-fit-position
                  :unmount-on-close="false"
                >
                  <a-button class="myBtnInfoT">
                    <template #icon>
                      <icon-more />
                    </template>
                  </a-button>
                  <template #content>
                    <div class="demo-basic">
                      <a-button @click="handleClickPj"> 批量解绑</a-button>
                    </div>
                  </template>
                </a-trigger>
                <a-button class="myBtnInfo">
                  <template #icon>
                    <icon-plus />
                  </template>
                </a-button>
              </a-space>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="ko">
        <div>
          <img
            width="200"
            style="margin: auto"
            src="../../../assets/images/6_6_11zon.png"
            alt=""
          />
        </div>
        <div class="text">
          当前还未关联任何媒体账号，关联账号即可批量发布哦，快去试试吧~
        </div>
        <a-button type="primary" @click="handleClick" class="myBtn">
          <template #default>添加账号</template>
        </a-button>
      </div>
    </div>
    <a-modal
      v-model:visible="visible"
      :footer="null"
      title-align="start"
      @ok="handleOk"
      @cancel="handleCancel"
      hide-title
      ok-text="下一步"
      width="800px"
      class="myModal"
    >
      <div class="modalTitle"> 添加账号 </div>
      <div style="padding-left: 40px; font-size: 16px; color: #333">
        请选择要添加的账号
      </div>
      <div class="pxu">
        <div class="pxu-li">
          <img src="../../../assets/images/7_7_11zon.png" alt="" />
        </div>
        <div class="pxu-li">
          <img src="../../../assets/images/8_8_11zon.png" alt="" />
        </div>
        <div class="pxu-li">
          <img src="../../../assets/images/9_9_11zon.png" alt="" />
        </div>
        <div class="pxu-li">
          <img src="../../../assets/images/10_10_11zon.png" alt="" />
        </div>
        <div class="pxu-li">
          <img src="../../../assets/images/1001_11_11zon.png" alt="" />
        </div>
        <div class="pxu-li">
          <img src="../../../assets/images/1002_12_11zon.png" alt="" />
        </div>
        <div class="pxu-li">
          <img src="../../../assets/images/1003_13_11zon.png" alt="" />
        </div>
        <div class="pxu-li">
          <img src="../../../assets/images/1004_14_11zon.png" alt="" />
        </div>
        <div class="pxu-li">
          <img src="../../../assets/images/1005_15_11zon.png" alt="" />
        </div>
        <div class="pxu-li">
          <img src="../../../assets/images/1006_16_11zon.png" alt="" />
        </div>
        <div class="pxu-li">
          <img src="../../../assets/images/1007_17_11zon.png" alt="" />
        </div>
        <div class="pxu-li">
          <img src="../../../assets/images/1008_18_11zon.png" alt="" />
        </div>
        <div class="pxu-li"
          ><img src="../../../assets/images/1009_19_11zon.png" alt="" />
        </div>

        <div class="pxu-li">
          <img src="../../../assets/images/1100_20_11zon.png" alt="" />
        </div>
      </div>
      <div class="shoQ">
        <div>
          <a-trigger
            position="br"
            :popup-translate="[200, 20]"
            auto-fit-position
            :unmount-on-close="false"
          >
            <img
              width="20"
              style="vertical-align: middle; transform: translateY(-2px)"
              src="../../../assets/images/1101_21_11zon.png"
              alt=""
            />
            <template #content>
              <div
                style="
                  background-color: #fff;
                  height: 50px;
                  line-height: 50px;
                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                  padding: 0 15px;
                "
              >
                企业下所有团队已授权账号的总和，可以升级会员获得更多额度
                <span style="color: #4a3aff; cursor: pointer">立即升级</span>
              </div>
            </template>
          </a-trigger>

          已授权: 1 / 20
        </div>
        <div>
          <a-space>
            <a-button type="outline" @click="handleCancel" class="myBtn1">
              <template #default>取消</template>
            </a-button>
            <a-button type="primary" @click="handleClick" class="myBtn">
              <template #default>下一步</template>
            </a-button>
          </a-space>
        </div>
      </div>
    </a-modal>
    <a-modal
      v-model:visible="visibleFen"
      :footer="null"
      title-align="start"
      @ok="handleOkFen"
      @cancel="handleCancelFen"
      hide-title
      ok-text="下一步"
      width="1000px"
      class="myModalFen"
    >
      <div class="modalTitle"> 账号分组 </div>
      <div style="padding-left: 40px; font-size: 16px; color: #333">
        可以为你的账号添加分组，发布视频时能更快速进行选择
      </div>
      <div class="pxu">
        <div class="pxu-li">
          <a-button type="text" @click="handleClickAddFen('')" class="myBtn">
            <template #icon>
              <div><icon-plus /></div>
            </template>
            <template #default><div>新建分组</div></template>
          </a-button>
        </div>
        <div class="pxu-li2">
          <div class="fBtn">分组一</div>
          <div class="zz">
            <div style="width: 100%; height: 1px"></div>
            <div class="del">
              <img
                width="20"
                style="color: red"
                src="../../../assets/images/1102_22_11zon.png"
                alt=""
              />
            </div>
            <a-button type="text" class="myBtn">
              <template #default><div>使用</div></template>
            </a-button>
            <div class="zzBtnC">
              <a-button
                type="text"
                class="zzBtn"
                @click="handleClickAddFen('分组一')"
              >
                <template #default><div>编辑</div></template>
              </a-button>
              <a-button type="text" class="zzBtn">
                <template #default><div>置顶</div></template>
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
    <a-modal
      v-model:visible="visibleAddFen"
      title-align="start"
      @ok="handleOkAddFen"
      @cancel="handleCancelAddFen"
      hide-title
      width="1000px"
      class="myModalAddFen"
    >
      <div class="popContent">
        <div class="modalTitle"> 新建账号分组 </div>
        <div style="padding-left: 40px; font-size: 16px; color: #333">
          分组名称
        </div>
        <a-space>
          <a-input
            :style="{ width: '870px' }"
            placeholder="请输入"
            v-model="fenZu"
            allow-clear
          />
        </a-space>
        <div class="xz">
          <div> 选择账号 </div>
          <div>
            <a-switch
              size="small"
              style="margin-right: 10px; transform: translateY(-1px)"
            />过滤以分组
          </div>
        </div>
        <a-empty>
          <template #image>
            <img
              style="width: 200px; height: 200px"
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAwIDMwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBvcGFjaXR5PSIuMzAyIiBkPSJNMTAzLjI3MSA5Ni45MTJjNy43NTMgMCAxNC4zOTkgNC4wNjUgMTcuMTk4IDkuODQ1aDEuNDM3YzcuNjA5IDAgMTMuNzc3IDYuMTY4IDEzLjc3NyAxMy43Nzd2MS4zNjhjMCA3LjYwOS02LjE2OCAxMy43NzYtMTMuNzc3IDEzLjc3Nkg4Ni4wMjNjLTcuNjA5IDAtMTMuNzc2LTYuMTY3LTEzLjc3Ni0xMy43NzZ2LTEuMzY4YzAtNy42MDkgNi4xNjctMTMuNzc3IDEzLjc3Ni0xMy43NzdoLjA1YzIuNzk4LTUuNzggOS40NDQtOS44NDUgMTcuMTk4LTkuODQ1WiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMTMwLjAzNCA4Mi4xOTIgNzIuODUxLTIwLjk2OWE0LjIyOSA0LjIyOSAwIDAgMSA1LjA1NCAyLjM5MmwyMi41MjYgNTIuMzE3YTQuMjI5IDQuMjI5IDAgMCAxLTIuNjgxIDUuNzI3bC03NyAyMi44NDdhNC4yMyA0LjIzIDAgMCAxLTUuMjA4LTIuNjk3bC0xOC4zNzctNTQuMTk1YTQuMjI5IDQuMjI5IDAgMCAxIDIuODM1LTUuNDIyWiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMTI4Ljk2MyAxMjcuMzUgMjguODE2LTYuNzM2YTcuNDAxIDcuNDAxIDAgMCAwIDQuODQtMy43MTNsMi45OTUtNS41OTZhNy40MDQgNy40MDQgMCAwIDEgNC41MDUtMy42MjdsMzIuMDQtOS4wOTJhNy40IDcuNCAwIDAgMCA1LjM3OC02LjkxMWwuNzQ4LTI2LjU0YTQuMjMgNC4yMyAwIDAgMC01LjMyNC00LjIwNGwtNzguMjQzIDIxLjAwOGE0LjIzIDQuMjMgMCAwIDAtMy4xMjUgNC4zMzNsMi4xODYgMzcuMjA4YTQuMjI5IDQuMjI5IDAgMCAwIDUuMTg0IDMuODdaIiBmaWxsPSJ1cmwoI2MpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xOTYuMDQ4IDEwNC41NiAzLjc0NCAzLjczOC0zLjc0NCAzLjczOC0zLjc0NC0zLjczOCAzLjc0NC0zLjczOFpNMTk2LjA0OCAxMjMuMzVsMy43NDQgMy43MzgtMy43NDQgMy43MzgtMy43NDQtMy43MzggMy43NDQtMy43MzhaTTE1OS4wMjIgMTI1Ljc0M2wzLjc0NCAzLjczOC0zLjc0NCAzLjczOC0zLjc0NC0zLjczOCAzLjc0NC0zLjczOFpNMTQ5LjExMiAxNDkuNzgxbDMuNzM4IDMuNzMzLTMuNzM4IDMuNzMyLTMuNzM4LTMuNzMyIDMuNzM4LTMuNzMzWk0xNzkuMTQyIDExOC40NzFsMS40OTggMS40OTUtMS40OTggMS40OTUtMS40OTctMS40OTUgMS40OTctMS40OTVaIiBmaWxsPSIjRUNFQ0YyIi8+PHBhdGggZD0iTTI0OSAyMDkuMTU4YzAgNS4wNTUtMjAuMTgzIDMuODE3LTI1Ljk3MyA1LjA2OS05LjcxMSAyLjA5OSAxMS4yMDggMTEuNTY5LTI0LjA1NCAxMi42MjgtMjkuNDk2Ljg4Ni02MS4yNi0zLjI0Ny02MC40NTgtMTMuOTA5LjgwMi0xMC42NjMgMjQuMjYyLTE2LjQ3NSA1My45NzItMTYuNDc1IDI5LjcxMSAwIDU2LjUxMyAyLjA3MSA1Ni41MTMgMTIuNjg3WiIgZmlsbD0idXJsKCNkKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkwLjI3OCAxNDQuMzY4Yy01LjAyNS01LjI2Ny04LjI3NS04LjIzMy05Ljc1LTguODk3LS42MTEtLjMwNC0xLjkzOS0zLjc2Ny0zLjk4NS0xMC4zODgtLjA0LTIuMTc1LS42MDQtMy40NTYtMS42OTEtMy44NDQtLjctLjIyNS0xLjkyNi0uMjMxLTIuMTA0Ljg2Mi0uMTE5LjcyOC4zNjcgMS44MTMgMS40NTggMy4yNTMtLjEyOSA2LjM0OSAxLjIwNyAxMS4yMiA0LjAwOCAxNC42MTQgMi44MDIgMy4zOTQgNS45NTcgNi42NjYgOS40NjUgOS44MTRsMi41OTktNC44NDh2LS41NjZaIiBmaWxsPSJ1cmwoI2UpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMTEuNzkxIDE1My41NzNjMS4wMTkuMjE2IDQuMTg4IDQuNDg4IDUuMzIgNi4wNzItLjAxNS4zNjkgNi44NzUtNi45ODcgNy42NS03LjUzNyAyLjExNC0xLjUwMSA0LjE5Ni0uNzMzIDQuMDM1IDEuMDkzLS4xNiAxLjgyNi0zLjM2MS45NzItMy41NTcgMS4yNjEtMy40MjEgNS4wNS0zLjQ2OCA1LjU4OS01Ljc4MiA4LjkyNi0xLjkxMyAyLjkxMy02LjUyOS0xLjYwNi0xMS42Ny02LjAyMy01LjE0LTQuNDE3IDIuOTg1LTQuMDA3IDQuMDA0LTMuNzkyWiIgZmlsbD0idXJsKCNmKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTg4LjY2NCAyMDkuMDQ2Yy0yLjE1MiAxLjU2NS0zLjY1NiAyLjM0Ny00LjUxMSAyLjM0Ny0xLjI4MiAwLTEuOTc1IDEuMzQ5LS43ODIgMi4wNzcgMS4xOTIuNzI4IDUuMDExLS4zMjIgNS45OS0uMzIyLjk3OCAwIDMuNDk2LjQxNyAyLjUzMS0yLjg4LS42NDMtMi4xOTgtMS4yMzQtMy4xMzMtMS43NzItMi44MDZsLTEuNDU2LjQ2M3YxLjEyMVpNMjA2LjU1MSAyMDkuMDQ2YzIuMTUyIDEuNTY1IDMuNjU2IDIuMzQ3IDQuNTExIDIuMzQ3IDEuMjgyIDAgMS45NzUgMS4zNDkuNzgzIDIuMDc3LTEuMTkzLjcyOC01LjAxMi0uMzIyLTUuOTkxLS4zMjItLjk3OCAwLTMuNDk2LjQxNy0yLjUzMS0yLjg4LjY0My0yLjE5OCAxLjIzNC0zLjEzMyAxLjc3Mi0yLjgwNmwxLjQ1Ni40NjN2MS4xMjFaIiBmaWxsPSIjM0UzRTZFIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xODguNjA2IDE3MC4yNzVjLTEuMjUzIDkuMjM1LTEuNjIgMTguNjYzLTEuMSAyOC4yODIuNzMgMTAuMzc4LS4wMzQgMTAuMTQ5IDEuMSAxMC4xNDkuNDI4IDAgMi4xNzMuMjMzIDIuNTU3LS40NTEuOTItMS42MzUgMi40MDYtMTUuMzQ5IDEuODMzLTE4LjEwNi0uMDU3LS40MTUgNS43MTktMTMuMjg0IDUuNzE5LTE4LjI4OS0uMjE1LS45NzctMy41ODQtMS41MDUtMTAuMTA5LTEuNTg1WiIgZmlsbD0idXJsKCNnKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjA2LjQzMiAxNzAuMjc1YzEuMjUzIDkuMjM1IDEuNjIgMTguNjYzIDEuMDk5IDI4LjI4Mi0uNzI5IDEwLjM3OC4wMzUgMTAuMTQ5LTEuMDk5IDEwLjE0OS0uNDI5IDAtMi4xNzMuMjMzLTIuNTU4LS40NTEtLjkxOS0xLjYzNS0yLjQwNS0xNS4zNDktMS44MzItMTguMTA2LjA1Ny0uNDE1LTUuNzE5LTEzLjI4NC01LjcxOS0xOC4yODkuMjE1LS45NzcgMy41ODQtMS41MDUgMTAuMTA5LTEuNTg1WiIgZmlsbD0idXJsKCNoKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTk0LjA2OCAxMzQuNjE0Yy0uNzkxIDMuOTU1LS40MTkgNi4yODEgMS4xMTYgNi45NzcgMi4wMS44MzkuNTkgMi41NjguMTg0IDIuNzgxLS4yNzEuMTQyLS4yMDUuNjIyLjE5OSAxLjQ0MiAxLjI3MS42NzIgMi4yMDUuOTQgMi44MDIuODAzLjU5Ny0uMTM3IDEuMzI1LS44MSAyLjE4NC0yLjAxOS0xLjYwMS0xLjE1Mi0yLjE1OC0yLjA3Ni0xLjY3MS0yLjc3Mi40ODYtLjY5NiAxLjIyNS0xLjQyMiAyLjIxNi0yLjE3OC45NjItLjczOC45MjUtMS4yOTktLjExMS0xLjY4NC4yNS0uNjk3LjM0My0xLjQ5My4yNzgtMi4zODdsLTMuMzc0LS45NjMtMy40MzMtLjc0OS0uMzkuNzQ5WiIgZmlsbD0idXJsKCNpKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTk2LjMyNSAxMzUuNTEzYzMuMjg4LS45MzcgNC4xNjEuNTAzIDQuMTYxIDEuMTEyIDAgLjQwNi0uMTA0IDEuMDgtLjMxMSAyLjAyLjQwNC0uMTguNjg5LS4zMTcuODU0LS40MSAxLjAwOC0uNTcxIDEuNjc2LTEuNTg0IDEuOTE0LTIuMzczLjQ0NC0xLjQ3My0uODYyLTQuNi00LjI0OC00LjEzNC0xLjE4LS4yMjMtMS4zNjctMS45NjMtMy40MTgtLjg5My0yLjA1MiAxLjA3LTIuNzQzLjI0OC0yLjc0MyAxLjM0NSAwIDEuMDk4LjA4NSA0LjQ4IDMuNzkxIDMuMzMzWiIgZmlsbD0iIzM1MzU2NCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTk1LjY4NSAxNDQuMDQ4YzEuMzk3IDEuNTYyIDIuODA2IDEuNTYyIDQuMjI2IDAgMS4zMzguMjA4IDguMjk4IDEuMDM4IDExLjY3IDYuMjM4IDEuODQxIDIuNzEzIDIuNzY4IDQuNDcyIDIuNzgyIDUuMjc2LTIuNjAzIDMuODA2LTMuOTA1IDUuNjE4LTMuOTA1IDUuNDM4IDAtLjE4LTEuNDE1LTEuNDg2LTQuMjQ2LTMuOTE4IDIuNDg1IDcuNDg5IDMuMTM5IDExLjg4NCAxLjk2NCAxMy4xODQtMS43NjQgMS45NDktMTYuNjAzIDIuMjM5LTIwLjE1OS44MzQtMS4wMjktLjUzNS0uNTQ4LTE1LjYxNyAxLjE1My0yMC4zMzMuMDU0LS4yNDktMi41NTIgMS43NzItOS44OTMtNy4wNC0uMjMzLS4zMjMgMS42NTctMi40NTMgNS42NzItNi4zODkgMS43MjQgMS45MzEgMy4xMzEgMy4yMzIgNC4yMjEgMy45MDIgMS4wOTEuNjY5IDMuMjYyIDEuNjA2IDYuNTE1IDIuODA4WiIgZmlsbD0iIzVCNUJFQSIvPjxwYXRoIG9wYWNpdHk9Ii4zMDIiIGQ9Ik03OS40NzggMTcyLjE4NnY3OS43NjdsMjguNzI2IDEwLjU5di04Mi44MDJsLTI4LjcyNi03LjU1NVoiIGZpbGw9InVybCgjaikiLz48cGF0aCBvcGFjaXR5PSIuMzAyIiBkPSJtMTA4LjE1OCAxNzkuNjI1IDI2LjYzOC05LjgxOHY4Mi41MThsLTI2LjYzOCAxMC4wOTh2LTgyLjc5OFoiIGZpbGw9InVybCgjaykiLz48cGF0aCBvcGFjaXR5PSIuMzAyIiBkPSJtNzkuMjk1IDE3Mi4xMDYgMjcuMTMyLTkuOTk2IDI4LjM2NCA3Ljc1OS0yNi42NDcgOS44MjItMjguODQ5LTcuNTg1WiIgZmlsbD0idXJsKCNsKSIvPjxwYXRoIG9wYWNpdHk9Ii4zMDIiIGQ9Ik0yMzQuNTA2IDExOC4xMDF2NjMuMTJsMjIuNzk4IDguMzc5di02NS41MjFsLTIyLjc5OC01Ljk3OFoiIGZpbGw9InVybCgjbSkiLz48cGF0aCBvcGFjaXR5PSIuMzAyIiBkPSJtMjU3LjI2OCAxMjMuOTg3IDIxLjE0Mi03Ljc2OXY2NS4yOThsLTIxLjE0MiA3Ljk4OXYtNjUuNTE4WiIgZmlsbD0idXJsKCNuKSIvPjxwYXRoIG9wYWNpdHk9Ii4zMDIiIGQ9Im0yMzQuMzYxIDExOC4wMzggMjEuNTM0LTcuOTEgMjIuNTEgNi4xNC0yMS4xNDggNy43NzItMjIuODk2LTYuMDAyWiIgZmlsbD0idXJsKCNvKSIvPjxwYXRoIG9wYWNpdHk9Ii4zMDIiIGQ9Ik0yODMuODg4IDE3MC45MjFjNy43NTMgMCAxNC4zOTkgNC4wNjUgMTcuMTk4IDkuODQ1aDEuNDM3YzcuNjA5IDAgMTMuNzc3IDYuMTY4IDEzLjc3NyAxMy43NzZ2MS4zNjljMCA3LjYwOC02LjE2OCAxMy43NzYtMTMuNzc3IDEzLjc3NkgyNjYuNjRjLTcuNjA5IDAtMTMuNzc2LTYuMTY4LTEzLjc3Ni0xMy43NzZ2LTEuMzY5YzAtNy42MDggNi4xNjctMTMuNzc2IDEzLjc3Ni0xMy43NzZoLjA0OWMyLjc5OS01Ljc4IDkuNDQ1LTkuODQ1IDE3LjE5OS05Ljg0NVoiIGZpbGw9InVybCgjcCkiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMDMuOTY1IiB5MT0iOTYuOTEyIiB4Mj0iMTAzLjk2NSIgeTI9IjEzNS42NzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRENEQ0U0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjREVERUU2IiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjIxNS43NTkiIHkxPSIxMDIuODY5IiB4Mj0iMTU5LjIzNCIgeTI9IjEzMy42NDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRTJFMkVBIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDlEOUU4Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIxODAuNTU3IiB5MT0iODAuNDkyIiB4Mj0iMTQxLjkwMyIgeTI9IjEzMC4zNTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY5Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTNFM0VBIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSIxOTMuNzUiIHkxPSIyMDguNzMiIHgyPSIxOTMuNzUiIHkyPSIyMzUuMzMyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZDRkNGRSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VCRUJGMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJlIiB4MT0iMTc4LjEzIiB5MT0iMTI0LjkxMiIgeDI9IjE4OS42ODgiIHkyPSIxNDIuODkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRDJDNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGQjhBMyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4MT0iMjI1LjcwOCIgeTE9IjE1OC41MTkiIHgyPSIyMTEuMDc5IiB5Mj0iMTU4LjM0OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkQyQzQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkI4QTMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjE5Mi43MjQiIHkxPSIyMDYuOTA5IiB4Mj0iMTk1Ljc4NSIgeTI9IjE3Mi4wMDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNzg3OEMzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNUM1Q0JCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImgiIHgxPSIyMDIuMzE0IiB5MT0iMjA2LjkwOSIgeDI9IjE5OS4yNTMiIHkyPSIxNzIuMDA5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzc4NzhDMyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzVDNUNCQiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJpIiB4MT0iMTk2LjA4NyIgeTE9IjEzNi4yNDciIHgyPSIxOTkuNTMiIHkyPSIxNDIuMTE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRDJDNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGQjhBMyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJqIiB4MT0iODQuODM1IiB5MT0iMTgyLjE4NiIgeDI9Ijg0LjgzNSIgeTI9IjI2MC4wMDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUVFIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjREVERUU2IiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iayIgeDE9IjEyMS40NzciIHkxPSIxNjkuODA3IiB4Mj0iMTIxLjQ3NyIgeTI9IjI2Mi40MjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRENEQ0U0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjREVERUU2IiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibCIgeDE9IjEwNy4wNDMiIHkxPSIxNjIuMTEiIHgyPSIxMDcuMDQzIiB5Mj0iMTc5LjY5MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNEQ0RDRTQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNERURFRTYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJtIiB4MT0iMjM4Ljc1OCIgeTE9IjEyNi4wMTQiIHgyPSIyMzguNzU4IiB5Mj0iMTg3LjU5NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNFRUUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNERURFRTYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJuIiB4MT0iMjY3LjgzOSIgeTE9IjExNi4yMTgiIHgyPSIyNjcuODM5IiB5Mj0iMTg5LjUwNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNEQ0RDRTQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNERURFRTYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJvIiB4MT0iMjU2LjM4MyIgeTE9IjExMC4xMjgiIHgyPSIyNTYuMzgzIiB5Mj0iMTI0LjA0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0RDRENFNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RFREVFNiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InAiIHgxPSIyODQuNTgyIiB5MT0iMTcwLjkyMSIgeDI9IjI4NC41ODIiIHkyPSIyMDkuNjg3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0RDRENFNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RFREVFNiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+"
              alt=""
            />
          </template>
          请先添加账号
        </a-empty>
      </div>
    </a-modal>
    <a-modal
      v-model:visible="visibleJc"
      :footer="null"
      title-align="start"
      @ok="handleOkJc"
      @cancel="handleCancelJc"
      hide-title
      ok-text="下一步"
      width="500px"
      class="myModalJc"
    >
      <div class="modalTitle"
        ><icon-info-circle-fill style="color: #ff7d00" /> 确认解除关联
      </div>
      <div style="padding-left: 20px; font-size: 16px; color: #333">
        确认解绑该媒体账号，解绑后将无法再为此账号发布视频和获取相关数据，需要重新授权后才可再次使用
      </div>

      <div class="shoQ">
        <div>
          <a-space>
            <a-button type="outline" @click="handleCancelJc" class="myBtn1">
              <template #default>取消</template>
            </a-button>
            <a-button type="primary" @click="handleOkJc" class="myBtn">
              <template #default>确认</template>
            </a-button>
          </a-space>
        </div>
      </div>
    </a-modal>
    <a-modal
      v-model:visible="visiblePj"
      :footer="null"
      title-align="start"
      @ok="handleOkPj"
      @cancel="handleCancelPj"
      hide-title
      ok-text="下一步"
      width="1000px"
      class="myModalPj"
    >
      <div class="modalTitle"> 批量解绑 </div>
      <div class="accountPj">
        <div> 请选择要解绑的账号 </div>
        <div>
          <a-select
            v-model="formModel.content"
            :options="contentOptions"
            :style="{ width: '260px' }"
            placeholder="账号分组"
            multiple
            :max-tag-count="2"
            allow-clear
          >
          </a-select
        ></div>
      </div>
      <div class="pxu">
        <div class="pxu-li">
          <div class="foBox" @click="isShow = !isShow">
            <div class="rTop">已失效</div>
            <div class="rBottom" :class="{ rBottomShow: isShow }">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                class="arco-icon arco-icon-check"
                stroke-width="4"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                data-v-36d15b20=""
              >
                <path d="M41.678 11.05 19.05 33.678 6.322 20.95"></path>
              </svg>
            </div>
            <div class="infoT">
              <div class="infoImg">
                <img src="../../../assets/images/xn.jpg" alt="" />
              </div>
              <div class="content">
                <div class="title">哈哈哈你就将就</div>
                <a-space>
                  <div style="font-size: 10px; color: #666">无备注</div>
                </a-space>
                <div class="title1">
                  <span> 0 粉丝 </span>
                </div>
              </div>
            </div>
            <div class="infoB">
              <div class="sp">
                <img
                  width="11"
                  style="opacity: 0.7"
                  src="../../../assets/images/1104.png"
                  alt=""
                />
                0
              </div>
              <div class="sp">
                <img
                  width="11"
                  style="opacity: 0.7"
                  src="../../../assets/images/1105.png"
                  alt=""
                />0
              </div>
              <div class="sp">
                <img
                  width="11"
                  style="opacity: 0.7"
                  src="../../../assets/images/1106.png"
                  alt=""
                />
                0
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shoQ">
        <a-space>
          <a-button type="outline" @click="handleCancelPj" class="myBtn1">
            <template #default>取消</template>
          </a-button>
          <a-button type="primary" @click="handleOkPj" class="myBtn">
            <template #default>确认解绑</template>
          </a-button>
        </a-space>
      </div>
    </a-modal>
    <a-modal
      v-model:visible="visibleZd"
      :footer="null"
      title-align="start"
      @ok="handleOkZd"
      @cancel="handleCancelZd"
      hide-title
      ok-text="下一步"
      width="1000px"
      class="myModalZd"
    >
      <div class="modalTitle"> 自动化策略 </div>
      <div style="padding-left: 40px; font-size: 16px; color: #333">
        创建自动化策略，帮助你解放双手
      </div>
      <div class="pLun">
        <div>自动回复评论</div>
        <div class="pLunR">
          <a-trigger
            position="br"
            :popup-translate="[200, 20]"
            auto-fit-position
            :unmount-on-close="false"
          >
            <img
              width="20"
              style="
                vertical-align: middle;
                transform: translateY(-2px);
                opacity: 0.7;
                cursor: pointer;
              "
              src="../../../assets/images/1108.png"
              alt=""
            />
            <template #content>
              <div
                style="
                  background-color: #000;
                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                  padding: 5px 15px 15px;
                  color: #fff;
                  border-radius: 10px;
                "
              >
                <div style="margin-top: 10px">
                  不同会员等级拥有的策略额度不同
                </div>
                <div style="margin-top: 10px"> 1. 免费版：无 </div>
                <div style="margin-top: 10px"> 2. 基础版：无 </div>
                <div style="margin-top: 10px"> 3. 进阶版：1个策略 </div>
                <div style="margin-top: 10px"> 4. 进阶版：1个策略 </div>
                <div style="margin-top: 10px"> 5. 企业版：3个策略/团队 </div>
              </div>
            </template>
          </a-trigger>

          剩余额度: 1
        </div>
      </div>
      <div class="pxu">
        <div class="pxu-li">
          <a-button type="text" @click="handleClickSetting" class="myBtn">
            <template #icon>
              <div><icon-plus /></div>
            </template>
            <template #default><div>新建策略</div></template>
          </a-button>
        </div>
      </div>
      <div class="pLun">
        <div>自动转发视频</div>
        <div class="pLunR">
          <a-trigger
            position="br"
            :popup-translate="[200, 20]"
            auto-fit-position
            :unmount-on-close="false"
          >
            <img
              width="20"
              style="
                vertical-align: middle;
                transform: translateY(-2px);
                opacity: 0.7;
                cursor: pointer;
              "
              src="../../../assets/images/1108.png"
              alt=""
            />
            <template #content>
              <div
                style="
                  background-color: #000;
                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                  padding: 5px 15px 15px;
                  color: #fff;
                  border-radius: 10px;
                "
              >
                <div style="margin-top: 10px">
                  不同会员等级拥有的策略额度不同
                </div>
                <div style="margin-top: 10px"> 1. 免费版：无 </div>
                <div style="margin-top: 10px"> 2. 基础版：无 </div>
                <div style="margin-top: 10px"> 3. 进阶版：1个策略 </div>
                <div style="margin-top: 10px"> 4. 进阶版：1个策略 </div>
                <div style="margin-top: 10px"> 5. 企业版：3个策略/团队 </div>
              </div>
            </template>
          </a-trigger>
          剩余额度: 0
        </div>
      </div>
      <div class="pxu">
        <div class="pxu-li">
          <a-button type="text" class="myBtn">
            <template #icon>
              <div><icon-plus /></div>
            </template>
            <template #default><div>新建策略</div></template>
          </a-button>
        </div>
      </div>
      <div class="pLun"> 自动回复私信 </div>
      <div class="qiDa">
        <img width="120" src="../../../assets/images/1109.png" alt="" />
        <div>敬请期待</div>
      </div>
    </a-modal>
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
        <div class="boxContent">
          <div class="boxContent-L">
            <a-button type="dashed" class="btnTop" @click="handleCancelSetting">
              <template #icon>
                <icon-undo />
              </template>
              <template #default>返回</template>
            </a-button>
            <div class="guiZ">
              <div class="guiZeeTitle">自动回复评论</div>
              <a-anchor
                line-less
                :change-hash="false"
                scroll-container="#container"
                @change="ancherChange"
              >
                <a-anchor-link class="link" href="#matchingRules"
                  ><icon-caret-right
                    class="icon"
                    v-if="match == '#matchingRules'"
                  />匹配规则
                </a-anchor-link>
                <a-anchor-link class="link" href="#responseScope"
                  ><icon-caret-right
                    class="icon"
                    v-if="match == '#responseScope'"
                  />回复范围</a-anchor-link
                >
                <a-anchor-link class="link" href="#replyRules"
                  ><icon-caret-right
                    class="icon"
                    v-if="match == '#replyRules'"
                  />回复规则</a-anchor-link
                >
                <a-anchor-link class="link" href="#information"
                  ><icon-caret-right
                    class="icon"
                    v-if="match == '#information'"
                  />基础信息</a-anchor-link
                >
              </a-anchor>
            </div>
          </div>
          <div class="boxContent-R">
            <div class="contentTop" id="container">
              <!-- id="matchingRules" -->
              <div class="conTextMatchingRules">
                <a-spin style="display: block">
                  <a-tabs
                    v-model:activeKey="messageType"
                    class="tabBox"
                    id="matchingRules"
                  >
                    <a-button type="text" class="btnTop" @click="handleAdd">
                      <template #icon>
                        <icon-plus />
                      </template>
                      <template #default>新增</template>
                    </a-button>
                    <a-tab-pane
                      v-for="(item, index) in tabList"
                      :key="item.key"
                    >
                      <template #title>
                        <span> {{ item.title }}{{ index + 1 }} </span>
                      </template>
                      <div class="tabContent">
                        <div class="title">关键词</div>
                        <div class="text"
                          >可以回车添加多个关键词，匹配任一关键词即满足要求，如果粉丝来自于世界各地，建议添加多种语音的关键词</div
                        >
                        <a-space style="margin-bottom: 40px">
                          <a-input-tag
                            :default-value="['test']"
                            :style="{
                              width: '600px',
                              height: '50px',
                              borderRadius: '10px',
                            }"
                            placeholder="请输入按回车添加多个关键词"
                            allow-clear
                          />
                        </a-space>
                        <div class="titleG"
                          >匹配规则
                          <a-trigger
                            style="margin-left: 10px"
                            position="br"
                            :popup-translate="[430, -30]"
                            auto-fit-position
                            :unmount-on-close="false"
                          >
                            <img
                              width="20"
                              style="
                                vertical-align: middle;
                                transform: translateY(-2px);
                                opacity: 0.7;
                                cursor: pointer;
                              "
                              src="../../../assets/images/1108.png"
                              alt=""
                            />
                            <template #content>
                              <div
                                style="
                                  background-color: #000;
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 15px 15px;
                                  color: #fff;
                                  border-radius: 10px;
                                "
                              >
                                <div style="margin-top: 10px">
                                  精准匹配：需要至少匹配一个关键词的完整内容才算匹配成功
                                </div>
                              </div>
                            </template>
                          </a-trigger>
                        </div>
                        <a-space>
                          <a-form-item field="contentType">
                            <a-select
                              :style="{
                                width: '600px',
                                height: '50px',
                              }"
                              v-model="formModel.contentType"
                              :options="contentTypeOptions"
                              placeholder="精准匹配"
                              allow-clear
                            />
                          </a-form-item>
                        </a-space>
                        <div class="title titleN"
                          >回复内容
                          <a-trigger
                            style="margin-left: 10px"
                            position="br"
                            :popup-translate="[430, -30]"
                            auto-fit-position
                            :unmount-on-close="false"
                          >
                            <img
                              width="20"
                              style="
                                vertical-align: middle;
                                transform: translateY(-2px);
                                opacity: 0.7;
                                cursor: pointer;
                              "
                              src="../../../assets/images/1108.png"
                              alt=""
                            />
                            <template #content>
                              <div
                                style="
                                  background-color: #000;
                                  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                                  padding: 5px 15px 15px;
                                  color: #fff;
                                  border-radius: 10px;
                                "
                              >
                                <div style="margin-top: 10px">
                                  支持设置多种语言的回复内容，回复时可以基于用户语言进行回复，也可以按默认语言回复，可在下方设置回复语言，如果设置了多个回复内容，会随机选择其中一条内容进行回复
                                </div>
                              </div>
                            </template>
                          </a-trigger>
                          <div class="text">
                            支持设置多种语言的回复内容，回复时可以基于用户语言进行回复
                          </div>
                          <div class="selectW">
                            <a-select
                              multiple
                              :default-value="['Beijing', 'Shanghai']"
                              :style="{ width: '600px' }"
                              :options="statusOptions"
                              size="medium"
                              :placeholder="
                                $t('searchTable.form.selectDefault')
                              "
                            />
                          </div>
                          <div class="selectLang">
                            <a-select
                              :style="{ width: '200px' }"
                              v-model="formModel.lang"
                              :options="LangOptions"
                              :placeholder="
                                $t('searchTable.form.selectDefault')
                              "
                            />
                            <a-space
                              direction="vertical"
                              :default-checked="true"
                              class="lang"
                            >
                              <a-switch
                                v-model="value"
                                checked-value="no"
                                unchecked-value="yes"
                                checked-color="#F53F3F"
                                unchecked-color="#4a3aff"
                                disabled
                              />
                              <span class="span">默认</span>
                            </a-space>
                          </div>
                          <div class="inputT">
                            <a-space>
                              <a-input
                                :style="{
                                  width: '550px',
                                  height: '50px',
                                  borderRadius: '10px',
                                  backgroundColor: '#F2F3F5',
                                }"
                                placeholder="请输入"
                                v-model="fenZu"
                                allow-clear
                              />
                            </a-space>
                            <icon-delete
                              style="
                                margin-left: 30px;
                                color: red;
                                font-size: 20px;
                                cursor: pointer;
                              "
                            />
                          </div>
                          <a-space
                            style="
                              margin-top: 20px;
                              border-radius: 10px;
                              overflow: hidden;
                            "
                          >
                            <a-button type="primary">
                              <template #icon>
                                <icon-plus />
                              </template>
                              <template #default>新增</template>
                            </a-button>
                          </a-space>
                        </div>
                      </div>
                      <div class="spanD">
                        <div class="spanA"></div>
                        <div class="spanC"></div>
                        <div class="spanB"></div>
                      </div>
                      <div class="tabContentF" id="responseScope">
                        <div class="hFwe">回复范围</div>
                        <div class="gzTwo">
                          <div class="titleG">账号范围 </div>
                          <div class="titleContent"
                            >每个策略最多选择5个账号，并且每个账号最多关联一个自动回复策略
                          </div>
                          <a-space>
                            <a-form-item field="contentType">
                              <a-select
                                :style="{
                                  width: '600px',
                                  height: '50px',
                                }"
                                v-model="formModel.contentType"
                                :options="contentTypeOptions"
                                placeholder="请选择"
                                allow-clear
                              />
                            </a-form-item>
                          </a-space>
                        </div>
                        <div class="gzTwo">
                          <div class="titleG titleM">视频范围 </div>
                          <a-space>
                            <a-form-item field="contentType">
                              <a-select
                                :style="{
                                  width: '600px',
                                  height: '50px',
                                }"
                                v-model="formModel.contentType"
                                :options="contentTypeOptions"
                                placeholder="请选择"
                                allow-clear
                              />
                            </a-form-item>
                          </a-space>
                        </div>
                        <div class="gzTwo">
                          <div class="titleG titleM">优先回复什么评论 </div>
                          <a-space>
                            <a-form-item field="contentType">
                              <a-select
                                :style="{
                                  width: '600px',
                                  height: '50px',
                                }"
                                v-model="formModel.contentType"
                                :options="contentTypeOptions"
                                placeholder="请选择"
                                allow-clear
                              />
                            </a-form-item>
                          </a-space>
                        </div>
                      </div>
                      <div class="spanD">
                        <div class="spanA"></div>
                        <div class="spanC"></div>
                        <div class="spanB"></div>
                      </div>
                      <div class="tabContentF" id="replyRules">
                        <div class="hFwe">回复规则</div>
                        <div class="gzTwo">
                          <div class="titleG">回复频率 </div>

                          <a-space>
                            <a-form-item field="contentType">
                              <a-select
                                :style="{
                                  width: '600px',
                                  height: '50px',
                                }"
                                v-model="formModel.contentType"
                                :options="contentTypeOptions"
                                placeholder="请选择"
                                allow-clear
                              />
                            </a-form-item>
                          </a-space>
                        </div>
                        <div class="gzTwo">
                          <div class="titleG titleM"
                            >单个视频单次执行策略自动回复数量
                          </div>
                          <a-space>
                            <a-form-item field="contentType">
                              <a-select
                                :style="{
                                  width: '600px',
                                  height: '50px',
                                }"
                                v-model="formModel.contentType"
                                :options="contentTypeOptions"
                                placeholder="请选择"
                                allow-clear
                              />
                            </a-form-item>
                          </a-space>
                        </div>
                        <div class="gzTwo">
                          <div class="titleG titleM"
                            >单个视频自动回复总数量
                          </div>
                          <a-space>
                            <a-form-item field="contentType">
                              <a-select
                                :style="{
                                  width: '600px',
                                  height: '50px',
                                }"
                                v-model="formModel.contentType"
                                :options="contentTypeOptions"
                                placeholder="请选择"
                                allow-clear
                              />
                            </a-form-item>
                          </a-space>
                        </div>
                        <div class="gzTwo">
                          <div class="titleG titleM">回复语言 </div>
                          <a-space>
                            <a-form-item field="contentType">
                              <a-select
                                :style="{
                                  width: '600px',
                                  height: '50px',
                                }"
                                v-model="formModel.contentType"
                                :options="contentTypeOptions"
                                placeholder="请选择"
                                allow-clear
                              />
                            </a-form-item>
                          </a-space>
                        </div>
                      </div>
                      <div class="spanD">
                        <div class="spanA"></div>
                        <div class="spanC"></div>
                        <div class="spanB"></div>
                      </div>
                      <div class="tabContentF" id="information">
                        <div class="hFwe">基础信息</div>
                        <div class="gzTwo">
                          <div class="titleG">当前策略名称 </div>
                          <a-space>
                            <a-form-item field="contentType">
                              <a-space>
                                <a-input
                                  :style="{
                                    width: '600px',
                                    height: '50px',
                                    borderRadius: '10px',
                                  }"
                                  placeholder="请输入"
                                  allow-clear
                                />
                              </a-space>
                            </a-form-item>
                          </a-space>
                        </div>
                        <div class="gzTwo">
                          <div class="titleG titleM">策略启用状态 </div>
                          <a-space>
                            <a-form-item field="contentType">
                              <a-select
                                :style="{
                                  width: '600px',
                                  height: '50px',
                                }"
                                v-model="formModel.contentType"
                                :options="contentTypeOptions"
                                placeholder="请选择"
                                allow-clear
                              />
                            </a-form-item>
                          </a-space>
                        </div>
                      </div>
                      <div class="spanF">
                        <div class="spanA"></div>
                        <div class="spanC"></div>
                      </div>
                    </a-tab-pane>
                  </a-tabs>
                </a-spin>
              </div>
            </div>
            <div class="contentBottom">
              <div class="shoQ">
                <a-trigger
                  position="top"
                  :popup-translate="[0, -20]"
                  auto-fit-position
                  :unmount-on-close="false"
                >
                  <div class="pLunR">
                    剩余额度: 1
                    <img
                      width="20"
                      style="
                        vertical-align: middle;
                        transform: translateY(-2px);
                        opacity: 0.3;
                        cursor: pointer;
                      "
                      src="../../../assets/images/1108.png"
                      alt=""
                    />
                  </div>
                  <template #content>
                    <div
                      style="
                        background-color: #000;
                        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
                        padding: 5px 15px 15px;
                        color: #fff;
                        border-radius: 10px;
                      "
                    >
                      <div style="margin-top: 10px">
                        不同会员等级拥有的策略额度不同
                      </div>
                      <div style="margin-top: 10px"> 1. 免费版：无 </div>
                      <div style="margin-top: 10px"> 2. 基础版：无 </div>
                      <div style="margin-top: 10px"> 3. 进阶版：1个策略 </div>
                      <div style="margin-top: 10px"> 4. 进阶版：1个策略 </div>
                      <div style="margin-top: 10px">
                        5. 企业版：3个策略/团队
                      </div>
                    </div>
                  </template>
                </a-trigger>
                <a-space>
                  <a-button
                    type="outline"
                    @click="handleCancelSetting"
                    class="myBtn1"
                  >
                    <template #default>取消</template>
                  </a-button>
                  <a-button
                    type="primary"
                    @click="handleCancelSetting"
                    class="myBtn"
                  >
                    <template #default>确认</template>
                  </a-button>
                </a-space>
              </div>
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

const isShow = ref(false);
const value = ref(false);
const messageType = ref('1');
const data = ref(true);
const fenZu = ref('');
const match = ref('#matchingRules');
const visible = ref(false);
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
const handleAdd = () => {
  tabList.value.push({
    key: tabList.value.length + 1 + '',
    title: '规则',
  });
};
const statusOptions = computed(() => [
  {
    label: t('searchTable.form.status.online'),
    value: '3',
  },
  {
    label: t('searchTable.form.status.offline'),
    value: '4',
  },
  {
    label: t('searchTable.form.status.online'),
    value: '5',
  },
  {
    label: t('searchTable.form.status.offline'),
    value: '6',
  },
]);

const LangOptions = computed(() => [
  {
    label: t('searchTable.form.status.online'),
    value: '3',
  },
  {
    label: t('searchTable.form.status.offline'),
    value: '4',
  },
  {
    label: t('searchTable.form.status.online'),
    value: '5',
  },
  {
    label: t('searchTable.form.status.offline'),
    value: '6',
  },
]);

const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};

const visiblePj = ref(false);

const handleClickPj = () => {
  visiblePj.value = true;
};
const handleOkPj = () => {
  visiblePj.value = false;
};
const handleCancelPj = () => {
  visiblePj.value = false;
  isShow.value = false;
};

const visibleJc = ref(false);
const handleClickJc = () => {
  visibleJc.value = true;
};
const handleOkJc = () => {
  visibleJc.value = false;
};
const handleCancelJc = () => {
  visibleJc.value = false;
};

const visibleFen = ref(false);

const handleClickFen = () => {
  visibleFen.value = true;
};
const handleOkFen = () => {
  visibleFen.value = false;
};
const handleCancelFen = () => {
  visibleFen.value = false;
};

const visibleAddFen = ref(false);

const handleClickAddFen = (params: any) => {
  if (params) {
    fenZu.value = params;
  } else {
    fenZu.value = '';
  }
  visibleAddFen.value = true;
};
const handleOkAddFen = () => {
  visibleAddFen.value = false;
};
const handleCancelAddFen = () => {
  visibleAddFen.value = false;
};

const visibleZd = ref(false);

const handleClickZd = () => {
  visibleZd.value = true;
};
const handleOkZd = () => {
  visibleZd.value = false;
};
const handleCancelZd = () => {
  visibleZd.value = false;
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
  visibleZd.value = false;
};

const formModel = ref({
  lang: 'Beijing',
  contentType: '',
  content: '',
  name: '',
});
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
const ancherChange = (e: any) => {
  match.value = e;
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
  padding-top: 40px;
  width: 1440px;
  margin: auto;
  color: #333;
  display: flex;
  justify-content: space-between;
  .myBtnR {
    height: 40px;
    background-color: #f0efff;
    padding: 0 19px;
    border-radius: 25px;
    color: #4a3aff;
  }
  .myBtnR:hover {
    background-color: #f5f4fc;
    color: #8c82f8;
  }
}
.footerBox {
  width: 1440px;
  margin: 20px auto;

  border-radius: 12px;
  background-color: #fff;
  .footer {
    width: 100%;
    height: 170px;
    display: flex;
    justify-content: space-between;
    .footerL {
      width: 168px;
      height: 100%;
      background-color: #fff;
      box-shadow: 4px 0 20px #0000000d;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .footerR {
      width: calc(100% - 168px);
      height: 100%;
      background: #fff;
      display: flex;
      justify-content: space-between;
      .footerInfoL {
        opacity: 0.7;
        height: 118px;
        margin: 25px 0 0 25px;
        background-color: #f8f8f8;
        border-radius: 12px;
        cursor: pointer;
        .foBox {
          position: relative;
          width: 270px;
          height: 118px;
          .rTop {
            position: absolute;
            right: 0;
            background: #000000;
            border-radius: 0 5px 0 8px;
            min-width: 56px;
            max-width: 300px;
            height: 22px;
            text-align: center;
            line-height: 22px;
            font-size: 12px;
            color: #fff;
            user-select: none;
            cursor: default;
            padding: 0 20px;
            z-index: 2;
          }
          .infoT {
            width: 100%;
            height: 90px;
            border-bottom: 1px solid #ebebeb;
            display: flex;
            justify-content: space-between;
            .infoImg {
              width: 90px;
              height: 90px;
              position: relative;
              img {
                width: 62px;
                height: 62px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 10px;
              }
            }
            .content {
              width: calc(100% - 90px);
              height: 90px;
              .title {
                font-weight: 600;
                font-size: 16px;
                height: 37px;
                line-height: 37px;
                color: #333;
                white-space: nowrap; /* 禁止文本换行 */
                overflow: hidden; /* 隐藏超出容器的内容 */
                text-overflow: ellipsis; /* 超出部分显示省略号 */
              }
              .title1 {
                font-size: 12px;
                color: #666;
                margin-top: 5px;
                display: flex;
                justify-content: space-between;
                .icon {
                  font-size: 16px;
                  margin-right: 15px;
                }
              }
              :deep(.arco-input-wrapper) {
                height: 20px !important;
                line-height: 20px !important;
                border-radius: 0px !important;
                border: none;
                background-color: #f8f8f8;
                padding: 0;
                cursor: pointer;
                font-size: 12px;
              }
              :deep(.arco-input.arco-input-size-medium) {
                font-size: 12px;
              }
            }
          }
          .infoB {
            width: 100%;
            height: 28px;
            display: flex;
            justify-content: flex-start;
            line-height: 28px;
            .sp {
              width: 33.33%;
              height: 28px;
              line-height: 28px;
              text-align: left;
              font-size: 12px;
              color: #999;
              padding-left: 15px;
              svg {
                vertical-align: middle;
                transform: translateY(-1px);
              }
            }
          }
        }
      }
    }
  }
}
.footerInfoR {
  .myBtnInfoT {
    border-radius: 25px;
    margin-right: 15px;
  }
  .myBtnInfo {
    width: 48px;
    height: 100%;
    min-height: 168px;

    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    cursor: pointer;
    color: #999;
    font-size: 14px;
    font-weight: 700;
  }
}
.myModal {
  .shoQ {
    width: 690px;
    color: #666;
    display: flex;
    margin: auto;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    .myBtn {
      width: 150px;
      height: 50px;
      background-color: #4a3aff;
      padding: 0 25px;
      border-radius: 12px;
      color: #fff;
    }
    .myBtn:hover {
      background-color: #6d60f7;
    }
    .myBtn1 {
      width: 150px;
      height: 50px;
      background-color: #fff;
      border: 1px solid #999;
      padding: 0 25px;
      border-radius: 12px;
      color: #333;
    }
    .myBtn1:hover {
      background-color: #f2f2f2;
    }
    svg {
      font-size: 18px;
      vertical-align: middle;
      transform: translateY(-2px);
    }
  }
  .modalTitle {
    padding: 10px 0px 20px 40px;
    font-size: 20px;
    color: #333;
    font-weight: 700;
  }
  .pxu {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 60px;
    .pxu-li {
      width: 105px;
      height: 105px;
      display: inline-block;
      margin: 0 0 20px 40px;
      border-radius: 10px;
      border: 3px solid #165dff;
      position: relative;
      background-color: #f2f2f2;
      img {
        width: 62px;
        height: 62px;
        border-radius: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}

.myModalPj {
  .accountPj {
    padding-left: 0px;
    font-size: 16px;
    color: #333;
    display: flex;
    justify-content: space-between;
  }
  .shoQ {
    width: 900px;
    color: #666;
    display: flex;
    margin: auto;
    justify-content: flex-end;
    height: 40px;
    line-height: 40px;
    .myBtn {
      width: 120px;
      height: 40px;
      background-color: #4a3aff;
      padding: 0 25px;
      border-radius: 10px;
      color: #fff;
    }
    .myBtn:hover {
      background-color: #6d60f7;
    }
    .myBtn1 {
      width: 120px;
      height: 40px;
      background-color: #fff;
      border: 1px solid #999;
      padding: 0 25px;
      border-radius: 10px;
      color: #333;
    }
    .myBtn1:hover {
      background-color: #f2f2f2;
    }
    svg {
      font-size: 18px;
      vertical-align: middle;
      transform: translateY(-2px);
    }
  }
  .modalTitle {
    padding: 10px 0px 20px 00px;
    font-size: 20px;
    color: #333;
    font-weight: 700;
  }
  .pxu {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 60px;
    background-color: #f8f8f8;
    border-radius: 10px;
    padding: 40px 20px;
    height: 500px;
    overflow-y: scroll;
    scrollbar-width: none;
    .pxu-li {
      width: 270px;
      display: inline-block;
      margin: 0 0 20px 0px;
      border-radius: 10px;
      cursor: pointer;
      .foBox {
        position: relative;
        width: 270px;
        height: 118px;
        background-color: #fff;
        .rTop {
          position: absolute;
          right: 0;
          background: #000000;
          border-radius: 0 5px 0 8px;
          min-width: 56px;
          max-width: 300px;
          height: 22px;
          text-align: center;
          line-height: 22px;
          font-size: 12px;
          color: #fff;
          user-select: none;
          cursor: default;
          padding: 0 20px;
          z-index: 2;
        }
        .rBottom {
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: 20px;
          color: #fff;
          width: 25px;
          height: 25px;
          border-radius: 10px 4px;
          box-sizing: border-box;
          position: absolute;
          right: 0px;
          bottom: 0px;
          background-color: #4a3aff;
          font-family: Phui bold;
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: hidden;
          z-index: 2;
        }
        .rBottomShow {
          visibility: visible;
        }
        .infoT {
          width: 100%;
          height: 90px;
          border-bottom: 1px solid #ebebeb;
          display: flex;
          justify-content: space-between;
          .infoImg {
            width: 90px;
            height: 90px;
            position: relative;
            img {
              width: 62px;
              height: 62px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border-radius: 10px;
            }
          }
          .content {
            width: calc(100% - 90px);
            height: 90px;
            .title {
              font-weight: 600;
              font-size: 16px;
              height: 37px;
              line-height: 37px;
              color: #333;
              white-space: nowrap; /* 禁止文本换行 */
              overflow: hidden; /* 隐藏超出容器的内容 */
              text-overflow: ellipsis; /* 超出部分显示省略号 */
            }
            .title1 {
              font-size: 12px;
              color: #666;
              margin-top: 5px;
              display: flex;
              justify-content: space-between;
              .icon {
                font-size: 16px;
                margin-right: 15px;
              }
            }
            :deep(.arco-input-wrapper) {
              height: 20px !important;
              line-height: 20px !important;
              border-radius: 0px !important;
              border: none;
              background-color: #f8f8f8;
              padding: 0;
              cursor: pointer;
              font-size: 12px;
            }
            :deep(.arco-input.arco-input-size-medium) {
              font-size: 12px;
            }
          }
        }
        .infoB {
          width: 100%;
          height: 28px;
          display: flex;
          justify-content: flex-start;
          line-height: 28px;
          .sp {
            width: 33.33%;
            height: 28px;
            line-height: 28px;
            text-align: left;
            font-size: 12px;
            color: #999;
            padding-left: 15px;
            svg {
              vertical-align: middle;
              transform: translateY(-1px);
            }
          }
        }
      }
    }
  }
}
.myModalFen {
  .shoQ {
    width: 690px;
    color: #666;
    display: flex;
    margin: auto;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    .myBtn {
      width: 150px;
      height: 50px;
      background-color: #4a3aff;
      padding: 0 25px;
      border-radius: 12px;
      color: #fff;
    }
    .myBtn:hover {
      background-color: #6d60f7;
    }
    .myBtn1 {
      width: 150px;
      height: 50px;
      background-color: #fff;
      border: 1px solid #999;
      padding: 0 25px;
      border-radius: 12px;
      color: #333;
    }
    .myBtn1:hover {
      background-color: #f2f2f2;
    }
    svg {
      font-size: 18px;
      vertical-align: middle;
      transform: translateY(-2px);
    }
  }
  .modalTitle {
    padding: 10px 0px 20px 40px;
    font-size: 20px;
    color: #333;
    font-weight: 700;
  }
  .pxu {
    width: 100%;
    margin-top: 20px;
    // margin-bottom: 60px;
    height: 700px;
    .pxu-li {
      width: 190px;
      height: 150px;
      display: inline-block;
      margin: 0 0 20px 40px;
      border-radius: 10px;
      border: 2px dashed #165dff;
      cursor: pointer;
      .myBtn {
        width: 100%;
        height: 100%;
        border-radius: 10%;
      }
    }
    .pxu-li2 {
      width: 190px;
      height: 150px;
      display: inline-block;
      margin: 0 0 20px 40px;
      border-radius: 10px;
      cursor: pointer;
      vertical-align: top;
      background-color: #f0f0f0;
      position: relative;
      overflow: hidden;
      .fBtn {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 33px;
        background-color: #0009;
        font-size: 12px;
        line-height: 33px;
        text-align: center;
        color: #fff;
      }
      .zz {
        z-index: 233;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: relative;
        visibility: hidden;
        .del {
          position: absolute;
          right: 0;
          top: 0;
          display: inline-block;
          width: 30px;
          height: 20px;
          background-color: #fff;
          color: red;
          border-radius: 0 9px 0 10px;
          text-align: center;
        }
        .myBtn {
          display: block;
          width: 120px;
          height: 30px;
          line-height: 30px;
          color: #fff;
          font-size: 12px;
          border-radius: 25px;
          margin: 50px auto 0;
          background-color: #4a3aff;
        }
        .myBtn:hover {
          background-color: #5c4efc;
        }
        .zzBtnC {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 33px;
          line-height: 33px;
        }
        .zzBtn {
          display: inline-block;
          width: 95px;
          height: 33px;
          background-color: #0009;
          color: #fff;
          font-size: 12px;
        }
        .zzBtn:hover {
          background-color: rgba(78, 76, 76, 0.6);
        }
      }
    }
    .pxu-li2:hover .zz {
      visibility: visible;
    }
  }
}
.myModalZd {
  .pLun {
    color: #333;
    font-size: 16px;
    padding-left: 40px;
    font-weight: 700;
    margin: 20px 0 10px;
    display: flex;
    justify-content: space-between;
    .pLunR {
      color: #999;
      font-size: 14px;
    }
  }
  .modalTitle {
    padding: 10px 0px 20px 40px;
    font-size: 20px;
    color: #333;
    font-weight: 700;
  }
  .pxu {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    .pxu-li {
      width: 190px;
      height: 190px;
      display: inline-block;
      margin: 0 0 20px 40px;
      border-radius: 10px;
      border: 2px dashed #165dff;
      cursor: pointer;
      .myBtn {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
  .qiDa {
    width: 850px;
    height: 160px;
    border-radius: 10px;
    border: 1px solid rgba(74, 58, 255, 0.1);
    background: #fcfcff;
    margin-left: 40px;
    text-align: center;
    padding-top: 20px;
    color: #4a3aff;
    font-size: 12px;
  }
}

.myModalSetting {
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;

  .box {
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    overflow: hidden;
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
        width: 220px;
        height: 100%;
        background-color: #fff;
        .btnTop {
          width: 100%;
          height: 50px;
          font-size: 20px;
          font-weight: 700;
        }
        .guiZ {
          padding-left: 20px;
          .guiZeeTitle {
            font-weight: 700;
            font-size: 20px;
            line-height: 28px;
            color: #333;
            margin: 32px 0 24px 0px;
          }

          .link {
            position: relative;
            padding-left: 10px;
            background-color: #fff;

            .icon {
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }

            :deep(.arco-anchor-link) {
              background-color: #fff;
              // color: #000;
            }
          }
        }
      }
      .boxContent-R {
        width: calc(100% - 220px);
        height: 100%;
        background-color: #f8f8f8;
        position: relative;
        .contentTop {
          width: calc(100% - 16px);
          height: calc(100% - 90px);
          overflow-y: scroll;
          scrollbar-width: none;
          margin: 16px 0 16px 16px;

          .conTextMatchingRules {
            width: 100%;
            background-color: #f8f8f8;
            margin-bottom: 10px;

            .tabBox {
              position: relative;
              background-color: #fff;
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
              .spanF {
                width: 100%;
                height: 26px;
                background-color: #f8f8f8;
                .spanA {
                  width: 100%;
                  height: 10px;
                  background-color: #fff;
                  border-radius: 0 0 50px 50px;
                }

                .spanC {
                  width: 100%;
                  height: 16px;
                }
              }
              .spanD {
                width: 100%;
                height: 36px;
                background-color: #f8f8f8;
                .spanA {
                  width: 100%;
                  height: 10px;
                  background-color: #fff;
                  border-radius: 0 0 50px 50px;
                }
                .spanB {
                  width: 100%;
                  height: 10px;
                  background-color: #fff;
                  border-radius: 50px 50px 0 0;
                }
                .spanC {
                  width: 100%;
                  height: 16px;
                }
              }

              .tabContent {
                width: 100%;
                // background-color: yellow;
                background-color: #fff;
                border-radius: 10px;
                padding: 20px 0 20px 30px;

                :deep(.arco-input-tag-input) {
                  height: 40px;
                }
                :deep(.arco-select-view-single),
                :deep(.arco-select-view-multiple),
                :deep(.arco-select-view-inner) {
                  height: 50px !important;
                  border-radius: 10px !important;
                  line-height: 50px !important;
                  padding-left: 10px;
                }

                :deep(.arco-row-justify-start) {
                  width: 616px;
                  margin-left: -20px;
                }
                .title {
                  font-size: 14px;
                  color: #333;
                  font-weight: 700;
                  margin-bottom: 15px;
                }
                .titleG {
                  font-size: 14px;
                  color: #333;
                  font-weight: 700;
                  width: 600px;
                  :deep(.arco-select-view-single),
                  :deep(.arco-select-view-multiple),
                  :deep(.arco-select-view-inner) {
                    height: auto !important;
                    border-radius: 10px !important;
                    line-height: auto !important;
                  }
                }
                .titleN {
                  margin-top: 20px;
                  .text {
                    font-size: 12px;
                    color: #666666;
                    margin: 15px 0;
                  }
                  .selectW {
                    // width: 600px;
                    :deep(.arco-select-view-single),
                    :deep(.arco-select-view-multiple),
                    :deep(.arco-select-view-inner) {
                      height: auto !important;
                      border-radius: 10px !important;
                      line-height: auto !important;
                    }
                  }
                  .selectLang {
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-between;
                    width: 600px;
                    .lang {
                      margin-top: 20px;

                      width: 80px;
                      position: relative;
                      .span {
                        position: absolute;
                        right: 0;
                        top: 2px;
                      }
                    }
                  }

                  .inputT {
                    width: 600px;
                    position: relative;
                    :deep(.arco-input-wrapper) {
                      height: 50px !important;
                      line-height: 50px !important;
                      border-radius: 10px !important;
                      padding-left: 10px;
                      margin-top: 20px;
                    }
                  }
                }
                .text {
                  font-size: 12px;
                  color: #666666;
                  margin-bottom: 15px;
                }
                .huiF {
                  margin-bottom: 30px;
                }
              }
              .tabContentF {
                width: 100%;
                background-color: #fff;
                border-radius: 10px;
                padding-bottom: 10px;

                :deep(.arco-input-tag-input) {
                  height: 40px;
                }
                :deep(.arco-select-view-single),
                :deep(.arco-select-view-multiple),
                :deep(.arco-select-view-inner) {
                  height: 50px !important;
                  border-radius: 10px !important;
                  line-height: 50px !important;
                  padding-left: 10px;
                }

                .hFwe {
                  width: 100%;
                  height: 60px;
                  line-height: 50px;
                  font-size: 20px;
                  color: #333;
                  font-weight: 700;
                  border-bottom: 1px solid #e0e0e0;
                  padding-left: 20px;
                }
                .gzTwo {
                  padding-left: 20px;
                  :deep(.arco-input-wrapper) {
                    height: 50px !important;
                    line-height: 50px !important;
                    border-radius: 10px !important;
                    padding-left: 10px;
                    margin-top: 20px;
                  }
                  .titleG {
                    font-size: 14px;
                    color: #333;
                    font-weight: 700;
                    padding-left: 20px;
                    margin-top: 20px;
                  }
                  .titleM {
                    margin-top: 5px;
                  }
                  .titleContent {
                    padding-left: 20px;
                    margin-top: 10px;
                    font-size: 12px;
                    color: #666;
                  }
                }
              }
            }
            :deep(.arco-tabs-nav-ink) {
              bottom: 7px;
              width: 16px !important;
              height: 3px;
              left: 50%;
              transform: translateX(50%);
            }
          }
          .conB {
            width: 100%;
            height: 10px;
            background-color: #f8f8f8;
          }
        }
        .contentBottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 80px;
          background-color: #fff;
          box-shadow: 0 -10px 6px #33323814;
          padding-top: 20px;
          .shoQ {
            width: 1165px;
            color: #666;
            display: flex;
            margin: auto;
            justify-content: flex-end;
            height: 40px;
            line-height: 40px;
            .pLunR {
              margin-right: 20px;
              width: 120px;
              height: 40px;
              line-height: 40px;
              text-align: center;
              color: #c1c1c1;
              background-color: #f3f2ff;
              border-radius: 8;
              cursor: pointer;
            }
            .myBtn {
              width: 100px;
              height: 40px;
              background-color: #4a3aff;
              padding: 0 25px;
              border-radius: 10px;
              color: #fff;
            }
            .myBtn:hover {
              background-color: #6d60f7;
            }
            .myBtn1 {
              width: 100px;
              height: 40px;
              background-color: #fff;
              border: 1px solid #999;
              padding: 0 25px;
              border-radius: 10px;
              color: #333;
            }
            .myBtn1:hover {
              background-color: #f2f2f2;
            }
            svg {
              font-size: 18px;
              vertical-align: middle;
              transform: translateY(-2px);
            }
          }
        }
      }
    }
  }
}
.myModalAddFen {
  .popContent {
    width: 100%;
    height: 700px;
    :deep(.arco-input-wrapper) {
      height: 40px !important;
      line-height: 40px !important;
      border-radius: 10px !important;
      padding-left: 10px;
      margin: 10px 0 20px 40px;
    }
    .xz {
      width: 910px;
      padding-left: 40px;
      font-size: 16px;
      color: #333;
      display: flex;
      justify-content: space-between;
    }
  }
  .modalTitle {
    padding: 10px 0px 20px 40px;
    font-size: 20px;
    color: #333;
    font-weight: 700;
  }
}
.ko {
  margin-top: 40px auto 0;
  img {
    width: 300px;
    margin: auto;
    display: block;
  }
  .text {
    text-align: center;
  }
  .myBtn {
    display: block;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #fff;
    font-size: 12px;
    border-radius: 10px;
    margin: 50px auto 0;
    background-color: #4a3aff;
  }
  .myBtn:hover {
    background-color: #5c4efc;
  }
}
.myModalJc {
  .shoQ {
    width: 450px;
    color: #666;
    display: flex;
    margin: 30px auto 10px;
    justify-content: flex-end;
    height: 40px;
    line-height: 40px;
    .myBtn {
      width: 100px;
      height: 40px;
      background-color: #4a3aff;
      padding: 0 25px;
      border-radius: 12px;
      color: #fff;
    }
    .myBtn:hover {
      background-color: #6d60f7;
    }
    .myBtn1 {
      width: 100px;
      height: 40px;
      background-color: #fff;
      border: 1px solid #999;
      padding: 0 25px;
      border-radius: 12px;
      color: #333;
    }
    .myBtn1:hover {
      background-color: #f2f2f2;
    }
    svg {
      font-size: 18px;
      vertical-align: middle;
      transform: translateY(-2px);
    }
  }
  .modalTitle {
    padding: 10px 0px 20px 20px;
    font-size: 16px;
    color: #1d2129;
    font-weight: 700;
  }
  .pxu {
    width: 100%;
    margin-top: 20px;
    // margin-bottom: 60px;
    .pxu-li {
      width: 105px;
      height: 105px;
      display: inline-block;
      margin: 0 0 20px 40px;
      border-radius: 10px;
      border: 3px solid #165dff;
      position: relative;
      svg {
        width: 62px;
        height: 62px;
        border-radius: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
.demo-basic {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>
