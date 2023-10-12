<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const searchValue = ref('')
const activeIndex = ref(1)
const currentDate = ref(new Date())
</script>

<template>
    <div class='header'>
      <div class='header-left'>
        <h2 class='logo'>前端书签</h2>
      </div>
      <div class='header-center'>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          >
          <el-menu-item index="1">前端官网</el-menu-item>
          <el-menu-item index="2">前端工具</el-menu-item>
          <el-menu-item index="3">前端面试题</el-menu-item>
          <el-menu-item index="4">杂七杂八</el-menu-item>
        </el-menu>
      </div>
      <div class='header-right'>
        <el-input
          v-model="searchValue"
          class="w-50 m-2"
          placeholder="Please Input"
          :suffix-icon="Search"
        />
      </div>
    </div>
    <div class='container'>
      <div class='silid'>
          <el-menu 
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <a href='#one'>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <template #title>Navigator Four</template>
              </el-menu-item>
            </a>
            <a href='#two'>
              <el-menu-item index="5">
                <el-icon><setting /></el-icon>
                <template #title>Navigator Four</template>
              </el-menu-item>
            </a>
            <a href='#three'>
              <el-menu-item index="6">
                <el-icon><setting /></el-icon>
                <template #title>Navigator Four</template>
              </el-menu-item>
            </a>
          </el-menu>
      </div>
      <div class='content'>
        <div id='one' class='content-item content-one'>
          123
        </div>
        <div id='two' class='content-item content-two'>
          456
        </div>
        <div id='three' class='content-item content-three'>
          ABC
        </div>
      </div>
    </div>
    <div class='footer'></div>
</template>

<style lang='scss' scoped>
$page-padding: 50px;
$page-padding-top: 60px; 
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: $page-padding-top;
  background-color: #fff;
  .header-left {
    .logo {
      display: inline-block;
      width: 230px;
      height: 100%;
      text-align: center;
    }
  }
  .header-center {
    flex: 1;
  }
  .header-right {
    padding: 0 40px;
  }
}
.container {
  display: flex;
  padding-top: 80px;
  .silid {
    position: fixed;
    left: 0;
    width: 230px;
    height: 100%;
    background-color: #fff;
  }
  .content {
    flex: 1;
    height: calc(100vh - 80px);
    background: #fff;
    margin-left: 240px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: rgba(0,0,0,.8);
    }
    &::-webkit-scrollbar-track
    {
        -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
        border-radius:10px;
        background-color:#F5F5F5;
    }
    /*定义滑块
     内阴影+圆角*/
    &::-webkit-scrollbar-thumb
    {
        border-radius:10px;
        -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
        background-color: #b3b3b3;
    }
  }
}
.footer {

}

.content-item {
  height: 800px;
}


.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.card-item {
  width: 200px;
}
</style>
