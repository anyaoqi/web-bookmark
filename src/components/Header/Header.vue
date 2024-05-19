<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const store = useStore()
const router = useRouter()

// 是否暗色模式
const isDark = computed(() => store.darkTheme)
// 切换模式
const toggleMode = () => {
  store.darkThemeChange(!isDark.value)
}
// 设置主题模式
store.darkThemeChange(isDark.value)

// 主菜单
const menuList = computed(() => store.menuList)
const currMenu = computed(() => store.currMenu)
// 获取数据
const getMenuData = async () => {
  // 获取菜单路由
  await store.getMenuData()
  if (store.menuList && store.menuList.length) {
    const currMenuKey = store.menuList[0].key
    store.setCurrMenu(currMenuKey)
    router.replace('/' + currMenuKey)
  }
}

getMenuData()

// 获取数据
const getPageData = (menuKey) => {
  store.setCurrMenu(menuKey)
  store.getPageData(menuKey)
}

// 左侧导航显示状态
const navShow = computed(() => store.navShow)
const navWidth = computed(() => (store.navShow ? '193px' : '0px'))
// 切换显示左侧导航
const toggleNavShow = () => {
  store.toggleNavShow()
}
</script>

<template>
  <header
    class="header fixed flex justify-between items-center h-14 backdrop-blur-md border-b border-gray-200 dark:border-gray-600 shadow-lg z-10"
  >
    <div class="header-left flex">
      <span class="toggle-nav px-2 cursor-pointer" @click="toggleNavShow">
        <i v-show="!navShow" class="fa fa-align-left" />
        <i v-show="navShow" class="fa fa-align-right" />
      </span>
      <div class="search-wrapper ml-2">
        <router-link to="/messageBoard">申请收录</router-link>
      </div>
    </div>
    <div class="header-center">
      <ul class="menu-list flex text-lg">
        <li
          v-for="menu in menuList"
          :key="menu.key"
          class="menu-item mr-4 pr-4 border-r-2 last:pr-1 last:border-r-0 cursor-pointer hover:text-sky-400"
          :class="{ 'text-sky-400': currMenu == menu.key }"
          @click="getPageData(menu.key)"
        >
          <router-link :to="`/${menu.key}`">
            <i class="text-sm" :class="menu.icon"></i>
            <span class="ml-1">{{ menu.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="header-right inline-flex flex-row-reverse">
      <span
        class="toggle-mode cursor-pointer w-10 text-center"
        @click="toggleMode"
      >
        <i class="fas fa-moon" v-show="!isDark" title="切换暗色模式" />
        <i class="fas fa-adjust" v-show="isDark" title="切换明亮模式" />
      </span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: calc(100vw - v-bind(navWidth));
}
</style>
