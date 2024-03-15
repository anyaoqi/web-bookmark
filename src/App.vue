<script setup>
import { RouterView } from 'vue-router'
import Nav from '@/components/Nav/Nav.vue'
import Header from '@/components/Header/Header.vue'
import Main from '@/components/Main/Main.vue'
</script>

<template>
  <!-- 菜单栏 -->
  <Nav />
  <!-- 主体 -->
  <div class="flex-1 inline-flex flex-col">
    <!-- 头部 -->
    <Header />
    <!-- 页面内容 -->
    <Main>
      <RouterView />
    </Main>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
}
.page-container {
  color: $color-primary;
}
</style>
