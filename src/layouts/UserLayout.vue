<template>
  <div id="userLayout" class="user-layout-wrapper">
    <div class="container">
      <div class="top">
        <div class="header">
          <a href="/">
            <img src="~@/assets/logo.svg" class="logo" alt="logo">
            <span class="title">后台管理系统</span>
          </a>
        </div>
        <div class="desc">
          感恩一路有您<br>
          心存感激   与爱同行
        </div>
      </div>

      <router-view />

      <div class="footer">
        <div class="links">
          <a href="_self">帮助</a>
          <a href="_self">隐私</a>
          <a href="_self">条款</a>
        </div>
        <div class="copyright">
          Copyright &copy; 2018 tdeado
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserLayout',
}
</script>


<style scoped>
.user-layout-wrapper {
  height: 100%;
}
.user-layout-wrapper.mobile .container .main {
  max-width: 368px;
  width: 98%;
}
.user-layout-wrapper .container {
  width: 100%;
  min-height: 100%;
  background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
  background-size: 100%;
  padding: 110px 0 144px;
  position: relative;
}
.user-layout-wrapper .container a {
  text-decoration: none;
}
.user-layout-wrapper .container .top {
  text-align: center;
}
.user-layout-wrapper .container .top .header {
  height: 44px;
  line-height: 44px;
}
.user-layout-wrapper .container .top .header .badge {
  position: absolute;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  margin-left: -12px;
  margin-top: -10px;
  opacity: 0.8;
}
.user-layout-wrapper .container .top .header .logo {
  height: 44px;
  vertical-align: top;
  margin-right: 16px;
  border-style: none;
}
.user-layout-wrapper .container .top .header .title {
  font-size: 33px;
  color: rgba(0, 0, 0, 0.85);
  font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: relative;
  top: 2px;
}
.user-layout-wrapper .container .top .desc {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 12px;
  margin-bottom: 40px;
}
.user-layout-wrapper .container .main {
  min-width: 260px;
  width: 368px;
  margin: 0 auto;
}
.user-layout-wrapper .container .footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;
}
.user-layout-wrapper .container .footer .links {
  margin-bottom: 8px;
  font-size: 14px;
}
.user-layout-wrapper .container .footer .links a {
  color: rgba(0, 0, 0, 0.45);
  transition: all 0.3s;
}
.user-layout-wrapper .container .footer .links a:not(:last-child) {
  margin-right: 40px;
}
.user-layout-wrapper .container .footer .copyright {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

</style>
