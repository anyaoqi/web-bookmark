<script setup>
import { onMounted } from 'vue'
import Valine from 'valine'

onMounted(() => {
  new Valine({
    el:'#vcomments',
    appId: 'PuE1n5QOQhVbuYfo66QysfVa-MdYXbMMI',
    appKey: 'yOyION7ko4OF9S83z7OO65Mi',
    placeholder: ''
  })
})
</script>

<template>
  <div class="w-[800px]">
    <h1 class="text-2xl">申请收录的方式</h1>
    <div class="m-auto">
      <p>通过在当前页面留言你想要添加的内容</p>
      <p class="mt-2">
        留言格式：<br>
        名称：xxxx<br>
        分类：xxxx（可选）<br>
        链接：xxxx<br>
        中文链接：xxxx (可选)<br>
        GitHub链接：xxxx (可选)<br>
      </p>
    </div>
  </div>
  <div id="vcomments" class="w-[800px] m-auto" ></div>
</template>

<style lang='scss' scoped>
</style>