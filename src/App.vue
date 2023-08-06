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
      <el-affix :offset="70">
      <div class='silid'>
          <el-menu 
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <template #title>Navigator Four</template>
            </el-menu-item>
            <a href='#three'>
              <el-menu-item index="5">
                <el-icon><setting /></el-icon>
                <template #title>Navigator Four</template>
              </el-menu-item>
            </a>
          </el-menu>
      </div>
      </el-affix>
      <div class='content'>
        <div id='one' class='content-item content-one'>
            <el-card class='card-item' :body-style="{ padding: '0px', width: '200px' }">
              <!-- <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              /> -->
              <div style="padding: 14px">
                <span>名称</span>
                <div class="bottom">
                  <time class="time">描述</time>
                  <el-button text class="button">Operating</el-button>
                </div>
              </div>
            </el-card>
        </div>
        <div id='two' class='content-item content-two'>

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
  justify-content: space-between;
  align-items: center;
  height: $page-padding-top;
  padding: 0 $page-padding;
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
    width: 800px;
  }
}
.container {
  display: flex;
  padding: 20px $page-padding;
  padding-top: 80px;
  .silid {
    width: 230px;
    height: 800px;
    background-color: #fff;
    margin-right: 30px;
  }
  .content {
    flex: 1;
    // height: 800px;
    background: #fff;
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
