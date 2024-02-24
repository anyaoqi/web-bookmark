<script setup>
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()

// 是否暗色模式
const isDark = computed(() => store.darkMode)
// 切换模式
const toggleMode = () => {
  store.darkThemeChange()
}

// 主菜单
const menuList =  computed(() => store.menuList)
// 获取数据
const getMenuData = () => {
  // 获取菜单路由
  store.getMenuData()
}

getMenuData()

// 获取数据
const getPageData = (menuKey) => {
  store.getPageData(menuKey)
}
</script>

<template>
  <header
    class="header fixed flex justify-between items-center h-14 backdrop-blur-md border-b border-gray-200 dark:border-gray-600 shadow-lg z-10"
  >
    <div class="header-left">
      <div class="search-wrapper"></div>
    </div>
    <div class="header-center">
      <ul class="menu-list flex text-lg">
        <li
          v-for="menu in menuList"
          :key="menu.key"
          class="menu-item mr-4 pr-4 border-r-2 last:pr-1 last:border-r-0 cursor-pointer hover:text-sky-400"
          @click="getPageData(menu.key)"
        >
          <router-link :to="`/${menu.key}`">
            <span>{{ menu.name }}</span>
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
  width: calc(100vw - 193px);
}
</style>
