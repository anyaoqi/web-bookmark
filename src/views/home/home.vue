<script setup></script>

<template>
  <div class="category-wrapper">
    <div class="category-head flex">
      <span class="category-title-icon mr-2">
        <i class="fa fa-tag text-lg" ></i>
      </span>
      <h2 class="category-title-text text-lg">前端框架</h2>
    </div>
    <ul class="cagetory-items flex flex-wrap mt-2">
      <li class="list-item w-1/5 h-22 pl-4 mb-3">
        <div class="list-item-content relative w-full overflow-hidden rounded h-full border border-gray-600 hover:bg-gray-600 hover:text-slate-100  dark:bg-gray-600 dark:hover:bg-cyan-800 cursor-pointer " title="渐进式JavaScript框架">
          <div class="item-top flex items-center py-2 px-2">
            <img class="item-logo w-12 h-12" src="@/assets/images/6128107.png"/>
            <h3 class="item-title text-lg font-bold">Vue</h3>
          </div>
          <div class="item-bottom py-2 flex items-center border-t border-gray-500 dark:border-gray-50 overflow-hidden">
            <p class="item-desc text-center text-xs">渐进式JavaScript框架</p>
            <a
              class="item-link block absolute left-0 text-center py-1  dark:hover:text-sky-500"
              href="https://cn.vuejs.org/"
              target="_blank"
              >
              <i class="fa fa-external-link text-xs" />
              访问地址
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
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
