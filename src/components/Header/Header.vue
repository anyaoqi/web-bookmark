<script  setup>

</script>

<template>
   <header class="header fixed flex items-center w-full  h-14  backdrop-blur-md border-b border-sky-400">
      <div class="header-left flex-1">
         <div class="search-wrapper"></div>
      </div>
      <div class="header-center flex-1">
         <ul class="menu-list flex">
            <li class="menu-item mr-5 cursor-pointer hover:text-sky-500">
               <span>前端文档</span>
            </li>
            <li class="menu-item mr-5 cursor-pointer hover:text-sky-500">
               <span>前端工具</span>
            </li>
            <li class="menu-item mr-5 cursor-pointer hover:text-sky-500">
               <span>前端社区</span>
            </li>
         </ul>
      </div>
      <div class="header-right flex-1"></div>
   </header>
</template>

<style lang='scss' scoped>
.header {
   background: rgb(17, 24, 39, 0.1)
}
</style>