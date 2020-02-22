<script>
import AppNav from '@/components/AppNav'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
    components: {
        AppNav,
        AppHeader,
        AppFooter,
    },
}
</script>

<template>
  <div id="app">
    <app-nav />
    <hr />
    <app-header />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<style scoped>
  #app {
    text-align: center;
    font-size: 30px;
  }
</style>
