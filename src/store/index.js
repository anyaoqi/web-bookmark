import { createPinia, defineStore } from 'pinia'
import { getMenus, getPageData as getData } from '@/apis'

const pinia = createPinia()

export const useStore = defineStore('store',{
  state: () => ({
    darkTheme: true,
    menuList: [],
    pageData: []
  }),
  getters: {},
  actions: {
    // 修改主题模式
    darkThemeChange() {
      const htmlDom = document.getElementsByTagName('html')[0]
      htmlDom.classList.toggle('dark')
      this.darkTheme = !this.darkTheme
    },
    // 获取菜单路由
    getMenuData() {
      getMenus().then(data => {
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
        } else {
          this.pageData = []
        }
      })
    }
  }
})

export default pinia