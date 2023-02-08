import axios, { AxiosResponse } from 'axios'
import { Params } from '@/API/api'
const instance = axios.create({
  baseURL: import.meta.env.MODE === 'development' ? '' : 'https://wea.zuimeitianqi.com/zmWeatherServer', //baseurl是axios的前置请求路径
  timeout: 12000 //12S超时
})
instance.interceptors.request.use(
  (request) => {
    //这里可以填写你的axios请求前处理逻辑
    return request
  },
  function (error) {
    return Promise.reject(error)
  }
)

/*
  拦截响应
*/
instance.interceptors.response.use(
  (res) => {
    //拦截数据响应
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

type Methods = 'post' | 'get' | 'delete' | 'put'
export default function (method: Methods, url: string, data: Params = null): Promise<AxiosResponse<any, any>> {
  // method = method.toLowerCase();
  switch (method) {
    case 'post':
      return instance.post(url, data)
    case 'get':
      return instance.get(url, { params: data })
    case 'delete':
      return instance.delete(url, { params: data })
    case 'put':
      return instance.put(url, data)
    default:
      // 默认 GET
      return instance.get(url, { params: data })
  }
}
