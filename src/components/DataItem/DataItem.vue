<script setup>
const props = defineProps(['data'])
const itemData = props.data
</script>

<template>
    <div class="list-item-content relative w-full overflow-hidden rounded h-full border border-gray-600 hover:bg-gray-600 hover:text-slate-100  dark:bg-gray-600 dark:hover:bg-cyan-800" :title="itemData.desc">
      <div class="item-top flex items-center py-2 px-2">
        <!-- logo -->
        <img class="item-logo w-[42px] h-[42px]" v-if="itemData.logo" :src="`./images/${itemData.logo}`"/>
        <!-- 名称和描述 -->
        <div class="ml-2">
          <h3 class="item-title text-base font-bold pointer-events-none">{{ itemData.name }}</h3>
          <p class="pr-2 text-slate-400 text-xs truncate" :class="[itemData.logo ? 'w-36': 'w-48']">{{ itemData.desc }}</p>
        </div>
      </div>
      <!-- URL地址 -->
      <div class="item-bottom py-2 flex text-xs items-center border-t border-gray-500 dark:border-gray-50 overflow-hidden">
        <p class="item-desc text-center  truncate">{{ itemData.url }}</p>
        <div
          class="item-link absolute left-0 text-center py-1"
          target="_blank"
          >
          <span class="flex" v-if="itemData.url && itemData.url_cn">
            <a  class="flex-1 hover:text-sky-500 cursor-pointer" :href="itemData.url" target="_blank">
              <i class="fa fa-external-link text-xs" />
              访问英文地址
            </a>
            |
            <a  class="flex-1 hover:text-sky-500 cursor-pointer" :href="itemData.url_cn" target="_blank">
              <i class="fa fa-external-link text-xs" />
              访问中文地址
            </a>
          </span>
          <a v-else class="block hover:text-sky-500 cursor-pointer" :href="itemData.url" target="_blank">
            <i class="fa fa-external-link text-xs" />
            访问地址
          </a>
        </div>
      </div>
    </div>
</template>

<style lang="scss"  scoped>
.item-desc {
  width: 100%;
  transform: translateX(0%);
  transition: all 0.4s;
}
.item-link {
  width: 100%;
  transform: translateX(-100%);
  transition: all 0.4s;
}
.list-item-content:hover {
  .item-desc {
    transform: translateX(100%);
  }
  .item-link {
    transform: translateX(0%);
  }
}
</style>