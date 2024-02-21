<script setup>
</script>

<template>
  <nav class="nav-container w-48 h-screen bg-gray-900">
    <div class="logo-wrapper h-14 py-2 flex justify-center">
      <img class="h-10" src="@/assets/images/logo.png"/>
    </div>
    <ul class="nav-wrapper overflow-auto  text-xs">
      <li class="nav-item h-8 items-center flex px-5 hover:bg-sky-500/75 cursor-pointer select-none">
        <span class="nav-item-icon w-3 mr-3">
          <i class="fa fa-book" />
        </span>
        <span class="nav-item-text">前端文档</span>
      </li>
      <li class="nav-item h-8 items-center flex px-5 hover:bg-sky-500/75 cursor-pointer select-none">
        <span class="nav-item-icon w-3 mr-3">
          <i class="fa fa-folder-tree" />
        </span>
        <span class="nav-item-text">前端工具</span>
      </li>
      <li class="nav-item h-8 items-center flex px-5 hover:bg-sky-500/75 cursor-pointer select-none">
        <span class="nav-item-icon w-3 mr-3">
          <i class="fa fa-church" />
        </span>
        <span class="nav-item-text">前端社区</span>
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