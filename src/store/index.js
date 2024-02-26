import { createPinia, defineStore } from 'pinia'
import { getMenus, getPageData as getData } from '@/apis'

const pinia = createPinia()

export const useStore = defineStore('store',{
  state: () => ({
    // 是否暗色主题
    darkTheme: true,
    // 顶部菜单列表
    menuList: [],
    // 当前菜单
    currMenu: '',
    // 页面数据
    pageData: [],
    // 当前页面导航
    currNav: '',
  }),
  getters: {},
  actions: {
    // 设置当前导航
    setCurrNav(navName) {
      this.currNav = navName
    },
    // 设置当前菜单
    setCurrMenu(menuKey) {
      this.currMenu = menuKey
    },
    // 修改主题模式
    darkThemeChange() {
      const htmlDom = document.getElementsByTagName('html')[0]
      htmlDom.classList.toggle('dark')
      this.darkTheme = !this.darkTheme
    },
    // 获取菜单路由
    getMenuData() {
      return getMenus().then(data => {
        if (data && data.length) {
          this.menuList = data
        } else {
          this.menuList = []
        }
      })
    },
    // 获取页面数据
    getPageData(menuKey) {
      this.pageData = []
      getData(menuKey).then(pageData => {
        if (pageData && pageData.length) {
          this.pageData = pageData
          this.currNav = pageData[0].name
        } else {
          this.pageData = []
        }
      })
    }
  }
})

export default pinia