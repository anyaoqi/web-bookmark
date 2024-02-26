import { request } from '@/utils/axios'

// 获取菜单列表
export const getMenus = () => {
  return request({
    url: '/data/menus.json',
    method: 'GET'
  })
}

/**
 * 获取页面数据
 * @param {*} key 菜单的key 也是数据json文件名
 */
export const getPageData = (key) => {
  return request({
    url: `/data/${key}.json`,
    method: 'GET'
  })
}