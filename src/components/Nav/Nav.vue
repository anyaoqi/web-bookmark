<script setup>
import { computed, ref } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const currNav = computed(() => store.currNav)
const navShow = computed(() => store.navShow)
// 导航列表
const navList = computed(() => store.pageData)

// 点击左侧导航
const navClick = ({ name }) => {
  store.setCurrNav(name)
}
</script>

<template>
  <nav
    class="nav-container h-screen border-r border-gray-300 dark:bg-gray-900 transition-all"
    :class="[navShow ? 'w-48' : 'w-0']"
  >
    <!-- Logo -->
    <div
      class="logo-wrapper h-14 flex justify-center border-b border-gray-300 dark:border-gray-500"
    >
      <img class="w-[190px] h-[55px]" src="@/assets/images/logo.png" />
    </div>
    <!-- 左侧导航 -->
    <ul class="nav-wrapper overflow-auto text-base">
      <li
        v-for="(nav, index) in navList"
        :key="index"
        class="nav-item h-10 hover:text-sky-500 dark:hover:bg-sky-500/75 dark:hover:text-slate-100 cursor-pointer select-none"
        :class="{
          'text-sky-500 dark:bg-sky-500/75 dark:text-slate-100':
            currNav == nav.name,
        }"
        @click="navClick(nav)"
      >
        <a :href="`#${nav.name}`" class="w-full h-full px-5 items-center flex">
          <span class="nav-item-icon w-4 mr-2">
            <i :class="[nav.icon || 'fa fa-location-pin']" />
          </span>
          <span class="nav-item-text">{{ nav.name }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-container {
  .nav-wrapper {
    height: calc(100vh - 56px);
  }
}
</style>
