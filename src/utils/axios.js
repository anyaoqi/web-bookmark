import axios from 'axios'
import {
  getAuthority,
  clearAuthority,
  getNoLogin,
  setNoLogin,
} from '@/utils/authority'

// 创建请求实例
const instance = axios.create({
  baseURL: '/api', // 设置统一的请求前缀
  timeout: 10000, // 设置统一的超时时长
})

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    // 请求拦截添加token，用于后端的验证
    config.headers['access-token-mcs'] = getAuthority()
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (err) => {
    // 请求错误，这里可以用全局提示框进行提示
    return Promise.reject(err)
  },
)

function handleError({ code: errCode }) {
  const noLogin = getNoLogin()
  if (
    errCode === '2100' ||
    errCode === '2101' ||
    errCode === '2102' ||
    errCode === '2103'
  ) {
    if (noLogin === 'active') {
      return
    }
    const pathname = window.sessionStorage.getItem('pathname')
    const wkdCsid = window.sessionStorage.getItem('wkdCsid')
    const menuCode = window.sessionStorage.getItem('menuCode')

    const token = getAuthority()
    window.console.log('2100:wkdCsid', wkdCsid)
    window.console.log('2100:token', token)
    // eslint-disable-all-line no-alert
    if (!token && wkdCsid && wkdCsid !== null && wkdCsid !== 'undefined') {
      setNoLogin('active')
      clearAuthority()
      const SERVER_IP = 'http://localhost:8000/'
      window.console.log('重新走了window.location.href')
      window.location.href = `${
        import.meta.env.VITE_LOGIN_URL
      }/oauth/authorize?action=login&response_type=code&client_secret=wdk.client.secret&client_id=wdk.client.id&wdk_csid=${wkdCsid}&redirect_uri=${
        import.meta.env.VITE_NODE_ENV !== 'development'
          ? window.location.origin + import.meta.env.VITE_REDIRECT_URL
          : SERVER_IP
      }#${pathname}?menucode=${menuCode}`
    } else {
      window.console.log('wdkCsid未获取到')
    }
  }
}

// 响应拦截
instance.interceptors.response.use(
  ({ data }) => {
    handleError(data)
    return data
  },
  (err) => {
    return Promise.reject(err.response)
  },
)

// 封装公共请求方法
export function request(config) {
  return instance.request(config)
}

// 封装POST请求方法
export function post(url, data, config) {
  return instance.post(url, data, config)
}

// 封装GET请求方法
export function get(url, config) {
  return instance.get(url, config)
}

// 导出axios实例
export default instance
