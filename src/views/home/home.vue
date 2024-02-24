<script setup>
import { computed } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import DataItem from '@/components/DataItem/DataItem.vue'
import { useStore } from '@/store'

const store = useStore()
const route = useRoute()

// 页面数据
const pageData = computed(() => store.pageData)

// 获取页面数据
const getPageData = () => {
  // 路由参数：菜单Key
  const menuKey = route.params.key
  console.log('menuKey',menuKey)
  store.getPageData(menuKey)
}

getPageData()
</script>

<template>
  <div class="category-wrapper" v-for="(category, index) in pageData" :key="index" :id="category.name">
    <div class="category-head flex">
      <span class="category-title-icon mr-2">
        <i class="fa fa-tag text-lg" ></i>
      </span>
      <h2 class="category-title-text text-lg" >{{ category.name }}</h2>
    </div>
    <ul class="cagetory-items flex flex-wrap mt-2">
      <li class="list-item w-1/6 h-22 pl-4 mb-3" v-for="(item, i) in category.data" :key="i">
        <DataItem  :data="item"/>
      </li>
    </ul>
  </div>
</template>
