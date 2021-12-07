import axios from "axios"
//引入qs模块，用来序列化post类型的数据
import QS from "qs"
//antd的message提示组件，大家可根据自己的ui组件更改。
import { message } from "antd"
import config from "../env"
import { getToken } from "./token"

//设置axios基础路径
const service = axios.create({
  baseURL: config.backend,
  timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    //设置请求头
    config.headers = {
      Authorization: getToken(),
      "Content-Type": "application/json",
    }
    // config.body = JSON.stringify(config.data)
    return config
  },
  (error) => {
    return error
  }
)

// 响应拦截器
service.interceptors.response.use((response) => {
  //根据返回不同的状态码做不同的事情
  if (response.code) {
    switch (response.code) {
      case 200:
        return response.data
      case 401:
        //未登录处理方法
        message.error("您的身份认证已过期，请重新登录！")
        window.href = config.backend + "/login"
        break
      case 403:
        //token过期处理方法
        message.error("token已过期，请重新登陆！")
        break
      default:
        message.error(response.data.msg)
    }
  } else {
    return response.data
  }
})

const get = async (url, params) =>
  await service.get(url, {
    params: QS.stringify(params),
  })

const post = async (url, data) => await service.post(url, data)

const file = async (url, file = {}) => {
  const formData = new FormData()
  formData.append("file", file)
  formData.append("fileType", "png")
  return await axios.post(config.backend + url, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
}

export default {
  get,
  post,
  file,
}
