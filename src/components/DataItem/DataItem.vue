<script setup>
const props = defineProps(['data'])
const itemData = props.data
</script>

<template>
    <div class="list-item-content relative w-full overflow-hidden rounded h-full border border-gray-600 hover:bg-gray-600 hover:text-slate-100  dark:bg-gray-600 dark:hover:bg-cyan-800  " title="渐进式JavaScript框架">
      <div class="item-top flex items-center py-2 px-2 justify-center">
        <img class="item-logo w-12 h-12" v-if="itemData.logo" :src="`/images/${itemData.logo}`"/>
        <h3 class="item-title text-lg font-bold pointer-events-none">{{ itemData.name }}</h3>
      </div>
      <div class="item-bottom py-2 flex items-center border-t border-gray-500 dark:border-gray-50 overflow-hidden">
        <p class="item-desc text-center text-xs">{{ itemData.desc }}</p>
        <a
          class="item-link block absolute left-0 text-center py-1  dark:hover:text-sky-500 cursor-pointer"
          :href="itemData.href"
          target="_blank"
          >
          <i class="fa fa-external-link text-xs" />
          访问地址
        </a>
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