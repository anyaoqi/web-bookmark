<script setup>
import { ref, reactive } from 'vue'

// 是否暗色模式
const isDark = ref(true)
// 切换模式
const toggleMode = () => {
  const htmlDom = document.getElementsByTagName('html')[0]
  htmlDom.classList.toggle('dark')
  isDark.value = !isDark.value
}

// 主菜单
const menu = reactive({
  list: [
    { key: 'document', name: '前端文档' },
    { key: 'tool', name: '前端工具' },
    { key: 'community', name: '前端社区' },
  ],
})
</script>

<template>
  <header
    class="header fixed flex justify-between items-center h-14 backdrop-blur-md border-b border-gray-200 dark:border-gray-600 shadow-lg"
  >
    <div class="header-left">
      <div class="search-wrapper"></div>
    </div>
    <div class="header-center">
      <ul class="menu-list flex text-lg">
        <li
          v-for="menu in menu.list"
          :key="menu.key"
          class="menu-item mr-4 pr-4 border-r-2 last:pr-1 last:border-r-0 cursor-pointer hover:text-sky-400"
        >
          <span>{{ menu.name }}</span>
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
