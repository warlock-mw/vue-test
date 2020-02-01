<template>
  <div id="app">
    <router-link to="/a">A へ移動</router-link>
    <router-link to="/b">B へ移動</router-link>
    <router-link to="/c">C へ移動</router-link>
    <hr />
    <div class="header">ヘッダー</div>
    <router-view></router-view>
    <div class="footer">フッター</div>
  </div>
</template>

<style>
  #app {
    text-align: center;
    font-size: 40px;
  }
  .header {
    height: 50px;
    background-color: #ebebeb;
    margin-bottom: 50px;
  }
  .footer {
    height: 50px;
    background-color: #ebebeb;
    margin-top: 70px;
  }
</style>
