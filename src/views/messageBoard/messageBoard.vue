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
  <div id="vcomments" class="w-[800px] m-auto"></div>
</template>

<style lang='scss' scoped>
</style>