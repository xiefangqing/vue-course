import axios from 'axios'
import { baseURL } from '@/config/index'
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      if (!Object.keys(this.queue).length) {
        // 添加loading...  Spin.show()
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      const { data, status } = res
      return { data, status }
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }

  getInsideConfig () {
    const config = {
      // 全局配置
      baseUrl: this.baseUrl,
      headers: {
        // ...
      }
    }
    return config
  }

  request (options) {
    const instance = axios.create()
    // 对象合并，如果属性名相同，会取后面对象的属性值 --> 请求配置覆盖全局配置
    options = { ...this.getInsideConfig(), ...options }
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
