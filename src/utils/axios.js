import axios from 'axios'

// 创建请求实例
const instance = axios.create({
  baseURL: './', // 设置统一的请求前缀
  timeout: 10000, // 设置统一的超时时长
})

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (err) => {
    // 请求错误，这里可以用全局提示框进行提示
    return Promise.reject(err)
  },
)


// 响应拦截
instance.interceptors.response.use(
  ({ data }) => {
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
