<script setup>
</script>

<template>
  <nav class="nav-container w-48 h-screen border-r border-gray-300 dark:bg-gray-900">
    <div class="logo-wrapper h-14 py-2 flex justify-center border-b  border-gray-300  dark:border-gray-500">
      <img class="h-10" src="@/assets/images/logo.png"/>
    </div>
    <ul class="nav-wrapper overflow-auto  text-base">
      <li class="nav-item h-10 items-center flex px-5  hover:text-sky-500 dark:hover:bg-sky-500/75 dark:hover:text-slate-100 cursor-pointer select-none">
        <span class="nav-item-icon w-4 mr-3">
          <i class="fa fa-book" />
        </span>
        <span class="nav-item-text">前端框架</span>
      </li>
      <li class="nav-item h-10 items-center flex px-5 hover:text-sky-500 dark:hover:bg-sky-500/75 dark:hover:text-slate-100 cursor-pointer select-none">
        <span class="nav-item-icon w-4 mr-3">
          <i class="fa fa-folder-tree" />
        </span>
        <span class="nav-item-text">移动端</span>
      </li>
      <li class="nav-item h-10 items-center flex px-5 hover:text-sky-500 dark:hover:bg-sky-500/75 dark:hover:text-slate-100 cursor-pointer select-none">
        <span class="nav-item-icon w-4 mr-3">
          <i class="fa fa-church" />
        </span>
        <span class="nav-item-text">桌面端</span>
      </li>
    </ul>
  </nav>
</template>

<style lang='scss' scoped>
.nav-container {
  .logo-wrapper {

  }
  .nav-wrapper {
    height: calc(100vh - 56px);
  }
}
</style>