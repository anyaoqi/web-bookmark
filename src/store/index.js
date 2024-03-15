import { createPinia, defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { getMenus, getPageData as getData } from '@/apis'

const pinia = createPinia()

export const useStore = defineStore('store', {
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
    // 是否显示左侧nav导航
    navShow: true,
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
    darkThemeChange(isDark) {
      const htmlDom = document.getElementsByTagName('html')[0]
      if (isDark) {
        htmlDom.classList.add('dark')
      } else {
        htmlDom.classList.remove('dark')
      }
      this.darkTheme = isDark
    },
    // 获取菜单路由
    getMenuData() {
      return getMenus().then((data) => {
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
      getData(menuKey).then((pageData) => {
        if (pageData && pageData.length) {
          this.pageData = pageData
          this.currNav = pageData[0].name
        } else {
          this.pageData = []
        }
      })
    },
    toggleNavShow() {
      this.navShow = !this.navShow
    },
  },
  persist: true,
})

pinia.use(piniaPluginPersistedstate)
export default pinia
