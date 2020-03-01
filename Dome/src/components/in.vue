<template :style="{height:'100%'}">
  <a-layout :style="{height:'100%'}">
    <a-layout-header class="header">
      <div class="logo" />
      <!-- <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px',height:'100%' }"
      >
      </a-menu>-->
    </a-layout-header>
    <a-layout :style="{height:'100%'}">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :defaultSelectedKeys="['1']"
          :defaultOpenKeys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title">
              <div class="npms">
                <a-icon type="bank" />系统
              </div>
            </span>
            <a-menu-item key="1">
              <div class="npms">
                <a-icon type="setting" />系统配置
              </div>
            </a-menu-item>
            <a-menu-item key="2">
              <div class="npms">
                <a-icon type="setting" />系统入口
              </div>
            </a-menu-item>
            <a-menu-item key="3">
              <div class="npms">
                <a-icon type="bars" />菜单
              </div>
            </a-menu-item>
            <a-menu-item key="4">
              <div class="npms">
                <a-icon type="audit" />审计日志
              </div>
            </a-menu-item>
            <a-menu-item key="5">
              <div class="npms">
                <a-icon type="audit" />公告通知
              </div>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <div class="npms">
                <a-icon type="user" />用户管理
              </div>
            </span>

            <a-menu-item key="6">
              <router-link to="/helloWorld">
                <div class="npms">
                  <a-icon type="apple" />组织机构
                </div>
              </router-link>
            </a-menu-item>
            <a-menu-item key="7">
              <router-link to="/npmq">
                <div class="npms">
                  <a-icon type="trademark" />角色
                </div>
              </router-link>
            </a-menu-item>
            <a-menu-item key="8">
              <router-link to="/threea">
                <div class="npms">
                  <a-icon type="user" />用户
                </div>
              </router-link>
            </a-menu-item>
            <a-menu-item key="9">
              <router-link to="/foura">
                <div class="npms">
                  <a-icon type="profile" />班组管理
                </div>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title">
              <div class="npms">
                <a-icon type="wallet" />数据管理
              </div>
            </span>
            <a-menu-item key="10">option9</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title">
              <div class="npms">
                <a-icon type="shop" />世界运营
              </div>
            </span>
            <a-menu-item key="11">option9</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 24px 24px 24px" :style="{height:'100%'}">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' ,height:'100%'}"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
// import He from "./HelloWorld";
export default {
  data() {
    return {
      collapsed: false
    };
  }
  // components: { He }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
.npms {
  float: left;
}
</style>